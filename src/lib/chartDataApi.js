import axios from 'axios';
 
export function getOnlyCity(city) {
    return axios.get(`http://54.180.87.242:8080/realestate/condition/city/${city}/date`);
}