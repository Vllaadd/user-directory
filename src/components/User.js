import React, { Component } from 'react';

class User extends Component{
    render(){
        return (
            <li>
                <div className='row'>
                <p>{this.props.employee.name.first}</p>
                <p>{this.props.employee.name.last}</p>
                <p>{this.props.employee.location.state}</p>
                <p>{this.props.employee.email}</p>
            </div>
            </li>
        );
    }
}

export default User;