import axios from 'axios';

const url = "http://54.180.87.242:8080";

export function getbuliding(city) {
    return axios.get(`${url}/realestate/search/${city}`);
}
