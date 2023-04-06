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
        let filterEmployee = this.props.employee.filter(
            (employee) => {
                return employee.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

    return (
    <ul>
            <br></br>
            <div className="row">
                <p className="col-md-2 font">Image</p>
                <p className="col-md-2 font"><button onClick={this.sortName}>First Name</button></p>
                <p className="col-md-2 font">Last Name</p>
                <p className="col-md-2 font"><button onClick={this.sortLocation}>Location</button></p>
                <p className="col-md-2 font">Email</p>
            </div>
            {filterEmployee.map((employee) => {
                return <Employee employee={employee} key={employee.id} />
            })}
        </ul>
    )
    }

}


export default EmployeeList;