import React, {Component} from 'react';
import axios from 'axios';
import Post from '../post/post';

export default class AllPosts extends Component {

  constructor(props){
    super(props);
    this.state = {
        users: [],
        posts: []
    };

    // binding this
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // need to bind this better
    const _this = this;

    axios.all([
      //axios.get('https://dev-selfiegram.consumertrack.com/users/1'),
      axios.get('https://dev-selfiegram.consumertrack.com/users/2'),
      axios.get('https://dev-selfiegram.consumertrack.com/users/3'),
      axios.get('https://dev-selfiegram.consumertrack.com/users/4')
    ])
      .then(
        axios.spread(function (/*user1,*/ user2, user3, user4){

          let _allPosts = user2.data.posts
            // .concat(user2.data.posts)
            .concat(user3.data.posts)
            .concat(user4.data.posts);

          // console.log('allInfo:', _allPosts);
          _this.setState({posts: _allPosts});
        }))
      .catch(err => console.log(err));

    axios
        .get('https://dev-selfiegram.consumertrack.com/users')
        .then(res =>  this.setState({users: res.data}))
        .catch(err => console.log(err));
  };

    getUserId (post, users){

        for (let i=0, l=users.length; i<l; i++) {
            if (users[i].handle === post.author) {
                return users[i].id;
            }
        }
    };

  render(){

    const _posts = this.state.posts.map((post)=>{
      return (
          <a key={post.id} href={"#/post/" + this.getUserId(post, this.state.users) + "/" + post.id}>
              <Post data={post} />
          </a>
      )
    });

    return(
      <div>
        {_posts}
      </div>
    )
  }
}
