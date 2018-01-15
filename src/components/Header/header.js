import React from 'react';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header>

                <a href="#/posts/1">
                    <i className="fa fa-2x fa-cog" aria-hidden="true"></i> Own Posts
                </a>

                <a href="#/user/1/create">
                    <i className="fa fa-2x fa-plus" aria-hidden="true"></i> Add
                </a>

                <a href="#/posts">
                    <i className="fa fa-2x fa-book" aria-hidden="true"></i> All Posts
                </a>

                <a href="#/users">
                    <i className="fa fa-2x fa-users" aria-hidden="true"></i> All Users
                </a>
            </header>
        )
    }
}
