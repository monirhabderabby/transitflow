import Banner from "@/components/main/Banner/Banner";
import TransportingHighlight from "@/components/main/TransportingHighlight/TransportingHighlight";
import WhatWeDo from "@/components/main/WhatWeDo/WhatWeDo";
import WhyChoose from "@/components/main/WhyChoose/WhyChoose";
import WhyUs from "@/components/main/WhyUs/WhyUs";
import ExpertTeam from "@/components/shared/ExpertTeam/ExpertTeam";

export default function Home() {
    return (
        <main className="w-full">
            <Banner />
            <WhatWeDo />
            <WhyUs />
            <TransportingHighlight />
            <WhyChoose />
            <ExpertTeam />
        </main>
    );
}
