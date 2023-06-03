import React from 'react';
import img1 from '../../../assets/icons/img1_team.svg'
import img3 from '../../../assets/icons/img3_person.svg'
import img4 from '../../../assets/icons/img4_wrench.svg'
import img5 from '../../../assets/icons/img5_guaranty.svg'
import img6 from '../../../assets/icons/img6_delivery.svg'
import { FaClock } from 'react-icons/fa';

const Features = () => {
    return (
        <div>
            <div className='flex justify-center mb-10'>
                <div className='text-center md:w-1/2 px-5'>
                    <h3 className='text-[#FF3811] text-2xl font-bold'>Core Features</h3>
                    <h2 className='text-5xl font-bold my-5'>Why Choose Us</h2>
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 justify-center mb-10'>
                {/* feature 1 */}
                <div className='p-5 border border-slate-300 rounded-lg'>
                    <div className='flex justify-center'>
                        <img className='w-20 h-20 rounded-lg' src={img1} alt="" />
                    </div>
                    <h3 className='text-xl text-center font-bold my-2'>Expert Team</h3>
                </div>

                {/* feature 2 */}
                <div className='p-5 border border-slate-300 rounded-lg bg-[#FF3811]'>
                    <div className='flex justify-center text-white'>
                        <p className='rounded-lg'> <FaClock className='w-20 h-20' /> </p>
                    </div>
                    <h3 className='text-xl text-white text-center font-bold my-2'>Timely Delivery</h3>
                </div>

                {/* feature 3 */}
                <div className='p-5 border border-slate-300 rounded-lg'>
                    <div className='flex justify-center'>
                        <img className='w-20 h-20 rounded-lg' src={img3} alt="" />
                    </div>
                    <h3 className='text-xl text-center font-bold my-2'>24/7 Support</h3>
                </div>

                {/* feature 4 */}
                <div className='p-5 border border-slate-300 rounded-lg'>
                    <div className='flex justify-center'>
                        <img className='w-20 h-20 rounded-lg' src={img4} alt="" />
                    </div>
                    <h3 className='text-xl text-center font-bold my-2'>Expert Team
                    </h3>
                </div>

                {/* feature 5 */}
                <div className='p-5 border border-slate-300 rounded-lg'>
                    <div className='flex justify-center'>
                        <img className='w-20 h-20 rounded-lg' src={img5} alt="" />
                    </div>
                    <h3 className='text-xl text-center font-bold my-2'>100% Guaranty</h3>
                </div>

                {/* feature 6 */}
                <div className='p-5 border border-slate-300 rounded-lg'>
                    <div className='flex justify-center'>
                        <img className='w-20 h-20 rounded-lg' src={img6} alt="" />
                    </div>
                    <h3 className='text-xl text-center font-bold my-2'>Timely Delivery</h3>
                </div>

            </div>
        </div>
    );
};

export default Features;