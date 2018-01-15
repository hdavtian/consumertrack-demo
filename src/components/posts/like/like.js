import React, {Component} from 'react';
import axios from 'axios';
import './like.css';

export default class Like extends Component {

    constructor(props) {
        super(props);
        this.state = {
            is_liked: null,
            likes_count: null
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const url = 'https://dev-selfiegram.consumertrack.com/users/' + this.props.authorId + '/posts/' + this.props.postId + '/likes'
        console.log('put url:', url);

        axios
            .post(url)
            .then(
                (res) => {
                    let getUrl = 'https://dev-selfiegram.consumertrack.com/users/' + this.props.authorId;
                    axios
                        .get(getUrl)
                        .then( res => {
                            // get the right post
                            for (let i=0, l=res.data.posts.length; i<l; i++) {
                                if (res.data.posts[i].id === this.props.postId) {
                                    this.setState({
                                        likes_count: res.data.posts[i].likes_count
                                    });
                                    return;
                                }
                            }
                        })
                }
            )
            .catch(err => console.log(err));
    }

    renderLikeElement() {

        const notLikedElement = <i className="fa fa-2x fa-heart-o" aria-hidden="true" onClick={this.handleClick}></i>;
        const likedElement = <i className="fa fa-2x fa-heartbeat" aria-hidden="true" onClick={this.handleClick}></i>;

        if (this.state.is_liked === true) {
            return likedElement
        } else {
            return notLikedElement
        }
    }

    componentWillMount() {
        this.setState({
            is_liked: this.props.isLiked,
            likes_count: this.props.count
        })
    }

    render() {

        if (this.state.is_liked == null) {
            return <div>Loading ...</div>
        }

        return (
            <div className="like-wrapper">
                {this.renderLikeElement()}
                <span className="like-count">({this.state.likes_count})</span>
            </div>
        )
    }
}