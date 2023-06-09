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

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
       {
        path: "/" ,
        element:<Home></Home>
       },
       {
        path: "/login" ,
        element:<Login></Login>
       },
       {
        path: "/register" ,
        element:<Registration></Registration>
       },
       {
        path: "/classes" ,
        element:<Classes></Classes>
       },
       {
        path: "/instructor" ,
        element:<Instructor></Instructor>
       }
      ]
    },
    {
      path:"/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children:[
        {
          path:"/dashboard/",
          element:<Dashboard></Dashboard>
        },
        {
          path:"/dashboard/selected",
          element:<MySelectedClass></MySelectedClass>
        },
        {
          path:"/dashboard/enroll",
          element:<MyEnrollClass></MyEnrollClass>
        }
      ]
    }
  ]);