import React, { Component } from 'react';
import './App.css';
import './includes/jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Router, Route} from 'react-router';
import {createHashHistory, createBrowserHistory} from 'history';

// my components
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AllPosts from './components/posts/all-posts';

class App extends Component {
  render() {

    const hashHistory = createHashHistory();
    const browserHistory = createBrowserHistory();

    return (
      <div className="App">
        <Header />

        <Router history={hashHistory}>
          <switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={AllPosts} />
          </switch>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
