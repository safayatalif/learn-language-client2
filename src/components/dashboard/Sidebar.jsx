import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useContext } from 'react';

const Sidebar = () => {
    const { user } = useContext(AuthContext);
    const role = "student";
    return (
        <>
            {role === "student" && <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-56 md:w-64  h-full bg-base-200 text-base-content">
                    <li className="w-full mx-auto">
                        <Link to='/'>
                            <div className="avatar">
                                <div className="w-24 md:w-36  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} title={user?.displayName} />
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="mt-12 w-full mx-auto space-y-4">
                        <button className='bg-blue-400 '><Link to="selected">My Selected Classes</Link></button>
                        <button className='bg-blue-400 '><Link to="enroll">My Enrolled Classes</Link></button>
                    </li>
                </ul>
            </div>}
            {
                role === "instructor" && <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-56 md:w-64  h-full bg-base-200 text-base-content">
                        <li className="w-full mx-auto">
                            <Link to='/'>
                                <div className="avatar">
                                    <div className="w-24 md:w-36  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} title={user?.displayName} />
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="mt-12 w-full mx-auto space-y-4">
                            <button className='bg-blue-400 '><Link to="addclass">Add a Class</Link></button>
                            <button className='bg-blue-400 '><Link to="enroll">My Classes</Link></button>
                        </li>
                    </ul>
                </div>
            }
        </>
    );
};

export default Sidebar;