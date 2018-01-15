import React, {Component} from 'react';
import './post-create.css';
import FormMessage from '../form-message/form-message';
import axios from 'axios';

export default class PostCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            form_message: '',
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

        // form post
        axios
            .post(url, {
                caption: _caption,
                photo_url: _photo_url
            })
            .then((res) => {

                // show success msg
                this.setState({
                    form_message: 'Post has been successfully added :)',
                    photo_url: '',
                    caption: ''
                });

                // clear msg
                window.setTimeout(()=>{
                    this.setState({
                        form_message: ''
                    });
                }, 3000)
            })
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

                <FormMessage message={this.state.form_message} />

                <form className="create-form" onSubmit={this.handleSubmit}>

                    <div className="form-row">
                        <input
                            id="photo_url"
                            name="photo_url"
                            type="text"
                            placeholder="photo url"
                            value={this.state.photo_url}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-row">
                        <input
                            id="caption"
                            name="caption"
                            type="text"
                            placeholder="caption"
                            value={this.state.caption}
                            onChange={this.handleChange}/>
                    </div>

                    <div className="form-row">
                        <input className="btn btn-primary" type="submit" value="Add Post" />
                    </div>

                </form>

            </div>
        )
    }
}