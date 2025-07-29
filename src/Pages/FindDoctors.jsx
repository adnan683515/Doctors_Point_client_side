import React, { useState } from 'react';
import AxiosHook from '../Hooks/AxiosHook';
import { useQuery } from '@tanstack/react-query';
import DoctorDisplay from '../Components/DoctorDisplay/DoctorDisplay';
import ProgressLoaindg from '../Share/ProgressLoaindg';
import Slider from '@mui/material/Slider';
import { FaSearch } from "react-icons/fa";
import handsome from '../assets/handsomeDoctor.jpg'

const allDept = [
    { value: "Cardiology", label: "Cardiology" },
    { value: "Neurology", label: "Neurology" },
    { value: "Orthopedics", label: "Orthopedics" },
    { value: "Pediatrics", label: "Pediatrics" },
    { value: "Dermatology", label: "Dermatology" },
    { value: "ENT", label: "EENT (Eye, Ear, Nose, Throat)" },
    { value: "Gynecology", label: "Gynecology" }
]


const FindDoctors = () => {

    const axiosHook = AxiosHook()
    const [maxFee, setMaxFee] = useState(null)
    const [allDoctors, setAllDoctors] = useState([])
    const [search, setSearch] = useState("")
    const [degreeName, setDegreeName] = useState("")


    const { isloading, refetch } = useQuery({
        queryKey: 'doctors',
        queryFn: (async () => {
            const data = await axiosHook.get('/allDoctorsGet')
            if (data?.data.length) {
                const Decending = data?.data.sort((a, b) => parseInt(b.fee) - parseInt(a.fee))
                setMaxFee(parseInt(Decending[0].fee))
            }
            setAllDoctors(data?.data)
        })
    })


    const handleVisitamount = async (e) => {
        const result = await axiosHook.get(`/filterDoctor?fee=${e.value}`)
        setAllDoctors(result?.data)
    }

    const getDepthandle = async (value) => {
        const result = await axiosHook.get(`/filterDoctor?dept=${value}`)
        setAllDoctors(result?.data)
    }

    const handleSerachOption = async () => {
        if (search) {
            const result = await axiosHook.get(`/filterDoctor?chamber=${search}`)
            if (result?.data) {
                setAllDoctors(result?.data)
            }
        }
        else {
            alert("NO")
        }
    }

    const handleDegreee = async () => {
        if (degreeName) {
            const result = await axiosHook.get(`/filterDoctor?degree=${degreeName}`)
            setAllDoctors(result?.data)
        }
    }



    return (
        <div className='w-[100%] mx-auto'>
            <div className="bg-[url('https://i.ibb.co/r2H5JYng/online-marketing-h-Igeo-Qj-S-i-E-unsplash.jpg')] bg-no-repeat bg-cover bg-center h-[50vh] w-full flex items-center">
                <div className='flex justify-center items-center  mx-auto'>
                    <div className="text-black px-6 max-w-xl ">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#007F5F]">
                            Find the Right Doctor for You
                        </h1>
                        <p className="text-lg md:text-xl mb-6 text-center">
                            Explore our verified list of doctors across various specialties. Use smart filters to match your needs and view detailed profiles — all in one place.
                        </p>
                        <div className='flex justify-center items-center'>
                            <button className="bg-[#007F5F] text-white px-6 py-3 rounded-l-full rounded-r-full hover:bg-[#00694f] transition-all duration-300">
                                Search Doctors
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col sm:gap-4 w-[95%] mt-5 sm:w-[80%] mx-auto'>

                <div className=' sm:w-[25%] h-auto bg-gray-50'>
                    <aside className="p-4 hidden sm:block">
                        <div className='mb-5'>

                            <div className='flex justify-between'>
                                <h1>Consultation Fee</h1>
                                <button onClick={() => refetch()} className='px-4 py-1 bg-[#007F5F] rounded-l-full hover:scale-95 duration-700 cursor-pointer  rounded-r-full text-white'>Reset</button>
                            </div>
                            <Slider
                                min={100}
                                max={maxFee ? maxFee : '00'}
                                step={50}
                                onChange={(e) => handleVisitamount(e.target)}
                                defaultValue={300}
                                valueLabelDisplay="auto"
                                sx={{
                                    color: '#007F5F',
                                    '& .MuiSlider-thumb': {
                                        borderRadius: '4px',
                                    },
                                    '& .MuiSlider-track': {
                                        backgroundColor: '#007F5F',
                                    },
                                    '& .MuiSlider-rail': {
                                        backgroundColor: '#e0e0e0',
                                    },
                                    '& .MuiSlider-valueLabel': {
                                        backgroundColor: '#007F5F',
                                    },
                                }}
                            />
                            <div className='flex justify-between'>
                                <p className='text-blue-400'>Min: 100</p>
                                <p className='text-blue-500'>Max : {maxFee && maxFee} </p>
                            </div>
                        </div>

                        <h1 className="text-lg sm:text-xl font-semibold text-[#007F5F] mb-3 border-b pb-1 w-fit">
                            Filter by Department
                        </h1>
                        <div className="grid grid-cols-1  gap-3">
                            {allDept?.map((dept) => (
                                <label key={dept.value} className="flex items-center gap-2 text-sm text-gray-700">
                                    <input
                                        type="radio"
                                        name="department"
                                        value={dept.value}
                                        onChange={() => {
                                            // setDeptValue(dept?.value)
                                            getDepthandle(dept?.value)
                                        }}
                                        className="accent-[#007F5F] cursor-pointer w-4 h-4"
                                    />
                                    {dept.label}
                                </label>
                            ))}
                        </div>

                        <div className="flex flex-col mt-7 gap-1 w-full max-w-md mx-auto">
                            <label htmlFor="degree" className="font-semibold text-[#007F5F]">
                                Degree Name
                                <hr className='my-2 border-dotted' />
                            </label>

                            <div className="relative">
                                <input
                                    type="text"
                                    id="degree"
                                    onChange={(e) => setDegreeName(e.target.value)}
                                    name="degree"
                                    placeholder="Enter degree name..."
                                    className="w-full pl-10 pr-4 py-2 border border-[#007F5F] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#007F5F] shadow-sm"
                                />
                                <FaSearch onClick={handleDegreee} className="absolute right-3 cursor-pointer bg-green-100 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>



                    </aside>


                    <div className="relative block sm:hidden pt-3">
                        <input type="checkbox" id="my-drawer-4" className="peer hidden" />
                        <div className='flex justify-end'>
                            <label htmlFor="my-drawer-4" className=" cursor-pointer bg-[#007F5F] rounded-l-full rounded-r-full px-4 py-1 text-white ">Filter</label>
                        </div>

                        <div className="fixed top-0 left-0 w-full bg-base-200 z-50 shadow-lg transform -translate-y-full peer-checked:translate-y-0 transition-transform duration-300">
                            <div className="flex justify-end p-4 bg-amber-300">
                                <label htmlFor="my-drawer-4" className="btn btn-sm">Close</label>
                            </div>
                            <div className="p-4">


                                <h1 className="text-lg sm:text-xl font-semibold text-[#007F5F] mb-3 border-b pb-1 w-fit">
                                    Filter by Department
                                </h1>
                                <div className="grid grid-cols-3 gap-2">
                                    {allDept?.map((dept) => (
                                        <label key={dept.value} style={{ display: "block", margin: "4px 0" }}>
                                            <input
                                                type="radio"
                                                name="department"
                                                value={dept.value}
                                                onChange={(e) => getDepthandle(e.target.value)}
                                            />
                                            {dept.label}
                                        </label>
                                    ))}
                                </div>



                                <div className='mt-10'>
                                    <label htmlFor="my-drawer-4" className="bg-rose-600 mt-5 px-4 py-1 text-white rounded-sm">Close</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className=' sm:w-[80%] bg-gray-50  min-h-[80vh] max-h-[90vh] overflow-y-auto p-5 rounded-md'>
                    <div className="w-full  mx-auto mb-6">
                        <div className="flex items-center border border-[#007F5F] rounded-lg overflow-hidden shadow-sm">
                            <input
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by Chamber name......."
                                className="w-full px-4 py-2 focus:outline-none text-sm text-gray-700 placeholder:text-gray-400"
                            />
                            <button onClick={handleSerachOption} className="bg-[#007F5F] cursor-pointer hover:bg-[#00644b] text-white px-4 py-2 text-sm font-medium">
                                Search
                            </button>
                        </div>
                    </div>
                    <div>
                        {
                            isloading ? <ProgressLoaindg></ProgressLoaindg> : allDoctors?.map((item) => (
                                <DoctorDisplay doctor={item} key={item?._id}></DoctorDisplay>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>

    );
};

export default FindDoctors;