import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Cell, PieChart, Pie, Tooltip, Legend, } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const Overview = () => {
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
        <div className="flex justify-center">
            {/* 2nd chart */}
            <div>
                <h1 className="text-6xl font-semibold text-center py-10" >Overview</h1>
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
    );
};

export default Overview;