import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";



export default function Dashboard() {
    return (
        <div id="dashboard-container" className="p-6 bg-gray-100 min-h-screen">
           
        <PageHeader/>

            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="orders-icon" className="text-3xl text-white bg-green-500 rounded-full p-4">
                        <FaShoppingCart />
                    </div>
                    <div id="orders-info" className="mt-2 flex flex-col">
                        <span id="orders-count" className="text-xl font-bold text-gray-900 text-2xl font-bold">75</span>
                        <span id="orders-text" className="block text-gray-500 " >Total Orders</span>
                    </div>
                </div>

                <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="delivered-icon" className="text-3xl text-white bg-blue-500 rounded-full p-4">
                        <FaTruck />
                    </div>
                    <div id="delivered-info" className="mt-2  flex flex-col">
                        <span id="delivered-count" className="text-2xl font-bold">175</span>
                        <span id="delivered-text" className="block text-gray-500">Total Delivered</span>
                    </div>
                </div>

                <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="canceled-icon" className="text-3xl text-white bg-red-500 rounded-full p-4">
                        <FaBan />
                    </div>
                    <div id="canceled-info" className="mt-2  flex flex-col">
                        <span id="canceled-count" className="text-xl font-bold text-gray-900 text-2xl font-bold">40</span>
                        <span id="canceled-text" className="block text-gray-500">Total Canceled</span>
                    </div>
                </div>

                {/* Total Revenue */}
                <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="revenue-icon" className="text-3xl text-white bg-yellow-500 rounded-full p-4">
                        <FaDollarSign />
                    </div>
                    <div id="revenue-info" className="mt-2  flex flex-col">
                        <span id="revenue-amount" className="text-xl font-bold text-gray-900 text-2xl font-bold">Rp.128</span>
                        <span id="revenue-text" className="block text-gray-500">Total Revenue</span>
                    </div>
                </div>
            </div>
        </div>
    );
}