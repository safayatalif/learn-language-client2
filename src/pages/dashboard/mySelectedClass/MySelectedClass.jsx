import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loader from './../../../components/shared/loader/Loader';
import { FaPaypal } from 'react-icons/fa';



import Swal from "sweetalert2";
import { AiFillDelete } from "react-icons/ai";
import EmptyComponent from "../../../components/shared/emptyComponent/EmptyComponent";
import CheckoutForm from "../../../components/dashboard/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISHABLE_KEY);


const MySelectedClass = () => {
    const [loading, setLoading] = useState(true);
    const [payItem, setPayItem] = useState({});
    const [axiosSecure] = useAxiosSecure();

    const { user } = useContext(AuthContext);

    const { refetch, data: selectedClasses = [] } = useQuery({
        queryKey: ['selected'],
        queryFn: async () => {
            const res = await axiosSecure(
                `selected/${user?.email}`
            )
            setLoading(false)
            return res.data.filter(selectClass => !selectClass.transactionId)
        },
    })


    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your select Course has been deleted.',
                    'success'
                )
                fetch(`http://localhost:5000/selected/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                        }
                    })
            }
        })
    }

    const handleModal = (payItemId, price) => {
        setPayItem({ payItemId, price });

    }

    return (
        <>
            {
                selectedClasses && Array.isArray(selectedClasses) && selectedClasses.length > 0 ? <div className="md:p-8">
                    <div className="space-y-4 my-4">
                        <h3 className="text-xl text-blue-400">My Selected Classes</h3>
                        <h1 className="text-2xl font-semibold">Pay OR Delete Your Selected Classes</h1>
                    </div>
                    {
                        loading ? <Loader></Loader> : <div className="overflow-x-auto">
                            <table className="table">
                                <thead className="bg-blue-300">
                                    <tr>
                                        <th></th>
                                        <th>Course</th>
                                        <th>Language</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        selectedClasses.map((selectedClass, index) => <tr key={selectedClass?._id}>
                                            <td>{index + 1}</td>
                                            <td>{selectedClass?.topic}</td>
                                            <td>{selectedClass?.language}</td>
                                            <td>{selectedClass?.price} $</td>
                                            <td className="space-x-4">
                                                <span onClick={() => handleDelete(selectedClass?._id)} className="btn btn-xs btn-error"><AiFillDelete></AiFillDelete></span>
                                                <label disabled={selectedClass.transactionId} htmlFor="my_modal_7" onClick={() => handleModal(selectedClass?._id, selectedClass?.price)} className="btn btn-xs btn-primary"><FaPaypal></FaPaypal></label>

                                            </td>
                                        </tr>)
                                    }


                                </tbody>
                            </table>
                        </div>
                    }
                </div> : <EmptyComponent message="No Selected Class" address="/classes" label="Select class"></EmptyComponent>
            }


            {/* payment modal  */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box space-y-6">
                    <h3 className="text-xl font-bold text-blue-500 text-center">Payment</h3>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm price={payItem?.price} payItemId={payItem?.payItemId} ></CheckoutForm>
                    </Elements>

                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    );
};

export default MySelectedClass;