import React, {Component} from 'react';
import axios from 'axios';
import Post from '../post/post';

export default class AllPosts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            posts: [],
            postsLoaded: false
        }
    }

    componentDidMount() {

        axios
            .get('https://dev-selfiegram.consumertrack.com/users')
            .then(res => {
                this.setState({users: res.data});
                //console.log('Users:', this.state.users);

                // loop users and create an array of calls to pass to axios.all()
                let userUrls = [];
                let _allPosts = [];

                for (let i = 0, l = this.state.users.length; i < l; i++) {
                    userUrls.push(axios.get('https://dev-selfiegram.consumertrack.com/users/' + this.state.users[i].id))
                };

                // get posts of all users
                axios
                    .all(userUrls)
                    .then((results) => {
                        results.forEach((res) => {
                            _allPosts.push(res.data.posts);
                        });
                        // the result is an array of arrays, so need to flatten out, using reduce
                        _allPosts = _allPosts.reduce((prev, curr) => {
                            return prev.concat(curr)
                        });

                        // add author Id to each post
                        _allPosts.forEach((post) => {
                           post.authorId = this.getUserId(post, this.state.users)
                        });

                        //now set the state
                        //console.log('All posts:', _allPosts);
                        this.setState({
                            posts: _allPosts,
                            postsLoaded: true
                        });
                    })
                    .catch(err => console.log(err));

            })
            .catch(err => console.log(err));

    }

    getUserId(post, users) {
        for (let i = 0, l = users.length; i < l; i++) {
            if (users[i].handle === post.author) {
                return users[i].id;
            }
        }
    };

    render() {

        if (!this.state.postsLoaded){
            return <div>Loading ...</div>
        }

        const _posts = this.state.posts.map((post) => {
            return <Post key={post.id} data={post} userId={post.authorId} />
        });

        return (
            <div>
                {_posts}
            </div>
        )
    }
}
