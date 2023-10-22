import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:3333'
    baseURL: 'http://100.70.124.6:3333'
})

export default api;