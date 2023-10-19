"use client";
import blueClock from "@/assets/icons/fill/clockBlue.svg";
import blueEmail from "@/assets/icons/fill/emailBlue.svg";
import phoneIcon from "@/assets/icons/fill/phoneBlue.svg";
import logo from "@/assets/logos/site_logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const TopNav = () => {
    const [header, setHeader] = useState(false);

    const desktopMode = useMediaQuery({
        query: "(min-width: 1280px)",
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setHeader(true);
            } else {
                setHeader(false);
            }

            // add event listeners
            window.addEventListener("scroll", handleScroll);

            // remove event listeners
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        };
    }, []);

    const infos = [
        {
            id: 1,
            title: "Mon - Sat 9:00 - 18:00",
            desc: "Sunday Closed",
            icon: blueClock,
        },
        {
            id: 2,
            title: "Email",
            desc: "contact@logistic.com",
            icon: blueEmail,
        },
        {
            id: 3,
            title: "Call Us",
            desc: "(00) 112 365 489",
            icon: phoneIcon,
        },
    ];
    return (
        <>
            {desktopMode && (
                <div className="bg-primary2 h-[120px] w-full">
                    <div className="container flex h-full justify-between items-center ">
                        <div>
                            <Image src={logo} width={210} height={36} />
                        </div>
                        <div className="flex gap-x-[40px]">
                            {infos?.map(({ icon, id, title, desc }) => {
                                return (
                                    <div
                                        className="flex items-center gap-x-[17px]"
                                        key={id}
                                    >
                                        <div>
                                            <Image
                                                src={icon}
                                                width={63}
                                                height={63}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white">
                                                {title}
                                            </p>
                                            <p className="text-white">{desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TopNav;
