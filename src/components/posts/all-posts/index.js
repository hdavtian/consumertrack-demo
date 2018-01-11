import React, {Component} from 'react';
import axios from 'axios';
import Post from '../post';

export default class AllPosts extends Component {

  constructor(props){
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios
      .get('https://dev-selfiegram.consumertrack.com/users')
      .then(res => this.setState({posts: res.data}))
      .catch(err => console.log(err))
  }

  render(){

    const listItems = this.state.posts.map(function(post){
          return <li>{[post.handle]}</li>
        })

    return(
      <ul>
        {listItems}
      </ul>
    )
  }
}
