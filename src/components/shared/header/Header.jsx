import Tip from "@/components/shared/tip/Tip";
import MainNav from "../Navbar/MainNav";

const Header = ({ banner, tipName, title }) => {
    return (
        <div className={`relative h-[320px] lg:h-[400px] ${banner}`}>
            <MainNav />
            <div className="h-[320px] lg:h-[320px] container flex items-start justify-center flex-col gap-y-[11px]">
                <Tip name={tipName} color="text-white" />
                <h1 className="text-white">{title}</h1>
            </div>
        </div>
    );
};

export default Header;
