import React, {Component} from 'react';
import './post-create.css';
import axios from 'axios';

export default class PostCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            photo_url: '',
            caption: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();

        const url = "https://dev-selfiegram.consumertrack.com/users/1/posts",
            _photo_url = this.state.photo_url.trim(),
            _caption = this.state.caption.trim();

        // crude form check
        if (_photo_url == "" || _caption == "") {
            alert('please fill out the form');
            return;
        };

        // console.log('photo_url', _photo_url);
        // console.log('caption', _caption);


        axios
            .post(url, {
                caption: _caption,
                photo_url: _photo_url
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    handleChange(event){

        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
        event.preventDefault();
    }

    render() {

        return (
            <div className="post-create-wrapper">

                <h3 className="title">Add a post</h3>

                <form className="create-form" onSubmit={this.handleSubmit}>

                    <div className="form-row">
                        <label htmlFor="photo_url">Photo Url: </label>
                        <input
                            id="photo_url"
                            name="photo_url"
                            type="text"
                            value={this.state.photo_url}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-row">
                        <label htmlFor="caption">Caption: </label>
                        <input
                            id="caption"
                            name="caption"
                            type="text"
                            value={this.state.caption}
                            onChange={this.handleChange}/>
                    </div>

                    <div className="form-row">
                        <input type="submit" value="Add Post" />
                    </div>

                </form>

            </div>
        )
    }
}