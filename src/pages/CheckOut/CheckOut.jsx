import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import bannerCheckout from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../providers/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(service)
    return (
        <div className='my-10'>
            <div className='relative'>
                <img className='w-full' src={bannerCheckout} alt="" />
                <div className='absolute top-0 left-0 rounded-xl bg-gradient-to-r from-[#000000] to-[#57575711] w-full h-full flex items-center'>
                    <h2 className='px-5 md:ps-20 text-6xl font-bold text-white '>Check Out</h2>
                </div>
                <div className='absolute bottom-0 right-0 rounded-tl-xl rounded-tr-xl bg-[#FF3811]'>
                    <h3 className='text-white py-3 px-5'>Home/Check Out</h3>
                </div>
            </div>

            <h2 className='text-4xl font-bold text-center my-5'>Check Out Service of: {service.title}</h2>

            {/* form section  */}
            <div className='bg-[#F3F3F3] rounded-lg md:p-16 p-5'>
                <form >
                    <div className='md:flex gap-5'>
                        <div className='w-full'>
                            <p className='mt-5 ps-5 text-xl font-semibold'> Name</p>
                            <input type="text" name="Name" id="Name" placeholder='Your Name' defaultValue={user?.displayName} className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                        </div>
                        <div className='w-full'>
                            <p className='mt-5 ps-5 text-xl font-semibold'>Date</p>
                            <input type="date" name="date" id="date" className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                        </div>
                        <div className='w-full'>
                            <p className='mt-5 ps-5 text-xl font-semibold'>Due Amount</p>
                            <input type="text" readOnly name="amount" id="amount" placeholder={'$' + service.price} className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                        </div>
                    </div>

                    <div className='md:flex gap-5'>
                        <div className='w-full'>
                            <p className='mt-5 ps-5 text-xl font-semibold'>Your Phone</p>
                            <input type="number" name="phone" id="phone" placeholder='Your Phone' className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                        </div>
                        <div className='w-full'>
                            <p className='mt-5 ps-5 text-xl font-semibold'>Your Email</p>
                            <input type="email" name="email" id="email" placeholder='Your Email' defaultValue={user?.email} className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                        </div>
                    </div>
                    <div className='w-full'>
                        <p className='mt-5 ps-5 text-xl font-semibold'>Your Message</p>
                        <textarea className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' name="message" id="message" placeholder='Message' cols="30" rows="10"></textarea>
                    </div>
                    <button className='w-full py-3 px-5 bg-[#FF3811] rounded-lg mt-5 text-xl font-semibold text-white hover:bg-[#eb2c05]' type='submit'>Order Confirm</button>

                </form>
            </div>

        </div>
    );
};

export default CheckOut;