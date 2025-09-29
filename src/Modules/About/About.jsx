import { memo } from 'react';
import aboutImg1 from "../../assets/images/about1.png"
import aboutImg2 from "../../assets/images/about2.png"
import aboutImg3 from "../../assets/images/about3.png"

const About = () => {
    return (
        <div>
            <div className='container max-w-7xl mx-auto'>
                {/* Heading Section */}
                <div className='py-[40px]'>
                    <h1 className='text-center text-4xl text-gray-800 font-semibold'>About Us</h1>
                </div>
                {/* Description */}
                <div className='pb-[40px] flex flex-col gap-2'>
                    <h3 className='text-2xl text-gray-700 '>Next Generation Digital Architects transforms businesses by harnessing cutting-edge technology to drive innovation and growth. Our multidisciplinary team delivers integrated solutions in AI, strategic consulting, and advanced analytics, empowering clients to unlock exceptional value from data, boost revenue, and achieve operational excellence.
                    </h3>
                    <h4 className='text-2xl text-gray-400'> With a passion for innovation and a commitment to measurable outcomes, we partner globally, leveraging deep expertise to navigate the digital landscape and ensure sustainable success.</h4>
                </div>
                {/* Images Section */}
                <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-3 items-center justify-between py-[40px]'>
                    <img className='w-full' src={aboutImg1} alt="" />
                    <img className='w-full' src={aboutImg2} alt="" />
                    <img className='w-full' src={aboutImg3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default memo(About);