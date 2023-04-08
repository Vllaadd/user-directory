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
                         <tr key={user.data.name}>
                        <td>{user.data.name.first}</td>
                        <td>{user.data.name.last}</td>
                        <td>{user.data.location.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
             
        )
    }
    
    }


export default UserList;