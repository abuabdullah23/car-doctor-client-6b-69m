import React from 'react';
import bannerAddNewService from '../../assets/images/checkout/checkout.png'


const AddNewService = () => {

    const handleAddNewServiceToDb = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const servicePrice = form.servicePrice.value;
        const serviceText = form.serviceText.value;
        const serviceType = form.serviceType.value;
        const message = form.message.value;
        const addService = {
            serviceName,
            servicePrice,
            serviceText,
            serviceType,
            message
        }
        console.log(addService);
    }

    return (
        <div className='my-10'>
            <div className='relative'>
                <img className='w-full' src={bannerAddNewService} alt="" />
                <div className='absolute top-0 left-0 rounded-xl bg-gradient-to-r from-[#000000] to-[#57575711] w-full h-full flex items-center'>
                    <h2 className='px-5 md:ps-20 text-6xl font-bold text-white '>Add New Service</h2>
                </div>
                <div className='absolute bottom-0 right-0 rounded-tl-xl rounded-tr-xl bg-[#FF3811]'>
                    <h3 className='text-white py-3 px-5'>Home/Add New Service</h3>
                </div>
            </div>

            <h2 className='text-4xl font-bold text-center my-5'>Add New Service </h2>

            {/* Form section */}
            <form onSubmit={handleAddNewServiceToDb} className='bg-[#F3F3F3] rounded-lg md:p-16 p-5'>
                <div className='md:flex gap-5'>
                    <div className='w-full'>
                        <p className='mt-5 ps-5 text-xl font-semibold'> Service Name</p>
                        <input type="text" name="serviceName" id="serviceName" placeholder='Service Name' className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                    </div>

                    <div className='w-full'>
                        <p className='mt-5 ps-5 text-xl font-semibold'> Service Price</p>
                        <input type="text" name="servicePrice" id="servicePrice" placeholder='Service Price' className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                    </div>
                </div>

                <div className='md:flex gap-5'>
                    <div className='w-full'>
                        <p className='mt-5 ps-5 text-xl font-semibold'> Service Text</p>
                        <input type="text" name="serviceText" id="serviceText" placeholder='Text Here' className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                    </div>
                    <div className='w-full'>
                        <p className='mt-5 ps-5 text-xl font-semibold'> Service Type</p>
                        <input type="text" name="serviceType" id="serviceType" placeholder='Service Type' className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                    </div>
                </div>
                <div className='w-full'>
                    <p className='mt-5 ps-5 text-xl font-semibold'>Your Message</p>
                    <textarea className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' type="text" name="message" id="message" placeholder='Message' cols="30" rows="10"></textarea>
                </div>
                <button className='w-full py-3 px-5 bg-[#FF3811] rounded-lg mt-5 text-xl font-semibold text-white hover:bg-[#eb2c05]' type='submit'>Add New Service</button>

            </form>


        </div>
    );
};

export default AddNewService;