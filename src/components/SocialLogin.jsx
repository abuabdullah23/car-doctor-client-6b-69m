import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase-config';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    // redirect after login: step 2
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // handle GoogleSignIn
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                const signedUser = {
                    email: user.email
                };

                // jwt token method for login
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // Warning: local Storage is not secure for store access token
                        localStorage.setItem('car-access-token', data.token);
                    })
                // ==================== Success Alert
                Swal.fire({
                    title: 'Welcome!',
                    text: 'Successfully Sign In!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                // ==================== Success Alert
                // redirect after login : step 3
                navigate(from, { replace: true });
            })
            .catch(error => {
                // ==================== Error Alert
                Swal.fire({
                    text: 'Sign In not Successful! Please Try Again!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                // ==================== Error Alert
            })

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