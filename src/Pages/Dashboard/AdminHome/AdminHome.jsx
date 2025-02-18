
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";

const AdminHome = () => {
    const { user } = useAuth()
    const [isRole] = useRole()


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

            </div>
        </div>
    );
};

export default AdminHome;