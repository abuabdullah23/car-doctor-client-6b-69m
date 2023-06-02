import React from 'react';
import logo from '../../../assets/logo.svg'
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer class="footer px-10 py-16 bg-[#151515] text-slate-200">
            <div>
                <img src={logo} alt="" />
                <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                <div className='flex gap-3'>
                    <p className='bg-slate-800 rounded-full p-2 text-center'><FaGoogle className='w-5 h-5' /></p>

                    <p className='bg-slate-800 rounded-full p-2 text-center'><FaTwitter className='w-5 h-5' /></p>

                    <p className='bg-slate-800 rounded-full p-2 text-center'><FaInstagram className='w-5 h-5' /></p>

                    <p className='bg-slate-800 rounded-full p-2 text-center'><FaLinkedin className='w-5 h-5' /></p>

                </div>
            </div>
            <div>
                <span class="footer-title">About</span>
                <a class="link link-hover">Home</a>
                <a class="link link-hover">Service</a>
                <a class="link link-hover">Contact</a>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <a class="link link-hover">Why Car Doctor</a>
                <a class="link link-hover">About</a>
            </div>
            <div>
                <span class="footer-title">Support</span>
                <a class="link link-hover">Support Center</a>
                <a class="link link-hover">Feedback</a>
                <a class="link link-hover">Accessability</a>
            </div>
        </footer>
    );
};

export default Footer;