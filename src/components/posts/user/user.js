import React, {Component} from 'react';
import './user.css';

export default class User extends Component {
  render(){
    return(
      <div className="user">
        <div className="photo" style={{'backgroundImage' : 'url(' + this.props.data.photo + ')'}}></div>
        <h5>{this.props.data.handle}</h5>
      </div>
    )
  }
}
