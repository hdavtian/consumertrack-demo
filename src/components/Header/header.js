import React from 'react';
import './header.css';

export default class Header extends React.Component{
  render(){
    return (
      <header>
        <a href="#/posts/1">Own Posts</a> | <a href="#/posts">All Posts</a> | <a href="#/users">All Users</a> 
      </header>
    )
  }
}
