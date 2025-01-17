import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useScholarship = () => {
    const axiosPublic = useAxiosPublic()
    const { data: scholarships = [], refetch } = useQuery({
        queryKey: ["scholarships"],
        queryFn: async () => {
            const res = await axiosPublic.get('/scholarship')
            return res.data
        }
    })
    return [scholarships, refetch]
};

export default useScholarship;