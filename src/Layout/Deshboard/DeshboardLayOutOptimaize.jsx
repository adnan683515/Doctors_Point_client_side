import React, { useState } from "react";
import clsx from "clsx";
import { GoHome } from "react-icons/go";
import { Link, Outlet } from "react-router";
import {
    FaUserMd,
    FaCalendarCheck,
    FaPills,
    FaUserPlus,
    FaPlusSquare,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdHelpCenter } from "react-icons/md";
import NavberOfDeshboard from "./NavberOfDeshboard";
import Deshboard from "./Deshboard";



const DeshboardLayOutOptimaize = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex sm:h-screen bg-gray-100overflow-hidden">

            <div
                className={clsx(
                    "bg-white rounded-lg text-black w-64 space-y-6 px-4 py-6 absolute md:relative inset-y-0 left-0 transform md:translate-x-0 transition-transform duration-200 ease-in-out z-50  h-[calc(100vh-56px)] md:h-screen mt-14 md:mt-0",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                )}
            >
                <Link to={"/"}>
                    <h2 className="text-2xl font-bold mb-6">Doctors Point</h2>
                </Link>

                <nav className="space-y-1">
                    <Link
                        to={"/dashboard"}
                        className="flex gap-2 bg-green-100 py-2 px-2 rounded-md font-semibold text-green-700"
                    >
                        <GoHome size={20} />
                        <span>Dashboard</span>
                    </Link>

                    <div className="flex gap-2 text-gray-600 py-2 px-2 rounded-md cursor-pointer hover:bg-gray-100">
                        <FaUserMd size={20} />
                        <span>Doctors</span>
                    </div>

                    <div className="flex gap-2 text-gray-600 py-2 px-2 rounded-md cursor-pointer hover:bg-gray-100">
                        <FaCalendarCheck size={20} />
                        <span>Appointment</span>
                    </div>

                    <div className="flex gap-2 text-gray-600 py-2 px-2 rounded-md cursor-pointer hover:bg-gray-100">
                        <FaPills size={20} />
                        <span>Medicine</span>
                    </div>

                    <Link
                        to={"/dashboard/AddDoctors"}
                        className="flex gap-2 text-gray-600 py-2 px-2 rounded-md cursor-pointer hover:bg-gray-100"
                    >
                        <FaUserPlus size={20} />
                        <span>Add Doctor</span>
                    </Link>

                    <Link to={'/dashboard/Addmedicin'} className="flex gap-2 text-gray-600 py-2 px-2 rounded-md cursor-pointer hover:bg-gray-100">
                        <FaPlusSquare size={20} />
                        <span>Add Medicine</span>
                    </Link>
                </nav>

                <div className="absolute bottom-10 text-gray-600 left-4 flex items-center gap-2 cursor-pointer hover:text-green-700">
                    <MdHelpCenter size={20} />
                    <span>Help Center</span>
                </div>

                <div className="absolute bottom-4 text-gray-600 left-4 flex items-center gap-2 cursor-pointer hover:text-red-600">
                    <FiLogOut size={20} />
                    <span>Logout</span>
                </div>
            </div>


            <div className="flex-1 flex flex-col overflow-y-auto">


                <NavberOfDeshboard
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                ></NavberOfDeshboard>


                <div className="mt-16 sm:mt-0  ">


                    <Outlet></Outlet>

                </div>
            </div>
        </div>
    );
};

export default DeshboardLayOutOptimaize;
