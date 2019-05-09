import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from "./Header"
import AuthService from "./AuthService.js"

export default class WelcomePage extends Component{
    
    render () {
        const userState = AuthService.isUserLogged();
        console.log(userState);
        if (userState){
            return (
                <>
                <Header />
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todo">here</Link>.
                </div>
            </>
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