import ImageClap from "@/components/shared/compo/ImageClap";
import Tip from "@/components/shared/tip/Tip";
import { transIcons } from "@/util/icons";
import Image from "next/image";

const OurGoodness = () => {
    const { fillBox, fillSheild, fillEnvironment } = transIcons();
    const data = [
        {
            id: 1,
            icon: fillBox,
            title: "Warehousing Services",
            text: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking ",
        },
        {
            id: 2,
            icon: fillSheild,
            title: "Safety & Quality",
            text: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking ",
        },
        {
            id: 3,
            icon: fillEnvironment,
            title: "Care for Environment",
            text: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking ",
        },
    ];
    return (
        <div className="container">
            <div className="flex flex-col items-center gap-y-[18px]">
                <Tip name="Our Goodness" />
                <h3>How We Works</h3>
            </div>
            <section className="w-full flex flex-col md:flex-row items-center gap-x-[100px] mt-[35px]">
                <div>
                    <ImageClap
                        img1="https://res.cloudinary.com/dzlrpspps/image/upload/v1698046809/Projects/transflow/Photo_12_mplgun.png"
                        img2="https://res.cloudinary.com/dzlrpspps/image/upload/v1698046844/Projects/transflow/Photo_13_h4ylji.png"
                        direction="bottomRight"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-y-[55px]">
                    {data?.map(({ id, icon, title, text }) => {
                        return (
                            <div
                                className="flex items-start gap-[20px]"
                                key={id}
                            >
                                <Image
                                    src={icon}
                                    width={0}
                                    height={0}
                                    alt="icon"
                                />
                                <div>
                                    <h5>{title}</h5>
                                    <p className="mt-[12px]">{text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default OurGoodness;
