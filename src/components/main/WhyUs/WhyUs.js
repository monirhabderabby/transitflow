import Tip from "@/components/shared/tip/Tip";

import dollerIcon from "@/assets/icons/fill/doller.svg";
import containerIcon from "@/assets/icons/fill/package.svg";
import Highlight from "@/components/shared/highlight/highlight";
import Image from "next/image";

const WhyUs = () => {
    const data = [
        {
            id: 1,
            icon: containerIcon,
            title: "Delivery on Time",
        },
        {
            id: 2,
            icon: dollerIcon,
            title: "Optimized Travel Cost",
        },
    ];

    const highlightData = [
        {
            id: 1,
            number: 1294,
            text: "Delivered Packages",
        },
        {
            id: 2,
            number: 3594,
            text: "Satisfied Clients",
        },
    ];
    return (
        <div className="relative">
            <div className="containerImage h-[504px]"></div>
            <section className="max-w-[1200px] bg-white p-[86px] relative top-[-150px] mx-auto ">
                <section className="flex justify-between">
                    <div className="w-[472px]">
                        <Tip name="Why Us" />
                        <h3 className="my-[12px]">
                            We provide full range global logistics solution
                        </h3>
                        <p className="mb-[25px ]">
                            Leverage agile frameworks to provide a robust
                            synopsis for strategy foster collaborative thinking
                            to further the overall value proposition.
                            Organically grow the holistic world view of
                            disruptive innovation via workplace diversity and
                            empowerment.
                        </p>
                        <div className="mt-[25px] flex flex-col gap-y-[22px]">
                            {data?.map(({ icon, id, title }) => {
                                return (
                                    <div
                                        className="flex items-center gap-x-[15px]"
                                        key={id}
                                    >
                                        <Image
                                            src={icon}
                                            height={58}
                                            width={58}
                                        />
                                        <h5 className="flex-wrap max-w-[325px]">
                                            {title}
                                        </h5>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-[472px] relative hidden lg:block">
                        <Image
                            src="https://res.cloudinary.com/dzlrpspps/image/upload/v1697709778/Projects/transflow/Photo_6_gopvbq.png"
                            width={472}
                            height={400}
                            layout="responsive"
                        />
                        <div className="w-[300px] h-[248px] bg-white  absolute left-[-100px] bottom-[-70px] p-[20px]">
                            <Image
                                src="https://res.cloudinary.com/dzlrpspps/image/upload/v1697711563/Projects/transflow/Photo_7_ymnvqy.png"
                                width={280}
                                height={228}
                                layout="responsive"
                            />
                        </div>
                    </div>
                </section>
                <div className="mt-[112px]">
                    <Highlight highlightData={highlightData} />
                </div>
            </section>
        </div>
    );
};

export default WhyUs;
