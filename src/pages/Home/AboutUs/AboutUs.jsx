import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='md:flex gap-10 my-20'>
            <div className='w-full relative'>
                <img className='w-3/4 rounded-lg' src={person} alt="Person" />
                <img className='w-2/3 rounded-lg border-8 border-white absolute right-0 top-32' src={parts} alt="Person" />
            </div>

            <div className='w-full'>
                <h3 className='text-[#FF3811] text-2xl font-bold'>About Us</h3>
                <h2 className='text-6xl font-semibold md:w-4/5 my-5'>We are qualified & of experience in this field</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    <br /> <br />
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-white bg-[#FF3811] text-white hover:text-[#FF3811] mt-5 hover:border hover:border-[#FF3811]">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;