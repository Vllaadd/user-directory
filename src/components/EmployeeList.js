import React, { Component } from 'react';
import Employee from "./Employee";
import tableEmployee from "./tableEmployee";

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    render() {
        let filterEmployee = this.props.employee.filter(
            (employee) => {
                return employee.name.first.indexOf(this.state.search) !== -1;
            }
        );
        return (
            <div className='text-center'>
                <br></br>
                <input type="text" value={this.state.search} />Search by EmployeeAPI
                <div className='col-md-12'>
                    <br></br>
                    <div id='tableHeader'></div>
                    <tableEmployee />
                </div>
            </div>
        )
    };
};

export default EmployeeList;