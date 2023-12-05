import axios from 'axios';

const api = axios.create({
    headers: {
        'Content-type': 'application/json'
    }
});

api.interceptors.request.use(config => {
    const accessToken = localStorage.getItem(config.tokenName);
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

export const createApi = (config) => {
    return axios.create({
        headers: {
            'Content-type': 'application/json'
        },
        tokenName: config.tokenName
    });
};

const addAuthorizationHeader = (headers) => {
    const accessToken = localStorage.getItem('access_token'); // Change 'access_token' to your token name if needed
    if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
    }
    return headers;
};

export const doGet = async (api, endPoint, data) => {
    const response = await api.get(endPoint, {
        params: data,
        headers: addAuthorizationHeader({})
    });
    return response;
};

export const doPost = async (endPoint, data) => {
    const response = await api.post(endPoint, data, {
        headers: addAuthorizationHeader({})
    });
    return response;
};

export const doPut = async (endPoint, data) => {
    const response = await api.put(endPoint, data, {
        headers: addAuthorizationHeader({})
    });
    return response;
};

export const doPatch = async (endPoint, data) => {
    const response = await api.patch(endPoint, data, {
        headers: addAuthorizationHeader({})
    });
    return response;
};

export const doDelete = async (endPoint) => {
    const response = await api.delete(endPoint, {
        headers: addAuthorizationHeader({})
    });
    return response;
};
