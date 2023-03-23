import React, {Component} from 'react';

class EmployeeList extends Component{
    constructor(props){
        super(props);
    }
}
render(){
    let filterEmployee = this.props.employee.filter(
        (employee) => {
            return 
            employee.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
    )
};