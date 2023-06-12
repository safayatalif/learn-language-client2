import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { becomeAdmin, becomeInstructor } from "../../../api/auth";
import Swal from "sweetalert2";
import { RiAdminFill } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';

const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure(
                "users"
            )
            return res.data
        },
    })

    const handleAdmin = (email) => {
        becomeAdmin(email).then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: 'User Create Admin',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        });


    }

    const handleInstructor = (email) => {
        becomeInstructor(email).then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: 'User Create Instructor',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
    }

    return (
        <div className="mx-8">
            <Helmet>
                <title>Manage User | Learn Language</title>
            </Helmet>
            <h3 className="text-xl mt-4  text-blue-400">Manage users</h3>

            <div className="overflow-x-auto">
                <table className="table table-xs" data-aos="fade-up" data-aos-duration="2000">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>users</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user?._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user?.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>
                                <td>
                                    {user?.name}
                                    <br />
                                    <span className="badge badge-primary badge-sm">{user?.role ? user?.role : "student"}</span>
                                </td>
                                <td>{user?.email}</td>
                                <td>
                                    <div className="btn-group">
                                        <button title="admin" disabled={user?.role === "admin"} onClick={() => { handleAdmin(user?.email) }} className="btn btn-xs btn-primary"><RiAdminFill></RiAdminFill></button>
                                        <label title="Instructor" disabled={user?.role === "instructor"} htmlFor="my_modal_6" onClick={() => { handleInstructor(user?.email) }} className="btn btn-xs btn-warning"><GiTeacher></GiTeacher></label>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default ManageUsers;