"use client";
import blueClock from "@/assets/icons/fill/clockBlue.svg";
import blueEmail from "@/assets/icons/fill/emailBlue.svg";
import phoneIcon from "@/assets/icons/fill/phoneBlue.svg";
import logo from "@/assets/logos/site_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

const TopNav = () => {
    const [header, setHeader] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
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
                <div className="bg-primary2 h-[160px] w-full">
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
            <div
                className={`bg-[rgba(9,18,66,0.25)] ${
                    desktopMode
                        ? "h-[78px]"
                        : `${mobileMenuOpen ? "h-auto duration-150" : "h-0"}`
                }`}
            >
                {!desktopMode && (
                    <div className="bg-primary2 h-[40px] w-full px-[25px] flex justify-between items-center z-auto">
                        <Image src={logo} width={140} height={36} />
                        <div className="bg-primary2/5">
                            {mobileMenuOpen ? (
                                <AiOutlineClose
                                    style={{ background: "FFFFFF" }}
                                    className="text-white transition-all duration-100"
                                    onClick={toggleMobileMenu}
                                />
                            ) : (
                                <AiOutlineMenu
                                    className="text-white transition-all duration-100"
                                    onClick={toggleMobileMenu}
                                />
                            )}
                        </div>
                    </div>
                )}
                <div
                    className={`container ${
                        desktopMode ? "" : mobileMenuOpen ? "block" : "hidden"
                    } transition-all duration-200 h-full`}
                >
                    <div
                        className={`left_side flex ${
                            desktopMode ? "flex-row" : "flex-col"
                        } items-center h-full gap-x-[30px]`}
                    >
                        <div
                            className={`flex ${
                                desktopMode ? "flex-row" : "flex-col w-full"
                            } justify-center items-center h-full gap-x-[30px]`}
                        >
                            <Link
                                href="/"
                                className={`text-white  h-full flex items-center text-[16px] leading-[135.023%] hover:border-b-[3px] transition-all duration-100 ${
                                    desktopMode ? "p-0" : "py-[20px]"
                                }`}
                            >
                                Home{" "}
                            </Link>
                            <div
                                className={`${
                                    desktopMode
                                        ? "w-[1px] h-[19px] bg-white"
                                        : "w-full h-[1px] bg-white"
                                } my-auto`}
                            ></div>
                        </div>
                        <div
                            className={`flex ${
                                desktopMode ? "flex-row" : "flex-col w-full"
                            } justify-center items-center h-full gap-x-[30px]`}
                        >
                            <Link
                                href="/"
                                className={`text-white  h-full flex items-center text-[16px] leading-[135.023%] hover:border-b-[3px] transition-all duration-100 ${
                                    desktopMode ? "p-0" : "py-[20px]"
                                }`}
                            >
                                About{" "}
                            </Link>
                            <div
                                className={`${
                                    desktopMode
                                        ? "w-[1px] h-[19px] bg-white"
                                        : "w-full h-[1px] bg-white"
                                } my-auto`}
                            ></div>
                        </div>
                        <div
                            className={`flex ${
                                desktopMode ? "flex-row" : "flex-col w-full"
                            } justify-center items-center h-full gap-x-[30px]`}
                        >
                            <Link
                                href="/"
                                className={`text-white  h-full flex items-center text-[16px] leading-[135.023%] hover:border-b-[3px] transition-all duration-100 ${
                                    desktopMode ? "p-0" : "py-[20px]"
                                }`}
                            >
                                Pages{" "}
                            </Link>
                            <div
                                className={`${
                                    desktopMode
                                        ? "w-[1px] h-[19px] bg-white"
                                        : "w-full h-[1px] bg-white"
                                } my-auto`}
                            ></div>
                        </div>
                        <div
                            className={`flex ${
                                desktopMode ? "flex-row" : "flex-col w-full"
                            } justify-center items-center h-full gap-x-[30px]`}
                        >
                            <Link
                                href="/"
                                className={`text-white  h-full flex items-center text-[16px] leading-[135.023%] hover:border-b-[3px] transition-all duration-100 ${
                                    desktopMode ? "p-0" : "py-[20px]"
                                }`}
                            >
                                Project{" "}
                            </Link>
                            <div
                                className={`${
                                    desktopMode
                                        ? "w-[1px] h-[19px] bg-white"
                                        : "w-full h-[1px] bg-white"
                                } my-auto`}
                            ></div>
                        </div>
                        <div
                            className={`flex ${
                                desktopMode ? "flex-row" : "flex-col w-full"
                            } justify-center items-center h-full gap-x-[30px]`}
                        >
                            <Link
                                href="/"
                                className={`text-white  h-full flex items-center text-[16px] leading-[135.023%] hover:border-b-[3px] transition-all duration-100 ${
                                    desktopMode ? "p-0" : "py-[20px]"
                                }`}
                            >
                                Contact{" "}
                            </Link>
                            <div
                                className={`${
                                    desktopMode
                                        ? "w-[1px] h-[19px] bg-white"
                                        : "w-full h-[1px] bg-white"
                                } my-auto`}
                            ></div>
                        </div>
                    </div>
                    <div className="right_side"></div>
                </div>
            </div>
        </>
    );
};

export default TopNav;
