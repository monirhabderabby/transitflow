import Image from "next/image";

const TestmonialCard = ({ img, name, company, text }) => {
    return (
        <div className="w-full lg:w-[500px] h-auto flex-1 hover:bg-primary2 group transition-colors duration-150 mx-auto p-[30px]">
            <section>
                <div className="max-w-[456px] flex justify-between">
                    <div className="flex items-center gap-x-[10px]">
                        <div>
                            <Image
                                src={img}
                                width={70}
                                height={70}
                                className="rounded-full"
                                alt="profile"
                            />
                        </div>
                        <div className="">
                            <h6 className="group-hover:text-white">{name}</h6>
                            <p className="group-hover:text-[#FFFFFF]">
                                {company}
                            </p>
                        </div>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        <Image
                            src="https://res.cloudinary.com/dzlrpspps/image/upload/v1697774399/Projects/transflow/__q5syvr.png"
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt="profile"
                        />
                    </div>
                </div>
                <p className="max-w-[456px] mt-[20px] text-left">{text}</p>
                <div className="mt-[30px]">
                    <div class="flex gap-0.5">
                        <svg
                            class="h-8 w-8 shrink-0 fill-amber-400"
                            viewBox="0 0 256 256"
                        >
                            <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                            class="h-8 w-8 shrink-0 fill-amber-400"
                            viewBox="0 0 256 256"
                        >
                            <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                            class="h-8 w-8 shrink-0 fill-amber-400"
                            viewBox="0 0 256 256"
                        >
                            <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                            class="h-8 w-8 shrink-0 fill-gray-300"
                            viewBox="0 0 256 256"
                        >
                            <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                        <svg
                            class="h-8 w-8 shrink-0 fill-gray-300"
                            viewBox="0 0 256 256"
                        >
                            <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestmonialCard;
