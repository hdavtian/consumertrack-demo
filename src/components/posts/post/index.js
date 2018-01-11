import React, {Component} from 'react';
import './post.css';

export default class Post extends Component {
  render(){
    return(
      <div className="post">
        <div className="photo" style={{'background-image' : 'url(' + this.props.data.photo + ')'}}></div>
        <h5>{this.props.data.handle}</h5>
      </div>
    )
  }
}
