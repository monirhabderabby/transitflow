import OurGoodness from "@/components/main/OurGodness/OurGoodness";
import WhatWeDoFull from "@/components/main/WhatWeDoFull/WhatWeDoFull";
import Header from "@/components/shared/header/Header";
import Highlight from "@/components/shared/highlight/Highlight";

const Services = () => {
    const highlightData = [
        {
            id: 1,
            number: 24,
            text: "Our Location",
        },
        {
            id: 2,
            number: 1294,
            text: "Delivered Packages",
        },
        {
            id: 3,
            number: 3594,
            text: "Satisfied Clients",
        },
        {
            id: 4,
            number: "247+",
            text: "Owned Vehicles",
        },
    ];
    return (
        <div>
            <Header
                tipName="Services"
                title="Our Logistics Service"
                banner="servicesHeader"
            />
            <div>
                <WhatWeDoFull />
            </div>
            <div>
                <OurGoodness />
            </div>
            <div className="mt-[200px] ">
                <Highlight highlightData={highlightData} />
            </div>
        </div>
    );
};

export default Services;
