import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loader from './../../../components/shared/loader/Loader';
import { FaPaypal } from 'react-icons/fa';


import Swal from "sweetalert2";
import { AiFillDelete } from "react-icons/ai";

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


    const handleDelete = _id => {
        // console.log('delete', _id);
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
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = selectedClasses.filter(selectedClass => selectedClass._id !== _id);
                            setSelectedClasses(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="p-8">
            <div className="space-y-4">
                <h3 className="text-2xl text-blue-400">My Selected Courses</h3>
                <h1 className="text-4xl font-semibold">Pay OR Delete Your Courses</h1>
            </div>
            {
                loading ? <Loader></Loader> : <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Course</th>
                                <th>language</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedClasses.map((selectedClass, index) => <tr key={selectedClass?._id}>
                                    <th>{index + 1}</th>
                                    <td>{selectedClass?.topic}</td>
                                    <td>{selectedClass?.language}</td>
                                    <td className="space-x-4">
                                        <span onClick={() => handleDelete(selectedClass?._id)} className="badge badge-warning badge-sm cursor-pointer"><AiFillDelete></AiFillDelete></span>
                                        <span className="badge badge-primary badge-sm cursor-pointer"><FaPaypal></FaPaypal></span>
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