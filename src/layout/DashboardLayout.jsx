import {Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer z-10 lg:drawer-open pt-20">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>

                </div>
                <Sidebar></Sidebar>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;