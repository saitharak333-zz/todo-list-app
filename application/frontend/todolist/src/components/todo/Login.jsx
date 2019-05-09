import React, {Component} from 'react'
import AuthService from "./AuthService.js"
import Header from "./Header"
import {Link} from 'react-router-dom'

export default class Login extends Component{
    
    constructor () {
        super();
        this.state = {
            username: '',
            password: '',
            successlog: false,
            invalidlog: false
        }
        this.stateChange = this.stateChange.bind(this);
        this.check = this.check.bind(this);
    }

    render () {
        const userState = AuthService.isUserLogged();
        if (userState){
            return (
                <div>
                    <Header />
                    <br/>
                    <h3>Please <Link to = "/logout" onClick = {AuthService.RemoveUser}>Logout!!</Link>.</h3>
            </div> 
            );
        } else {
        return (
            <div>
                <Header />
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.UnsuccessfulLog && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.SuccessfulLog && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.stateChange}/>
                    <br/>
                    <br/>
                    Password: <input type="password" name="password" value={this.state.password}  onChange={this.stateChange}/>
                    <br/>
                    <br/>
                    <button className="btn btn-success" onClick={this.check}>Login</button>
                </div>
            </div>
        );
    }
    }

    check () {
        if (this.state.username === "tharak" && this.state.password === "one"){
            this.setState({successlog: true})
            this.setState({invalidlog: false})
            console.log("Success");
            AuthService.RegisterUser(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
        } else {
            this.setState({successlog: false})
            this.setState({invalidlog: true})
            console.log("Failure");
        }
    }

    stateChange (event) {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value})
    }
}

function SuccessfulLog(props) {
    if (props.sucflag === true){
        return <div>Successfull Login</div>;
    } else {
        return null;
    }
}

function UnsuccessfulLog(props) {
    if (props.failflag === true){
        return <div>Unsuccessfull Login</div>;
    } else {
        return null;
    }
}

