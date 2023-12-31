import { useContext } from "react";
import { HiUserGroup, HiOutlineCurrencyDollar } from "react-icons/hi";
import { AuthContext } from './../../../contexts/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";




const Card = ({ classItem }) => {
    const { user, role } = useContext(AuthContext)
    const { image, topic, instructor_name, available_seats, total_set, price } = classItem;
    const navigator = useNavigate();

    const handelSelect = (selectClass) => {
        const { topic, instructor_name, available_seats, _id, language } = selectClass;

        const selectInfo = {
            classId: _id,
            price,
            topic,
            instructor_name,
            language,
            available_seats,
            student_email: user?.email
        }
        if (user && available_seats > 0) {
            fetch(`https://learn-language-server-roan.vercel.app/selected/${_id}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(selectInfo)
            })
                .then(response => response.json())
                .then(response => {
                    if (response?.upsertedCount > 0 || response?.modifiedCount > 0) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Your Course has been select !!',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }
                    if (response?.upsertedCount === 0 && response?.modifiedCount === 0) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Your already select !!',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }
                })
                .catch(err => console.error(err));
        }
        else {
            if (!user) {
                Swal.fire({
                    icon: 'error',
                    title: 'Please Login First !!',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigator("/login")
            }
            if (available_seats === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Not  Available Sets !!',
                    showConfirmButton: false,
                    timer: 2000
                })
            }

        }

    }

    return (
        <div className={available_seats > 0 ? "card w-full bg-purple-50 shadow-md group" : "card w-full shadow-red-700 shadow-md border-red-500 group"}>
            <figure className="h-52"><img className="w-full group-hover:scale-125 transition object-cover rounded-lg" src={image} alt="" /></figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">{topic}</h2>
                <p><span className="font-semibold">Instructor: </span>{instructor_name}</p>
                <div className="flex">
                    <p><span className="font-semibold p-3 border rounded-full "><HiUserGroup className="inline-block text-blue-800"></HiUserGroup></span> {available_seats} Available</p>
                    <p><span className="font-semibold p-3 border rounded-full "><HiUserGroup className="inline-block text-blue-800"></HiUserGroup></span> {total_set - available_seats} Enroll</p>
                </div>
                <div className="divider"></div>
                <div className="card-actions justify-between">
                    <p><span className="font-semibold p-3 border rounded-full "><HiOutlineCurrencyDollar className="inline-block text-blue-800"></HiOutlineCurrencyDollar></span> {price} $</p>
                    <button disabled={role === "admin" || role === "instructor"} onClick={() => handelSelect(classItem)} className="btn btn-outline btn-secondary btn-sm">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;