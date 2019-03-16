import axios from 'axios';

const url = "http://54.180.120.77:8080";

export function getOnlyCity(city) {
    return axios.get(`${url}/realestate/graph/city/${city}`);
}

export function getCityAndDate(city, date) {
    return axios.get(`${url}/realestate/graph/city/${city}/date/${date}`);
}

export function getCityAndDistrict(city, district) {
    return axios.get(`${url}/realestate/graph/city/${city}/district/${district}`);
}

export function getCityAndDistrictAndDate(city, district, date) {
    return axios.get(`${url}/realestate/graph/city/${city}/district/${district}/date/${date}`);
}

export function getCityAndDistrictAndNeighborhood(city, district, neighborhood) {
    return axios.get(`${url}/realestate/graph/city/${city}/district/${district}/neighborhood/${neighborhood}`);
}

export function getCityAndDistrictAndNeighborhoodAndDate(city, district, neighborhood, date) {
    return axios.get(`${url}/realestate/graph/city/${city}/district/${district}/neighborhood/${neighborhood}/date/${date}`);
}

//세종시
export function getCityAndNeighborhood(city, neighborhood) {
    return axios.get(`${url}/realestate/graph/city/${city}/neighborhood/${neighborhood}`);
}

//세종시
export function getCityAndNeighborhoodAndDate(city, neighborhood, date) {
    return axios.get(`${url}/realestate/graph/city/${city}/neighborhood/${neighborhood}/date/${date}`);
}



