import React, {Component} from 'react';
import axios from 'axios';
import User from '../user/user';

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

        if (!this.state.usersLoaded){
            return <div>Loading ...</div>
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
