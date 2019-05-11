// import React, {Component} from 'react'
// // import AuthService from "./AuthService.js"
// import Header from "./Header"
// // import {Link} from 'react-router-dom'
// // import { Redirect } from 'react-router-dom'

// export default class EditToDo extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             tododes: ''
//         }
//         this.stateChange = this.stateChange.bind(this);
//         this.check = this.check.bind(this);
//     }
//     render () {
//         return (
//             <div>
//                 <Header />
//                 Description: <input type="text" name="tododes" value={this.state.tododes}  onChange={this.stateChange}/>
//                 <br/>
//                 <br/>
//                 <button className="btn btn-success" onClick={this.check}>Done</button>
//             </div>
//         );
//     }

//     stateChange(event) {
//         this.setState({[event.target.name]: event.target.value});
//     }

//     check() {
//         this.props.history.push("/todos");
//     }
// }

import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Header from "./Header"
import TodoService from "../../api/todo/TodoService.js"
import AuthService from "./AuthService.js"

class TodoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            description : '',
            deadline: moment(new Date()).format('YYYY-MM-DD'),
            done: false,
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {
        TodoService.getTodo(AuthService.getUsername(), this.state.id).then(
            response => this.setState({description: response.data.description})
        )
    }

    validate(values) {
        let errors = {}
        if(!values.description) {
            errors.description = 'Enter a Description'
        } else if(values.description.length<5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }
        if(!moment(values.deadline).isValid()) {
            errors.deadline= 'Enter a valid Target Date'
        }
        if(!values.description) {
            errors.description = 'Please Enter true or false'
        } else if((values.description === "true")||(values.description === "false")) {
            errors.description = 'Enter a Valid one'
        }
        return errors

    }

    onSubmit(values) {
        let username = AuthService.getUsername();
        console.log(values);
        TodoService.updateTodo(username, this.state.id, {
            id: this.state.id,
            username: username,
            description: values.description,   
            deadline: values.deadline,
            done: values.done,
        }).then(
            response => (
                this.props.history.push(`/app/welcome/`)
        ))
    }

    render() {
        
        let {description,deadline,done} = this.state

        return (
            <div>
                <h1>Todo</h1>
                <Header />
                <div className="container">
                    <Formik 
                        initialValues={{description,deadline,done}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" 
                                                                className="alert alert-warning"/>
                                    <ErrorMessage name="deadline" component="div" 
                                                                className="alert alert-warning"/>
                                    <ErrorMessage name="done" component="div" 
                                                                className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Deadline</label>
                                        <Field className="form-control" type="date" name="deadline"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Completed</label>
                                        <Field className="form-control" type="text" name="done"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit" >Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                
                </div>                
            </div>
        )
    }
}

export default TodoComponent