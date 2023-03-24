import React, {Component} from 'react';
import Employee from "./Employee";

class EmployeeList extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

render(){
    let filterEmployee = this.props.employee.filter(
        (employee) => {
            return employee.name.first.indexOf(this.state.search) !== -1;
        }
    );
    return(
        <div className='text-center'>
            <br></br>
            <input type="text" value={this.state.search}/>Search by EmployeeAPI
            <div className='col-md-12'>
                <ul>
                    <div className='row'>
                        <p className='col-md-2 font'>Image</p>
                        <p className='col-md-2 font'>First Name</p>
                        <p className='col-md-2 font'>Last Name</p>
                        <p className='col-md-2 font'>Location</p>
                        <p className='col-md-2 font'>Email</p>
                    </div>
                    {filterEmployee.map((employee) =>{
                        return <Employee employee={employee} key={employee.id} />
                    })}
                </ul>
            </div>
        </div>
    )
};
};

export default EmployeeList;