import React from 'react';
import Swal from 'sweetalert2';

const SingleCart = ({ cart, bookingCart, setBookingCart }) => {
    const { service, _id, service_id, price, date, img, email } = cart;

    const handleDeleteCart = (id) => {
        Swal.fire({
            title: 'Are you sure Delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/checkout-info/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Successfully Deleted',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                        const remainingCart = bookingCart.filter(booking => booking._id !== id)
                        setBookingCart(remainingCart)
                    })
            }
        })
    }

    return (
        <tr>
            <th>
                <button onClick={() => handleDeleteCart(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className='avatar'>
                        <div className="rounded-lg w-24 h-24">
                            {img && <img src={img} />}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold text-xl">{service}</div>
                    <div className="text-sm opacity-50">Service Id: {service_id}</div>
                </div>
            </td>
            <td>{email}</td>
            <td className='text-md text-slate-500 font-semibold'>${price}</td>
            <td>{date}</td>
            <td>
                <button className='py-2 px-4 text-white text-md text-center font-bold bg-[#FF3811] hover:bg-[#e02500] rounded-md'>Pending</button>
            </td>
        </tr>

    );
};

export default SingleCart;