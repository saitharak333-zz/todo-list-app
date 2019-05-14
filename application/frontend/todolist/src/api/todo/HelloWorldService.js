import axios from 'axios'

class HelloWorldService {
    helloworld() {
        return axios.get("http://localhost:8080/hello-world")
        // console.log("Service api call");
    }

    helloworldbean () {
        return axios.get("http://localhost:8080/hello-world-bean")
    }

    helloworldpathvar (name) {
        return axios.get(`http://localhost:8080/helloworld/${name}`)
    }
}

export default new HelloWorldService()