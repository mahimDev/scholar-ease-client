import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import AddScholarship from "../Pages/Dashboard/AddScholarship/AddScholarship";
import AllScholarship from "../Pages/AllScholarship/AllScholarship";
import ScholarshipDetails from "../Pages/ScholarshipDetails/ScholarshipDetails";
import Payment from "../Pages/Payment/Payment";
import UserSecureRoute from "../Secure/UserSecureRoute";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import MyApplication from "../Pages/Dashboard/MyApplication/MyApplication";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'allScholarship',
                element: <AllScholarship></AllScholarship>
            },
            {
                path: 'scholarshipDetails/:id',
                element:
                    <UserSecureRoute>
                        <ScholarshipDetails></ScholarshipDetails>
                    </UserSecureRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/scholarship/${params.id}`)
            },
            {
                path: 'payment/:id',
                element:
                    <UserSecureRoute>
                        <Payment></Payment>
                    </UserSecureRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/scholarship/${params.id}`)
            },
        ]
    },
    {
        path: 'dashboard',
        element:
            <UserSecureRoute>
                <DashboardLayout></DashboardLayout>
            </UserSecureRoute>,
        children: [
            // admin route
            {
                path: 'addScholarship',
                element: <AddScholarship></AddScholarship>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            // regular user route
            {
                path: 'myApplication',
                element: <MyApplication></MyApplication>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },

])


export default router;