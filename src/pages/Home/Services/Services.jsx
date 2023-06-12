import React, { useContext, useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Services = () => {
    const { user } = useContext(AuthContext);

    const [services, setServices] = useState([])

    const [asc, setAsc] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/services?sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc])

    return (
        <div className='my-10'>
            <div className='flex justify-center mb-10'>
                <div className='text-center md:w-1/2 px-5'>
                    <h3 className='text-[#FF3811] text-2xl font-bold'>Service</h3>
                    <h2 className='text-5xl font-bold my-5'>Our Service Area</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>

            <div className='text-center mb-10'>
                {
                    user && <Link to="/add-new-service" className='bg-[#FF3811] hover:bg-[#e02500] text-white text-xl font-semibold mt-5 py-3 px-5 rounded-md'>Add New Service</Link>
                }
            </div>
            <div className='ms-10 my-5'>
                <button className='py-2 px-4 rounded-md bg-slate-300'
                    onClick={() => setAsc(!asc)}
                >
                    {
                        asc ? 'Price: Hight to Low' : 'Price: Low to High'
                    }
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;