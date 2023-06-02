import React from 'react';
import { FaCalendarDay, FaPhoneAlt } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';

const ContactInfo = () => {
    return (
        <div className='bg-[#151515] md:flex gap-10 items-center mb-20 py-10 px-20 text-white'>
            <div className='flex items-center gap-8'>
                <FaCalendarDay className='w-10 h-10 text-[#FF3811]' />
                <div>
                    <p>We are open monday-friday</p>
                    <h2 className='text-3xl font-bold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>

            <div className='flex items-center gap-8'>
                <FaPhoneAlt className='w-10 h-10 text-[#FF3811]' />
                <div>
                    <p>Have a question?</p>
                    <h2 className='text-3xl font-bold'>+2546 251 2658</h2>
                </div>
            </div>

            <div className='flex items-center gap-8'>
                <TiLocation className='w-10 h-10 text-[#FF3811]' />
                <div>
                    <p>Need a repair? our address</p>
                    <h2 className='text-3xl font-bold'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;