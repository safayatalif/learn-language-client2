import Banner from "../banner/Banner";
import PopularClasses from "../popularClasses/PopularClasses";

const Home = () => {
    return (
        <div className="pt-20">
            <Banner></Banner>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;