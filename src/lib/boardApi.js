import axios from 'axios';

const url = "http://54.180.87.242:8080";

export function getBoard() {
    return axios.get(`${url}/realestate/board`);
}

export function getDetailBoard(boardNo) {
    return axios.get(`${url}/realestate/board/detail/${boardNo}`);
}

export function postNewContent(data) {
    return axios.post(`/realestate/board`,data[0]
        ).then((res) => {
            console.log("RESPONSE RECEIVED: ", res)
        }).catch((err) => {
            console.log("AXIOS ERROR: ", err);
        });
}