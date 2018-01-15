import React, {Component} from 'react';
import './spinner.css';

export default class Spinner extends Component {

    // This is a spinner I found on codepen and wanted to implement for my loading div
    // kudos to: https://codepen.io/mrrocks/pen/EiplA?q=spinner&limit=all&type=type-pens

    render(){
        return (
            <div className="loading">
                <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
        )
    }
}