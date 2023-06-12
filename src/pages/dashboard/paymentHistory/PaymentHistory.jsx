import { useContext, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loader from "../../../components/shared/loader/Loader";
import EmptyComponent from "../../../components/shared/emptyComponent/EmptyComponent";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
    const [loading, setLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();

    const { user } = useContext(AuthContext);

    const { data: enrollClasses = [] } = useQuery({
        queryKey: ['selected'],
        queryFn: async () => {
            const res = await axiosSecure(
                `selected/${user?.email}`
            )
            setLoading(false)
            return res.data.filter(selectClass => selectClass.transactionId)
        },
    })

    return (
        <div>
            <Helmet>
                <title>Payment History | Learn Language</title>
            </Helmet>
            <div>
                {
                    enrollClasses && Array.isArray(enrollClasses) && enrollClasses.length > 0 ? <div className="md:p-8">
                        <div className="space-y-4 my-4">
                            <h3 className="text-xl text-blue-400">My Selected Classes</h3>
                            <h1 className="text-2xl font-semibold">Pay OR Delete Your Selected Classes</h1>
                        </div>
                        {
                            loading ? <Loader></Loader> : <div className="overflow-x-auto">
                                <table className="table" data-aos="fade-up" data-aos-duration="2000">
                                    <thead className="bg-blue-300">
                                        <tr>
                                            <th></th>
                                            <th>Course</th>
                                            <th>Language</th>
                                            <th>Price</th>
                                            <th>Transaction Id</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            enrollClasses.map((enrollClass, index) => <tr key={enrollClass?._id}>
                                                <td>{index + 1}</td>
                                                <td>{enrollClass?.topic}</td>
                                                <td>{enrollClass?.language}</td>
                                                <td>{enrollClass?.price} $</td>
                                                <td>{enrollClass?.transactionId}</td>
                                                <td>{enrollClass?.date}</td>
                                            </tr>)
                                        }


                                    </tbody>
                                </table>
                            </div>
                        }
                    </div> : <EmptyComponent message="No Payment History" address="/dashboard/selected" label="< Enroll Class"></EmptyComponent>
                }
            </div>
        </div>
    );
};

export default PaymentHistory;