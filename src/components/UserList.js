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
                <p className="col-md-2 font"><button onClick={this.sortName}>First Name</button></p>
                <p className="col-md-2 font">Last Name</p>
                <p className="col-md-2 font"><button onClick={this.sortLocation}>Location</button></p>
                <p className="col-md-2 font">Email</p>
            </div>
            {
            this.map((user) => {
                return <User user={user} key={user.id} /> })
            }
        </ul>
        </div>
    )
    }
    
    }


export default UserList;