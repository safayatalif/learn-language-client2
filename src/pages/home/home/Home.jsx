import { useContext } from "react";
import Banner from "../banner/Banner";
import OurCourse from "../ourCourse/OurCourse";
// import ExtraSection from "../extraSection/ExtraSection";
import PopularClasses from "../popularClasses/PopularClasses";
import PopularInstructors from "../popularInstructors/PopularInstructors";
import ThemeContext from "../../../contexts/ThemeProvider";

const Home = () => {
    const { theme } = useContext(ThemeContext);
    console.log(theme)

    return (
        <div className="pt-20">
            <div className={`my-component ${theme === 'dark' ? 'bg-slate-700 text-white' : 'bg-slate-50'}`}>
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