import React, { Component } from 'react';

class UserList extends Component {
    state={
        searchInput: ''
    }

    handleInputChange = (event) =>{
        this.setState({searchInput: event.target.value});
    }

    render() {
        const {users} = this.props;
        const {searchInput} = this.state;
//FILTER USERS BY FIRST OR LAST NAME
        const filteredUsers = users.filter(user =>
            user.name.first.toLowerCase().includes(searchInput.toLowerCase()) ||
            user.name.last.toLowerCase().includes(searchInput.toLowerCase())
        );

        return (
            <>
            <div>
                <label htmlFor='searchInput'>Search: </label>
                <input type='text' id='searchInput' onChange={this.handleInputChange} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.name}>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
             </>
        )
    }
    
    }


export default UserList;