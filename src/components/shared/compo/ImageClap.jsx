import Image from "next/image";

const ImageClap = ({ img1, img2, direction }) => {
    return (
        <div className="w-full mx-auto relative ">
            <Image src={img1} width={600} height={400} alt="profile" />
            <div
                className={`max-w-[300px] max-h-[248px] bg-white  absolute  md:bottom-[-35%] lg:bottom-[-10%] p-[20px] ${
                    direction === "bottomRight"
                        ? "right-[-15%] lg:right-[-12%]"
                        : "left-[-50px] lg:left-[-10%]"
                }`}
            >
                <Image
                    src={img2}
                    width={220}
                    height={198}
                    layout="responsive"
                    alt="profile"
                />
            </div>
        </div>
    );
};

export default ImageClap;
