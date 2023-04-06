import { extend } from 'jquery';
import React from 'react';

class Employee extends Component{
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

export default Employee;