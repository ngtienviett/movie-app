import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL, DEFAULT_CONFIG } from '../configs/http-config';

const axiosClient = axios.create({
    baseURL: BASE_URL,
    ...DEFAULT_CONFIG
});

axiosClient.interceptors.request.use(
    function (config: AxiosRequestConfig) {
        config.headers = {
            Authorization: `Bearer `
        };
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    function (response: AxiosResponse) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosClient;
