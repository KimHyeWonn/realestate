<<<<<<< HEAD
import axios from 'axios';

const url = "http://54.180.87.242:8080";

export function getbuliding(city) {
    return axios.get(`${url}/realestate/search/${city}`);
}
=======
import axios from 'axios';

const url = "http://54.180.120.77:8080";

export function getbuliding(city) {
    return axios.get(`${url}/realestate/search/${city}`);
}
>>>>>>> 560347a992719b63c0cc08357e99b422873be7b8
