import React from 'react';
import plus from '../../assets/bx_plus-medical (1).png'

const About = () => {
    return (
        <div className=" text-black bg-green-50 py-12 sm:w-[96%]">

            <div className="  mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">


                <div className="h-full border-l-8 border-l-[#007F5F] border-t-8 border-t-[#007F5F] sm:w-[80%]">
                    <img
                        src="https://i.ibb.co/WpxZRY84/pexels-rdne-6129494.jpg"
                        alt="About us"
                        className="rounded-br-2xl shadow-lg w-full h-full object-cover"
                    />
                </div>


                <div className="rounded-xl relative sm:p-8 flex  flex-col justify-center space-y-5">
                    <img className='absolute right-0 w-[80%] h-[75vh]' src={plus} alt="" />
                    <h2 className="text-3xl text-[#007F5F] font-bold">About Our Medical Platform</h2>
                    <p className="leading-relaxed">
                        Our medical platform is a one-stop solution for all your healthcare needs. We connect you to
                        licensed doctors from various specialties, making expert medical advice just a click away.
                        Whether it's general consultation, specialist booking, or emergency support — we've got you covered.
                    </p>
                    <p className=" leading-relaxed">
                        Alongside that, we offer diagnostic test booking, fast medicine home delivery, and a
                        wide range of authentic health products. With technology and trust at the core,
                        we aim to make healthcare easier, faster, and more accessible for everyone.
                    </p>
                    <button className="mt-2 text-white bg-[#007F5F] font-semibold px-6 py-2 rounded-md hover:bg-opacity-90 transition self-start">
                        View More
                    </button>
                </div>

            </div>
        </div>
    );
};

export default About;
