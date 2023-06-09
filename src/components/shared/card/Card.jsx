import { HiUserGroup , HiOutlineCurrencyDollar } from "react-icons/hi";



const Card = ({ classItem }) => {
    const { image, topic, instructor_name, available_seats, booking_seats  , price} = classItem

    return (
        <div className="card w-full bg-purple-50 shadow-xl group ">
            <figure className="h-56"><img className="w-full group-hover:scale-125 transition object-cover rounded-lg" src={image} alt="" /></figure>
            <div className="card-body space-y-4">
                <h2 className="card-title">{topic}</h2>
                <p><span className="font-semibold">Instructor: </span>{instructor_name}</p>
                <div className="flex">
                    <p><span className="font-semibold p-3 border rounded-full bg-blue-800"><HiUserGroup className="inline-block text-slate-100"></HiUserGroup></span> {available_seats} Student</p>
                    <p><span className="font-semibold p-3 border rounded-full bg-blue-800"><HiUserGroup className="inline-block text-slate-100"></HiUserGroup></span> {booking_seats} Enroll</p>

                </div>
                <div className="divider"></div>
                <div className="card-actions justify-between">
                    <p><span className="font-semibold p-3 border rounded-full bg-blue-800"><HiOutlineCurrencyDollar className="inline-block text-slate-100"></HiOutlineCurrencyDollar></span> {price} $</p>
                    <button className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;