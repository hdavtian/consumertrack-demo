import React, {Component} from 'react';
import axios from 'axios';
import Like from '../like/like';
import './post-detail.css';

export default class PostDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            post: {}
        }
    };

    getPost() {
        let _url = this.props.location.pathname,
            userId = _url.split('/')[2],
            postId = _url.split('/')[3];

        axios
            .get('https://dev-selfiegram.consumertrack.com/users/' + userId)
            .then(
                (res) => {
                    let _posts = res.data.posts;
                    for (let i = 0, l = _posts.length; i < l; i++) {
                        if (_posts[i].id == postId) {
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

        if (!this.state.loaded) {
            return <div>Loading</div>
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
                        <p>By: {this.state.post.author}</p>
                        <p>Liked: {this.state.post.is_liked}</p>
                        <div>{JSON.stringify(this.state.post)}</div>

                        <Like
                            count={this.state.post.likes_count}
                            isLiked={this.state.post.is_liked} />

                    </div>

                </div>

            </div>
        )
    }
}
