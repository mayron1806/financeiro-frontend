import axios from "axios";

const client = axios.create({baseURL: "https://financeiro-app1.herokuapp.com/api/"});

export default client;