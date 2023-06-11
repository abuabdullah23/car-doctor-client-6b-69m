import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import bannerBookingCart from '../../assets/images/checkout/checkout.png'
import SingleCart from './singleCart';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BookingCart = () => {
    const { user } = useContext(AuthContext);

    const [bookingCart, setBookingCart] = useState([]);
    console.log(bookingCart)

    const url = `https://car-doctor-server-ashen-gamma.vercel.app/checkout-info?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookingCart(data)
                }
                else{
                    <p>You are no validate user. Please Login again!</p>
                }
            })
    }, [url])

    //============= handle clear all data
    const handleClearAllCart = () => {
        Swal.fire({
            title: 'Are You Sure Delete All Data From Cart?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://car-doctor-server-ashen-gamma.vercel.app/checkout-info/', {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        } else if (data.deletedCount < 1) {
                            // ==================== Error Alert
                            Swal.fire({
                                title: 'Oooooooooooops!',
                                text: 'Have not Delete All Shopping Cart!',
                                icon: 'error',
                                confirmButtonText: 'Ok'
                            })
                            // ==================== Error Alert
                        }
                        // const remainingCart = bookingCart.filter(booking => booking._id !== id)
                        // setBookingCart(remainingCart)
                    })
            }
        })
    }

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

            <div>
                <h3 className='pt-5 text-2xl font-bold'>Your Shopping cart is: {bookingCart.length}</h3>
            </div>

            <div className="overflow-x-auto mt-20">
                <table className="table">
                    {/* Table head = conditional rendering */}
                    {
                        bookingCart.length > 0 &&
                        < thead >
                            <tr className='text-base'>
                                <th> </th>
                                <th>Service Image</th>
                                <th>Service Name</th>
                                <th>Customer Email</th>
                                <th>Price</th>
                                <th>Delivery Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                    }

                    <tbody>
                        {/* rows of booking cart */}
                        {
                            bookingCart.map(cart => <SingleCart
                                key={cart._id}
                                cart={cart}
                                bookingCart={bookingCart}
                                setBookingCart={setBookingCart}
                            ></SingleCart>)
                        }
                    </tbody>
                </table>
            </div>

            {/* Table head = conditional rendering. empty cart */}
            {
                bookingCart.length < 1 && <div className='py-10 text-center'>
                    <p className='text-5xl font-thin text-[#FF3811]'>Shopping Cart is Empty!</p>
                    <h3 className='mt-5 font-semibold text-4xl'>Please Shopping Our Services.</h3>
                </div>
            }

            <div className='flex justify-between items-center md:px-20 px-5 py-5'>
                <Link to="/"><button className='py-2 px-4 rounded-md flex items-center gap-4 hover:bg-[#FF3811] hover:text-white'> <FaArrowLeft /> Continue Shopping</button></Link>

                {/* Logical rendering, when booking cart is greater then 1, it will show. */}
                {
                    bookingCart.length > 1 && <button onClick={handleClearAllCart} className='py-2 px-4 rounded-md flex items-center gap-4 hover:bg-[#FF3811] hover:text-white'> <FaTrash /> Clear Shopping Cart</button>
                }
            </div>
        </div >
    );
};

export default BookingCart;