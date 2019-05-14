import axios from 'axios'

class UserService {

    signupRequest(user) {
        console.log("signup request to springboot made")
        return axios.post(`http://localhost:8080/user/signup`, user)
    }

    loginRequest(user) {
        console.log("login request to spring boot made")
        return axios.post(`http://localhost:8080/user/login`, user)
    }

}
export default new UserService()