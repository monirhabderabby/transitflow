import { BlueButton } from "@/components/shared/buttons/Buttons";
import ImageClap from "@/components/shared/compo/ImageClap";
import Tip from "@/components/shared/tip/Tip";

const AboutUs = () => {
    return (
        <div className="container flex items-center mt-[103px]">
            <div className="flex-1 hidden md:block">
                <ImageClap
                    img1="https://res.cloudinary.com/dzlrpspps/image/upload/v1697989915/Projects/transflow/Photo_9_eyhbrm.png"
                    img2="https://res.cloudinary.com/dzlrpspps/image/upload/v1697989958/Projects/transflow/Photo_10_s0bf7x.png"
                    direction="bottomRight"
                />
            </div>
            <div className="flex-1 pl-[100px]">
                <Tip name="About Us" />
                <h3 className="mt-[15px]">Our Company Overview</h3>
                <p className="mt-[12px]">
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition.
                </p>
                <p>
                    Sed ut perspiciatis, unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa, quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt, explicabo. Nemo
                    enim ipsam voluptatem quia voluptassit.
                </p>
                <div className="mt-[35px]">
                    <BlueButton title="Learn More" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
