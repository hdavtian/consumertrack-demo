import React, {Component} from 'react';
import axios from 'axios';
import Post from '../post/post';

export default class AllPosts extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios
      .get('https://dev-selfiegram.consumertrack.com/users/1')
      .then(res => this.setState({posts: res.data.posts}))
      .catch(err => console.log(err))
  }

  render(){

    const _posts = this.state.posts.map(function(post){
      return <Post key={post.id} data={post} />
    })

    return(
      <div>
        {_posts}
      </div>
    )
  }
}
