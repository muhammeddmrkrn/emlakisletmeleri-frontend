import axios from 'axios';


const baseURL = "http://localhost:8080";

export async function get(url) {
    return axios.get(baseURL + url);
}

export async function post(url, body) {
    return axios.post(baseURL + url, body);
}

export async function put(url, body) {
    return axios.put(baseURL + url, body);
}

export async function _delete(url) {
    return axios.delete(baseURL + url);
}

export async function ara(url, body) {
    return axios.get(baseURL + url, body);
}


