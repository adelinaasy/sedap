import React from 'react';
import { useNavigate } from 'react-router-dom'; // pakai useNavigate untuk tombol pindah
import PageHeaderCust from '../components/PageHeaderCust';

const Customer = () => {
    const navigate = useNavigate();

    const goToCustomerList = () => {
        navigate('/customer/list');
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
        <PageHeaderCust/>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Customers in Indonesia</h1>
            <p className="text-gray-600 mb-6">
                Welcome to the customer management page. Here you can see customers spread across various provinces in Indonesia.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-2">Total Customers: 300+</h2>
                <p className="text-gray-600">Customers are located in Jakarta, Surabaya, Bandung, Medan, and more!</p>
            </div>

            <button
                onClick={goToCustomerList}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-md"
            >
                View Detailed Customer List
            </button>
        </div>
    );
};

export default Customer;
