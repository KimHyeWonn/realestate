import axios from 'axios';

const url = "http://54.180.87.242:8080";
const headers = {
    'Accept': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application /json;charset=UTF-8",
    
}

export function getBoard() {
    return axios.get(`${url}/realestate/board`);
}

export function getDetailBoard(boardNo) {
    return axios.get(`${url}/realestate/board/detail/${boardNo}`);
}

export function postNewContent(data) {

     console.log(data)
    return axios.post(`/realestate/board`,
        {
            method: 'POST',
            body: JSON.stringify(data[0]),
            headers: {
                'Access-Control-Allow-Origin':'*'
            }
    //     }).then((res) => {

    // const tren = JSON.stringify(data[0]);
    // console.log("t",tren);
    // return axios.post(`${url}/realestate/board`,tren,`${headers}`)
        }).then((res) => {

            console.log("RESPONSE RECEIVED: ", res)
        }).catch((err) => {
            console.log("AXIOS ERROR: ", err);
        });
}