import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-seven-mu.vercel.app/',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { signOutuser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            // console.log('Error cought in interceptors\nNow log out', error);

            if (error.status === 401 || error.status === 403) {
                signOutuser()
                    .then(() => {
                        console.log('Logout user');
                        navigate('/signin');
                    })
                    .catch(error => console.log(error));
            }
            return Promise.reject(error);
        })
    }, [])

    return axiosInstance;
};

export default useAxiosSecure;