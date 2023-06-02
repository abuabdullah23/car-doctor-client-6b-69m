import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // sign in method
        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)

                // ==================== Success Alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Log In!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                // ==================== Success Alert
            })
            .catch(error => {
                console.log(error.message)
                // ==================== Error Alert
                Swal.fire({
                    title: 'error!',
                    text: 'Log In not Successfully! Email or Password not Matched! Please Try Again!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                // ==================== Error Alert
            })

    }

    return (
        <div className='md:flex md:py-16 items-center gap-10 p-5'>
            <div className='md:w-1/2'>
                <img src={loginImg} alt="Login Image" />
            </div>

            <div className='md:w-1/2 p-10 my-10 rounded-lg border border-slate-300'>
                <h2 className='text-center my-5 font-bold text-3xl'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <p className='mt-5 text-xl font-semibold'>Email</p>
                        <input type="email" name="email" id="email" placeholder='Your email' className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                    </div>
                    <div>
                        <p className='mt-5 text-xl font-semibold'>Password</p>
                        <input type="password" name="password" id="password" placeholder='Your password' className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                    </div>
                    <button type='submit' className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-white bg-[#FF3811] text-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] w-full mt-5">Login</button>
                </form>
                <div className='text-center mt-5'>
                    <p>Or Sign In with</p>

                    <div className='flex gap-3 justify-center my-5'>
                        <p className='bg-slate-300 rounded-full p-2 text-center text-blue-700'><FaFacebook className='w-6 h-6' /></p>
                        <p className='bg-slate-300 rounded-full p-2 text-center text-blue-500'><FaLinkedin className='w-6 h-6' /></p>
                        <p className='bg-slate-300 rounded-full p-2 text-center text-[#009914]'><FaGoogle className='w-6 h-6' /></p>
                    </div>

                    <p>You have no account?
                        <span className='font-bold text-[#FF3811]'>
                            <Link to='/sign-up'> Sign In</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Login;