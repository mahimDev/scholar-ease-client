import { AiFillTool } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaGoogleScholar, FaRegStarHalfStroke } from "react-icons/fa6";
import { MdAssignmentAdd, MdManageAccounts } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
    const [isAdmin] = useAdmin()
    const isModaretor = false
    console.log(isAdmin)
    return (
        <div>
            <ToastContainer />
            <div >
                <div className="flex">
                    < div className="w-1/5 bg-secondary min-h-screen">
                        <NavLink to={'/'}><li className=" p-5  flex items-center gap-2">
                            <FaHome></FaHome>
                            Home</li></NavLink>
                        <hr className="my-2" />
                        {isAdmin ?
                            <ul className="p-5">
                                {/* admin menu */}
                                <NavLink to={'/dashboard/adminProfile'}><li className=" p-2  flex items-center gap-2">
                                    <RiAdminFill />
                                    Admin Profile</li></NavLink>
                                <NavLink to={'/dashboard/addScholarship'}><li className=" p-2  flex items-center gap-2">
                                    <MdAssignmentAdd />
                                    Add Scholarship</li></NavLink>
                                <NavLink to={'/dashboard/manageScholarship'}><li className=" p-2  flex items-center gap-2">
                                    <FaGoogleScholar />
                                    Manage Scholarship</li></NavLink>
                                <NavLink to={'/dashboard/manageApplications'}><li className=" p-2  flex items-center gap-2">
                                    <AiFillTool />
                                    Manage Applied Application</li></NavLink>
                                <NavLink to={'/dashboard/manageUsers'}><li className=" p-2  flex items-center gap-2">
                                    <MdManageAccounts />
                                    Manage Users</li></NavLink>
                                <NavLink to={'/dashboard/manageReview'}><li className=" p-2  flex items-center gap-2">
                                    <FaRegStarHalfStroke />
                                    Manage Review</li></NavLink>

                            </ul>
                            :
                            isModaretor ?
                                <ul className="p-5">
                                    {/* modaretor menu */}
                                    <NavLink to={'/dashboard/addScholarship'}><li className=" p-2  flex items-center gap-2">
                                        <MdAssignmentAdd />
                                        Add Scholarship</li></NavLink>
                                    <NavLink to={'/dashboard/manageScholarship'}><li className=" p-2  flex items-center gap-2">
                                        <FaGoogleScholar />
                                        Manage Scholarship</li></NavLink>
                                    <NavLink to={'/dashboard/manageApplications'}><li className=" p-2  flex items-center gap-2">
                                        <AiFillTool />
                                        Manage Applied Application</li></NavLink>

                                    <NavLink to={'/dashboard/manageReview'}><li className=" p-2  flex items-center gap-2">
                                        <FaRegStarHalfStroke />
                                        Manage Review</li></NavLink>

                                </ul>
                                :

                                <ul className="p-5">
                                    {/* modaretor menu */}
                                    <NavLink to={'/dashboard/myProfile'}><li className=" p-2  flex items-center gap-2">
                                        <MdAssignmentAdd />
                                        My Profile</li></NavLink>

                                    <NavLink to={'/dashboard/myApplication'}><li className=" p-2  flex items-center gap-2">
                                        <AiFillTool />
                                        My Application</li></NavLink>

                                    <NavLink to={'/dashboard/myReview'}><li className=" p-2  flex items-center gap-2">
                                        <FaRegStarHalfStroke />
                                        My Review</li></NavLink>

                                </ul>
                        }

                    </div>
                    {/*  */}
                    <div className="w-full p-10">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DashboardLayout;