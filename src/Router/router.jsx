import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import AddScholarship from "../Pages/Dashboard/AddScholarship/AddScholarship";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
    }

])


export default router;