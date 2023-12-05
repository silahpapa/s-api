import axios from 'axios';

const api = axios.create({
    headers: {
        'Content-type': 'application/json',
    },
});

// Request interceptor for default headers
api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(config.tokenName);
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

// Create a new Axios instance with default headers
export const createApi = (config) => {
    const instance = axios.create({
        headers: {
            'Content-type': 'application/json',
        },
    });

    // Request interceptor for default headers
    instance.interceptors.request.use((axiosConfig) => {
        const accessToken = localStorage.getItem(config.tokenName);
        if (accessToken) {
            axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
        }
        return axiosConfig;
    });

    return instance;
};

// Common function for making GET requests
export const doGet = async (instance, endPoint, data) => {
    const response = await instance.get(endPoint, {
        params: data,
    });
    return response;
};

// Common function for making POST requests
export const doPost = async (instance, endPoint, data) => {
    const response = await instance.post(endPoint, data);
    return response;
};

// Common function for making PUT requests
export const doPut = async (instance, endPoint, data) => {
    const response = await instance.put(endPoint, data);
    return response;
};

// Common function for making PATCH requests
export const doPatch = async (instance, endPoint, data) => {
    const response = await instance.patch(endPoint, data);
    return response;
};

// Common function for making DELETE requests
export const doDelete = async (instance, endPoint) => {
    const response = await instance.delete(endPoint);
    return response;
};
