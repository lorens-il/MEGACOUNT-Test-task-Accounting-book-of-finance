import axios, { AxiosRequestConfig } from "axios";



const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL    
});

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const authIntercepter = (config: AxiosRequestConfig) => {
    if (config.headers === undefined) {
        config.headers = {};
    } 
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authIntercepter);

export {$host, $authHost};