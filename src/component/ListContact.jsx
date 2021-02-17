import React, { Component } from 'react';
import UserService from '../service/UserService';
class ListContact extends Component {


    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        UserService.retrieveAllUsers()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ users: response.data })
                }
            )
    }

    deleteUserClicked(id) {
        UserService.deleteUserById (id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )
    
    }



    render() {
        return (
            <div className="container">
                <h3>All Users</h3>
                <div className="container">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Addrss</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    users =>
                                        <tr key={users.id}>
                                            <td>{users.id}</td>
                                            <td>{users.name}</td>
                                            <td>{users.age}</td>
                                            <td>{users.address}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteUserClicked(users.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListContact

