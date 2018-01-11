import React, { Component } from 'react';
import './App.css';
import './includes/jquery';
// window.jQuery = window.$ = $;
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// my components
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />

      </div>
    );
  }
}

export default App;
