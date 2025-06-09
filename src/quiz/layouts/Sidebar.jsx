import { FaHome, FaBookOpen, FaUser } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <div className="flex items-end">
                    <span className="font-poppins text-[48px] text-gray-900 font-bold">Sedap</span>
                    <GoDotFill className="text-green-600 text-[29px] ml-1 mb-1" />
                </div>
                <span className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            {/* Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ul className="space-y-3">
                    <li>
                        <Link to="/" className="hover:text-green-500 flex items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <FaHome className="mr-2" /> Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link to="/order" className="hover:text-green-500 flex items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <FaUser className="mr-2" /> Orders
                        </Link>
                        <ul className="pl-8 mt-2">
                            <li>
                                <Link to="/order/list" className="hover:text-green-500 flex items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                                    ➤ Order List
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/customer" className="hover:text-green-500 flex items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <FaBookOpen className="mr-2" /> Customers
                        </Link>
                        <ul className="pl-8 mt-2">
                            <li>
                                <Link to="/customer/list" className="hover:text-green-500 flex items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                                    ➤ Customer List
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/user" className="hover:text-green-500 flex items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <FaUser className="mr-2" /> Users
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact" className="hover:text-green-500 flex items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <FaUser className="mr-2" /> Contact
                        </Link>
                    </li>

                    <li>
                        <button onClick={handleLogout} className="hover:text-green-500 flex items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <FaUser className="mr-2" /> Logout
                        </button>
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div className="bg-green-500 px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <span className="text-gray-600 flex items-center">+ Add Menus</span>
                        </div>
                    </div>
                    <img className="w-20 rounded-full ml-4" src="https://avatar.iran.liara.run/public/28" alt="Avatar" />
                </div>
                <span className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
                <p className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}
