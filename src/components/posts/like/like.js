import React, {Component} from 'react';
import axios from 'axios';
import './like.css';

export default class Like extends Component {

    constructor(props) {
        super(props);
        this.state = {
            is_liked: null
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const url = 'https://dev-selfiegram.consumertrack.com/users/' + this.props.authorId + '/posts/' + this.props.postId + '/likes'
        console.log('put url:', url);

        axios
            .put(url)
            .then(res => this.setState({posts: res.data.posts}))
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

    componentDidMount() {
        this.setState({
            is_liked: this.props.isLiked
        })
    }

    render() {

        return (
            <div className="like-wrapper">
                {this.renderLikeElement()}
                <span className="like-count">({this.props.count})</span>
            </div>
        )
    }
}