import React, {Component} from 'react';
import axios from 'axios';

export default class AllPosts extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }
  
  render(){
    return(
      <div>
        all posts
      </div>
    )
  }
}
