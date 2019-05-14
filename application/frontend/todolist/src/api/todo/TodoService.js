import axios from 'axios'

class TodoService {

    getallTodos(name) {
        console.log("get all todos method call");
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

    updateTodo(username, id, todo){
        console.log("Update todo service invoked");
        console.log(username);
        console.log(id);
        console.log(todo);
        return axios.put(`http://localhost:8080/user/${username}/todos/${id}`, todo)
    }

    addTodo(name, todo){
        console.log("Add todo service invoked")
        return axios.post(`http://localhost:8080/user/${name}/todos`, todo)
    }
}

export default new TodoService() 