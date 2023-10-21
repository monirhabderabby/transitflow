import Image from "next/image";
import {
    AiFillFacebook,
    AiFillLinkedin,
    AiOutlineInstagram,
    AiOutlineTwitter,
} from "react-icons/ai";

const TeamCard = ({
    name,
    designation,
    profilePhoto,
    facebook,
    linkedin,
    twitter,
    instagram,
}) => {
    return (
        <div className="card h-[566px] w-[370px] bg-primary2 relative group overflow-hidden">
            <Image src={profilePhoto} width={370} height={454} />
            <div className="w-full h-[112px]  absolute bottom-0 flex flex-col justify-center pl-[34px] ">
                <div className="linear h-[70px] px-[20px] max-w-fit flex items-center gap-x-[25px] absolute right-0 top-[-60px] translate-x-[100%] group-hover:translate-x-0 duration-700 transition-all ease-in-out ">
                    <a href={linkedin} target="_linkedIn">
                        <AiFillLinkedin className="text-[24px] hover:scale-110 duration-150" />
                    </a>
                    <a href={twitter} target="_twitter">
                        <AiOutlineTwitter className="text-[24px] hover:scale-110 duration-150" />
                    </a>
                    <a href={facebook} target="_facebook">
                        <AiFillFacebook className="text-[24px] hover:scale-110 duration-150" />
                    </a>
                    <a href={instagram} target="_instagram">
                        <AiOutlineInstagram className="text-[24px] hover:scale-110 duration-150" />
                    </a>
                </div>
                {/* name and designation */}
                <h6 className="font-medium text-white">{name}</h6>
                <p className="text-white">{designation}</p>
            </div>
        </div>
    );
};

export default TeamCard;
