class AuthService {

    RegisterUser(username, password) {
        console.log("Token Added");
        sessionStorage.setItem('authenticatedUser', username);

    }

    RemoveUser(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLogged () {
        let userdet = sessionStorage.getItem('authenticatedUser');
        if (userdet === null){
            console.log("No user details");
            return false;
        } else{
            console.log("User details are present");
            return true;
        }
    }

    getUsername () {
        let username = sessionStorage.getItem('authenticatedUser');
        if (username === null) return ''
        else return username;
    }
}

export default new AuthService()