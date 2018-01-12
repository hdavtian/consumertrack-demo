import React, {Component} from 'react';
import axios from 'axios';
import Post from '../post/post';

export default class AllPosts extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: []
    };

    // binding this
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  getUsersTotal(){
    return 5
  }

  componentDidMount() {
    // need to bind this better
    var _this = this;
    axios.all([
      axios.get('https://dev-selfiegram.consumertrack.com/users/1'),
      axios.get('https://dev-selfiegram.consumertrack.com/users/2'),
      axios.get('https://dev-selfiegram.consumertrack.com/users/3'),
      axios.get('https://dev-selfiegram.consumertrack.com/users/4')
    ])
      .then(
        axios.spread(function (user1, user2, user3, user4){

          let _allPosts = user1.data.posts
            .concat(user2.data.posts)
            .concat(user3.data.posts)
            .concat(user4.data.posts);

          // console.log('allInfo:', _allPosts);
          _this.setState({posts: _allPosts});
        }))
      .catch(err => console.log(err))
  }

/*
  componentDidMount(){
    axios
      .get('https://dev-selfiegram.consumertrack.com/users/1')
      .then(res => this.setState({posts: res.data.posts}))
      .catch(err => console.log(err))
  }
*/
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
