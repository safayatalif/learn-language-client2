import Banner from "../banner/Banner";
// import ExtraSection from "../extraSection/ExtraSection";
import PopularClasses from "../popularClasses/PopularClasses";
import PopularInstructors from "../popularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div className="pt-20">
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            {/* <ExtraSection></ExtraSection> */}
        </div>
    );
};

export default Home;