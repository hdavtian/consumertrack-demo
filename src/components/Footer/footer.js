import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
  render(){
    return(
      <footer>
        By: Harma Davtian <br />
        <a href="https://github.com/hdavtian/consumertrack-demo" target="_blank">
          <i className="fa fa-3x fa-github" aria-hidden="true"></i>
        </a>
      </footer>
    )
  }
}
