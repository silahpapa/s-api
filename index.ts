import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface ApiConfig {
    tokenName: string;
}

const api: AxiosInstance = axios.create({
    headers: {
        'Content-type': 'application/json'
    }
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
    const accessToken = localStorage.getItem(config.tokenName);
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

export const createApi = (config: ApiConfig): AxiosInstance => {
    return axios.create({
        headers: {
            'Content-type': 'application/json'
        },
        tokenName: config.tokenName
    });
};

const addAuthorizationHeader = (headers: Record<string, string>) => {
    const accessToken = localStorage.getItem('access_token'); // Change 'access_token' to your token name if needed
    if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
    }
    return headers;
};

export const doGet = async <T>(api: AxiosInstance, endPoint: string, data?: Record<string, unknown>): Promise<AxiosResponse<T>> => {
    const response = await api.get<T>(endPoint, {
        params: data,
        headers: addAuthorizationHeader({})
    });
    return response;
};

export const doPost = async <T>(endPoint: string, data: Record<string, unknown>): Promise<AxiosResponse<T>> => {
    const response = await api.post<T>(endPoint, data, {
        headers: addAuthorizationHeader({})
    });
    return response;
};

export const doPut = async <T>(endPoint: string, data: Record<string, unknown>): Promise<AxiosResponse<T>> => {
    const response = await api.put<T>(endPoint, data, {
        headers: addAuthorizationHeader({})
    });
    return response;
};

export const doPatch = async <T>(endPoint: string, data: Record<string, unknown>): Promise<AxiosResponse<T>> => {
    const response = await api.patch<T>(endPoint, data, {
        headers: addAuthorizationHeader({})
    });
    return response;
};

export const doDelete = async <T>(endPoint: string): Promise<AxiosResponse<T>> => {
    const response = await api.delete<T>(endPoint, {
        headers: addAuthorizationHeader({})
    });
    return response;
};
