import React, { Component } from 'react';
import Employee from "./Employee";

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
                    <div className='row'>
                        <table>
                            <tr>
                                <th className='col-md-2 font'>Image</th>
                                <th className='col-md-2 font'>First Name</th>
                                <th className='col-md-2 font'>Last Name</th>
                                <th className='col-md-2 font'>Location</th>
                                <th className='col-md-2 font'>Email</th>
                            </tr>
                            <tr>
                               
                               {filterEmployee.map((employee) => {
                                    return  <td>
                                    <Employee employee={employee} key={employee.id} />
                                    </td> 
                                })}
                                
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    };
};

export default EmployeeList;