import { useEffect, useState } from "react";
import Loader from "../../components/shared/loader/Loader";
import { Helmet } from "react-helmet-async";

const Instructor = () => {

    const [instructorsData, setInstructorsData] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`https://learn-language-server-roan.vercel.app/classes`)
            .then((res) => res.json())
            .then((data) => {
                setInstructorsData(data);
                setLoading(false)
            });

    }, [])
    return (
        <div className='py-12'>
            <Helmet>
                <title>Instructor | Learn Language</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-4" data-aos="fade-left" data-aos-duration="2000">
                <div className="space-y-4">
                    <h3 className="text-2xl text-blue-400">Our Instructor</h3>
                    <h1 className="text-4xl font-semibold">Find Your Instructor</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptas harum maxime necessitatibus incidunt architecto!
                        Eius totam eum, culpa similique iure impedit saepe soluta
                        aut quasi, fuga quae cumque ipsam quia laboriosam labore
                        asperiores quidem. Inventore consequuntur exercitationem
                        voluptatem! Odio, minima.</p>
                </div>
            </div>
            <div>
                {
                    loading ? <Loader></Loader> :
                        <div className="overflow-x-auto" data-aos="fade-up" data-aos-duration="2000">
                            <table className="table bg-blue-100">
                                {/* head */}
                                <thead className="bg-blue-300">
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>Name</th>
                                        <th>Classes</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        instructorsData.map((instructorData, index) => <tr key={instructorData?._id}>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={instructorData?.instructor_image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{instructorData?.instructor_name}</div>
                                                        <div className="text-sm opacity-50">{instructorData?.instructor_email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {instructorData?.topic}
                                                <br />
                                                <span className="badge badge-primary badge-sm">{instructorData?.language}</span>
                                            </td>
                                            <td>See Classes</td>
                                        </tr>)
                                    }
                                </tbody>

                            </table>
                        </div>
                }
            </div>
        </div>
    );
};

export default Instructor;