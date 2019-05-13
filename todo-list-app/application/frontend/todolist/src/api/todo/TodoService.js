import axios from 'axios'

class TodoService {

    getallTodos(name) {
        console.log("getalltodos method call");
        return axios.get(`http://localhost:8080/app/user/${name}/todos`)
    }

    deleteTodo(name, id) {
        console.log("delete todo method call");
        return axios.delete(`http://localhost:8080/app/user/${name}/todos/${id}`)
    }

    getTodo(name, id){
        console.log("todo method call");
        return axios.get(`http://localhost:8080/app/user/${name}/todos/${id}`)
    }

    // updateTodo(name, id, desc, date){
    //     let basicauth = "Basic " + window.btoa(name + ":one")
    //     console.log("Update todo service invoked");
    //     const params = new URLSearchParams();
    //     params.append('id', id);
    //     params.append('username', name);
    //     params.append('description', desc);
    //     params.append('deadline', date);
    //     return axios({
    //         method: 'put',
    //         url: `http://localhost:8080/app/user/${name}/todos`,
    //         data: params,
    //         withCredentials: true,
    //         headers: {authorization: basicauth},
    //         });
    // }

    updateTodo(username, id, todo){
        console.log("Update todo service invoked");
        console.log(username);
        console.log(id);
        console.log(todo);
        return axios.put(`http://localhost:8080/app/user/${username}/todos/${id}`, todo)
    }


    addTodo(name, todo){
        console.log("Add todo service invoked")
        return axios.post(`http://localhost:8080/app/user/${name}/todos`, todo)
    }
}

export default new TodoService() 