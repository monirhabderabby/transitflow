import { YellowButton } from "@/components/shared/buttons/Buttons";
import Tip from "@/components/shared/tip/Tip";
import { transIcons } from "@/util/icons";
import Image from "next/image";

const Contact = () => {
    const { fillEmailBlue, fillPhoneBlue, fillClockBlue } = transIcons();
    const contactInfo = [
        {
            id: 1,
            icon: fillEmailBlue,
            title: "Email",
            name: "contact@logistics.com",
        },
        {
            id: 2,
            icon: fillPhoneBlue,
            title: "Call Us",
            name: "(00) 12 365 489",
        },
        {
            id: 3,
            icon: fillClockBlue,
            title: "Mon - Sat 9:00 - 18:00",
            name: "Sunday Closed",
        },
    ];
    return (
        <div className="bg-primary2 py-[143px] mt-[121px] ">
            <section className="container flex flex-col md:flex-row gap-x-[80px]">
                {/* contact info */}
                <div className="max-w-[353px]">
                    <Tip name="Contact" color="text-white" />
                    <h3 className="text-white mt-[13px]">
                        Get in touch with us
                    </h3>
                    <p className="text-white mt-[3px]">
                        Leverage agile frameworks to provide a robust synopsis
                        for strategy foster collaborative thinking to further
                        the overall value.
                    </p>
                    <div className="flex flex-col gap-y-[30px] mt-[32px]">
                        {contactInfo?.map(({ icon, title, name, id }) => {
                            return (
                                <div className="flex gap-x-[14px]" key={id}>
                                    <Image
                                        src={icon}
                                        width={60}
                                        height={60}
                                        alt="icon"
                                    />
                                    <div>
                                        <p className="text-white">{title}</p>
                                        <p className="text-white">{name}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* form */}
                <div className="flex-1 ">
                    <div className="grid grid-cols-2 gap-x-[28px] gap-y-[31px]">
                        <input
                            type="text"
                            name="name"
                            className="col-span-2 lg:col-span-1 w-full h-[60px] px-[40px] text-white border-[1px] bg-transparent border-[#4E5683] outline-none  focus:border-[rgba(255,255,255,0.5)]"
                            placeholder="Your Name"
                        />
                        <input
                            type="email"
                            name="email"
                            className="col-span-2 lg:col-span-1 w-full h-[60px] px-[40px] text-white border-[1px] bg-transparent border-[#4E5683] outline-none  focus:border-[rgba(255,255,255,0.5)]"
                            placeholder="Email"
                            required
                        />
                        <input
                            type="text"
                            name="number"
                            className="col-span-2 lg:col-span-1 w-full h-[60px] px-[40px] text-white border-[1px] bg-transparent border-[#4E5683] outline-none  focus:border-[rgba(255,255,255,0.5)]"
                            placeholder="Phone Number"
                            required
                        />
                        <input
                            type="text"
                            name="city"
                            className="col-span-2 lg:col-span-1 w-full h-[60px] px-[40px] text-white border-[1px] bg-transparent border-[#4E5683] outline-none  focus:border-[rgba(255,255,255,0.5)]"
                            placeholder="City"
                        />
                        <textarea
                            rows={10}
                            name="message"
                            className="w-full py-[21px] h-auto px-[40px] text-white border-[1px] bg-transparent border-[#4E5683] outline-none  focus:border-[rgba(255,255,255,0.5)] col-span-2"
                            placeholder="Your Message"
                        />
                    </div>
                    <YellowButton title="Submit Message" />
                </div>
            </section>
        </div>
    );
};

export default Contact;
