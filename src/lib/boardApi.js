import axios from 'axios';

const url = "http://54.180.87.242:8080";

export function getBoard(pageNo) {
    return axios.get(`${url}/realestate/board/${pageNo}`);
}