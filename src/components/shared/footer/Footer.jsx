import logo from "@/assets/logos/site_logo.svg";
import { transIcons } from "@/util/icons";
import Image from "next/image";
import Link from "next/link";
import { YellowButton } from "../buttons/Buttons";

const Footer = () => {
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
    ];

    const pagesRoutes = [
        {
            id: 1,
            name: "About Us",
            link: "/",
        },
        {
            id: 2,
            name: "Our Team",
            link: "/",
        },
        {
            id: 3,
            name: "our Project",
            link: "/",
        },
        {
            id: 4,
            name: "Pricing",
            link: "/",
        },
        {
            id: 5,
            name: "Contact",
            link: "/  ",
        },
    ];

    const utilityRoutes = [
        {
            id: 1,
            name: "Style Guide",
            link: "/",
        },
        {
            id: 2,
            name: "Changelog",
            link: "/",
        },
        {
            id: 3,
            name: "License",
            link: "/",
        },
        {
            id: 4,
            name: "Protected",
            link: "/",
        },
        {
            id: 5,
            name: "Not Found",
            link: "/  ",
        },
    ];
    return (
        <div className="mt-[150px]">
            <Image
                src="https://res.cloudinary.com/dzlrpspps/image/upload/v1697963511/Projects/transflow/Photo_7_y5l9hz.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
            />
            <section className="bg-primary2/80 w-full h-[88px] hidden md:block">
                <div className="container grid grid-cols-4 items-center h-full">
                    <div className="bg-primary2 h-[89px] flex items-center justify-start md:px-[20px] lg:pl-[45px]  ">
                        <Image
                            src={logo}
                            width={0}
                            height={0}
                            layout="responsive"
                        />
                    </div>
                    <h5 className="text-white mx-auto">Pages</h5>
                    <h5 className="text-white mx-auto">Utility</h5>
                    <h5 className="text-white mx-auto">Subscribe</h5>
                </div>
            </section>
            <section className="bg-primary2 outline-none">
                <div className="container py-[42px] px-[45px] grid grid-cols-2 md:grid-cols-4 gap-y-[30px]">
                    {/* first */}
                    <div className="flex-1 mx-auto pl-[10px] lg:pl-[45px] col-span-2 md:col-span-1">
                        <p className="text-white">
                            Leverage agile frameworks to provide a robust
                            synopsis for strategy collaborative thinking to
                            further the overall value proposition.
                        </p>
                        <div className="flex flex-col gap-y-[30px] mt-[33px]">
                            {contactInfo?.map(({ icon, title, name, id }) => {
                                return (
                                    <div className="flex gap-x-[14px]" key={id}>
                                        <Image
                                            src={icon}
                                            width={40}
                                            height={40}
                                            alt="icon"
                                        />
                                        <div>
                                            <p className="text-white">
                                                {title}
                                            </p>
                                            <p className="text-white">{name}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* second */}
                    <div className="flex-1 mx-auto">
                        <h4 className="bg-primary2/80 text-white mb-[20px] md:hidden">
                            Pages
                        </h4>
                        <div className="flex flex-col gap-y-[20px]">
                            {pagesRoutes?.map(({ link, name, id }) => {
                                return (
                                    <Link
                                        className="text-white translate-x-0 hover:translate-x-2 duration-300"
                                        href={link}
                                        key={id}
                                    >
                                        {name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    {/* third */}
                    <div className="flex-1 mx-auto">
                        <h4 className="bg-primary2/80 text-white mb-[20px] md:hidden">
                            Utility
                        </h4>
                        <div className="flex flex-col gap-y-[20px]">
                            {utilityRoutes?.map(({ link, name, id }) => {
                                return (
                                    <Link
                                        className="text-white translate-x-0 hover:translate-x-2 duration-300"
                                        href={link}
                                        key={id}
                                    >
                                        {name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    {/* fourth */}
                    <div className="flex-1 mx-auto col-span-2 md:col-span-1">
                        <div>
                            <input
                                type="email"
                                name="email"
                                className="col-span-2 lg:col-span-1 w-full h-[60px] px-[40px] text-white border-[1px] bg-transparent border-[#4E5683] outline-none  focus:border-[rgba(255,255,255,0.5)]"
                                placeholder="Email"
                            />
                            <div className="mt-[20px]">
                                <YellowButton title="Send Now" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
