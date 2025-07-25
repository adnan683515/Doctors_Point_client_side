import React from 'react';
import { useForm } from 'react-hook-form';
import vector1 from '../assets/Vector 8.png';
import vector2 from '../assets/Vector 9 (1).png';
import vector3 from '../assets/Vector 9.png';
import topImage from '../assets/Ellipse 3 (1).png'

const AddDoctor = () => {
    const { register, handleSubmit, reset } = useForm();

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

    return (
        <div className="relative min-h-screen  bg-[#EFFAF7]  overflow-hidden ">
            <div className='sm:w-[34%] w-[80%] absolute z-1 top-0 left-0 border'>
                <img className=' absolute z-1 top-0 left-0' src={topImage} alt="" />
                <div className="absolute top-0 left-0 z-10 p-4 md:p-8 text-white space-y-2 max-w-md">
                    <h1 className="text-2xl md:text-4xl font-bold">Doctors Add Page</h1>
                    <div className="w-20 h-1 bg-white rounded-full"></div>

                    <p className="text-sm md:text-base">
                        Please fill in the form to register a new doctor to your system.
                    </p>

                    <ul className="text-sm md:text-base list-disc pl-5 space-y-1  w-[70%] ">
                        <li>Ensure image and certificate are attached</li>
                        <li>Provide correct contact information</li>
                        <li>Select correct designation and department</li>
                    </ul>


                </div>

            </div>


            <img src={vector1} alt="vector" className="absolute right-0 top-0  opacity-30 pointer-events-none" />
            <img src={vector1} alt="vector" className="absolute right-0 top-5  opacity-30 pointer-events-none" />
            <img src={vector1} alt="vector" className="absolute right-0 top-10  opacity-30 pointer-events-none" />

            {/* 
            <img src={vector2} alt="vector" className="absolute top-6 left-0 w-40 opacity-30 pointer-events-none" />
             <img src={vector3} alt="vector" className="absolute top-8 left-0 w-40 opacity-30 pointer-events-none" />
             <img src={vector3} alt="vector" className="absolute top-11 left-0 w-40 opacity-30 pointer-events-none" /> */}

            {/* 🧾 Doctor Form */}
            {/* <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 relative z-10">
                <h2 className="text-3xl font-semibold mb-6 text-[#007F5F] text-center">Add a New Doctor</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input {...register("name")} placeholder="Full Name" className="input-style" required />

                    <select {...register("designation")} className="input-style" required>
                        <option value="">Select Designation</option>
                        <option value="Junior Doctor">Junior Doctor</option>
                        <option value="Senior Doctor">Senior Doctor</option>
                        <option value="Consultant">Consultant</option>
                        <option value="Specialist">Specialist</option>
                        <option value="Surgeon">Surgeon</option>
                        <option value="General Physician">General Physician</option>
                    </select>

                    <select {...register("department")} className="input-style" required>
                        <option value="">Select Department</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Oncology">Oncology</option>
                        <option value="ENT">ENT (Ear, Nose, Throat)</option>
                        <option value="Psychiatry">Psychiatry</option>
                        <option value="Gynecology">Gynecology</option>
                        <option value="General Surgery">General Surgery</option>
                    </select>

                    <input {...register("specialty")} placeholder="Specialty (Optional)" className="input-style" />
                    <input {...register("phone")} placeholder="Phone Number" className="input-style" />
                    <input {...register("email")} type="email" placeholder="Email Address" className="input-style" />
                    <input {...register("image")} type="file" accept="image/*" className="input-style" />
                    <input {...register("certificate")} type="file" accept=".pdf" className="input-style" />
                    <input {...register("experience")} type="number" placeholder="Experience (Years)" className="input-style" />

                    <select {...register("role")} className="input-style" required>
                        <option value="">Select Role</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Consultant">Consultant</option>
                        <option value="Surgeon">Surgeon</option>
                    </select>

                    <div className="md:col-span-2 flex justify-center mt-4">
                        <button type="submit" className="px-6 py-2 bg-[#007F5F] text-white rounded-full hover:bg-[#00674D] transition duration-300">
                            Add Doctor
                        </button>
                    </div>
                </form>
            </div> */}
        </div>
    );
};

export default AddDoctor;
