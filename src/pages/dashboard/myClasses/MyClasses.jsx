import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loader from "../../../components/shared/loader/Loader";
import { getClasses } from "../../../api/classes";

const MyClasses = () => {
    const [myClasses, setMyClasses] = useState();
    const [loading, setLoading] = useState(true);
    const [feedback, setFeedBack] = useState("");
    const { user } = useContext(AuthContext);



    useEffect(() => {
        getClasses(user?.email)
            .then((data) => {
                setMyClasses(data);
                setLoading(false)
            });

    }, [user])

    const handleFeedback = (feedback) => {
        setFeedBack(feedback)
    }


    return (
        <div className="p-4">
            <div className="space-y-4 my-4">
                <h3 className="text-xl text-blue-400">My Selected Classes</h3>
                <h1 className="text-2xl font-semibold">Pay OR Delete Your Selected Classes</h1>
            </div>
            {
                loading ? <Loader></Loader> : <div className="overflow-x-auto">
                    <table className="table bg-blue-100">
                        <thead className="bg-blue-300 ">
                            <tr>
                                <th>#</th>
                                <th>Classes</th>
                                <th>Price</th>
                                <th>status</th>
                                <th>Enroll</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses.map((myClass, index) => <tr key={myClass?._id}>
                                    <td>{index + 1}</td>
                                    <td>{myClass?.topic}</td>
                                    <td>{myClass?.price} $</td>
                                    <td>{myClass?.status}</td>
                                    <td>{myClass?.total_set - myClass.available_seats}</td>
                                    <td className="space-x-4">
                                        <span className="badge  badge-primary badge-sm cursor-pointer">Update</span>
                                        <label htmlFor="my_modal_7" onClick={() => handleFeedback(myClass?.feedback)} className="badge badge-warning badge-sm cursor-pointer">Feedback</label>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                    {/* feedback modal  */}
                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold">Admin FeedBack !!</h3>
                            <p className="py-4">{feedback ? feedback : "No Feedback !!"}</p>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                    </div>
                </div>
            }
        </div>
    );
};

export default MyClasses;