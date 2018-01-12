import React, {Component} from 'react';
import axios from 'axios';
import './post-detail.css';

export default class PostDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      post: {}
    }
  };

  getPost(){
    let _url = this.props.location.pathname,
        userId = _url.split('/')[2],
        postId = _url.split('/')[3];

    //console.log('userId:', userId, 'postId:', postId);

    axios
        .get('https://dev-selfiegram.consumertrack.com/users/' + userId)
        .then(
            (res) => {
              let _posts = res.data.posts;
                for (let i=0, l=_posts.length; i<l; i++){
                    if(_posts[i].id == postId){
                      this.setState({post: _posts[i]})
                      return;
                    }
                }
            }

        )
        .catch(err => console.log(err));
  }

  componentDidMount(){
    this.getPost();
  };

  render(){
    return(
      <div className="post-detail">

        <div className="row">

          <div className="photo-wrapper col-sm-6">
            <div className="photo" style={{'backgroundImage' : 'url(' + this.state.post.photo_url + ')'}}></div>
          </div>

          <div className="content-wrapper col-sm-6">
            <h2>{this.state.post.caption}</h2>
            <p>By: {this.state.post.author}</p>
            <div>{JSON.stringify(this.state.post)}</div>
          </div>

        </div>

      </div>
    )
  }
}
