import React, {Component} from 'react';

export default class Post extends Component {
  render(){
    return(
      <div>
        <h3>{this.props.post.handle}</h3>
      </div>
    )
  }
}
