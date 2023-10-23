const OurPartners = () => {
    const data = [
        {
            id: 1,
        },
    ];
    return (
        <div className="container flex">
            <div
                className="partner "
                style={{
                    "--img":
                        "url(https://res.cloudinary.com/dzlrpspps/image/upload/v1697963271/Projects/transflow/Photo_6_eotova.png)",
                }}
            >
                STUDIO <br /> GREEN
            </div>
            <div
                className="partner "
                style={{
                    "--img":
                        "url(https://res.cloudinary.com/dzlrpspps/image/upload/v1697963271/Projects/transflow/Photo_6_eotova.png)",
                }}
            >
                NORTO
            </div>
            <div
                className="partner "
                style={{
                    "--img":
                        "url(https://res.cloudinary.com/dzlrpspps/image/upload/v1697963271/Projects/transflow/Photo_6_eotova.png)",
                }}
            >
                POINTS <br /> ONE
            </div>
            <div
                className="partner "
                style={{
                    "--img":
                        "url(https://res.cloudinary.com/dzlrpspps/image/upload/v1697963271/Projects/transflow/Photo_6_eotova.png)",
                }}
            >
                OUTOFTHE <br /> STANDBOX
            </div>
        </div>
    );
};

export default OurPartners;
