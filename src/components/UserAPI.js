import React, {Component} from 'react';
import axios from 'axios';
import UserList from './UserList';

class UserAPI extends Component{
    state = {
        users: []
    }

    componentDidMount(){
        axios
        .get('https://randomuser.me/api/?results=200&nat=us')
        .then(res => {
            const users = res.data.results;
            console.log(users);
            this.setState({users});
        })
        .catch(err =>{
            console.log(err)
        });
    }
    render(){
        const { users } = this.state;
        return(
            <UserList users = {users} />
        )
    }
}

export default UserAPI;