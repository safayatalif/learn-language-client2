
const SliderBanner = ({image , title , description , bgImage}) => {
    return (
        <div className="hero min-h-screen text-slate-300 bg-opacity-25 bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="w-full md:max-w-md  rounded-lg shadow-2xl mask mask-parallelogram" />
                <div>
                <h1 className="text-4xl font-bold text-purple-600">Join With Us !!</h1>
                    <h1 className="text-5xl font-bold mt-8">{title}</h1>
                    <p className="py-6">{description}</p>
                    <button className="btn btn-primary">Get Started </button>
                </div>
            </div>
        </div>
    );
};

export default SliderBanner;