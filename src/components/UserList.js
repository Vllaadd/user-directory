import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    render() {
        return (
            <div>
            <ul>
            <br></br>
            <div className="row">
                <p className="col-md-2 font">Image</p>
                <p className="col-md-2 font"><button>First Name</button></p>
                <p className="col-md-2 font">Last Name</p>
                <p className="col-md-2 font"><button>Location</button></p>
                <p className="col-md-2 font">Email</p>
            </div>
             <User user={this.state.user} /> 
        </ul>
        </div>
        )
    }
    
    }


export default UserList;