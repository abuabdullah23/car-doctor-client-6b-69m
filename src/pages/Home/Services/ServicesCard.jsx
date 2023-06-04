import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const ServicesCard = ({ service }) => {
    const {loading} = useContext(AuthContext);
    if(loading){
        return <p>Loading...</p>
    }

    const { _id, title, img, price } = service;

    return (
        <div className='p-5 border border-slate-300 rounded-lg'>
            <img className='w-full h-56 object-cover rounded-lg' src={img} alt="" />
            <h3 className='text-3xl font-bold my-2'>{title}</h3>

            <div className='text-[#FF3811] flex items-center justify-between mt-4'>
                <h3 className='font-semibold text-xl'>Price: ${price}</h3>
                <Link to={`services/checkout/${_id}`} ><button className='py-2 px-4 font-semibold rounded-md bg-[#ffede7] hover:bg-[#FF3811] hover:text-white'>Book Now</button></Link>

                <Link to={`/service-details/${_id}`} ><button className='rounded-full bg-[#ffede7] hover:bg-[#FF3811] hover:text-white p-3'><FaArrowRight/></button></Link>
            </div>
        </div>
    );
};

export default ServicesCard;