import axios from 'axios';

const url = "http://54.180.87.242:8080";

export function getBoard() {
    return axios.get(`${url}/realestate/board`);
}

export function postNewContent(data) {
    // console.log(data)
    return axios.post(`${url}/realestate/board`,
        {
            method: 'POST',

            body: data
        },
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
               'Content-Type': 'text/plain'
            }
        }).then((res) => {
            console.log("RESPONSE RECEIVED: ", res)
        }).catch((err) => {
            console.log("AXIOS ERROR: ", err);
        });
}