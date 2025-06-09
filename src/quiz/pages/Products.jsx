import { useState, useEffect } from "react";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            axios
                .get(`https://dummyjson.com/products/search?q=${query}`)
                .then((response) => {
                    if (response.status !== 200) {
                        setError(response.data.message);
                        return;
                    }
                    setProducts(response.data.products);
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message || "An unknown error occurred");
                    setProducts([]);
                });
        }, 500); // debounce 500ms

        return () => clearTimeout(timeout); // cleanup timeout setiap kali query berubah
    }, [query]);

    const errorInfo = error ? (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
        </div>
    ) : null;

    return (
        <div className="p-5">
            {errorInfo}

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari produk..."
                className="mb-4 p-3 w-full bg-white rounded-2xl shadow-lg"
            />

            <h1 className="text-xl font-semibold mb-4">Daftar Produk</h1>
            <table className="w-full table-auto border-collapse shadow rounded">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Nama Produk</th>
                        <th className="border px-4 py-2">Harga</th>
                        <th className="border px-4 py-2">Brand</th>
                        <th className="border px-4 py-2">Kategori</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-100">
                                <td className="border px-4 py-2">
                                    <Link
                                        to={`/products/${product.id}`}
                                        className="text-emerald-500 hover:underline"
                                    >
                                        {product.title}
                                    </Link>
                                </td>
                                <td className="border px-4 py-2">${product.price}</td>
                                <td className="border px-4 py-2">{product.brand}</td>
                                <td className="border px-4 py-2">{product.category}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="border px-4 py-4 text-center text-gray-500">
                                Tidak ada produk ditemukan.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
