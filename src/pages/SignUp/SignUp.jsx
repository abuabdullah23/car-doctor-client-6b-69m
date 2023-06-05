import signUpImg from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const signedUpUser = result.user;
                console.log(signedUpUser)

                // jwt token method for SignUp : call from AuthProvider useEffect

                // ==================== Success Alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Registration!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                // ==================== Success Alert
            })
            .catch(error => {
                console.log(error.message);
                // ==================== Error Alert
                Swal.fire({
                    title: 'error!',
                    text: 'Registration not Successful! Please Try Again!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                // ==================== Error Alert
            })

    }

    return (
        <div className='md:flex md:py-16 items-center gap-10 p-5'>
            <div className='md:w-1/2'>
                <img src={signUpImg} alt="Login Image" />
            </div>

            <div className='md:w-1/2 p-10 my-10 rounded-lg border border-slate-300'>
                <h2 className='text-center my-5 font-bold text-3xl'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div>
                        <p className='mt-5 text-xl font-semibold'>Name</p>
                        <input type="name" name="name" id="name" placeholder='Your name' className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                    </div>
                    <div>
                        <p className='mt-5 text-xl font-semibold'>Email</p>
                        <input type="email" name="email" id="email" placeholder='Your email' className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                    </div>
                    <div>
                        <p className='mt-5 text-xl font-semibold'>Password</p>
                        <input type="password" name="password" id="password" placeholder='Your password' className='py-3 px-5 rounded-md border border-slate-300 w-full mt-2' />
                    </div>
                    <button type='submit' className="py-3 px-6 text-xl font-semibold rounded-lg hover:bg-white bg-[#FF3811] text-white hover:text-[#FF3811] hover:border hover:border-[#FF3811] w-full mt-5">Sign Up</button>
                </form>
                <div className='text-center mt-5'>
                    <p>Or Sign Up with</p>

                    <SocialLogin/>

                    <p>Already have an account?
                        <span className='font-bold text-[#FF3811]'>
                            <Link to='/login'> Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;