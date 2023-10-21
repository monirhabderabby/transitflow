import Banner from "@/components/main/Banner/Banner";
import TransportingHighlight from "@/components/main/TransportingHighlight/TransportingHighlight";
import WhatWeDo from "@/components/main/WhatWeDo/WhatWeDo";
import WhyUs from "@/components/main/WhyUs/WhyUs";
import Testmonials from "@/components/shared/Testmonials/Testmonials";

export default function Home() {
    return (
        <main className="w-full">
            <Banner />
            <WhatWeDo />
            <WhyUs />
            <TransportingHighlight />
            <Testmonials />
        </main>
    );
}
