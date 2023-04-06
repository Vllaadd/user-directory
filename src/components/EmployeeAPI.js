import React, {Component} from 'react';
import axios from 'axios';
import EmployeeList from './EmployeeList';
import Employee from './Employee';

class EmployeeAPI extends Component{
    state = {
        employee: []
    }

    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=200&nat=us')
        .then(res => {
            const employee = resdata.results;
            console.log(employee);
            this.setState({employee:employee});
        })
    }
    render(){
        return(
            <EmployeeList employee = {this.state.employee} />
        )
    }
}

export default EmployeeAPI;