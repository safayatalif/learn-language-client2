import { Link } from "react-router-dom";
import logo from '../../../assets/image/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Swal from "sweetalert2";
import ThemeContext from "../../../contexts/ThemeProvider";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handelLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'You are LogOut',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .catch(() => { })
    }
    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Classes">Classes</Link></li>
        <li><Link to="/instructor">Instructor</Link></li>
        {
            user && <>
                <li onClick={handelLogOut}><Link>LogOut</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </>
        }
        <li onClick={toggleTheme}><p>{theme === "light" ? <MdDarkMode></MdDarkMode> : <MdOutlineDarkMode></MdOutlineDarkMode>}</p></li>
    </>
    return (
        <div className="navbar  max-w-7xl h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-outline btn-secondary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <Link><img src={logo} className="w-40 md:w-56 " alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-bold">
                    {
                        navItem
                    }
                </ul>
            </div>
            <div className="navbar-end mr-2 md:mr-8">
                {
                    user ? <div className="avatar">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div> : <button className="btn btn-outline btn-secondary"><Link to="/login">Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Header;