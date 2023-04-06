import React from 'react';
import axios from 'axios';

class EmployeeList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            search: ''
        }
    }

    render(){
        return <Employee employee={employee} key={employee.id} />
        }

    }
 

export default EmployeeList;