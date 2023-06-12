import Banner from "../banner/Banner";
import OurCourse from "../ourCourse/OurCourse";
// import ExtraSection from "../extraSection/ExtraSection";
import PopularClasses from "../popularClasses/PopularClasses";
import PopularInstructors from "../popularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div className="pt-20">
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <OurCourse></OurCourse>
            {/* <ExtraSection></ExtraSection> */}
        </div>
    );
};

export default Home;