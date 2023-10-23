import Tip from "@/components/shared/tip/Tip";
import { transIcons } from "@/util/icons";
import Image from "next/image";

const WhatWeDoFull = () => {
    const {
        outlineCustomerCare,
        outlineProject,
        outlineShip,
        outlineTruck,
        outlineWarehouse,
        outlineairplane,
    } = transIcons();
    const features = [
        {
            id: 1,
            icon: outlineShip,
            title: "Sea Transport Services",
            desc: "Following the quality of our service thus having gained trust of our many clients.",
        },
        {
            id: 2,
            icon: outlineWarehouse,
            title: "Warehousing Services",
            desc: "Following the quality of our service thus having gained trust of our many clients.",
        },
        {
            id: 3,
            icon: outlineairplane,
            title: "Air Fright Services",
            desc: "Following the quality of our service thus having gained trust of our many clients.",
        },
        {
            id: 4,
            icon: outlineProject,
            title: "Project & Exhibition",
            desc: "Following the quality of our service thus having gained trust of our many clients.",
        },
        {
            id: 5,
            icon: outlineTruck,
            title: "Local Shipping Services",
            desc: "Following the quality of our service thus having gained trust of our many clients.",
        },
        {
            id: 6,
            icon: outlineCustomerCare,
            title: "Customer Clearance",
            desc: "Following the quality of our service thus having gained trust of our many clients.",
        },
    ];
    return (
        <div className="container mt-[108px]">
            <div className="flex flex-col items-center gap-y-[18px]">
                <Tip name="What We Do" />
                <h3 className="text-center">Our Logistics Services</h3>
            </div>
            <div className="mt-[55px] grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-y-[53px] md:gap-x-[192px]">
                {features?.map(({ icon, title, id, desc }) => {
                    return (
                        <div className="flex flex-col" key={id}>
                            <Image src={icon} width={0} height={0} />
                            <h5 className="mt-[22px]">{title}</h5>
                            <p>{desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhatWeDoFull;
