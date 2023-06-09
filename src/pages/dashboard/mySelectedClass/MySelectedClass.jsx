import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loader from './../../../components/shared/loader/Loader';

const MySelectedClass = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/selected/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setSelectedClasses(data);
                setLoading(false)
            });
    }, [user]);

    return (
        <div>
            {
                loading ? <Loader></Loader> : <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Crouse</th>
                                <th>language</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedClasses.map((selectedClass , index)=><tr key={selectedClass?._id}>
                                    <th>{index + 1}</th>
                                    <td>{selectedClass?.topic}</td>
                                    <td>{selectedClass?.language}</td>
                                    <td className="space-x-4">
                                    <span className="badge badge-warning badge-sm">Delete</span>
                                    <span className="badge badge-primary badge-sm">Pay</span>

                                    </td>
                                </tr>)
                            }
                            
                            
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default MySelectedClass;