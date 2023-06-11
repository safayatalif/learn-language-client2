import { useContext, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import EmptyComponent from "../../../components/shared/emptyComponent/EmptyComponent";
import Loader from "../../../components/shared/loader/Loader";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyEnrollClass = () => {

    const [loading, setLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();

    const { user } = useContext(AuthContext);

    const { data: selectedClasses = [] } = useQuery({
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
                                        <th>Transaction Id</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        selectedClasses.map((selectedClass, index) => <tr key={selectedClass?._id}>
                                            <td>{index + 1}</td>
                                            <td>{selectedClass?.topic}</td>
                                            <td>{selectedClass?.language}</td>
                                            <td>{selectedClass?.price} $</td>
                                            <td>{selectedClass?.transactionId}</td>
                                            <td><span className="badge badge-primary badge-sm">Enroll</span></td>
                                        </tr>)
                                    }


                                </tbody>
                            </table>
                        </div>
                    }
                </div> : <EmptyComponent message="No Enroll Class" address="/selected" label="< Enroll Class"></EmptyComponent>
            }
        </div>
    );
};

export default MyEnrollClass;