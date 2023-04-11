import React, { Component } from 'react';

class UserList extends Component {
    render() {
        const users = this.props.users;
        return (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.name}>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
             
        )
    }
    
    }


export default UserList;