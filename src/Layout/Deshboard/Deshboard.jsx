import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icon use kortesi
import clsx from 'clsx'; // optional: class toggle korte usefull

const Deshboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const menuItems = ['Dashboard', 'Users', 'Settings', 'Logout'];

    return (
        <div className="min-h-screen flex">

            <div
                className={clsx(
                    'bg-[#007F5F] text-white w-64 space-y-6 px-4 py-6 absolute md:relative inset-y-0 left-0 transform md:translate-x-0 transition-transform duration-200 ease-in-out z-50',
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                )}
            >
                <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>
                <nav className="space-y-3">
                    {menuItems.map((item, i) => (
                        <a
                            key={i}
                            href="#"
                            className="block py-2 px-3 rounded hover:bg-gray-700 transition"
                        >
                            {item}
                        </a>
                    ))}

                    <div className="relative inline-block text-left">
            
                        <div className="group">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                                🏥 Hospitals
                            </button>

                            
                            <ul className="absolute hidden group-hover:block bg-black shadow-md rounded-md mt-2 z-10 w-48">
                                <li className="px-4 py-2 cursor-pointer">Apollo Hospital</li>
                                <li className="px-4 py-2 cursor-pointer">Square Hospital</li>
                                <li className="px-4 py-2 cursor-pointer">Evercare</li>
                                <li className="px-4 py-2 cursor-pointer">Labaid</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>


            <div className="flex-1 flex flex-col w-full">

                <div className="bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden">
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>


                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Welcome to your dashboard 👋</h2>
                    <p className="text-gray-600">
                        You can add your actual dashboard content here. This layout adapts based on screen size.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Deshboard;
