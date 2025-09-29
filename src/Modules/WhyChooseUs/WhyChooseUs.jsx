import { memo } from 'react';
import ChooseImage1 from "../../assets/images/choose1.png"
import ChooseImage2 from "../../assets/images/choose2.png"
import ChooseImage3 from "../../assets/images/choose3.png"

const WhyChooseUs = () => {
    const ChoseItemData = [
        {
            icon: ChooseImage1,
            title: "Unmatched Expertise",
            description: "Our team of AI, analytics, and cloud specialists brings decades of experience to deliver tailored solutions."
        },
        {
            icon: ChooseImage2,
            title: "Pioneering Innovation",
            description: "We push boundaries with cutting-edge technology to drive transformative business outcomes."
        },
        {
            icon: ChooseImage3,
            title: "Global Impact",
            description: "Partnering with clients worldwide, we deliver scalable solutions for sustainable growth."
        },
    ]
    return (
        <div className='bg-[#15203D]'>
            <div className='container max-w-7xl mx-auto py-[45px] sm:px-4'>
                {/* Heading */}
                <h2 className='text-center text-4xl py-[40px] text-[#fff] font-bold'>WhyChooseUs</h2>
                {/* Item */}
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 pb-[25px]'>
                    {
                        ChoseItemData.map((item, idx) => (
                            <div key={idx} className='flex flex-col gap-4'>
                                <img className='w-[60px] h-[60px]' src={item.icon} alt="" />
                                <h2 className='text-[#CBB26A] text-[18px] font-bold'>{item.title}</h2>
                                <p className='text-[16px] text-gray-300'>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default memo(WhyChooseUs);