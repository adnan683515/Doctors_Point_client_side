import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 py-12 px-4">
            <div className="sm:w-[60%] w-[95%] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row">

                <div className="bg-[#007F5F] w-full sm:w-[45%] flex flex-col justify-center items-center p-6 text-white space-y-4">
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


                <div className="w-full sm:w-[55%] bg-white p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login to Your Account</h2>
                    <form className="space-y-2">
                        <div>
                            <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007F5F]"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007F5F]"
                                placeholder="Enter your password"
                            />

                        </div>
                        <div className='flex gap-2'>
                            <div className='flex justify-center items-center'> <input type="checkbox" name="" id="" /></div> <span>show password</span>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#007F5F] text-white py-2 rounded-l-full rounded-r-full font-semibold hover:bg-[#00604b] transition"
                        >
                            Login
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
