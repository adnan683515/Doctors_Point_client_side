import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import AuthHook from '../../Hooks/AuthHook';
import { BarLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const Login = () => {
    const [show, setShow] = useState(false)
    const { handleLogin } = AuthHook()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const loginFuction = (data) => {
        setLoading(true)
        setError("")
        const { email, password } = data
        handleLogin(email, password)
            .then(() => {
                toast.success("Login Successfully!")
                navigate('/')
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                setLoading(false); 
            });
    }
    if (error) {
        toast.error(error)
    }

    return (
        <div className="min-h-[80vh]  flex items-center justify-center bg-[#EFFAF7] py-12 px-4">
            <div className="sm:w-[60%]  w-[95%] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row">

                <div data-aos="fade-left" className="bg-[#007F5F] w-full sm:w-[45%] flex flex-col justify-center items-center p-6 text-white space-y-4">
                    <img
                        src="https://i.ibb.co/ZRbRs4qC/doctor-1-91.png"
                        alt="Doctor"
                        className="w-[80%]"
                    />
                    <h2 className="text-2xl font-bold">Welcome Back!</h2>
                    <p className="text-sm text-center">
                        Login to access your appointments, reports, and more.
                    </p>
                </div>


                <div data-aos="fade-right" className="w-full sm:w-[55%] bg-white p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login to Your Account</h2>
                    <form onSubmit={handleSubmit(loginFuction)} className="space-y-2">
                        <div>
                            <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                id="email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007F5F]"
                                placeholder="Enter your email"
                            />
                            {
                                errors?.email && <p className='text-red-600'> Email Field Is required </p>
                            }
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
                            <input

                                type={show ? 'text' : "password"}
                                {...register('password', { required: true })}
                                id="password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007F5F]"
                                placeholder="Enter your password"
                            />
                            {
                                errors?.password && <p className='text-red-500'>Password Field Is Requried</p>
                            }

                        </div>
                        <div className='flex gap-2'>
                            <div className='flex justify-center items-center'> <input onChange={() => setShow(!show)} type="checkbox" name="" id="" /></div> <span>show password</span>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#007F5F] text-white py-2 rounded-l-full rounded-r-full font-semibold hover:bg-[#00604b] transition"
                        >
                            {loading ? <div className="w-full bg-[#007F5F] text-white py-4 rounded-full font-semibold hover:bg-[#00604b] transition flex justify-center items-center space-x-2">
                                <span className="text-white text-sm">Login...</span>
                                <BarLoader color="#ffffff" height={4} width={100} speedMultiplier={1.2} />
                            </div> : 'Login'}
                        </button>
                    </form>
                    <div>
                        <div className="divider ">OR</div>
                    </div>
                    <div className='w-full'>
                        <button className="btn w-full bg-green-100 rounded-l-full rounded-r-full text-black border-green-200">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>

                    <div className='flex justify-end mt-2'>
                        <div>
                            You have not an account ? <Link className='text-green-600 underline' to={'/signup'}>register</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
