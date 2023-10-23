import SingleService from "@/components/main/SingleService/SingleService";
import Header from "@/components/shared/header/Header";

const SingleServices = () => {
    return (
        <div>
            <Header
                tipName="Single Service"
                title="Service Detailes"
                banner="singleServicesHeader"
            />
            <SingleService />
        </div>
    );
};

export default SingleServices;
