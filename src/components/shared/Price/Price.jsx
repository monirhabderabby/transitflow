import { BlueButton, YellowButton } from "@/components/shared/buttons/Buttons";
import Tip from "@/components/shared/tip/Tip";

const Price = () => {
    return (
        <div className="container mt-[100px]">
            <div className="w-full flex flex-col items-center gap-y-[15px] ">
                <Tip name="Pricing" />
                <h3>Our Best Pricing</h3>
            </div>
            <div className="mt-[64px] flex flex-wrap gap-[30px] justify-center">
                {/* card-1 */}
                <div className="max-w-[380px] h-auto py-[61px] px-[50px] bg-secondary1">
                    <h4 className="text-center">Basic</h4>
                    <div className="flex items-center justify-center">
                        <h1>$39</h1>
                        <h6>
                            <sub>/month</sub>
                        </h6>
                    </div>
                    <div className="mt-[50px]">
                        <li className="pricing_list text-center">
                            Single Truck
                        </li>
                        <li className="pricing_list text-center">
                            Full Insuarence
                        </li>
                        <li className="pricing_list text-center">500 Km</li>
                        <li className="pricing_list text-center">
                            Real-time rate shopping
                        </li>
                    </div>
                    <div className="w-full flex justify-center mt-[70px]">
                        <BlueButton title="Choose Plan" />
                    </div>
                </div>
                {/* card-2 */}
                <div className="max-w-[380px] h-auto py-[61px] px-[50px] bg-primary2">
                    <h4 className="text-center text-white">Basic</h4>
                    <div className="flex items-center justify-center ">
                        <h1 className="text-white">$39</h1>
                        <h6 className="text-white">
                            <sub>/month</sub>
                        </h6>
                    </div>
                    <div className="mt-[50px]">
                        <li className="pricing_list text-center text-white">
                            Single Truck
                        </li>
                        <li className="pricing_list text-center text-white">
                            Full Insuarence
                        </li>
                        <li className="pricing_list text-center text-white">
                            500 Km
                        </li>
                        <li className="pricing_list text-center text-white">
                            Real-time rate shopping
                        </li>
                    </div>
                    <div className="w-full flex justify-center mt-[70px]">
                        <YellowButton title="Choose Plan" />
                    </div>
                </div>
                {/* card-3 */}
                <div className="max-w-[380px] h-auto py-[61px] px-[50px] bg-secondary1">
                    <h4 className="text-center">Basic</h4>
                    <div className="flex items-center justify-center">
                        <h1>$39</h1>
                        <h6>
                            <sub>/month</sub>
                        </h6>
                    </div>
                    <div className="mt-[50px]">
                        <li className="pricing_list text-center">
                            Single Truck
                        </li>
                        <li className="pricing_list text-center">
                            Full Insuarence
                        </li>
                        <li className="pricing_list text-center">500 Km</li>
                        <li className="pricing_list text-center">
                            Real-time rate shopping
                        </li>
                    </div>
                    <div className="w-full flex justify-center mt-[70px]">
                        <BlueButton title="Choose Plan" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;
