import axios from 'axios';

const url = "http://54.180.120.77:8080";

export function postSingUpClient(userdata) {
    return axios.post(`${url}/realestate/sign/client/`,userdata[0]);
}
export function postSingUpAdmin(admindata) {
    return axios.post(`${url}/realestate/sign/admin/`,admindata);
}
export function getSignUp(userdata) {
    return axios.post(`${url}/realestate/sign/`,userdata[0]);
}
export function putCient(userdata){
    return  axios.put(`${url}/realestate/sign/`,userdata,
    {headers: {"Authorization": "abc:1553847812677:06f7e66c77b375ceefebc4393970b2b4"}
})
}