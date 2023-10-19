import { BlueButton } from "@/components/shared/buttons/Buttons";
import Image from "next/image";

const TransportingHighlight = () => {
    const data = [
        {
            id: 1,
            img: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697718439/Projects/transflow/Photo_8_nfad81.png",
            title: "Liquid Transportation",
            desc: "Premium Tankers",
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697719091/Projects/transflow/Photo_9_cgsyqh.png",
            title: "Packaging Solutions",
            desc: "Warehouse Management",
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697719310/Projects/transflow/Photo_10_src76f.png",
            title: "Contract Logistics",
            desc: "Road Transportation",
        },
        {
            id: 4,
            img: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697719376/Projects/transflow/Photo_11_trmpni.png",
            title: "Warehouse & Distribution",
            desc: "Large Warehouse",
        },
    ];
    return (
        <div className="">
            <h3 className="text-center mb-[35px]">
                Transporting Across The World
            </h3>
            <section className="linear  lg:h-[380px] relative">
                <section className=" mt-[250px] w-full flex flex-wrap justify-center items-center gap-[18px]">
                    {data?.map(({ id, title, img, desc }) => {
                        return (
                            <section
                                className="relative top-[-180px] w-[290px] h-[407px] mx-auto translate-y-[-10px] hover:translate-y-0 transition-all duration-200"
                                key={id}
                            >
                                <Image
                                    src={img}
                                    width={320}
                                    height={407}
                                    layout="responsive"
                                />
                                <div className="absolute top-0 left-0 blackOverlay h-[407px] w-[290px]"></div>
                                <div className="absolute bottom-[25px] left-[25px]">
                                    <h6 className="text-white mb-[4px]">
                                        {title}
                                    </h6>
                                    <p className="text-primary1">{desc}</p>
                                </div>
                            </section>
                        );
                    })}
                </section>
                <div className="absolute bottom-[35px] left-[45%]">
                    <BlueButton title="More Work" />
                </div>
            </section>
        </div>
    );
};

export default TransportingHighlight;
