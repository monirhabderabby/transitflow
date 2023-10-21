// icons
import flight from "@/assets/icons/outline/airplane.svg";
import shipIcon from "@/assets/icons/outline/ship.svg";
import truck from "@/assets/icons/outline/truck.svg";
import warehouse from "@/assets/icons/outline/warehouse.svg";

// coponents
import Tip from "@/components/shared/tip/Tip";
import Image from "next/image";

const WhatWeDo = () => {
    const data = [
        {
            id: 1,
            icon: shipIcon,
            title: "Sea Transport Services",
            desc: "Following the quality of our service thus having gained trust of our many clients.",
        },
        {
            id: 2,
            icon: warehouse,
            title: "Warehousing Services",
            desc: "Following the quality of our service thus having gained trust of our many clients.",
        },
        {
            id: 3,
            icon: flight,
            title: "Air Fright Services",
            desc: "Following the quality of our service thus having gained trust of our many clients.",
        },
        {
            id: 4,
            icon: truck,
            title: "Local Shipping Services",
            desc: "Following the quality of our service thus having gained trust of our many clients.",
        },
    ];
    return (
        <div className="py-[100px] bg-white">
            <section className="container flex flex-col md:flex-row gap-[33px]">
                <div>
                    <Tip name="What We Do" />
                    <h3 className="max-w-[294px]">
                        Safe & Reliable Cargo Solutions
                    </h3>
                </div>
                <div className="flex-1 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[70px]">
                        {data?.map(({ desc, icon, id, title }) => {
                            return (
                                <div
                                    className="flex md:gap-[12px] lg:gap-[25px] mx-auto"
                                    key={id}
                                >
                                    <div className="mr-[10px] lg:mr-[16px]">
                                        <Image
                                            src={icon}
                                            width={64}
                                            height={105}
                                            alt="truck"
                                        />
                                    </div>
                                    <div className="h-[115px] w-[1px] bg-[#D8D8D8]"></div>
                                    <div className="max-h-[115px] max-w-[270px]">
                                        <h5>{title}</h5>
                                        <p className="text-[14px] lg:text-[16px]">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhatWeDo;
