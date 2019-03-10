import axios from 'axios';

const url = "http://192.168.0.8:8090";

export function postSingUpClient(userdata) {
    return axios.post(`${url}/realestate/sign/client/`,userdata);
}
export function postSingUpAdmin(admindata) {
    return axios.post(`${url}/realestate/sign/admin/`,admindata);
}