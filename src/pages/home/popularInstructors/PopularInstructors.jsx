import { useEffect, useState } from "react";
import { getSixClasses } from "../../../api/classes";
import Loader from "../../../components/shared/loader/Loader";
import { Link } from "react-router-dom";



const PopularInstructors = () => {
    const [loading, setLoading] = useState(true);
    const [instructors, setInstructors] = useState([]);


    useEffect(() => {
        getSixClasses().then((data) => {
            setInstructors(data);
            setLoading(false);
        })
    }, [])
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-left" data-aos-duration="2000">
                <div className="space-y-4">
                    <h3 className="text-2xl text-blue-400">Our Popular Instructor !</h3>
                    <h1 className="text-4xl font-semibold">See Our Popular Instructor !</h1>
                </div>
                <div>
                    <p>Discover our popular language instructors who are experienced and
                        passionate about teaching. Learn from their expertise and unique
                        teaching methods to enhance your language skills and reach your
                        learning goals.
                    </p>
                </div>
            </div>
            <div className="">
                {
                    loading ? <Loader></Loader> : <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:p-4 mt-8" data-aos="fade-up" data-aos-duration="2000">
                        {
                            instructors.map(instructor => <div key={instructor?._id} className="card card-side bg-purple-50 shadow-md group">
                                <figure>
                                    <img className="mask mask-parallelogram-2 group-hover:scale-105" src={instructor?.instructor_image} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{instructor?.instructor_name}</h2>
                                    <p>{instructor?.instructor_email}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-outline btn-secondary btn-sm">See Classes</button>
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                }
                <div className="flex justify-center py-12">
                    <Link to="instructor"><button className="btn btn-outline btn-secondary">See All Instructor</button></Link>
                </div>

            </div>
        </div>
    );
};

export default PopularInstructors;