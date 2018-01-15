import React, {Component} from 'react';
import './form-message.css';

export default class FormMessage extends Component {

    constructor(props) {
        super(props);
    }

    render(){

        let output = '';

        if (this.props.message.trim() !== '') {
            output = (
                <div className="form-message-wrapper">
                    {this.props.message}
                </div>
            )
        } else {
            output = ''
        }

        return (
            output
        )
    }
}