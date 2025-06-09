import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OList = () => {
    const orders = [
        { id: 1, customerName: 'John Doe', email: 'john@example.com', date: '2023-10-01', details: 'Order details for John' },
        { id: 2, customerName: 'Jane Smith', email: 'jane@example.com', date: '2023-10-02', details: 'Order details for Jane' },
    ];

    const navigate = useNavigate();

    useEffect(() => {
        // Cek status login pengguna
        if (!localStorage.getItem('isAuthenticated')) {
            navigate('/order/list'); 
        }
    }, [navigate]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <span id="breadcrumb-current" className="text-gray-500">Order List</span>
            <h1 className="text-3xl font-bold mb-6">Ini adalah halaman Order List</h1>
            <h2 className="text-2xl font-bold mb-4">Order List</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Customer Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Order Date</th>
                            <th className="py-2 px-4 border-b">Order Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td className="py-2 px-4 border-b">{order.id}</td>
                                <td className="py-2 px-4 border-b">{order.customerName}</td>
                                <td className="py-2 px-4 border-b">{order.email}</td>
                                <td className="py-2 px-4 border-b">{order.date}</td>
                                <td className="py-2 px-4 border-b">{order.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OList;
