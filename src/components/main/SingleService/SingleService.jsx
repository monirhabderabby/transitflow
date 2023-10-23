import { transIcons } from "@/util/icons";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const SingleService = () => {
    const { outlineShip } = transIcons();
    const benefits = [
        {
            id: 1,
            text: "Clearance and compliance service",
        },
        {
            id: 2,
            text: "Saving Time to Deal with commodo iaculis",
        },
        {
            id: 3,
            text: "Automate your business elis tristique",
        },
        {
            id: 4,
            text: "Saving Time to Deal with commodo iaculis",
        },
    ];
    return (
        <div className="container mt-[107px]">
            <section className="overview w-full">
                <Image
                    src="https://res.cloudinary.com/dzlrpspps/image/upload/v1698048880/Projects/transflow/Photo_14_txz6fu.png"
                    width={1300}
                    height={550}
                    layout="contain"
                />
                <div className="flex items-center mt-[40px] gap-x-[22px]">
                    <Image src={outlineShip} width={0} height={0} />
                    <h4>Sea Transport Services</h4>
                </div>
                <p className="mt-[22px]">
                    Sed ut perspiciatis, unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa, quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt, explicabo. Nemo
                    enim ipsam voluptatem, quia voluptas sit, aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos, qui
                    ratione voluptatem sequi nesciunt, neque porro quisquam est,
                    qui dolorem ipsum, quia dolor sit, amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt, ut labore et dolore magnam aliquam quaerat
                    voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur? <br />
                    Quis autem vel eum iure reprehenderit, qui in ea voluptate
                    velit esse, quam nihil molestiae consequatur, vel illum, qui
                    dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
                    et accusamus et iusto odio dignissimos ducimus, qui
                    blanditiis praesentium voluptatum deleniti atque corrupti,
                    quos dolores et quas molestias excepturi sint, obcaecati
                    cupiditate non provident, similique sunt in culpa, qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita
                    distinctio.
                </p>
            </section>
            {/* benefit of services */}
            <section className="w-full flex items-center gap-x-[72px] mt-[100px]">
                <div className="max-w-[442px]">
                    <h3>Benefit of Service</h3>
                    <p className="mt-[12px]">
                        Sed ut perspiciatis, unde omnis iste natu volupta
                        temaccu santium doloremque laudantium, totam rem quae ab
                        illo inventore veritatis.
                    </p>
                    <div className="flex flex-col gap-y-[25px] mt-[40px]">
                        {benefits?.map(({ id, text }) => {
                            return (
                                <div
                                    className="flex items-center gap-x-[10px]"
                                    key={id}
                                >
                                    <HiArrowNarrowRight />
                                    <h6>{text}</h6>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex-1">
                    <Image
                        src="https://res.cloudinary.com/dzlrpspps/image/upload/v1698049597/Projects/transflow/Photo_15_yqocqo.png"
                        width={686}
                        height={377}
                    />
                </div>
            </section>

            <section className="mt-[100px] flex items-center gap-[65px]">
                <div>
                    <Image
                        src="https://res.cloudinary.com/dzlrpspps/image/upload/v1698050157/Projects/transflow/Photo_16_d0krpe.png"
                        width={645}
                        height={377}
                        alt="box"
                    />
                </div>
                <div className="max-w-[490px]">
                    <h3>How It Works</h3>
                    <p>
                        Sed ut perspiciatis, unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam eaque ipsa, quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt, explicabo.
                        Nemo enim ipsam voluptatem, quia voluptas sit,
                        doloremque laudantium. <br /> <br />
                        Sed ut perspiciatis, unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam eaque ipsa, quae ab illo inventore veritatis.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SingleService;
