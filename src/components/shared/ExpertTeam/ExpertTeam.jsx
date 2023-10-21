// components
import TeamCard from "@/components/shared/cards/TeamCard";
import Tip from "@/components/shared/tip/Tip";

// icons

const ExpertTeam = () => {
    const teamsInfo = [
        {
            id: 1,
            name: "Jessca Arow",
            designation: "Designer",
            profilePhoto:
                "https://res.cloudinary.com/dzlrpspps/image/upload/v1697885947/Projects/transflow/photo_1_hye1qp.png",
            facebook: "https://www.facebook.com/monirhabderabby/",
            linkedin: "https://www.linkedin.com/in/monirhabderabby/",
            twitter: "https://twitter.com/monirhabderabby",
            instagram: "https://www.instagram.com/monirhabderabby/",
        },
        {
            id: 2,
            name: "Kathleen Smith",
            designation: "Designer",
            profilePhoto:
                "https://res.cloudinary.com/dzlrpspps/image/upload/v1697887351/Projects/transflow/Photo_2_b8hbbp.png",
            facebook: "https://www.facebook.com/monirhabderabby/",
            linkedin: "https://www.linkedin.com/in/monirhabderabby/",
            twitter: "https://twitter.com/monirhabderabby",
            instagram: "https://www.instagram.com/monirhabderabby/",
        },
        {
            id: 3,
            name: "Rebecca Tylor",
            designation: "Designer",
            profilePhoto:
                "https://res.cloudinary.com/dzlrpspps/image/upload/v1697887590/Projects/transflow/Photo_3_vmqaju.png",
            facebook: "https://www.facebook.com/monirhabderabby/",
            linkedin: "https://www.linkedin.com/in/monirhabderabby/",
            twitter: "https://twitter.com/monirhabderabby",
            instagram: "https://www.instagram.com/monirhabderabby/",
        },
    ];
    return (
        <div className="mt-[93px]">
            <div className="flex flex-col items-center gap-y-[20px]">
                <Tip name="The Transporters" />
                <h3>Meet Expert Team</h3>
            </div>
            <div className="mt-[40px] flex gap-[54px] items-center flex-wrap justify-center mx-auto">
                {teamsInfo?.map(
                    ({
                        name,
                        designation,
                        profilePhoto,
                        id,
                        facebook,
                        linkedin,
                        twitter,
                        instagram,
                    }) => {
                        return (
                            <TeamCard
                                {...{
                                    name,
                                    designation,
                                    profilePhoto,
                                    facebook,
                                    linkedin,
                                    twitter,
                                    instagram,
                                }}
                                key={id}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default ExpertTeam;
