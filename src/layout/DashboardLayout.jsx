import {Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import Sidebar from "../components/dashboard/Sidebar";
import { MdSpaceDashboard } from 'react-icons/md';


const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer z-10 lg:drawer-open pt-20">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="w-16 btn btn-primary btn-outline drawer-button mx-8 lg:hidden"><MdSpaceDashboard className="text-4xl"></MdSpaceDashboard></label>

                    <Outlet></Outlet>

                </div>
                <Sidebar></Sidebar>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;