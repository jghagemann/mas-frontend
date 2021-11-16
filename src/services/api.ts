import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ?'https://mas-backend-senai-project.herokuapp.com'
    :'http://localhost:3333',
});

export default api;