import React from "react";

export default function Navbar({ cartCount, onCartClick }) {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
            <h1 className="text-xl font-bold text-gray-800">🛒 Ramesh Store</h1>
            <button
                onClick={onCartClick}
                className="relative bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                Cart
                <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-1 rounded-full">
                    {cartCount}
                </span>
            </button>
        </nav>
    );
}
