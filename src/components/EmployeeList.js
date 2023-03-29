import React, { Component } from 'react';
import Employee from "./Employee";

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            search: ''
        }
    }
 

export default EmployeeList;