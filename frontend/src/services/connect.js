import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:8888/api/"
});

export default api;