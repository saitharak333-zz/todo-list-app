import React, {Component} from 'react'
import Header from "./Header"

export default class Logout extends Component {
    render () {
        return (
            <>
                <div>
                <Header />
                    <h1>You're Logged out</h1>
                    <div className="container">
                        Thankyou for using.
                    </div>
                </div>
            </>
        );
    }
}