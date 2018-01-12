import React from 'react';

export default class Header extends React.Component{
  render(){
    return (
      <div>
        <a href="#/posts/1">Own Posts</a> | <a href="#/posts">All Posts</a> | <a href="#/users">All Users</a> 
      </div>
    )
  }
}
