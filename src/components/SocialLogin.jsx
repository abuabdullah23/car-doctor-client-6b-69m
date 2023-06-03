import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase-config';

const SocialLogin = () => {
      
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // handle GoogleSignIn
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider);
    }

    return (
        <div className='flex gap-3 justify-center my-5'>
            <button className='bg-slate-200 hover:bg-slate-300 rounded-full p-2 text-center text-blue-700'><FaFacebook className='w-6 h-6' /></button>

            <button className='bg-slate-200 hover:bg-slate-300 rounded-full p-2 text-center text-blue-500'><FaLinkedin className='w-6 h-6' /></button>
            
            <button onClick={handleGoogleSignIn} className='bg-slate-200 hover:bg-slate-300 rounded-full p-2 text-center text-[#009914]'><FaGoogle className='w-6 h-6' /></button>
        </div>
    );
};

export default SocialLogin;