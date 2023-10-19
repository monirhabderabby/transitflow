import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MainNav = ({ desktopMode, toggleMobileMenu, mobileMenuOpen }) => {
    return (
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
    );
};

export default MainNav;
