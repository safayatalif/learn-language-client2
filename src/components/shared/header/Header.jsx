import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'

const Header = () => {
    const navItem = <>
        <li><a>Item 1</a></li>
        {/* <li tabIndex={0}>
            <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li> */}
        <li><a>Item 3</a></li>
    </>
    return (
        <div className="navbar bg-base-100 fixed z-10 bg-opacity-20 text-purple-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;