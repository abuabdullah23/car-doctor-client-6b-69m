import React from 'react';
import logo from '../../../assets/logo.svg'
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer px-10 py-16 bg-[#151515] text-slate-200">
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
                <span className="footer-title">About</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">Why Car Doctor</a>
                <a className="link link-hover">About</a>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accessability</a>
            </div>
        </footer>
    );
};

export default Footer;