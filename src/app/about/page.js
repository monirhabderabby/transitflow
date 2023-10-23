import AboutUs from "@/components/main/AboutUs/AboutUs";
import WhatWeDoFull from "@/components/main/WhatWeDoFull/WhatWeDoFull";
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
        </div>
    );
};

export default About;
