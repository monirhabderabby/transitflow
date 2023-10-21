// utilities function
import { transIcons } from "@/util/icons";

// components
import Tip from "@/components/shared/tip/Tip";
import Image from "next/image";

// icons

const WhyChoose = () => {
    // all transflow icons
    const {
        fillPackages,
        fillWorld,
        fillShip,
        fillHeadphone,
        fillClockYellow,
        fillTransPricing,
        fillPlanWithGlobal,
    } = transIcons();

    const data = [
        {
            id: 1,
            title: "Safe Package",
            icon: fillPackages,
        },
        {
            id: 2,
            title: "Ship Everyware",
            icon: fillShip,
        },
        {
            id: 3,
            title: "Global Tracking",
            icon: fillWorld,
        },
        {
            id: 4,
            title: "24/7 Support",
            icon: fillHeadphone,
        },
        {
            id: 5,
            title: "In Time Delivery",
            icon: fillClockYellow,
        },
        {
            id: 6,
            title: "Transparant Pricing",
            icon: fillTransPricing,
        },
    ];

    return (
        <div className="flex mt-[100px]">
            {/* first side */}
            <section className="bg-primary2 py-[100px] flex-1 h-full flex items-center">
                <div className="relative right-[-15%]">
                    <Image
                        src="https://res.cloudinary.com/dzlrpspps/image/upload/v1697878176/Projects/transflow/Photo_gq1box.png"
                        width={929}
                        height={610}
                        layout="responsive"
                        alt="airplane"
                    />
                    <div
                        className="py-[30px] px-[33px] linear absolute bottom-0 left-[50%] flex items-center gap-x-[21px]"
                        style={{ transform: "translate(-50%, -0%)" }}
                    >
                        <Image
                            src={fillPlanWithGlobal}
                            width={40}
                            height={40}
                            alt="planIcon"
                        />
                        <h5>Moving your products across borders</h5>
                    </div>
                </div>
            </section>
            {/* right side */}
            <section className="flex-1 w-full relative pl-[10%] flex flex-col justify-center items-start ">
                <Tip name="Why Choose" />
                <h3 className="max-w-[430px] mt-[18px]">
                    We create opportunity to reach potential
                </h3>
                <p className="max-w-[430px] mt-[30px]">
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition.{" "}
                </p>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-y-[20px] gap-x-[72px] mt-[61px]">
                    {data?.map(({ icon, id, title }) => {
                        return (
                            <div className="flex gap-x-[12px]" key={id}>
                                <Image
                                    src={icon}
                                    width={63}
                                    height={63}
                                    alt="icon"
                                />
                                <h6>{title}</h6>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default WhyChoose;
