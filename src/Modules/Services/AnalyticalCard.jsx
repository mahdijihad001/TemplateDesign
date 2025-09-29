import { memo } from 'react';
import ServicesImage2 from "../../assets/images/Services2.png";

const ArtificialIntelligenceCard = () => {

    const ServicesOption = [
        {
            option: "Unlock hidden patterns in your data to drive informed decision-making and uncover new revenue streams."
        },
        {
            option: "Harness advanced analytics to optimize operations, reduce costs, and gain a competitive edge through data-driven strategies."
        },
        {
            option: "Transform raw data into actionable intelligence that propels business growth and innovation."
        },
    ]

    return (
        <div className="bg-[#E6E9F0] rounded-2xl p-8 grid grid-cols-2 gap-6 items-center shadow-md">
            {/* Image Section*/}
            <div className="flex items-center justify-center">
                <img
                    className="w-[320px] h-auto object-contain"
                    src={ServicesImage2}
                    alt="Service"
                />
            </div>
            {/*Text Section*/}
            <div className="">
                <h1 className="text-4xl font-semibold text-gray-800 mb-[30px]">
                    Analytical Insights
                </h1>

                <div className="space-y-4 text-gray-700">
                    {
                        ServicesOption.map((item, idx) => (
                            <div key={idx} className="flex gap-5 items-center">
                                <span className="text-[50px] text-gray-500">+</span>
                                <p className="text-[18px] text-gray-600">
                                    {item.option}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default memo(ArtificialIntelligenceCard);