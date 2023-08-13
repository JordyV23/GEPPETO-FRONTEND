import React from "react";
import { integrantes } from "../helpers";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
//import "../../TeamSwiper.css"
export const TeamCards = () => {
    return (
        <>
            <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 50,
                    depth: 90,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation,A11y ]}
                className="swiper_container"
            >
                    {integrantes.map(({ nombre, imagen }, i) => (
                        <SwiperSlide key={i}>
                            {/*<div*/}
                            {/*    className="rounded-t-lg h-90 w-ful  bg-light-accent rounded-lg shadow  dark:bg-dark-accent dark:border-dark-accent p-3 "*/}
                            {/*    key={i}*/}
                            {/*>*/}
                                    <img
                                        className="rounded-t-lg mx-auto my-auto "
                                        src={imagen}
                                        alt={nombre}
                                    />
                                <div className="sm:p-5 text-[1.1rem]">
                                    <p className="font-normal dark:text-white text-black text-center ">
                                        {nombre}
                                    </p>
                                </div>
                            {/*</div>*/}
                        </SwiperSlide>
                    ))}
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <i className="fa-solid fa-circle-arrow-left fa-xl"></i>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <i className="fa-solid fa-circle-arrow-right fa-xl"></i>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
            </div>
        </>
    );
};
