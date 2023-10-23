import { transIcons } from "@/util/icons";
import Image from "next/image";
import FaqItem from "../compo/FaqItem";
import Tip from "../tip/Tip";

const Faq = () => {
    const { fillPhoneBlue } = transIcons();

    const arr = [1, 2, 3, 4, 5];
    return (
        <div className="container">
            <section className="flex justify-between w-full   ">
                <div className="flex-1">
                    <Tip name="FAQ" bg="bg-white" />
                    <h3 className="font-semibold">
                        Frequently Asked <br /> Questions
                    </h3>
                    <section className="mt-[50px] flex flex-col gap-y-[32px]">
                        {arr?.map((item) => (
                            <FaqItem key={item} />
                        ))}
                    </section>
                </div>
                <div className="flex-1 flex justify-end relative">
                    <div className="relative ">
                        <Image
                            src="https://res.cloudinary.com/dzlrpspps/image/upload/v1698031258/Projects/transflow/Photo_11_tkrugc.png"
                            width={500}
                            height={0}
                        />
                        <div
                            className="static left-[10%] bg-primary2 p-[52px] top-[50%]"
                            style={{ transform: "translate(-50%, -120%)" }}
                        >
                            <Tip name="Let's Talk" color="text-white" />
                            <h6 className="max-w-[324px] mt-[23px] text-white">
                                You Need Any Help? Get Free Consultation
                            </h6>
                            <div className="flex items-center gap-x-[15px] mt-[23px]">
                                <Image
                                    src={fillPhoneBlue}
                                    width={0}
                                    height={0}
                                />
                                <div>
                                    <p className="text-white">
                                        Have Any Questions
                                    </p>
                                    <p className="text-white">
                                        (00) 112 365 489
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;
