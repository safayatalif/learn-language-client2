import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/home/Home";
import Registration from "../../pages/registration/Registration";
import Login from "../../pages/login/Login";
import Classes from "../../pages/classes/Classes";
import Instructor from "../../pages/instructor/Instructor";
import Dashboard from "../../pages/dashboard/dashboard/Dashboard";
import DashboardLayout from "../../layout/DashboardLayout";
import MySelectedClass from "../../pages/dashboard/mySelectedClass/MySelectedClass";
import MyEnrollClass from "../../pages/dashboard/myEnrollClass/MyEnrollClass";
import AddClass from "../../pages/dashboard/addClass/AddClass";
import PrivateRoute from "./privateRoute";
import MyClasses from "../../pages/dashboard/myClasses/MyClasses";
import ManageClasses from "../../pages/dashboard/manageClasses/ManageClasses";
import ManageUsers from "../../pages/dashboard/manageUsers/ManageUsers";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import PaymentHistory from "../../pages/dashboard/paymentHistory/PaymentHistory";
import AdminRoute from "./adminRoute";
import InstructorRoute from "./instructorRoute";
import StudentRouter from "./studentRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/classes",
        element: <Classes></Classes>
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/dashboard/selected",
        element: <StudentRouter><MySelectedClass></MySelectedClass></StudentRouter>
      },
      {
        path: "/dashboard/enroll",
        element: <StudentRouter><MyEnrollClass></MyEnrollClass></StudentRouter>
      },
      {
        path: "/dashboard/addclass",
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: "/dashboard/myclasses",
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      {
        path: "/dashboard/manageclasses",
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: "/dashboard/manageusers",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: "/dashboard/payment",
        element: <PaymentHistory></PaymentHistory>
      }
    ]
  }
]);