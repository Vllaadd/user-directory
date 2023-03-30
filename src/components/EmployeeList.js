import React from 'react';
import axios from 'axios';

class EmployeeList extends React.Component {
//set initial state•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
        state = {
            users: [],
            search: ''
        }

// once the component mounts, send a get request••••••••••••••••••••••••••••••••••••
    componentDidMount(){
        function usersList(){
            return axios.get('https://randomuser.me/api/?results=200&nat=us');
        };
        usersList()
            .then(res => {
                    const userArray = res.data.results.map(user => {
                        return {
                            first: user.name.first,
                            last: user.name.last,
                            email:user.email
                        }
                        
                    });
                    console.log(userArray);
                    this.setState({users:userArray});
                    
            })
            .catch(err => console.log(err));
        }

// filtering the list to show only first and last name••••••••••••••••••••••••••••••
    filteredUsers(){
        const search = this.state.search.toLowerCase();
        return this.state.filter(user => {
            return (
                user.first.toLowerCase().includes(search) ||
                user.last.toLowerCase().includes(search)
            );
        });
}


//rendering the table of users••••••••••••••••••••••••••••••••••••••••••••••••••••••
        renderUsers = () => {
            return this.filteredUsers()
                .map((user, index) => {
                    return(
                        <tr key={index}>
                            {/* <td>
                                <img src={user.image} alt='user'></img>
                            </td> */}
                            <td>{user.first}</td>
                            <td>{user.last}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })
        }

        render(){
            return(
                <>
                <input placeholder='Search' />
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>First</th>
                            <th>Last</th>
                        </tr>
                    </thead>
                </table>
                </>
                
            )
        }


    }
 

export default EmployeeList;