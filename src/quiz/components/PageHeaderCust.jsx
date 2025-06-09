// PageHeaderCust.jsx
export default function PageHeaderCust() {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    Customer
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    <span id="breadcrumb-home" className="text-gray-500">Ini adalah halaman Customer</span>
                </div>
            </div>
            <div id="action-button">
                <button id="add-button" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Add Button
                </button>
            </div>
        </div>
    );
}
