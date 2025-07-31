import React from 'react';
import plus from '../../assets/bx_plus-medical.png'
import beg from '../../assets/beg.png'
import doctorIcon from '../../assets/medical.png'
import rekha from '../../assets/Vector 8.png'

const Hero = () => {
    return (
        <div className="w-[97%] mx-auto  py-10">
            <div className="mx-auto relative flex flex-col-reverse sm:flex-row items-center justify-between gap-10">

                <img className='absolute left-0 top-0' src={rekha} alt="" />
                <img className='absolute left-0 top-5' src={rekha} alt="" />
                <img className='absolute left-0 top-10' src={rekha} alt="" />
                <div data-aos="zoom-in" className="text-center sm:text-left sm:w-[50%] w-[99%] mx-auto sm:mx-0 ">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        Find Trusted Doctors for Fast & Reliable Appointments
                    </h1>
                    <p className="text-gray-700 text-base sm:text-lg">
                        Book appointments easily with verified professionals.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg">
                        Access top specialists across various departments — anytime, anywhere.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg">
                        Your health is our mission. Get care from experienced and certified doctors.
                    </p>
                    <div className="flex flex-col mt-4 sm:flex-row gap-4 justify-center sm:justify-start">
                        <button className="bg-[#007F5F] text-white px-6 py-3 rounded-l-full rounded-r-full font-semibold hover:bg-[#00604b] transition">
                            Book Now
                        </button>
                        <button className="border border-[#007F5F] text-[#007F5F] px-6 py-3 rounded-l-full rounded-r-full font-semibold hover:bg-[#007F5F] hover:text-white transition">
                            Search Doctor
                        </button>
                    </div>
                </div>




                <div data-aos="zoom-in" className="sm:w-[50%] relative bg-green-50 h-auto flex justify-end">
                    <div className="w-[20rem] z-20  h-[20rem] sm:w-[28rem] sm:h-[28rem] rounded-full border-[10px] border-[#007F5F] overflow-hidden shadow-lg">
                        <img
                            src="https://i.ibb.co/bj6T2h4D/pexels-pavel-danilyuk-7108251.jpg"
                            alt="Doctor"
                            className="w-full  h-full object-cover"
                        />

                    </div>
                    <img data-aos="zoom-in" className="absolute -left-12  w-[50%] sm:w-[25%] -top-10  sm:left-50 sm:top-0" src={plus} alt="" />
                    <img data-aos="zoom-in" className='absolute z-1 -left-8 w-[25%] sm:w-[15%]  bottom-2  sm:left-60 sm:bottom-15 ' src={beg} alt="" />
                    <img data-aos="zoom-in" src={doctorIcon} className='absolute  w-[25%] z-70 sm:w-[15%] top-0 sm:-right-5 -right-5 ' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
