import React from 'react';

const CustomerList = () => {
    const customers = [
        { id: 1, name: 'Andi Wijaya', city: 'Jakarta', email: 'andi.wijaya@example.com' },
        { id: 2, name: 'Siti Nurhaliza', city: 'Surabaya', email: 'siti.nurhaliza@example.com' },
        { id: 3, name: 'Budi Santoso', city: 'Bandung', email: 'budi.santoso@example.com' },
        { id: 4, name: 'Rina Marlina', city: 'Medan', email: 'rina.marlina@example.com' },
        { id: 5, name: 'Agus Pratama', city: 'Yogyakarta', email: 'agus.pratama@example.com' },
        // Tambahkan lebih banyak data jika mau
    ];

    <p>Ini adalah halaman CustomerList.</p>

    return (    
        <div className="p-6 bg-gray-100 min-h-screen">
              <h1 className="text-3xl font-bold mb-6">Ini adalah halaman Customer List</h1>
            <h2 className="text-2xl font-bold mb-4">Customer List</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b text-left">ID</th>
                            <th className="px-4 py-2 border-b text-left">Name</th>
                            <th className="px-4 py-2 border-b text-left">City</th>
                            <th className="px-4 py-2 border-b text-left">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="hover:bg-gray-100">
                                <td className="px-4 py-2 border-b">{customer.id}</td>
                                <td className="px-4 py-2 border-b">{customer.name}</td>
                                <td className="px-4 py-2 border-b">{customer.city}</td>
                                <td className="px-4 py-2 border-b">{customer.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerList;
