import React, { Component } from 'react';

class User extends Component{
    render(){
        return (
            <li>
                <div className='row'>
                <p>{this.user.name.first}</p>
                <p>{this.props.user.name.last}</p>
                <p>{this.props.user.location.state}</p>
                <p>{this.props.user.email}</p>
                </div>
            </li>
        );
    }
}

export default User;