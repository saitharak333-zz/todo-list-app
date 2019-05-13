import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from "./Header"
import AuthService from "./AuthService.js"
import HelloWorldService from "../../api/todo/HelloWorldService.js"

export default class WelcomePage extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            message: '',
            error: false,
            errorMessage: ''
        }
        this.printService = this.printService.bind(this);
        this.serviceEnabler = this.serviceEnabler.bind(this);
        this.serviceError = this.serviceError.bind(this);
    }

    render () {
        // const userState = AuthService.isUserLogged();
        // console.log(userState);
        // if (userState){
        //     if (this.state.error){
        //         return (
        //             <h3>{this.state.errorMessage}</h3>
        //         );
        //     } else {
            return (
                <>
                <Header />
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {AuthService.getUsername()}. You can manage your todos <Link to="/app/todos">here</Link>.
                    <br/>
                    <br/>
                    It's a new button. <button className="btn btn-success" onClick={this.printService}> Click me </button>
                </div>
                <div className = "container">
                    <br/>
                    {this.state.message}
                </div>
            </>
            )
        // }
        // } else {
        //     return (
        //         <div>
        //             <Header />
        //             <br/>
        //             <h3>Not Accessable, Please <Link to = "/login">Login</Link>.</h3>
        //         </div>
        //     );
        // }
    }

    printService() {
        // HelloWorldService.helloworld()
        // .then(response => this.serviceEnabler(response))
        
        // HelloWorldService.helloworldbean()
        // .then(response => this.serviceEnabler(response))
        
        HelloWorldService.helloworldpathvar(AuthService.getUsername())
        .then(response => this.serviceEnabler(response))
        .catch (error => this.serviceError(error))
        console.log("Service enabled");
    }

    serviceError(error) {
        var errorMessage = ''
        if (error.message){
            errorMessage += ErrorEvent.message
        }

        if (error.response && error.response.data.message){
            errorMessage +=  error.response.data.message
        }
        this.setState({error: true})
        this.setState({errorMessage: errorMessage})
    }

    serviceEnabler(response) {
        this.setState({message: response.data.message})
    }
}