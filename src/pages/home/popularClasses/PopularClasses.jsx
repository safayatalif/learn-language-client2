import { useEffect, useState } from "react";
import { getSixClasses } from "../../../api/classes";
import Loader from "../../../components/shared/loader/Loader";
import Card from "../../../components/shared/card/Card";
import { Link } from 'react-router-dom';

const PopularClasses = () => {
    const [loading, setLoading] = useState(true);
    const [classItems, setClassItems] = useState([]);


    useEffect(() => {
        getSixClasses().then((data) => {
            setClassItems(data);
            setLoading(false);
        })
    }, [])

    return (
        <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 py-12" data-aos="fade-left" data-aos-duration="2000">
                <div className="space-y-4" >
                    <h3 className="text-2xl text-blue-400">Popular Classes !</h3>
                    <h1 className="text-4xl font-semibold">See Our Popular Classes !</h1>
                </div>
                <div>
                    <p>Explore our popular language classes taught by qualified instructors.
                        Choose from a variety of topics and levels to find the perfect class
                        that suits your language learning needs.
                    </p>
                </div>
            </div>
            {
                loading ? <Loader></Loader> : <div data-aos="fade-up" data-aos-duration="3000" className="grid grid-cols-1 md:grid-cols-3 gap-4  md:p-4 mt-8">
                    {
                        classItems.map(classItem => <Card key={classItem._id} classItem={classItem} ></Card>)
                    }

                </div>
            }
            <div className="flex justify-center py-12">
                <Link to="classes"><button className="btn btn-primary">See All Classes</button></Link>
            </div>
        </div>

    );
};

export default PopularClasses;