import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import AuthHook from '../../Hooks/AuthHook';
import ImageBBHooks from '../../Hooks/ImageBBHooks';
import toast from 'react-hot-toast';
import { BarLoader } from 'react-spinners';
import AxiosHook from '../../Hooks/AxiosHook';



const SignUp = () => {
    const [show, setShow] = useState(false)
    const [registerLoaindg, setRegisterLoaindg] = useState(false)
    const { handleSignup, handleUpdate } = AuthHook()
    const axoisHook = AxiosHook()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        setRegisterLoaindg(true)
        const { image, username, email, password, confirmPassword } = data;
        console
        console.log(password, confirmPassword)
        if (password !== confirmPassword) {
            setRegisterLoaindg(false)
            return toast.error("password not match")

        }
        const imageUrl = await ImageBBHooks(image)
        if (imageUrl) {
            handleSignup(email, password)
                .then((() => {
                    handleUpdate({ displayName: username, photoURL: imageUrl })
                        .then(async () => {

                            const userInfo = { name: username, email: email, image: imageUrl, status: 'patient' ,service: 0 }

                            const finalResult = await axoisHook.post('/usersDataSave', userInfo)
                            if (finalResult?.data?.insertedId) {
                                toast.success("Login Sucessfully")
                                reset()
                                setRegisterLoaindg(false)
                                navigate('/')
                            }
                            else{
                                console.log("not registered")
                                setRegisterLoaindg(false)
                            }

                        })
                        .catch((error) => {
                            console.log(error.message)
                            setRegisterLoaindg(false)
                        })
                }))
                .catch((error => {
                    setRegisterLoaindg(false)
                    console.log(error)
                }))
        }
        else {
            console.log("image not upload")
        }

    };


    return (
        <div className="min-h-[80vh] bg-[#EFFAF7] relative overflow-hidden flex items-center justify-center  py-12 px-4">
            <div data-aos="zoom-in" className="sm:w-[60%] w-[95%] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col-reverse sm:flex-row">

                <div data-aos="fade-right" className="w-full sm:w-[55%] bg-white p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Your Account</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="username" className="block text-gray-600 mb-1">Username</label>
                            <input
                                type="text"
                                id="username"
                                {...register("username", { required: "Username is required" })}
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${errors.username ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#007F5F]`}
                                placeholder="Enter your name"
                            />
                            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                        </div>

                        <div className="col-span-1">
                            <label htmlFor="image" className="block text-gray-600 mb-1">Upload Profile Photo</label>
                            <input
                                type="file"
                                id="image"
                                {...register("image", { required: true })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#007F5F] file:text-white"
                            />
                            {
                                errors?.image && <p className='text-red-500'>image field is required</p>
                            }
                        </div>


                        <div className="col-span-2">
                            <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Invalid email format"
                                    }
                                })}
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#007F5F]`}
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>


                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
                            <input
                                type={show ? 'text' : "password"}
                                id="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#007F5F]`}
                                placeholder="Enter your password"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>


                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="confirmPassword" className="block text-gray-600 mb-1">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                })}
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#007F5F]`}
                                placeholder="Confirm your password"
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex justify-center items-center'>
                                <input onChange={() => setShow(!show)} type="checkbox" name="" id="" />
                            </div>
                            <span>show password</span>
                        </div>

                        <div className="col-span-2 sm:col-span-2">

                            {
                                registerLoaindg ? <div className="w-full bg-[#007F5F] text-white py-4 rounded-full font-semibold hover:bg-[#00604b] transition flex justify-center items-center space-x-2">
                                    <span className="text-white text-sm">Registration...</span>
                                    <BarLoader color="#ffffff" height={4} width={100} speedMultiplier={1.2} />
                                </div> : <button
                                    type="submit"
                                    className="w-full bg-[#007F5F] text-white py-2 rounded-full font-semibold hover:bg-[#00604b] transition"
                                >
                                    Sign Up
                                </button>
                            }
                        </div>
                    </form>

                    <div className="divider my-3">OR</div>


                    <div className="w-full">
                        <button className="btn w-full bg-green-100 rounded-full text-black border-green-200">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            SignIn with Google
                        </button>
                    </div>


                    <div className='flex justify-end mt-2'>
                        <div>
                            Already have an account? <Link className='text-green-600 underline' to={'/login'}>Login</Link>
                        </div>
                    </div>
                </div>


                <div data-aos="fade-left" className="bg-[#007F5F] w-full sm:w-[45%] flex flex-col justify-center items-center p-6 text-white space-y-4">
                    <img
                        src="https://i.ibb.co/fYrvdVV5/nurse-46.png"
                        alt="Nurse"
                        className="w-[80%]"
                    />
                    <h2 className="text-2xl font-bold">Join Our Health Community</h2>
                    <p className="text-sm text-center">
                        Sign up to book appointments, view your records, and manage health easily.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
