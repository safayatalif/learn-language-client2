import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { statusApproved, statusDenied, statusPending } from "../../../api/classes";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdOutlineCancel, MdOutlinePending } from "react-icons/md";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [denyId, setDenyId] = useState(null);



    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure(
                `/classes`
            )
            return res.data
        },
    })

    const handleApproved = (id) => {
        statusApproved(id)
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Posted Class Approved',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })

    }

    const handelFeedback = event => {
        event.preventDefault();
        const feedback = event.target.feedback.value;
        statusDenied(denyId, feedback)
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Posted Class Denied',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    event.target.reset();
                }
            })
    }

    const handleDenied = (id) => {
        setDenyId(id)
    }

    const handlePending = (id) => {
        statusPending(id)
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Posted Class Pending',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }


    return (
        <>
            <div className="mx-8">
                <Helmet>
                    <title>Manage Classes | Learn Language</title>
                </Helmet>
                <h3 className="text-xl mt-4  text-blue-400">Manage Classes</h3>

                <div className="overflow-x-auto" data-aos="fade-up" data-aos-duration="2000">
                    <table className="table table-xs">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Classes</th>
                                <th>Name</th>
                                <th>Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((classItem, index) => <tr key={classItem?._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={classItem?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{classItem?.topic}</div>
                                                <div className="text-sm opacity-50">{classItem?.language}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {classItem?.instructor_email}
                                        <br />
                                        <span className="badge badge-primary badge-sm">{classItem?.instructor_name}</span>
                                    </td>
                                    <td>{classItem?.available_seats}</td>
                                    <td>{classItem?.price} $</td>
                                    <td><span className="badge badge-error badge-sm">{classItem?.status}</span></td>
                                    <td>
                                        <div className="btn-group">
                                            <button title="Approved" disabled={classItem?.status === "approved"} onClick={() => { handleApproved(classItem?._id) }} className="btn btn-outline btn-secondarybtn-xs "><FaRegThumbsUp></FaRegThumbsUp></button>
                                            <button title="Pending" disabled={classItem?.status === "pending"} onClick={() => { handlePending(classItem?._id) }} className="btn btn-outline btn-secondarybtn-xs btn-warning"><MdOutlinePending></MdOutlinePending></button>
                                            <label title="Deny" disabled={classItem?.status === "denied"} htmlFor="my_modal_6" onClick={() => { handleDenied(classItem?._id) }} className="btn btn-outline btn-secondarybtn-xs btn-error"><MdOutlineCancel></MdOutlineCancel></label>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>

                </div>
                {/* denied modal  */}
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">Send FeedBack !!</h3>
                        <form onSubmit={handelFeedback}>
                            <textarea type="text" name="feedback" className="textarea textarea-primary w-full" placeholder="Enter Your Feedback"></textarea>
                            <input type="submit" className="btn btn-outline btn-secondary bt-sm" value="Submit" />
                        </form>


                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default ManageClasses;