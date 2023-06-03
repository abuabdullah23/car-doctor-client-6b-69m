import React from 'react';
import member1 from '../../../assets/images/team/1.jpg'
import member2 from '../../../assets/images/team/2.jpg'
import member3 from '../../../assets/images/team/3.jpg'
import { FaArrowLeft, FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Teams = () => {
    return (
        <div className='my-10'>
            <div className='flex justify-center mb-10'>
                <div className='text-center md:w-1/2 px-5'>
                    <h3 className='text-[#FF3811] text-2xl font-bold'>Team</h3>
                    <h2 className='text-5xl font-bold my-5'>Meet Our Team</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>

            {/* 3 Cards of Team */}
            <div className='relative'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10'>
                    {/* Member 1 */}
                    <div className='p-5 border border-slate-300 rounded-lg text-center'>
                        <img className='w-full h-56 object-cover rounded-lg' src={member1} alt="Team member one" />
                        <h3 className='text-3xl font-bold my-2'>Car Engine Plug</h3>
                        <h4 className='text-xl font-bold my-2'>Engine Expert</h4>

                        {/* Social Icon */}
                        <div className='text-white flex gap-4 items-center justify-center mt-4'>
                            <p className='bg-blue-800 rounded-full p-2 text-center'><FaFacebook className='w-5 h-5' /></p>

                            <p className='bg-cyan-500 rounded-full p-2 text-center'><FaTwitter className='w-5 h-5' /></p>

                            <p className='bg-blue-500 rounded-full p-2 text-center'><FaLinkedin className='w-5 h-5' /></p>

                            <p className='bg-gradient-to-r from-[#920049] to-[#e0008a] rounded-full p-2 text-center'><FaInstagram className='w-5 h-5' /></p>

                        </div>
                    </div>
                    {/* Member 2 */}
                    <div className='p-5 border border-slate-300 rounded-lg text-center'>
                        <img className='w-full h-56 object-cover rounded-lg' src={member2} alt="Team member one" />
                        <h3 className='text-3xl font-bold my-2'>Car Engine Plug</h3>
                        <h4 className='text-xl font-bold my-2'>Engine Expert</h4>

                        {/* Social Icon */}
                        <div className='text-white flex gap-4 items-center justify-center mt-4'>
                            <p className='bg-blue-800 rounded-full p-2 text-center'><FaFacebook className='w-5 h-5' /></p>

                            <p className='bg-cyan-500 rounded-full p-2 text-center'><FaTwitter className='w-5 h-5' /></p>

                            <p className='bg-blue-500 rounded-full p-2 text-center'><FaLinkedin className='w-5 h-5' /></p>

                            <p className='bg-gradient-to-r from-[#920049] to-[#e0008a] rounded-full p-2 text-center'><FaInstagram className='w-5 h-5' /></p>

                        </div>
                    </div>
                    {/* Member 3 */}
                    <div className='p-5 border border-slate-300 rounded-lg text-center'>
                        <img className='w-full h-56 object-cover rounded-lg' src={member3} alt="Team member one" />
                        <h3 className='text-3xl font-bold my-2'>Car Engine Plug</h3>
                        <h4 className='text-xl font-bold my-2'>Engine Expert</h4>

                        {/* Social Icon */}
                        <div className='text-white flex gap-4 items-center justify-center mt-4'>
                            <p className='bg-blue-800 rounded-full p-2 text-center'><FaFacebook className='w-5 h-5' /></p>

                            <p className='bg-cyan-500 rounded-full p-2 text-center'><FaTwitter className='w-5 h-5' /></p>

                            <p className='bg-blue-500 rounded-full p-2 text-center'><FaLinkedin className='w-5 h-5' /></p>

                            <p className='bg-gradient-to-r from-[#920049] to-[#e0008a] rounded-full p-2 text-center'><FaInstagram className='w-5 h-5' /></p>
                        </div>
                    </div>
                </div>

                {/* Button in Team Member */}
                <div className="absolute flex justify-between left-5 right-5 top-1/2">
                    <a href="#slide4" className='w-16 h-16 flex items-center justify-center bg-[#e2e2e2] hover:bg-[#aaaaaabb] rounded-full p-5'>
                        <FaArrowLeft className='w-4 h-4 text-[#FF3811]' /></a>
                    <a href="#slide6" className='w-16 h-16 flex items-center justify-center bg-[#FF3811] hover:bg-[#d62400c2] rounded-full p-5'>
                        <FaArrowRight className='w-4 h-4 text-white' /> </a>
                </div>
            </div>

        </div>
    );
};

export default Teams;