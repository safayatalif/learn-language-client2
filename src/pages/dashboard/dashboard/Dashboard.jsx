import Lottie from "lottie-react";
import dashboardImage from "../../../assets/lottie/dashboard.json"
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    return (
        <div className="" data-aos="fade-left" data-aos-duration="2000">
            <Helmet>
                <title>DashBoard | Learn Language</title>
            </Helmet>
            <Lottie className='w-2/3 mx-auto' animationData={dashboardImage}></Lottie>
        </div>
    );
};

export default Dashboard;