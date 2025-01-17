import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRole = () => {
    const { user, loginUser } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isrole, isPending } = useQuery({
        queryKey: [user.email, 'isrole'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/role/${user.email}`)
            return res.data?.role
        }
    })
    return [isrole, isPending]
};

export default useRole;