import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(localStorage.getItem('isAuthenticated'));
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-green-50">
            <h1 className="text-2xl font-bold text-green-700 mb-4">
                You are not authorized to view this page.
            </h1>
            <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow transition"
            >
                Back to Login
            </button>
        </div>
    );
};

export default Unauthorized;
