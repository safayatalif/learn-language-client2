import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Loader from "../../components/shared/loader/Loader";


const InstructorRoute = ({ children }) => {
    const { user, loading, role } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (user && role === "instructor") {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;