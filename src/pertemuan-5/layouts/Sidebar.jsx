import { FaHome, FaUserFriends, FaBookOpen, FaUserPlus} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


export default function Sidebar() {
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <div className="flex items-end">
                    <span id="logo-title" className="font-poppins text-[48px] text-gray-900 font-bold">
                        Sedap
                    </span>
                    <GoDotFill className="text-green-600 text-[29px] ml-1 mb-1" />
                </div>
                <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>
            {/* List Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
                        <div id="menu-1" className="hover:text-green-500 flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <FaHome className="mr-2" /> Dashboard
                        </div>
                    </li>
                    <li>
                        <div id="menu-2" className="hover:text-green-500 flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <FaUserFriends className="mr-2" /> Orders
                        </div>
                    </li>
                    <li>
                        <div id="menu-3" className="hover:text-green-500 flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <FaBookOpen className="mr-2" /> Customers
                        </div>
                    </li>
                    <li>
                        <div id="menu-4" className="hover:text-green-500 flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <FaUserPlus className="mr-2" /> Contact
                        </div>
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-green-500 px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <span className="text-gray-600 flex items-center">+ Add Menus</span>
                        </div>
                    </div>
                    <img id="footer-avatar" className="w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" />
                </div>
                <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
                <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}