"use client";
import Tip from "@/components/shared/tip/Tip";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestmonialCard from "../cards/TestmonialCard";

// Import Swiper styles
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

const Testmonials = () => {
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);

    const data = [
        {
            id: 1,
            name: "Kathleen Smith",
            company: "Fuel Company",
            text: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
            rating: 5,
            img: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697764389/Projects/transflow/photo_12_kuywmi.png",
        },
        {
            id: 2,
            name: "John Martin",
            company: "Restoration Company",
            text: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
            rating: 5,
            img: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697764457/Projects/transflow/Photo_13_tkigha.png",
        },
    ];
    return (
        <div className="mt-[101px] container">
            <Tip name="Testmonial" />
            <div className="mt-[16px] w-full flex justify-between items-center">
                <h3>What Our Customer Say</h3>
                <div className="flex items-center gap-[10px]">
                    <div
                        className="w-[40px] h-[40px] linear rounded-full flex justify-center items-center"
                        ref={navigationPrevRef}
                    >
                        <BsArrowLeftShort className="text-[22px]" />
                    </div>
                    <div
                        className="w-[40px] h-[40px] bg-primary2 rounded-full flex justify-center items-center"
                        ref={navigationNextRef}
                    >
                        <BsArrowRightShort className="text-[22px] text-white" />
                    </div>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                breakpoints={{
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    1500: {
                        width: 1500,
                        slidesPerView: 2,
                    },
                }}
                onSwiper={(swiper) => {
                    // Delay execution for the refs to be defined
                    setTimeout(() => {
                        // Override prevEl & nextEl now that refs are defined
                        swiper.params.navigation.prevEl =
                            navigationPrevRef.current;
                        swiper.params.navigation.nextEl =
                            navigationNextRef.current;

                        // Re-init navigation
                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();
                    });
                }}
                navigation={{
                    nextEl: navigationNextRef.current,
                    prevEl: navigationPrevRef.current,
                }}
                spaceBetween={30}
                className="pt-[200px]"
            >
                <SwiperSlide className="w-full">
                    <TestmonialCard
                        {...{
                            id: 1,
                            img: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697764389/Projects/transflow/photo_12_kuywmi.png",
                            name: "Monir",
                            company: "Fuel Company",
                            text: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <TestmonialCard
                        {...{
                            id: 1,
                            img: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697764389/Projects/transflow/photo_12_kuywmi.png",
                            name: "Monir",
                            company: "Fuel Company",
                            text: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <TestmonialCard
                        {...{
                            id: 1,
                            img: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697764389/Projects/transflow/photo_12_kuywmi.png",
                            name: "Monir",
                            company: "Fuel Company",
                            text: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <TestmonialCard
                        {...{
                            id: 1,
                            img: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697764389/Projects/transflow/photo_12_kuywmi.png",
                            name: "Monir",
                            company: "Fuel Company",
                            text: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
                        }}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testmonials;
