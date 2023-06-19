import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useContext } from 'react';
import { FaFileCsv, FaHome, FaRegAddressBook } from 'react-icons/fa';
import { MdManageAccounts } from 'react-icons/md';


const Sidebar = () => {
    const { user, role } = useContext(AuthContext);
    return (
        <>
            {(!role || role === "student") && <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-56 md:w-64  h-full ">
                    <li className="w-full mx-auto">
                        <Link to='/dashboard'>
                            <div className="avatar">
                                <div className="w-24 md:w-36  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} title={user?.displayName} />
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="mt-12 w-full mx-auto space-y-4">
                        <button className='bg-blue-400 '><Link to="/dashboard"><FaHome className='inline-block'></FaHome> Dashboard Home</Link></button>
                        <button className='bg-blue-400 '><Link to="selected">My Selected Classes</Link></button>
                        <button className='bg-blue-400 '><Link to="enroll">My Enrolled Classes</Link></button>
                        <button className='bg-blue-400 '><Link to="payment">My Payment History</Link></button>
                    </li>
                </ul>
            </div>}
            {
                role === "instructor" && <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-56 md:w-64  h-full ">
                        <li className="w-full mx-auto">
                            <Link to='/dashboard'>
                                <div className="avatar">
                                    <div className="w-24 md:w-36  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} title={user?.displayName} />
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="mt-12 w-full mx-auto space-y-4">
                            <button className='bg-blue-400 '><Link to="/dashboard"><FaHome className='inline-block'></FaHome> Dashboard Home</Link></button>
                            <button className='bg-blue-400 '><Link to="addclass"><FaRegAddressBook className='inline-block'></FaRegAddressBook> Add a Class</Link></button>
                            <button className='bg-blue-400 '><Link to="myclasses"><FaFileCsv className='inline-block'></FaFileCsv> My Classes</Link></button>
                        </li>
                    </ul>
                </div>
            }
            {
                role === "admin" && <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-56 md:w-64  h-full ">
                        <li className="w-full mx-auto">
                            <Link to='/dashboard'>
                                <div className="avatar">
                                    <div className="w-24 md:w-36  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} title={user?.displayName} />
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="mt-12 w-full mx-auto space-y-4 text-center">
                            <button className='bg-blue-400 '><Link to="/dashboard"><FaHome className='inline-block'></FaHome> Dashboard Home</Link></button>
                            <button className='bg-blue-400 '><Link to="manageclasses"><MdManageAccounts className='inline-block'></MdManageAccounts> Manage Classes</Link></button>
                            <button className='bg-blue-400 '><Link to="manageusers"><MdManageAccounts className='inline-block'></MdManageAccounts> Manage Users</Link></button>
                        </li>
                    </ul>
                </div>
            }
        </>
    );
};

export default Sidebar;