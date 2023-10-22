import Price from "@/components/shared/Price/Price";
import Header from "@/components/shared/header/Header";

const Pricing = () => {
    return (
        <div>
            <Header
                banner="pricingHeader"
                tipName="Pricing"
                title="Our Best Price"
            />
            <Price />
        </div>
    );
};

export default Pricing;
