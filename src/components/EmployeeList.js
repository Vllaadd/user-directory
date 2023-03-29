import React, { Component } from 'react';
import axios from 'axios';
import Employee from "./Employee";

class EmployeeList extends Component {
    constructor(props) {
        super(props);
//set initial state•••••••••••••••••••••••••••••••••••••••••••••
        this.state = {
            users: [],
            search: ''
        }
    }

// once the component mounts, send a get request•••••••••••••••••
    componentDidMount(){
        function usersList(){
            return axios.get('https://randomuser.me/api/?results=200&nat=us');
        };
        usersList()
            .then(res => {
                    const userArray = res.data.results.map(user => {
                        return {
                            first: user.name.first,
                            last: user.name.last,
                            email:user.email
                        }
                        
                    });
                    this.setState({users:userArray});
            })
            .catch(err => console.log(err));
        }
    }
 

export default EmployeeList;