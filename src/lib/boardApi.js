import axios from 'axios';

const url = "http://54.180.87.242:8080";

export function getBoard() {
    return axios.get(`${url}/realestate/board`);
}

export function postNewContent(data) {
    console.log(data); 

    return axios.options(`${url}/realestate/board`,
        data[0]
    ).then((res) => {
        console.log("RESPONSE RECEIVED: ", res)
    }).catch((err) => {
        console.log("AXIOS ERROR: ", err);
    }); 
}
