import React, {Component} from 'react'
import Login from "./Login"
import WelcomePage from "./WelcomePage"
import ErrorPage from "./ErrorPage"
import ListTodo from "./ListTodo"
import Footer from "./Footer"
import Logout from "./Logout"
import Signup from "./Signup"
import EditToDo from "./EditToDo"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default class TodoApp extends Component {
    render () {
        return (
            <div>
                {/* ToDo Page */}
                <br/>
                <Router>
                    {/* <Header /> */}
                    <>
                        <Switch>
                            <Route path="/" exact component={Signup} />
                            <Route path="/app/todos/:id" component={EditToDo} />
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/app/todos" component={ListTodo} />
                            <Route path="/app/welcome/:name" component={WelcomePage} />
                            <Route path="/logout" component={Logout} />
                            <Route component={ErrorPage} />
                        </Switch>
                    </>
                </Router>
                {/* <Login /> */}
                <Footer />
            </div>
        );
    }
}