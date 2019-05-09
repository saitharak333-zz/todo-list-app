import React, {Component} from 'react'
import Header from "./Header"

export default class ErrorPage extends Component{
    
    render () {
        return (
            <div>
                <Header />
                Page not found. Contact Admin
            </div>
        );
    }
}