import React, { Component } from "react";
import $ from "jquery";
import Employee from "./Employee";

class tableEmployee extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return 
    }
    <div className='text-center'>
                <br></br>
                <input type="text" value={this.state.search} />Search by EmployeeAPI
                <div className='col-md-12'>
                    <br></br>
                    <div className='row'>
                        $('#talbeHeader').
                            
                               {filterEmployee.map((employee) => {
                                    return  <td>
                                    <Employee employee={employee} key={employee.id} />
                                    </td> 
                                })}
                                
                        </table>
                    </div>
                </div>
            </div>

})


}

export default tableEmployee;
