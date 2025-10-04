import React from "react";

export default function CartModal({ cart, onClose, onRemove }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm">

            <div className="bg-white w-96 max-h-[80vh] p-6 rounded-lg shadow-lg relative flex flex-col">
                {/* Title */}
                <h2 className="text-xl font-bold mb-4">Your Cart</h2>

                {/* Cart Items (scrollable if too many) */}
                <div className="flex-1 overflow-y-auto">
                    {cart.length === 0 ? (
                        <p className="text-gray-500">Cart is empty</p>
                    ) : (
                        <ul className="space-y-4">
                            {cart.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-center justify-between border-b pb-2 gap-2"
                                >
                                    <div className="">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-12 w-12 object-contain"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm line-clamp-1">{item.title}</p>
                                        <p className="text-gray-600">${item.price}</p>
                                    </div>
                                    <button
                                        onClick={() => onRemove(item.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
