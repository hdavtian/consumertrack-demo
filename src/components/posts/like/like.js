import React, {Component} from 'react';
import axios from 'axios';
import './like.css';

export default class Like extends Component {

    constructor(props) {
        super(props);
        this.state = {
            is_liked: null
        }
    }

    handleClick() {
        alert('clicked')
    }

    renderLikeElement(){

        const notLikedElement = <i className="fa fa-2x fa-heart-o" aria-hidden="true" onClick={this.handleClick}></i>;
        const likedElement = <i className="fa fa-2x fa-heart" aria-hidden="true" onClick={this.handleClick}></i>;

        if (this.state.is_liked === true) {;
            return likedElement
        } else {
            return notLikedElement
        }
    }

    componentWillMount(){
        this.setState({
            is_liked: this.props.isLiked
        })
    }

    render() {

        return (
            <div>
                <p>isLiked: {this.state.is_liked}</p>
                {this.renderLikeElement()}
                <span>({this.props.count})</span>
            </div>
        )
    }
}