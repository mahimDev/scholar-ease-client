import { AiFillTool } from "react-icons/ai";
import { FaChartLine, FaHome } from "react-icons/fa";
import { FaGoogleScholar, FaRegStarHalfStroke } from "react-icons/fa6";
import { MdAssignmentAdd, MdManageAccounts } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useRole from "../Hooks/useRole";

const DashboardLayout = () => {
    const [isRole] = useRole()

    return (
        <div>
            <ToastContainer />
            <div >
                <div className="flex">
                    < div className="w-1/5 bg-secondary min-h-screen">
                        <NavLink to={'/'}><li className=" ml-3 mt-5 text-lg p-5  flex items-center gap-2 hover:bg-slate-500/20">
                            <FaHome></FaHome>
                            Home</li></NavLink>
                        <hr className="my-2" />
                        {isRole?.role === "Admin" ?
                            <ul className="p-5">
                                {/* admin menu */}
                                <NavLink to={'/dashboard/adminProfile'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                    <RiAdminFill />
                                    Admin Profile</li></NavLink>
                                <NavLink to={'/dashboard/overview'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                    <FaChartLine />
                                    Overview</li></NavLink>
                                <NavLink to={'/dashboard/addScholarship'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                    <MdAssignmentAdd />
                                    Add Scholarship</li></NavLink>
                                <NavLink to={'/dashboard/manageScholarship'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                    <FaGoogleScholar />
                                    Manage Scholarship</li></NavLink>
                                <NavLink to={'/dashboard/manageApplications'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                    <AiFillTool />
                                    Manage Applied Application</li></NavLink>
                                <NavLink to={'/dashboard/manageUsers'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                    <MdManageAccounts />
                                    Manage Users</li></NavLink>
                                <NavLink to={'/dashboard/manageReview'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                    <FaRegStarHalfStroke />
                                    Manage Review</li></NavLink>

                            </ul>
                            :
                            isRole.role === "Modaretor" ?
                                <ul className="p-5">
                                    {/* modaretor menu */}
                                    <NavLink to={'/dashboard/modaretorProfile'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                        <RiAdminFill />
                                        Modaretor Profile</li></NavLink>
                                    <NavLink to={'/dashboard/addScholarship'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                        <MdAssignmentAdd />
                                        Add Scholarship</li></NavLink>
                                    <NavLink to={'/dashboard/manageScholarship'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                        <FaGoogleScholar />
                                        Manage Scholarship</li></NavLink>
                                    <NavLink to={'/dashboard/manageApplications'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                        <AiFillTool />
                                        Manage Applied Application</li></NavLink>

                                    <NavLink to={'/dashboard/manageReview'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                        <FaRegStarHalfStroke />
                                        Manage Review</li></NavLink>

                                </ul>
                                :
                                <ul className="md:p-5">
                                    {/* regular menu */}
                                    <NavLink to={'/dashboard/myProfile'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                        <MdAssignmentAdd />
                                        Profile</li></NavLink>

                                    <NavLink to={'/dashboard/myApplication'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                        <AiFillTool />
                                        Application</li></NavLink>

                                    <NavLink to={'/dashboard/myReview'}><li className=" p-2  flex items-center gap-2 hover:bg-slate-500/20">
                                        <FaRegStarHalfStroke />
                                        Review</li></NavLink>
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