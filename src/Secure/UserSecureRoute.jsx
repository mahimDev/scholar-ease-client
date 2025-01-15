import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import FancySpinner from "../Components/Accessories/FancySpinner/FancySpinner";

const UserSecureRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const { pathname } = useLocation()
    if (loading) {
        return <FancySpinner></FancySpinner>
    }
    if (user) {
        return children
    }
    console.log(pathname)
    return <Navigate state={{ pathname }} to={'/login'}></Navigate>
};

export default UserSecureRoute;