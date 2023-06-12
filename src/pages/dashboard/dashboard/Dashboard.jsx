import Lottie from "lottie-react";
import dashboardImage from "../../../assets/lottie/dashboard.json"


const Dashboard = () => {
    return (
        <div className="">
            <Lottie className='w-2/3 mx-auto' animationData={dashboardImage}></Lottie>
        </div>
    );
};

export default Dashboard;