import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useApplications = () => {
    const axiosSecure = useAxiosSecure()
    const { data: applications = [] } = useQuery({
        queryKey: ["applications"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/application`)
            return res.data
        }
    })
    return [applications]
};

export default useApplications;