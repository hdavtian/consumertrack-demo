import React, {Component} from 'react';
import axios from 'axios';
import Post from '../post/post';

export default class AllPosts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            posts: []
        }
    }

    /*
    componentDidMount() {

        axios.all([
            //axios.get('https://dev-selfiegram.consumertrack.com/users/1'),
            axios.get('https://dev-selfiegram.consumertrack.com/users/2'),
            axios.get('https://dev-selfiegram.consumertrack.com/users/3'),
            axios.get('https://dev-selfiegram.consumertrack.com/users/4')
        ])
            .then(
                axios.spread( (user2, user3, user4) => {

                    let _allPosts = user2.data.posts
                        .concat(user3.data.posts)
                        .concat(user4.data.posts);

                    this.setState({posts: _allPosts});
                }))
            .catch(err => console.log(err));

        axios
            .get('https://dev-selfiegram.consumertrack.com/users')
            .then(res => this.setState({users: res.data}))
            .catch(err => console.log(err));
    };
    */

    componentDidMount(){

        axios
            .get('https://dev-selfiegram.consumertrack.com/users')
            .then(res => {
                this.setState({users: res.data});
                //console.log('Users:', this.state.users);

                // loop users and create an array of calls to pass to axios.all()
                let userUrls = [];
                let _allPosts = [];

                for (let i=0, l = this.state.users.length; i<l; i++) {
                    userUrls.push(axios.get('https://dev-selfiegram.consumertrack.com/users/'+this.state.users[i].id))
                };

                // get posts of all users
                axios
                    .all(userUrls)
                    .then( (results) => {
                        results.forEach( (res) => {
                            _allPosts.push(res.data.posts);
                        });
                        // the result is an array of arrays, so need to flatten out, using reduce
                        _allPosts = _allPosts.reduce((prev, curr) => {return prev.concat(curr)});

                        //now set the state
                        //console.log('All posts:', _allPosts);
                        this.setState({posts: _allPosts});
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

        const _posts = this.state.posts.map((post) => {
            return (
                <a key={post.id} href={"#/post/" + this.getUserId(post, this.state.users) + "/" + post.id}>
                    <Post data={post}/>
                </a>
            )
        });

        return (
            <div>
                {_posts}
            </div>
        )
    }
}
