import Banner from "../banner/Banner";
import OurCourse from "../ourCourse/OurCourse";
// import ExtraSection from "../extraSection/ExtraSection";
import PopularClasses from "../popularClasses/PopularClasses";
import PopularInstructors from "../popularInstructors/PopularInstructors";

const Home = () => {

    return (
        <div >
            <div>
                <Banner></Banner>
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
                <OurCourse></OurCourse>
                {/* <ExtraSection></ExtraSection> */}
            </div>
        </div>
    );
};

export default Home;