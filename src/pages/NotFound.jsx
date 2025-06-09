import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-xl font-semibold mb-2">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Halaman yang kamu cari tidak ditemukan.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}