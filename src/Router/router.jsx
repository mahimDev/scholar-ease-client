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
                element: <ScholarshipDetails></ScholarshipDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/scholarship/${params.id}`)
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/scholarship/${params.id}`)
            },
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'addScholarship',
                element: <AddScholarship></AddScholarship>
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