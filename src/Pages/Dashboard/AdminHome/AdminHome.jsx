
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useRole from "../../../Hooks/useRole";
import { Cell, PieChart, Pie, Tooltip, Legend, } from 'recharts';
import { useQuery } from "@tanstack/react-query";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const AdminHome = () => {
    const { user } = useAuth()
    const [isRole] = useRole()
    const axiosSecure = useAxiosSecure()
    const { data: stats = {}, isLoading, error } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    // custom with pie chart
    const pieChartData = Object.entries(stats).map(([key, value]) => ({
        name: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the first letter
        value,
    }));


    return (
        <div className="flex-col items-center">
            <div className="  ">
                <h1 className="text-5xl font-bold text-secondary text-center">Welcome to {isRole.role} Profile</h1>
                <div className=" flex justify-center ">
                    <div className="w-60 h-60 rounded-full overflow-auto mt-20  ">
                        <img className=" h-full object-cover" src={user?.photoURL} alt="" />
                    </div>

                </div>
                <div className=" text-center mt-1 py-5 md:mx-56  rounded-full ">
                    <h1 className="text-lg font-medium bg-secondary/20 rounded-full w-4/12 mx-auto"> {isRole?.role}</h1>
                    <h1 className="text-xl font-medium "> {user?.displayName}</h1>
                    <h1 className="text-xl font-medium "> {user?.email}</h1>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                {/* 2nd chart */}
                <div>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%" // Center X
                            cy="50%" // Center Y
                            label={({ name, percent }) =>
                                `${name}: ${(percent * 100).toFixed(0)}%`
                            }
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;