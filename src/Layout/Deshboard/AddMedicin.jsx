import React from "react";
import { useForm } from "react-hook-form";
import AuthHook from "../../Hooks/AuthHook";
import ProgressLoaindg from "../../Share/ProgressLoaindg";

const AddMedicine = () => {

    const { user, loading } = AuthHook()


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        const medicinInfo = {email : user?.email , ...data}
        console.log(medicinInfo)
    
    };

    if (loading || !user) {
        return <div className="min-h-screen flex justify-center items-center">
            <ProgressLoaindg></ProgressLoaindg>
        </div>
    }
    return (
        <div className="grid relative overflow-hidden grid-cols-1 md:grid-cols-2 min-h-screen">

            <div data-aos="zoom-in-right" className="bg-[#007F5F] text-white flex flex-col justify-center items-center p-10 my-6 rounded-lg  ">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    Medicine Management
                </h1>
                <p className="text-lg text-blue-100 text-center max-w-md mb-6">
                    Easily add and manage medicines with all the details like category,
                    dosage, manufacturer, and expiry date. A clean and user-friendly
                    dashboard for healthcare admins.
                </p>
                <p className="text-sm text-blue-200 italic">
                    "Smart health needs smart solutions."
                </p>
            </div>


            <div data-aos="zoom-out" className="bg-green-50 flex justify-center items-center p-6">
                <div className="w-full md:w-[90%] bg-white rounded-2xl p-6">
                    <h2 className="text-3xl font-bold mb-2 text-center text-[#007F5F]">
                        ➕ Add New Medicine
                    </h2>
                    <p className="text-center text-gray-500 mb-6">
                        Fill out the form below to add a new medicine to the inventory.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Medicine Name */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Medicine Name</label>
                            <input
                                {...register("name", { required: "Medicine name is required" })}
                                className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Paracetamol"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        {/* Generic Name */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Generic Name</label>
                            <input
                                {...register("generic", { required: "Generic name is required" })}
                                className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Acetaminophen"
                            />
                            {errors.generic && <p className="text-red-500 text-sm mt-1">{errors.generic.message}</p>}
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Category</label>
                            <select
                                {...register("category", { required: "Category is required" })}
                                className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Category</option>
                                <option value="tablet">Tablet</option>
                                <option value="capsule">Capsule</option>
                                <option value="syrup">Syrup</option>
                                <option value="injection">Injection</option>
                            </select>
                            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                        </div>

                        {/* Strength / Dosage */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Dosage / Strength</label>
                            <input
                                {...register("strength", { required: "Dosage/Strength is required" })}
                                className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="500mg"
                            />
                            {errors.strength && <p className="text-red-500 text-sm mt-1">{errors.strength.message}</p>}
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Price (BDT)</label>
                            <input
                                type="number"
                                {...register("price", {
                                    required: "Price is required",
                                    min: { value: 1, message: "Price must be greater than 0" },
                                })}
                                className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="50"
                            />
                            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Stock Quantity</label>
                            <input
                                type="number"
                                {...register("stock", {
                                    required: "Stock quantity is required",
                                    min: { value: 1, message: "Stock must be at least 1" },
                                })}
                                className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="100"
                            />
                            {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>}
                        </div>

                        {/* Manufacturer */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Manufacturer</label>
                            <input
                                {...register("manufacturer", { required: "Manufacturer name is required" })}
                                className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Square Pharmaceuticals"
                            />
                            {errors.manufacturer && <p className="text-red-500 text-sm mt-1">{errors.manufacturer.message}</p>}
                        </div>

                        {/* Expiry Date */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Expiry Date</label>
                            <input
                                type="date"
                                {...register("expiry", { required: "Expiry date is required" })}
                                className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry.message}</p>}
                        </div>


                        <div className="md:col-span-2">
                            <label className="block mb-1 font-medium text-gray-700">Description</label>
                            <textarea
                                {...register("description", { required: "Description is required" })}
                                className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Short description..."
                            />
                            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                        </div>

                        {/* Image Upload with Preview */}
                        <div className="md:col-span-2">
                            <label className="block mb-1 font-medium text-gray-700">Medicine Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                {...register("image", { required: "Image is required" })}

                                className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}


                        </div>


                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-[#007F5F] text-white py-3 rounded-xl hover:bg-[#009f77] transition duration-200 font-semibold"
                            >
                                ➕ Add Medicine
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMedicine;
