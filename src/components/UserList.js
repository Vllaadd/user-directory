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
                        <tr key={user.results.name}>
                        <td>{user.results.name.first}</td>
                        <td>{user.results.name.last}</td>
                        <td>{user.resuls.location.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
             
        )
    }
    
    }


export default UserList;