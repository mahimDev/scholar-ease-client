import { toast } from 'react-toastify';
import useUser from '../../../Hooks/useUser';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAdmin from '../../../Hooks/useAdmin';

const ManageUsers = () => {
    const [users, refetch] = useUser()
    const [isAdmin] = useAdmin()
    console.log(isAdmin)
    const axiosSecure = useAxiosSecure()
    const handleRoleChange = (e, id) => {
        try {

            const userInfo = { role: e.target.value, id }
            axiosSecure.patch('/user', userInfo)
                .then(res => {

                    if (res.data.matchedCount > 0) {
                        refetch()
                        toast.success(`${e.target.value} is successfully`)
                    }
                })

        } catch (err) {
            console.log(err)
        }
    }
    const handleDeleteUser = async (_id) => {
        try {
            await axiosSecure.delete(`/user/${_id}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.deletedCount) {
                        toast.success(`User deleted successfully`, {
                            autoClose: 2000,
                            theme: 'colored',
                            position: 'top-center'
                        })
                        refetch()
                    }
                })


        } catch (err) {
            console.log(err)
            toast.error(err.response.data.error)
        }
    }

    return (
        <div>
            <h1 className="text-4xl font-semibold mt-5 text-center ">Total Users {users?.length}</h1>
            <div className="overflow-x-auto">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-secondary text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">Image</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Name</th>

                            <th className="py-4 px-6 text-lg border-b text-center">Email</th>
                            <th className="py-4 px-6 text-lg border-b text-center">Role</th>
                            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*  */}
                        {users.map(user =>
                            <tr key={user._id} className="hover:bg-gray-50 border-b transition duration-300">
                                <td className="py-4 px-4 flex justify-start">
                                    <img src={user?.user_img} className="h-16 w-16 object-cover rounded  bg-gray-300" />
                                </td>
                                <td className="py-4 px-6 border-b text-md ">{user?.user_name}</td>

                                <td className="py-4 px-6 border-b text-center ">
                                    <p> {user?.user_email}</p>
                                </td>
                                {/* review btn */}
                                <td className="py-4 px-6 border-b text-center ">
                                    <div>

                                        <select
                                            onChange={(e) => handleRoleChange(e, user._id)}
                                            defaultValue={user.user_role}
                                            name="subjectCategory"
                                            className={`p-2  rounded 
                                                ${user.user_role ===
                                                    'Admin' ? "bg-orange-400" : user.user_role === 'Modaretor' ? "bg-cyan-500" : "bg-secondary"} text-background`}
                                            required
                                        >
                                            <option
                                                disabled
                                            >{user.user_role}</option>
                                            <option className='' value="Admin">Admin</option>
                                            <option value="Modaretor">Modaretor</option>
                                            <option value="user">user</option>


                                        </select>
                                    </div>
                                </td>
                                {/* cancel btn */}
                                <td className="py-4 px-6 border-b text-end">
                                    {user.user_role === 'Admin' ? '' : <button
                                        onClick={() => handleDeleteUser(user._id)}
                                        className="bg-red-600 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Delete</button>}
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;