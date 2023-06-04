import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import bannerBookingCart from '../../assets/images/checkout/checkout.png'


const BookingCart = () => {
    const { user } = useContext(AuthContext);

    const [bookingCart, setBookingCart] = useState([]);
    console.log(bookingCart)

    const url = `http://localhost:5000/checkout-info?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookingCart(data))
    }, [])

    return (
        <div>
            <div className='relative'>
                <img className='w-full' src={bannerBookingCart} alt="" />
                <div className='absolute top-0 left-0 rounded-xl bg-gradient-to-r from-[#000000] to-[#57575711] w-full h-full flex items-center'>
                    <div className='px-5 md:ps-20'>
                        <h2 className='text-6xl font-bold text-white'>Cart Details</h2>
                        <h3 className='text-[#FF3811] py-3'>Home-Product Review Details</h3>
                    </div>
                </div>
            </div>

            <h2>Loaded Checkout Booking cart : {bookingCart.length} </h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                     
                       
                    </tbody>
                    {/* foot */}
                    

                </table>
            </div>
        </div>
    );
};

export default BookingCart;