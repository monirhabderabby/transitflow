"use client";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const FaqItem = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="lg:max-w-[500px] overflow-hidden ">
            <div
                className="flex justify-between items-center  cursor-pointer overflow-hidden"
                onClick={() => setOpen(!open)}
            >
                <h6>How can I pay for your logistics services?</h6>
                <IoIosArrowForward
                    className={`${open && "rotate-90 text-primary1"}`}
                />
            </div>
            <p
                className={`pt-[18px]  duration-200 transition-all overflow-hidden  ${
                    open
                        ? "translate-y-0 block"
                        : "translate-y-[-100%] transition-all duration-300 hidden"
                }`}
            >
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive.
            </p>
        </div>
    );
};

export default FaqItem;
