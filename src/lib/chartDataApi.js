import axios from 'axios';
 
export function getOnlyCity(city) {
    return axios.get(`http://192.168.0.229:8080/realestate/condition/city/${city}/date`);
}