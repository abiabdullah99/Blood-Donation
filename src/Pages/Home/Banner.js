import React from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Slide, Fade } from 'react-awesome-reveal';
const Banner = () => {
    const banner = [
        {
            id: 1,
            img: "https://template79832.motopreview.com/mt-demo/79800/79832/mt-content/uploads/2019/04/mt-1802-slider-img02.jpg",
            title: "Donate Blood",
            dis: "Donate Blood & Save a Life, All types of blood are needed to help patients",
        },
        {
            id: 2,
            img: "https://templatekit.jegtheme.com/redirect/wp-content/uploads/sites/141/2021/08/patient-donating-blood-at-hospital.jpg",
            title: "Save a Life",
            dis: "Your blood donation mater. Give Today!, One pint of blood can save the life",
        },
        {
            id: 3,
            img: "https://croptheme.com/blad-ai/assets/images/hero/hero-four.jpg",
            title: "Become a Blood Donator",
            dis: "Donate Blood And Inspires Others.. Together We Can Make World More Health & Better ",
        },
    ]
    return (
        <div id='home'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >

                {
                    banner.map(item => (<SwiperSlide key={item.id}>
                        <div className='relative'>
                            <img src={item.img} alt="" className='w-full h-screen' />
                            <div className="banner"> </div>
                            <div className=" absolute top-2/4 left-40 h-24  flex justify-center items-center">
                                <Slide direction="up" duration={2000}>
                                    <div className="">
                                        <h1 className="md:text-5xl font-bold font-mono text-white">
                                            {item.title}
                                        </h1>
                                        <br />
                                        <Fade cascade damping={1e-1}>
                                            <h1 className='text-2xl md:w-10/12 w-full leading-loose font-mono font-medium text-white'>{item.dis}</h1>
                                        </Fade>
                                        <div className='mt-4'>
                                            <button className='exploreBtn mr-10 mb-3 font-mono uppercase'>Loren More</button>
                                            <button className='donateBtn font-mono uppercase'><Link to={item.url}>Become a Donars</Link></button>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    );
};

export default Banner;