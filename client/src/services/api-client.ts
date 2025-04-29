import axios, { InternalAxiosRequestConfig } from "axios";

const ACCESS_TOKEN = "access";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = "Bearer ${token}";
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;
