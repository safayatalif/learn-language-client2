import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import SliderBanner from "../../../components/sliderBanner/SliderBanner";



const Banner = () => {
    const [bannerDetails, setBannerDetails] = useState([]);
    const bgImage = "https://img.freepik.com/free-vector/black-banner-with-yellow-geometric-shapes_1017-32327.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=robertav1_2_sidr"

    useEffect(() => {
        fetch("banner.json")
            .then(res => res.json())
            .then(data => setBannerDetails(data))
    }, [])


    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen text-slate-300 bg-contain" style={{ backgroundImage: `url(${bgImage})` }}>
                        <div className="hero-content text-center">
                            <div className="max-w-xl">
                                <h1 className="text-4xl font-bold text-purple-600">Hello there !!</h1>
                                <h1 className="text-5xl font-bold mt-8">Learn New Languages and Move Forward</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                {
                    bannerDetails.map((bannerDetail, i) => <SwiperSlide key={i}>
                        <SliderBanner

                            image={bannerDetail?.image}
                            bgImage={bannerDetail?.bgImage}
                            description={bannerDetail?.description}
                            title={bannerDetail?.title}
                        ></SliderBanner></SwiperSlide>)
                }
                {/* <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
};

export default Banner;