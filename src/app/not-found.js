import Link from "next/link";

const Custom404 = () => {
    return (
        <div className="min-h-[50vh] flex flex-col justify-center items-center container">
            <h1 className="text-[100px] md:text-[200px] lg:text-[350px]">
                <span className="text-primary2">4</span>
                <span className="text-primary1">0</span>
                <span className="text-primary2">4</span>
            </h1>
            <h3 className="text-center">opps! Page not found.</h3>
            <p className="text-center">Let's get you where you need to be.</p>
            <Link
                href="/"
                className="py-[19px] px-[45px] text-[16px] font-normal linear mt-[26px]"
            >
                Back to home
            </Link>
        </div>
    );
};

export default Custom404;
