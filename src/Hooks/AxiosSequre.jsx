import axios from 'axios';
import { useEffect } from 'react';
import AuthHook from './AuthHook';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', 
});

const useAxiosSecure = () => {
    const { user, loading } = AuthHook();

    useEffect(() => {
        if (!loading && user?.accessToken) {
            const interceptor = axiosSecure.interceptors.request.use(
                (config) => {
                    config.headers.Authorization = `Bearer ${user.accessToken}`;
                    return config;
                },
                (error) => Promise.reject(error)
            );

            return () => {
                axiosSecure.interceptors.request.eject(interceptor);
            };
        }
    }, [user, loading]);

    return axiosSecure;
};

export default useAxiosSecure;
