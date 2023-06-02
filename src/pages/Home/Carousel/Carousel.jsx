import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import { FaArrowLeft, FaArrowRight, FaGoogle } from 'react-icons/fa';

const Carousel = () => {
    return (
        <div className="carousel w-full">
            {/* ======== Slider1 ============ */}
            <div id="slide1" className="carousel-item relative w-full">
                <img style={{ height: '512px' }} className='w-full object-cover object-top rounded-lg' src={img1} />
                <div className="absolute rounded-lg flex items-center w-full h-full left-0 top-0 bg-gradient-to-r from-[#000000] to-[#57575711]">
                    <div className='text-white w-1/2 pl-12'>
                        <h2 className='text-7xl font-bold mb-5'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-5 flex gap-5'>
                            <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-white bg-[#FF3811] text-white hover:text-[#FF3811] ">Discover More</button>

                            <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-[#FF3811] text-white hover:text-white border  border-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                {/* Button in slider */}
                <div className="absolute flex gap-5 transform -translate-y-1/2 end-10 right-10 bottom-10">
                    <a href="#slide6" className='w-16 h-16 flex items-center justify-center bg-[#ffffffc5] hover:bg-[#ffffff85] rounded-full p-5'>
                        <FaArrowLeft className='w-4 h-4 text-[#FF3811]' /></a>
                    <a href="#slide2" className='w-16 h-16 flex items-center justify-center bg-[#FF3811] hover:bg-[#d62400] rounded-full p-5'>
                        <FaArrowRight className='w-4 h-4 text-white' /> </a>
                </div>
            </div>

            {/* ======== Slider2 ============ */}
            <div id="slide2" className="carousel-item relative w-full">
                <img style={{ height: '512px' }} className='w-full object-cover object-top rounded-lg' src={img2} />
                <div className="absolute rounded-lg flex items-center w-full h-full left-0 top-0 bg-gradient-to-r from-[#000000] to-[#57575711]">
                    <div className='text-white w-1/2 pl-12'>
                        <h2 className='text-7xl font-bold mb-5'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-5 flex gap-5'>
                            <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-white bg-[#FF3811] text-white hover:text-[#FF3811] ">Discover More</button>

                            <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-[#FF3811] text-white hover:text-white border  border-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                {/* Button in slider */}
                <div className="absolute flex gap-5 transform -translate-y-1/2 end-10 right-10 bottom-10">
                    <a href="#slide1" className='w-16 h-16 flex items-center justify-center bg-[#ffffffc5] hover:bg-[#ffffff85] rounded-full p-5'>
                        <FaArrowLeft className='w-4 h-4 text-[#FF3811]' /></a>
                    <a href="#slide3" className='w-16 h-16 flex items-center justify-center bg-[#FF3811] hover:bg-[#d62400] rounded-full p-5'>
                        <FaArrowRight className='w-4 h-4 text-white' /> </a>
                </div>
            </div>

            {/* ======== Slider3 ============ */}
            <div id="slide3" className="carousel-item relative w-full">
                <img style={{ height: '512px' }} className='w-full object-cover object-top rounded-lg' src={img3} />
                <div className="absolute rounded-lg flex items-center w-full h-full left-0 top-0 bg-gradient-to-r from-[#000000] to-[#57575711]">
                    <div className='text-white w-1/2 pl-12'>
                        <h2 className='text-7xl font-bold mb-5'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-5 flex gap-5'>
                            <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-white bg-[#FF3811] text-white hover:text-[#FF3811] ">Discover More</button>

                            <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-[#FF3811] text-white hover:text-white border  border-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                {/* Button in slider */}
                <div className="absolute flex gap-5 transform -translate-y-1/2 end-10 right-10 bottom-10">
                    <a href="#slide2" className='w-16 h-16 flex items-center justify-center bg-[#ffffffc5] hover:bg-[#ffffff85] rounded-full p-5'>
                        <FaArrowLeft className='w-4 h-4 text-[#FF3811]' /></a>
                    <a href="#slide4" className='w-16 h-16 flex items-center justify-center bg-[#FF3811] hover:bg-[#d62400] rounded-full p-5'>
                        <FaArrowRight className='w-4 h-4 text-white' /> </a>
                </div>
            </div>

            {/* ======== Slider4 ============ */}
            <div id="slide4" className="carousel-item relative w-full">
                <img style={{ height: '512px' }} className='w-full object-cover object-top rounded-lg' src={img4} />
                <div className="absolute rounded-lg flex items-center w-full h-full left-0 top-0 bg-gradient-to-r from-[#000000] to-[#57575711]">
                    <div className='text-white w-1/2 pl-12'>
                        <h2 className='text-7xl font-bold mb-5'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-5 flex gap-5'>
                            <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-white bg-[#FF3811] text-white hover:text-[#FF3811] ">Discover More</button>

                            <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-[#FF3811] text-white hover:text-white border  border-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                {/* Button in slider */}
                <div className="absolute flex gap-5 transform -translate-y-1/2 end-10 right-10 bottom-10">
                    <a href="#slide3" className='w-16 h-16 flex items-center justify-center bg-[#ffffffc5] hover:bg-[#ffffff85] rounded-full p-5'>
                        <FaArrowLeft className='w-4 h-4 text-[#FF3811]' /></a>
                    <a href="#slide5" className='w-16 h-16 flex items-center justify-center bg-[#FF3811] hover:bg-[#d62400] rounded-full p-5'>
                        <FaArrowRight className='w-4 h-4 text-white' /> </a>
                </div>
            </div>

            {/* ======== Slider5 ============ */}
            <div id="slide5" className="carousel-item relative w-full">
                <img style={{ height: '512px' }} className='w-full object-cover object-top rounded-lg' src={img5} />
                <div className="absolute rounded-lg flex items-center w-full h-full left-0 top-0 bg-gradient-to-r from-[#000000] to-[#57575711]">
                    <div className='text-white w-1/2 pl-12'>
                        <h2 className='text-7xl font-bold mb-5'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-5 flex gap-5'>
                            <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-white bg-[#FF3811] text-white hover:text-[#FF3811] ">Discover More</button>

                            <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-[#FF3811] text-white hover:text-white border  border-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                {/* Button in slider */}
                <div className="absolute flex gap-5 transform -translate-y-1/2 end-10 right-10 bottom-10">
                    <a href="#slide4" className='w-16 h-16 flex items-center justify-center bg-[#ffffffc5] hover:bg-[#ffffff85] rounded-full p-5'>
                        <FaArrowLeft className='w-4 h-4 text-[#FF3811]' /></a>
                    <a href="#slide6" className='w-16 h-16 flex items-center justify-center bg-[#FF3811] hover:bg-[#d62400] rounded-full p-5'>
                        <FaArrowRight className='w-4 h-4 text-white' /> </a>
                </div>
            </div>

            {/* ======== Slider6 ============ */}
            <div id="slide6" className="carousel-item relative w-full">
                <img style={{ height: '512px' }} className='w-full object-cover object-top rounded-lg' src={img6} />
                <div className="absolute rounded-lg flex items-center w-full h-full left-0 top-0 bg-gradient-to-r from-[#000000] to-[#57575711]">
                    <div className='text-white w-1/2 pl-12'>
                        <h2 className='text-7xl font-bold mb-5'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-5 flex gap-5'>
                            <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-white bg-[#FF3811] text-white hover:text-[#FF3811] ">Discover More</button>

                            <button className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-[#FF3811] text-white hover:text-white border  border-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                {/* Button in slider */}
                <div className="absolute flex gap-5 transform -translate-y-1/2 end-10 right-10 bottom-10">
                    <a href="#slide5" className='w-16 h-16 flex items-center justify-center bg-[#ffffffc5] hover:bg-[#ffffff85] rounded-full p-5'>
                        <FaArrowLeft className='w-4 h-4 text-[#FF3811]' /></a>
                    <a href="#slide1" className='w-16 h-16 flex items-center justify-center bg-[#FF3811] hover:bg-[#d62400] rounded-full p-5'>
                        <FaArrowRight className='w-4 h-4 text-white' /> </a>
                </div>
            </div>


        </div>
    );
};

export default Carousel;