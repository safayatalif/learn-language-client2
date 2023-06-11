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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path: "/dashboard/enroll",
        element: <MyEnrollClass></MyEnrollClass>
      },
      {
        path: "/dashboard/addclass",
        element: <AddClass></AddClass>
      },
      {
        path: "/dashboard/myclasses",
        element: <MyClasses></MyClasses>
      },
      {
        path: "/dashboard/manageclasses",
        element: <ManageClasses></ManageClasses>
      },
      {
        path: "/dashboard/manageusers",
        element: <ManageUsers></ManageUsers>
      }
    ]
  }
]);