import { memo } from 'react';
import ServicesCard from './AnalyticalCard';
import ArtificialIntelligenceCard from './ArtificialIntelligenceCard';

const Services = () => {
    return (
        <div className='bg-white'>
            <div className='container py-[60px] md:max-w-7xl mx-auto'>
                {/* Heading */}
                <div className='py-[30px]'>
                    <h1 className='font-semibold text-5xl text-center'>Our Services</h1>
                </div>
                <div className='flex flex-col gap-10'>
                    <ServicesCard/>
                    <ArtificialIntelligenceCard/>
                </div>
            </div>
        </div>
    );
};

export default memo(Services);