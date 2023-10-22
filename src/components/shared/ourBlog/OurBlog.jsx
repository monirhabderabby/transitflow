// components
import Tip from "@/components/shared/tip/Tip";
import { transIcons } from "@/util/icons";
import Image from "next/image";
import { BlueButton } from "../buttons/Buttons";

const OurBlog = () => {
    const { calender } = transIcons();

    const arr = [1, 2, 3];
    const blogs = [
        {
            id: 1,
            title: "Inland freight a worthy solution for your business",
            desc: "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
            date: "08",
            month: "September",
            image: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697892873/Projects/transflow/Photo_4_zse11b.png",
        },
        {
            id: 2,
            title: "How technology can help redraw the supply chain map",
            desc: "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
            date: "12",
            month: "September",
            image: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697963245/Projects/transflow/Photo_5_mzjouz.png",
        },
        {
            id: 3,
            title: "How technology can help redraw the supply chain map",
            desc: "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
            date: "25",
            month: "September",
            image: "https://res.cloudinary.com/dzlrpspps/image/upload/v1697963271/Projects/transflow/Photo_6_eotova.png",
        },
    ];
    return (
        <div className="mt-[101px]">
            <div className="container flex flex-col items-center gap-y-[13px]">
                <Tip name="Our Blog" />
                <h3>Our Latest News</h3>
            </div>
            <div className="bg-[#D6D6D6] container h-[1px] w-full mt-[40px]"></div>
            <div className="mt-[40px] container w-full flex flex-col gap-y-[35px]">
                {blogs?.map(({ id, image, title, desc, date, month }) => {
                    return (
                        <div className=" flex gap-x-[20px] mx-auto" key={id}>
                            <div className="w-[456px] h-[308px] relative group">
                                <Image src={image} width={456} height={308} />
                                <a
                                    href=""
                                    className="w-[456px] h-[308px] absolute top-0 left-0 group-hover:bg-[rgba(28,31,53,0.91)] group-hover:scale-75 duration-300 z-40 group-hover:text-white text-transparent delay-75 flex items-center justify-center text-[16px]"
                                >
                                    Read More
                                </a>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src={calender}
                                    width={51}
                                    height={56}
                                    alt="calender icon"
                                />
                                <h2>{date}</h2>
                                <p>{month}</p>
                            </div>
                            <div className="flex flex-col gap-y-[16px] max-w-[335px] border-l-[1px] border-[#D6D6D6] pl-[30px]">
                                <h5>{title}</h5>
                                <p>{desc}</p>
                                <ul className="flex flex-col ml-[30px]">
                                    <li className="list-disc  text-black">
                                        Urgent transport solutions
                                    </li>
                                    <li className="list-disc text-black">
                                        Reliable & experienced staffs
                                    </li>
                                    <li className="list-disc text-black">
                                        Urgent transport solutions
                                    </li>
                                    <li className="list-disc text-black">
                                        Reliable & experienced staffs
                                    </li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="w-full flex justify-center items-center mt-[100px]">
                <BlueButton title="More Blog" />
            </div>
        </div>
    );
};

export default OurBlog;
