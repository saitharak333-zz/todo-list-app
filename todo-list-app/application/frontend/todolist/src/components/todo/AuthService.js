import axios from "axios"

class AuthService {

    basicAuthService(username, password) {
        return axios.get("http://localhost:8080/app/basicauth",{headers: {authorization: this.authtoken(username, password)}} )
    }

    authtoken(username, password) {
        return "Basic " + window.btoa(username + ":" + password)
    }

    RegisterUser(username, password) {
        // // console.log("Token Added");
        // let basicauthheader = "Basic " + window.btoa(username + ":" + password)
        sessionStorage.setItem('authenticatedUser', username);
        this.setaxiosintercerptor(this.authtoken(username, password))

    }

    RemoveUser(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLogged () {
        let userdet = sessionStorage.getItem('authenticatedUser');
        if (userdet === null){
            // console.log("No user details");
            return false;
        } else{
            // console.log("User details are present");
            return true;
        }
    }

    getUsername () {
        let username = sessionStorage.getItem('authenticatedUser');
        console.log(username);
        if (username === null) return ''
        else return username;
    }

    setaxiosintercerptor(basicauthheader) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLogged()){
                    config.headers.authorization = basicauthheader
                }
                return config
            }
        )
    }
}

export default new AuthService()