import React, {Component} from 'react';
import axios from 'axios';
import UserList from './UserList';

class UserAPI extends Component{
    state = {
        user: []
    }

    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=200&nat=us')
        .then(res => {
            const user = res.data.results;
            console.log(user);
            this.setState({user:user});
        })
    }
    render(){
        return(
            <UserList user = {this.state.user} />
        )
    }
}

export default UserAPI;