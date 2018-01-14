import React, {Component} from 'react';
import Like from '../like/like';
import './post.css';

export default class Post extends Component {

    render() {
        return (
            <div className="post">
                <a href={"#/post/" + this.props.userId + '/' + this.props.data.id}>
                    <div className="photo" style={{'backgroundImage': 'url(' + this.props.data.photo_url + ')'}}></div>
                </a>

                <h5>{this.props.data.caption}</h5>
                <h6>By: {this.props.data.author}</h6>
                <p>postId: {this.props.data.id}</p>
                <p>postId: {this.props.data.id}</p>
                <p>authorId: {this.props.data.authorId}</p>

                <Like
                    postId={this.props.data.id}
                    authorId={this.props.data.authorId}
                    count={this.props.data.likes_count}
                    isLiked={this.props.data.is_liked} />
            </div>
        )
    }
}
