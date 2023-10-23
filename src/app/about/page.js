import AboutUs from "@/components/main/AboutUs/AboutUs";
import WhatWeDoFull from "@/components/main/WhatWeDoFull/WhatWeDoFull";
import ExpertTeam from "@/components/shared/ExpertTeam/ExpertTeam";
import Faq from "@/components/shared/Faq/Faq";
import Price from "@/components/shared/Price/Price";
import OurPartners from "@/components/shared/compo/OurPartners";
import Header from "@/components/shared/header/Header";

const About = () => {
    return (
        <div>
            <Header
                tipName="About Us"
                title="About Our Logistics"
                banner="aboutHeader"
            />
            <AboutUs />
            <WhatWeDoFull />
            <div className="mt-[160px]">
                <ExpertTeam />
            </div>
            <div className="mt-[160px]">
                <Price />
            </div>
            <div className="mt-[100px]">
                <Faq />
            </div>
            <div>
                <OurPartners />
            </div>
        </div>
    );
};

export default About;
