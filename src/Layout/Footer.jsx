import React from 'react';
import footerimg from '../assets/FooterImage.png'
import upperpic from '../assets/upperpic.png'


const Footer = () => {
    return (
        <div className='h-[60vh] sm:h-[60vh] md:h-[55vh] relative ' >
            <img className='w-full absolute z-10 h-full' src={footerimg} alt="" />
            <img className='w-full absolute mt-10 z-20 h-full' src={upperpic} alt="" />

            <div className='absolute -bottom-8 sm:bottom-0 z-40  text-white'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">


                    <div>
                        <h2 className="text-xl font-bold mb-2">Doctors Point</h2>
                        <p className="text-sm text-white/90 leading-relaxed">
                            Trusted by thousands, Doctors Point connects you with verified doctors, donors, and health support.

                        </p>
                    </div>


                    <div className='flex gap-10'>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                            <div className="text-sm text-white/80 space-y-1 list-disc list-inside">
                                <h1 className="hover:text-white transition">Find a Doctor</h1>
                                <h1 className="hover:text-wtransition">Blood Donor Search</h1>
                                <h1 className="hover:text-wtransition">Health Tips</h1>
                                <h1 className="hover:text-wtransition">Privacy Policy</h1>
                            </div>
                        </div>


                        <div>
                            <h3 className="text-lg font-semibold mb-2">Our Services</h3>
                            <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                                <h1>Online Appointment</h1>
                                <h1>Donor Registration</h1>
                                <h1>Emergency Support</h1>
                                <h1>Verified Doctors</h1>
                            </ul>
                        </div>
                    </div>
                    

                </div>

            </div>
        </div>
    );
};

export default Footer;