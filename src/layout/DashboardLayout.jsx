import {Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import Sidebar from "../components/dashboard/Sidebar";
import { MdSpaceDashboard } from 'react-icons/md';
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeProvider";


const DashboardLayout = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`my-component ${theme === 'dark' ? 'bg-slate-950 text-purple-500' : 'bg-slate-50'}`}>
            <Header></Header>
            <div className="drawer z-10 lg:drawer-open pt-20">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="w-16 btn btn-outline btn-secondary drawer-button mx-8 lg:hidden"><MdSpaceDashboard className="text-4xl"></MdSpaceDashboard></label>

                    <Outlet></Outlet>

                </div>
                <Sidebar></Sidebar>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;