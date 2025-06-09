import React from 'react';
import PageHeaderOrder from '../components/PageHeaderOrder'; // Impor komponen PageHeaderOrder
import { FaShoppingCart } from 'react-icons/fa'; // Ikon shopping cart
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom

export default function Order() {
    return (
        <div id="order-container" className="p-6 bg-gray-100 min-h-screen">
            {/* Menambahkan komponen PageHeaderOrder di sini */}
            <PageHeaderOrder />

            <div id="order-form" className="bg-white rounded-lg shadow-md p-6 mt-5">
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customer-name">
                            Customer Name
                        </label>
                        <input
                            type="text"
                            id="customer-name"
                            placeholder="Enter customer name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email address"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="order-date">
                            Order Date
                        </label>
                        <input
                            type="date"
                            id="order-date"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="order-details">
                            Order Details
                        </label>
                        <textarea
                            id="order-details"
                            placeholder="Enter order details"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="4"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            <FaShoppingCart className="mr-2" />
                            Submit Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
