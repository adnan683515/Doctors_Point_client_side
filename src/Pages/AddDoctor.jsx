import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import topImage from '../assets/Ellipse 3 (1).png'


const AddDoctor = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [days, setDays] = useState([])

    const onSubmit = (data) => {
        const doctorForm = {
            name: data.name,
            designation: data.designation,
            department: data.department,
            specialty: data.specialty,
            phone: data.phone,
            email: data.email,
            image: data.image[0],
            certificate: data.certificate[0],
            experience: data.experience,
            role: data.role,
        };
        console.log("Doctor Info:", doctorForm);
        reset();
    };
    console.log(days)

    return (

        <div>
            <div className="w-full m4-8 text-center ">
                <h1 className="text-3xl text-center md:text-4xl font-bold text-[#007F5F] mb-2">Doctor Registration Form</h1>
                <div className='flex justify-center items-center '>
                    <p className="text-gray-600 text-sm md:text-base text-center">
                    Fill out the form below to register a new doctor including availability, department, experience, and credentials.
                </p>
                </div>
                <hr className='w-[80%] text-gray-300 mt-2 mx-auto' />
            </div>
            <div className="bg-[#EFFAF7] min-h-screen flex justify-center items-center py-10 px-4">

                <form data-aos="flip-left" onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row w-full relative  max-w-6xl rounded-2xl overflow-hidden shadow-lg">


                    <div data-aos="zoom-in-right" className="w-full md:w-[30%] bg-[#007F5F] p-6 flex flex-col items-start gap-4 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                        <h3 className="text-white font-semibold text-xl mb-2">Select Days</h3>
                        <p className="text-white text-sm mb-4">
                            Choose the days you are available to work or consult.
                        </p>


                        <div className="flex flex-wrap justify-start gap-2 w-full">
                            {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        const findinfo = days.find((item) => item === day);
                                        if (findinfo) {
                                            const filter = days.filter((item) => day !== item);
                                            setDays([...filter]);
                                        } else {
                                            setDays([...days, day]);
                                        }
                                    }}
                                    className={`px-5 py-2 cursor-pointer border border-green-400 rounded-full font-semibold min-w-[70px] 
                transition-all duration-300 ease-in-out
                ${days.includes(day)
                                            ? 'bg-[#007F5F] scale-90 text-white shadow-lg hover:bg-green-400'
                                            : 'bg-white text-green-600 hover:bg-green-100 hover:text-green-400'
                                        }`}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>


                        <div className="w-full mt-4">
                            <label className="block text-white text-sm font-medium mb-1">Start Time (Patient Visit)</label>
                            <input
                                {...register("startTime", { required: "Required" })}
                                type="time"
                                placeholder="e.g. 15"
                                className="w-full px-4 py-2 rounded-lg bg-white text-[#007F5F] font-semibold focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            {errors.startTime && <p className="text-red-200 text-xs mt-1">{errors.startTime.message}</p>}
                        </div>


                        <div className="w-full">
                            <label className="block text-white text-sm font-medium mb-1">End Time (Patient Visit)</label>
                            <input
                                {...register("endTime", { required: "Required" })}
                                type="time"
                                placeholder="e.g. 20"
                                className="w-full px-4 py-2 rounded-lg bg-white text-[#007F5F] font-semibold focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            {errors.endTime && <p className="text-red-200 text-xs mt-1">{errors.endTime.message}</p>}
                        </div>
                    </div>


                    <div
                        data-aos="zoom-in-right"
                        className=" sm:w-[70%] mx-auto p-8 bg-green-50 rounded-2xl shadow-md space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-center text-[#007F5F]">Add New Doctor</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label className="block mb-1 font-medium">Full Name</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="Dr. John Doe"
                                    className="w-full bg-white  px-4 py-2 rounded"
                                />
                                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                            </div>


                            <div>
                                <label className="block mb-1 font-medium">Email Address</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+\.\S+$/,
                                            message: "Invalid email format",
                                        },
                                    })}
                                    placeholder="doctor@example.com"
                                    className="w-full bg-white  px-4 py-2 rounded"
                                />
                                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                            </div>


                            <div>
                                <label className="block mb-1 font-medium">Designation</label>
                                <select
                                    {...register("designation", { required: "Designation is required" })}
                                    className="w-full  bg-white px-4 py-2 rounded"
                                >
                                    <option value="">Select Designation</option>
                                    <option value="Junior Doctor">Junior Doctor</option>
                                    <option value="Senior Doctor">Senior Doctor</option>
                                    <option value="Consultant">Consultant</option>
                                    <option value="Surgeon">Surgeon</option>
                                    <option value="General Physician">General Physician</option>
                                </select>
                                {errors.designation && <p className="text-sm text-red-500">{errors.designation.message}</p>}
                            </div>


                            <div>
                                <label className="block mb-1 font-medium">Department</label>
                                <select
                                    {...register("department", { required: "Department is required" })}
                                    className="w-full bg-white  px-4 py-2 rounded"
                                >
                                    <option value="">Select Department</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                    <option value="Pediatrics">Pediatrics</option>
                                    <option value="Dermatology">Dermatology</option>
                                    <option value="ENT">ENT (Ear, Nose, Throat)</option>
                                    <option value="Gynecology">Gynecology</option>
                                </select>
                                {errors.department && <p className="text-sm text-red-500">{errors.department.message}</p>}
                            </div>


                            <div>
                                <label className="block mb-1 font-medium">Specialty</label>
                                <input
                                    {...register("specialty")}
                                    placeholder="Optional"
                                    className="w-full  bg-white px-4 py-2 rounded"
                                />
                            </div>


                            <div>
                                <label className="block mb-1 font-medium">Phone Number</label>
                                <input
                                    {...register("phone", { required: "Phone number is required" })}
                                    placeholder="01XXXXXXXXX"
                                    className="w-full bg-white  px-4 py-2 rounded"
                                />
                                {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                            </div>


                            <div>
                                <label className="block mb-1 font-medium">Doctor Image</label>
                                <input
                                    {...register("image", { required: "Doctor image is required" })}
                                    type="file"
                                    accept="image/*"
                                    className="w-full  bg-white px-4 py-2 rounded"
                                />
                                {errors.image && <p className="text-sm text-red-500">{errors.image.message}</p>}
                            </div>


                            <div>
                                <label className="block mb-1 font-medium">Certificate</label>
                                <input
                                    {...register("certificate", { required: "Certificate is required" })}
                                    type="file"
                                    className="w-full bg-white  px-4 py-2 rounded"
                                />
                                {errors.certificate && <p className="text-sm text-red-500">{errors.certificate.message}</p>}
                            </div>


                            <div>
                                <label className="block mb-1 font-medium">Experience (Years)</label>
                                <input
                                    {...register("experience", {
                                        required: "Experience is required",
                                        min: { value: 0, message: "Can't be negative" },
                                    })}
                                    type="number"
                                    placeholder="e.g. 5"
                                    className="w-full bg-white  px-4 py-2 rounded"
                                />
                                {errors.experience && <p className="text-sm text-red-500">{errors.experience.message}</p>}
                            </div>

                            {/* Role */}
                            <div>
                                <label className="block mb-1 font-medium">Role</label>
                                <select
                                    {...register("role", { required: "Role is required" })}
                                    className="w-full  bg-white px-4 py-2 rounded"
                                >
                                    <option value="">Select Role</option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="Consultant">Consultant</option>
                                    <option value="Surgeon">Surgeon</option>
                                </select>
                                {errors.role && <p className="text-sm text-red-500">{errors.role.message}</p>}
                            </div>


                            <div className="md:col-span-2">
                                <label className="block mb-1 font-medium">Additional Information</label>
                                <textarea
                                    {...register("additionalInfo")}
                                    placeholder="Write anything important..."
                                    className="w-full  px-4 py-2 bg-white rounded resize-none h-24"
                                />
                            </div>
                        </div>


                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#007F5F]  w-[90%] sm:w-[50%] text-white font-semibold px-8 py-2 rounded-full hover:bg-[#00674D] transition"
                            >
                                Add Doctor
                            </button>
                        </div>
                    </div>




                </form>
            </div>
        </div>






    );
};

export default AddDoctor;
