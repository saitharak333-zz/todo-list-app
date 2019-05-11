import React, {Component} from 'react'
import "./Table.css"
// import {Link} from 'react-router-dom'
import Header from "./Header"
import AuthService from "./AuthService.js"
// import { Redirect } from 'react-router-dom'
import TodoService from "../../api/todo/TodoService.js"
import moment from 'moment'

export default class ListTodo extends Component {
    constructor (props){
        super(props);
        this.state = {
            todos: [],
            deleted: null,
            // [{id: 1, desc: "Good", tardate: new Date(), comp: false},
            //         {id: 2, desc: "V Good", tardate: new Date(), comp: false},
            //         {id: 3, desc: "better", tardate: new Date(), comp: false},
            //         {id: 4, desc: "best", tardate: new Date(), comp: false}],
            todoedit: false
        }
        this.revertedit = this.revertedit.bind(this);
        this.deleteTodoElement = this.deleteTodoElement.bind(this);
        this.editTodoElement = this.editTodoElement.bind(this);
    }

    componentDidMount() {
        let username = AuthService.getUsername();
        TodoService.getallTodos(username).then(
            response => this.setState({todos: response.data})
        );
    }

    render () {
        // const userState = AuthService.isUserLogged();
        // console.log(userState);
        // if (this.state.todoedit){
        //     return <Redirect to='/todoedit' />
        // } else {
        // if (userState){
        return (
            <>
                <Header />
                <h1>Todos List</h1>
                {this.state.deleted && <div className="alert alert-success">{this.state.deleted}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{moment(todo.deadline).format('YYYY-MM-DD')}</td>
                                        <td><button className="btn btn-success" onClick={() => this.editTodoElement(todo.id,todo.username)}>Edit</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoElement(todo.id,todo.username)}>Delete</button></td>
                                    </tr> 
                            )
                        }
                    </tbody>
                </table>
                </div>
            </>
        )
        // } else {
        //     return (
        //     <div>
        //         <Header />
        //         <br/>
        //         <h3>Not Accessable, Please <Link to = "/login">Login</Link>.</h3>
        //     </div>
        //     );
        // }
    }

    deleteTodoElement(id,username) {
        TodoService.deleteTodo(username,id).then(
            response => {
                TodoService.getallTodos(username).then(
                    response => {
                        this.setState({ todos: response.data });
                    }
                )
                this.setState({deleted: `Todo with ${id} got deleted`});
            }
        ) 
    }

    editTodoElement(id, username) {
        this.props.history.push(`/app/todos/${id}`);
    }

    revertedit () {
        this.setState({todoedit: true});
    }
}
