import { Link, useRouteError } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Lottie from "lottie-react";
import errorLottie from '../../assets/lottie/errorLottie.json'



const ErrorPage = () => {
    const { error, status } = useRouteError()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <Helmet>
                <title>Error | Learn Language</title>
            </Helmet>
            <div>
                <Lottie className='w-full h-80 md:h-96' animationData={errorLottie}></Lottie>
            </div>
            <h2 className='mb-8 font-extrabold text-3xl text-yellow-500'>
                <span className='sr-only'>Error</span>
                {status || 404}
            </h2>
            <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                {error?.message}
            </p>
            <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;