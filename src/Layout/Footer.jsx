import React from 'react';
import footerimg from '../assets/FooterImage.png'
import upperpic from '../assets/upperpic.png'


const Footer = () => {
    return (
        <div  className='h-[50vh] relative' >
            <img className='w-full absolute z-10 h-full' src={footerimg} alt="" />
            <img className='w-full absolute mt-10 z-50 h-full' src={upperpic} alt="" />
        </div>
    );
};

export default Footer;