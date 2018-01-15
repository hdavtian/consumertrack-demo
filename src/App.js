import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, Switch} from 'react-router';
import {createHashHistory} from 'history';

// my components
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import AllUsers from './components/posts/all-users/all-users';
import AllPosts from './components/posts/all-posts/all-posts';
import PostsByUser from './components/posts/posts-by-user/posts-by-user';
import PostDetail from './components/posts/post-detail/post-detail';

class App extends Component {

    render() {

        const hashHistory = createHashHistory();

        return (
            <div className="App">
                <Header/>

                <Router history={hashHistory}>
                    <Switch>
                        <Route exact path="/" component={AllPosts}/>
                        <Route exact path="/users" component={AllUsers}/>
                        <Route exact path="/posts" component={AllPosts}/>
                        <Route exact path="/posts/:userId" component={PostsByUser}/>
                        <Route exact path="/post/:userId/:postId" component={PostDetail}/>
                    </Switch>
                </Router>

                <Footer/>
            </div>
        );
    }
}

export default App;
