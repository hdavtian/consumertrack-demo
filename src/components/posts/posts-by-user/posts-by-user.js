import React, {Component} from 'react';
import axios from 'axios';
import Post from '../post/post';

export default class PostsByUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: null,
            posts: []
        }
    }

    componentWillMount() {

        // get user Id from url
        const userId = this.props.location.pathname.split('\/')[2];

        this.setState({
            userId: userId
        })

        // get own posts, we know the userId is 1
        axios
            .get('https://dev-selfiegram.consumertrack.com/users/' + userId)
            .then(res => this.setState({posts: res.data.posts}))
            .catch(err => console.log(err));

    }

    render() {

        if (this.state.userId == null) {
            <div>Loading ...</div>
        }

        const _posts = this.state.posts.map( (post)=>{
            return <Post key={post.id} data={post} userId={this.state.userId} />
        })

        return (
            <div>
                {_posts}
            </div>
        )
    }
}
