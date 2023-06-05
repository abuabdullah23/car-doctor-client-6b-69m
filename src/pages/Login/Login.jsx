import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin';
import { data } from 'autoprefixer';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    // redirect after login: step 2
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // sign in method
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                // jwt token method for login : call from AuthProvider useEffect
                
                // redirect after login : step 3
                navigate(from, { replace: true });

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
                    text: 'Log In not Successful! Email or Password not Matched! Please Try Again!',
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

                    <SocialLogin />

                    <p>You have no account?
                        <span className='font-bold text-[#FF3811]'>
                            <Link to='/sign-up'> Sign Up</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Login;