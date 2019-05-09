import React, {Component} from 'react'
import "./Table.css"
import {Link} from 'react-router-dom'
import Header from "./Header"
import AuthService from "./AuthService.js"
import { Redirect } from 'react-router-dom'

export default class ListTodo extends Component {
    constructor (props){
        super(props);
        this.state = {
            todo: [{id: 1, desc: "Good", tardate: new Date(), comp: false},
                    {id: 2, desc: "V Good", tardate: new Date(), comp: false},
                    {id: 3, desc: "better", tardate: new Date(), comp: false},
                    {id: 4, desc: "best", tardate: new Date(), comp: false}],
            todoedit: false
        }
        this.revertedit = this.revertedit.bind(this);
    }

    render () {
        const userState = AuthService.isUserLogged();
        console.log(userState);
        if (this.state.todoedit){
            return <Redirect to='/todoedit' />
        } else {
        if (userState){
        return (
            <div>
                <Header />
                <h1>Todos List</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todo.map(
                                todos =>
                                    <tr>
                                        <td>{todos.desc}</td>
                                        <td>{todos.tardate.toString()}</td>
                                        <td>{todos.comp.toString()}</td>
                                        <td><button className="btn btn-success" onClick={this.revertedit}>Edit</button></td>
                                        <td><button className="btn btn-success" onClick="">Delete</button></td>
                                    </tr> 
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        );
        } else {
            return (
            <div>
                <Header />
                <br/>
                <h3>Not Accessable, Please <Link to = "/login">Login</Link>.</h3>
            </div>
            );
        }
    }
}

    revertedit () {
        this.setState({todoedit: true});
    }
}
