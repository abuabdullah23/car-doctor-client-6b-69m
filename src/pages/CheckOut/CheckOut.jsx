import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import bannerCheckout from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const service = useLoaderData();
    const { _id, img, title, price, service_id } = service;
    console.log(service)
    const { user } = useContext(AuthContext);

    const handleCheckoutInfoAddToDb = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const amount = form.amount.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const checkoutInfo = {
            customerName: name,
            date,
            amount,
            phone,
            img,
            email,
            service: title,
            id: _id,
            service_id: service_id,
            price: price,
            message
        }
        // console.log(checkoutInfo);
        fetch('https://car-doctor-server-ashen-gamma.vercel.app/checkout-info', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkoutInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    // ==================== Success Alert
                    Swal.fire({
                        text: 'Successfully Added Checkout Info!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    // ==================== Success Alert
                }
            })
    }

    return (
        <div className='my-10  mt-28'>
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
                <form onSubmit={handleCheckoutInfoAddToDb}>
                    <div className='md:flex gap-5'>
                        <div className='w-full'>
                            <p className='mt-5 ps-5 text-xl font-semibold'> Name</p>
                            <input required type="text" name="name" id="name" placeholder='Your Name' defaultValue={user?.displayName} className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                        </div>
                        <div className='w-full'>
                            <p className='mt-5 ps-5 text-xl font-semibold'>Date</p>
                            <input required type="date" name="date" id="date" className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                        </div>
                        <div className='w-full'>
                            <p className='mt-5 ps-5 text-xl font-semibold'>Due Amount</p>
                            <input required type="text" readOnly name="amount" id="amount" defaultValue={'$' + service.price} className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                        </div>
                    </div>

                    <div className='md:flex gap-5'>
                        <div className='w-full'>
                            <p className='mt-5 ps-5 text-xl font-semibold'>Your Phone</p>
                            <input required type="number" name="phone" id="phone" placeholder='Your Phone' className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                        </div>
                        <div className='w-full'>
                            <p className='mt-5 ps-5 text-xl font-semibold'>Your Email</p>
                            <input required readOnly type="email" name="email" id="email" placeholder='Your Email' defaultValue={user?.email} className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                        </div>
                    </div>
                    <div className='w-full'>
                        <p className='mt-5 ps-5 text-xl font-semibold'>Your Message</p>
                        <textarea className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' type="text" name="message" id="message" placeholder='Message' cols="30" rows="10"></textarea>
                    </div>
                    <button className='w-full py-3 px-5 bg-[#FF3811] rounded-lg mt-5 text-xl font-semibold text-white hover:bg-[#e02500]' type='submit'>Order Confirm</button>

                </form>
            </div>

        </div>
    );
};

export default CheckOut;