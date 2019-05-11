import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthService from "./AuthService.js"

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            userLogged: false 
        }
    }
    render () {
        const userLogged = AuthService.isUserLogged();
        return (
            <div>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        {userLogged && <li><Link className="nav-link" to="/app/welcome/home">Home</Link></li>}
                        {userLogged && <li><Link className="nav-link" to="/app/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!userLogged && <li><Link className="nav-link" to="/signup">SignUp</Link></li>}
                        {!userLogged && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {userLogged && <li><Link className="nav-link" to="/logout" onClick = {AuthService.RemoveUser}>Logout</Link></li>}
                    </ul>
                </nav>
            </div>
        );
    }
}