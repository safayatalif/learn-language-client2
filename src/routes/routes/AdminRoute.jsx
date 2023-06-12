import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Loader from "../../components/shared/loader/Loader";


const AdminRoute = ({ children }) => {
    const { user, loading, role } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (user && role === "admin") {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;