import React, {Component} from 'react';
import './post.css';

export default class Post extends Component {
  render(){
    return(
      <div className="post">
        <div className="photo" style={{'backgroundImage' : 'url(' + this.props.data.photo_url + ')'}}></div>
        <h5>{this.props.data.caption}</h5>
      </div>
    )
  }
}
