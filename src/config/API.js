import axios from "axios";

let headers = {}

if(localStorage.getItem('userToken')){
    headers["Authorization"] = localStorage.getItem('userToken')
}

const API = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers
})

export default API