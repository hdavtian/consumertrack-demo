import React, {Component} from 'react';
import axios from 'axios';
import './post-detail.css';

export default class PostDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      post: {},
        test: {
          name: "Harma Davtian"
        }
    }
  };

  getPost(){
    let _url = this.props.location.pathname,
        _userId = _url.split('/')[2],
        _postId = _url.split('/')[3];

    //console.log('userId:', _userId, 'postId:', _postId);

    axios
        .get('https://dev-selfiegram.consumertrack.com/users/'+_userId)
        .then(
            (res) => {
              let _post = res.data.posts;
                console.log('res:', _post);
                for (let i=0, l=_post.length; i<l; i++){
                    if(_post[i].id = _postId){
                      this.setState({post: _post[i]})
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
          <p>{JSON.stringify(this.state.post)}</p>

        <div className="row">

          <div className="photo col-sm-6">
            <img className="responsive" src={this.state.post.photo_url} />
          </div>

          <div className="content col-sm-6">
            <h2>{this.state.post.caption}</h2>
            <p>By: {this.state.post.author}</p>
          </div>

        </div>

      </div>
    )
  }
}
