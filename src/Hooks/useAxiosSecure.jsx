import axios from "axios";

const axiosSecure = axios.create({
    baseURL: `http://localhost:4000`
    // baseURL: `${import.meta.env.VITE_URL}`
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;