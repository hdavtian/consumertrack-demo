import React, {Component} from 'react';
import axios from 'axios';
import User from '../user/user';
import Spinner from '../spinner/spinner';

export default class AllUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersLoaded: false
        }
    }

    componentDidMount() {
        axios
            .get('https://dev-selfiegram.consumertrack.com/users')
            .then(res => {
                this.setState({
                    users: res.data,
                    usersLoaded: true
                });
            })
            .catch(err => console.log(err))
    }

    render() {

        // show a loading spinner
        if (!this.state.usersLoaded){
            return (
                <Spinner />
            )
        }

        const _users = this.state.users.map(function (user) {
            return <User key={user.id} data={user}/>
        });

        return (
            <div>
                {_users}
            </div>
        )
    }
}
