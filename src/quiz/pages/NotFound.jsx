import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center p-8">
            <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-6">
                Oops! The page you're looking for doesn't exist.
            </p>
            <button
                onClick={() => navigate('/')}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
            >
                Go to Dashboard
            </button>
        </div>
    );
};

export default NotFound;
