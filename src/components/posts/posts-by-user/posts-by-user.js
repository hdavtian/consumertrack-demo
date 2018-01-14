import React, {Component} from 'react';
import axios from 'axios';
import Post from '../post/post';

export default class PostsByUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {

        const userId = this.props.location.pathname.split('\/')[2];

        axios
            .get('https://dev-selfiegram.consumertrack.com/users/' + userId)
            .then(res => this.setState({posts: res.data.posts}))
            .catch(err => console.log(err));

        //console.log('url params:', this.props.location.pathname.split('\/')[2]);
    }

    render() {

        const _posts = this.state.posts.map(function (post) {
            return <Post key={post.id} data={post}/>
        })

        return (
            <div>
                {_posts}
            </div>
        )
    }
}
