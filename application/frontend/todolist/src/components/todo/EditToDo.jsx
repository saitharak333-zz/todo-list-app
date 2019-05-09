import React, {Component} from 'react'
import AuthService from "./AuthService.js"
import Header from "./Header"
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export default class EditToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            tododes: ''
        }
        this.stateChange = this.stateChange.bind(this);
        this.check = this.check.bind(this);
    }
    render () {
        return (
            <div>
                <Header />
                Description: <input type="text" name="tododes" value={this.state.tododes}  onChange={this.stateChange}/>
                <br/>
                <br/>
                <button className="btn btn-success" onClick={this.check}>Done</button>
            </div>
        );
    }

    stateChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    check() {
        this.props.history.push("/todo");
    }
}