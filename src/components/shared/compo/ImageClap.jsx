import Image from "next/image";

const ImageClap = ({ img1, img2 }) => {
    return (
        <div className="w-full mx-auto relative ">
            <Image src={img1} width={600} height={400} alt="profile" />
            <div className="max-w-[300px] max-h-[248px] bg-white  absolute left-[-50px] lg:left-[-100px] bottom-[-70px] p-[20px]">
                <Image src={img2} width={280} height={228} alt="profile" />
            </div>
        </div>
    );
};

export default ImageClap;
