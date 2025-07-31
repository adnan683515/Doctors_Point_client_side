import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Marquee from "react-fast-marquee";
import {
    LuBriefcaseMedical,
    LuStethoscope,
    LuSyringe,
    LuThermometer,
    LuHeartPulse,
    LuMicroscope,
    LuPill,
    LuAmbulance
} from "react-icons/lu";
import rekha from '../../assets/Vector 9 (1).png'
const medicalIcons = [
    LuBriefcaseMedical,
    LuStethoscope,
    LuSyringe,
    LuThermometer,
    LuHeartPulse,
    LuMicroscope,
    LuPill,
    LuAmbulance
];


const OurServices = () => {
    const { data: services = [] } = useQuery({
        queryKey: ['allServices'],
        queryFn: async () => {
            const result = await axios.get('/OurService.json');
            return result?.data;
        }
    });

    return (
        <div  className="my-10 py-10 bg-green-50 relative sm:w-[96%]  mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#007F5F]">Our Services</h2>
            <img className='absolute  left-0 top-0' src={rekha} alt="" />
            <img className='absolute  left-0 top-5' src={rekha} alt="" />
            <img className='absolute  left-0 top-10' src={rekha} alt="" />
            <Marquee pauseOnHover  speed={50}>
                <div className="flex gap-6 px-4">
                    {
                        services?.map((item, index) => {
                            const Icon = medicalIcons[index % medicalIcons.length];
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`min-w-[250px] max-w-[4%] sm:max-w-[5%] rounded-xl p-5 flex flex-col justify-start text-left transition-all duration-300 
              ${isEven ? 'bg-[#007F5F] text-white' : 'bg-green-50 text-black'}`}
                                >
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 sm:mb-4
                ${isEven ? 'bg-white text-[#007F5F]' : 'bg-[#007F5F] text-white'}`}>
                                        <Icon className="text-3xl" />
                                    </div>
                                    <h3 className={`text-lg font-semibold mb-2 ${isEven ? 'text-white' : 'text-[#007F5F]'}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed ${isEven ? 'text-white/80' : 'text-gray-600'}`}>
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
            </Marquee>
        </div>

    );
};

export default OurServices;
