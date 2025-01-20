import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";

const ModaretoHome = () => {
    const { user } = useAuth()
    const [isRole] = useRole()
    return (
        <div>
            <div className="  ">
                <h1 className="text-5xl font-bold text-secondary text-center">Welcome to {isRole.role} Profile</h1>
                <div className=" flex justify-center ">
                    <div className="w-60 h-60 rounded-full overflow-auto mt-20  ">
                        <img className=" h-full object-cover" src={user?.photoURL} alt="" />
                    </div>

                </div>
                <div className=" text-center mt-1 py-5 md:mx-56  rounded-full ">
                    <h1 className="text-lg font-medium w-1/4 mx-auto mb-3 bg-secondary/20 rounded-full"> {isRole?.role}</h1>
                    <h1 className="text-2xl font-medium "> {user?.displayName}</h1>
                    <h1 className="text-2xl font-medium "> {user?.email}</h1>
                </div>
            </div>
        </div>
    );
};

export default ModaretoHome;