import axios from 'axios';

const url = "http://54.180.120.77:8080";

export function postSingUpClient(userdata) {
    return axios.post(`${url}/realestate/client/signup/${userdata}`);
}
export function postSingUpAdmin(admindata) {
    return axios.post(`${url}/realestate/admin/signup/${admindata}`);
}