import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className="  ">
                <h1 className="text-5xl font-bold text-secondary text-center">Welcome to Admin Profile</h1>
                <div className=" flex justify-center ">
                    <div className="w-60 h-60 rounded-full overflow-auto mt-20  ">
                        <img className=" h-full object-cover" src={user?.photoURL} alt="" />
                    </div>

                </div>
                <div className=" text-center mt-1 py-5 md:mx-56  rounded-full ">
                    <h1 className="text-2xl font-medium "> {user?.displayName}</h1>
                    <h1 className="text-2xl font-medium "> {user?.email}</h1>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;