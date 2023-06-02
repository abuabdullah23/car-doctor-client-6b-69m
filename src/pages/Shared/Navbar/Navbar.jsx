import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { LuSearch } from 'react-icons/lu';
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Navbar = () => {
    // Same menubar for multiple usage : step 1
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* Same menubar for multiple usage : step 2 */}
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    {/* Same menubar for multiple usage : step 2 */}
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex gap-5">

                <HiOutlineShoppingBag className='w-7 h-7' />
                <LuSearch className='w-7 h-7' />
                <button className="py-2 px-5 text-xl font-semibold rounded-lg hover:bg-[#FF3811] text-[#FF3811] hover:text-white border  border-[#FF3811]">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;