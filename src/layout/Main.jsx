import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeProvider";

const Main = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`my-component ${theme === 'dark' ? 'bg-slate-950 text-purple-500' : 'bg-slate-50'}`}>
            <Header></Header>
            <div className="px-4">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;