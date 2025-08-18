import React from "react";
import { Menu, X } from "lucide-react";

const NavberOfDeshboard = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <div className="bg-white  px-4 py-3 flex justify-between items-center fixed top-0 left-0 w-full md:static z-40">
            <h1 className="text-xl font-semibold text-gray-800">
                Admin Control Panel
            </h1>

            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-700 focus:outline-none md:hidden bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition"
            >
                {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
        </div>
    );
};

export default NavberOfDeshboard;
