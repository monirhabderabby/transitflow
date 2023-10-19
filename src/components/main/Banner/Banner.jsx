import MainNav from "@/components/shared/Navbar/MainNav";
import { YellowButton } from "@/components/shared/buttons/Buttons";
import Tip from "@/components/shared/tip/Tip";

const Banner = () => {
    return (
        <div className="banner sm:h-screen  lg:h-[calc(100vh-120px)] ">
            <MainNav />
            <section className="container h-screen lg:h-[calc(100vh-238px)]  flex flex-col justify-center items-start ">
                <Tip name="Logistic & Supply Chain Solutions" />
                <h1 className="max-w-[571px] text-white mt-[11px]">
                    Your Gateway to any Destination in the World
                </h1>
                <p className="max-w-[571px] text-white mt-[6px] mb-[24px]">
                    In augue ligula, feugiat ut nulla consequat. Ut est lacus,
                    molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus,
                    nisl id dapibus finibus, enim diam interdum nulla, sed
                    laoreet risus lectus.{" "}
                </p>
                <YellowButton title="Explore More" />
            </section>
        </div>
    );
};

export default Banner;
