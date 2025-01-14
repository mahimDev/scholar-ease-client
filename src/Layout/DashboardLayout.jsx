import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const DashboardLayout = () => {
    return (
        <div>
            <ToastContainer />
            <div >
                <div className="flex">
                    {/* menu items */}
                    <div className="w-1/5 bg-secondary min-h-screen">
                        <ul className="p-4">
                            <NavLink to={'/'}><li className=" p-2  flex items-center gap-2">
                                <FaHome></FaHome>
                                Home</li></NavLink>
                            <NavLink to={'/dashboard/addScholarship'}><li className=" p-2  flex items-center gap-2">
                                <FaHome></FaHome>
                                Home</li></NavLink>
                        </ul>
                    </div>
                    {/*  */}
                    <div className="w-full">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;