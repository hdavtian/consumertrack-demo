import React, {Component} from 'react';
import axios from 'axios';
import Spinner from '../spinner/spinner';
import Like from '../like/like';
import './post-detail.css';

export default class PostDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            post: {}
        }

        let _url = this.props.location.pathname;
        this.userId = _url.split('/')[2];
        this.postId = _url.split('/')[3];
    };

    getPost() {

        axios
            .get('https://dev-selfiegram.consumertrack.com/users/' + this.userId)
            .then(
                (res) => {
                    let _posts = res.data.posts;
                    for (let i = 0, l = _posts.length; i < l; i++) {
                        if (_posts[i].id == this.postId) {
                            this.setState({
                                loaded: true,
                                post: _posts[i]
                            });
                            return;
                        }
                    }
                }
            )
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getPost();
    };

    render() {

        // show a loading spinner
        if (!this.state.loaded){
            return (
                <Spinner />
            )
        }

        return (
            <div className="post-detail">

                <div className="row">

                    <div className="photo-wrapper col-sm-6">
                        <div className="photo"
                             style={{'backgroundImage': 'url(' + this.state.post.photo_url + ')'}}></div>
                    </div>

                    <div className="content-wrapper col-sm-6">

                        <h2>{this.state.post.caption}</h2>

                        <Like
                            postId={this.postId}
                            authorId={this.userId}
                            count={this.state.post.likes_count}
                            isLiked={this.state.post.is_liked} />

                        <ul className="info">
                            <li>Id: {this.state.post.id}</li>
                            <li>Photo_url: <a href={this.state.post.photo_url} target="_blank">link to image</a></li>
                            <li>Caption: {this.state.post.caption}</li>
                            <li>Is liked: {this.state.post.is_liked}</li>
                            <li>Likes count: {this.state.post.likes_count}</li>
                            <li>Author: {this.state.post.author}</li>
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}
