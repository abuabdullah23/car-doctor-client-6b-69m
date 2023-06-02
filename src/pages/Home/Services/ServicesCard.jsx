import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServicesCard = ({ service }) => {

    const { title, img, price } = service;

    return (
        <div className='p-5 border border-slate-300 rounded-lg'>
            <img className='w-full h-56 object-cover rounded-lg' src={img} alt="" />
            <h3 className='text-3xl font-bold my-2'>{title}</h3>
            <div className='text-[#FF3811] flex items-center justify-between'>
                <h3 className='font-semibold text-xl'>Price: ${price}</h3>
                <button><FaArrowRight/></button>
            </div>
        </div>
    );
};

export default ServicesCard;