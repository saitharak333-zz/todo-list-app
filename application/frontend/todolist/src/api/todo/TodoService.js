import axios from 'axios'

class TodoService {

    getallTodos(name) {
        console.log("getalltodos method call");
        return axios.get(`http://localhost:8080/user/${name}/todos`)
    }

    deleteTodo(name, id) {
        console.log("delete todo method call");
        return axios.delete(`http://localhost:8080/user/${name}/todos/${id}`)
    }

    getTodo(name, id){
        console.log("todo method call");
        return axios.get(`http://localhost:8080/user/${name}/todos/${id}`)
    }

    updateTodo(name, id, todo){
        console.log("Update todo srvice invoked");
        return axios.put(`http://localhost:8080/user/${name}/todos/${id}`, todo)
    }
}

export default new TodoService() 