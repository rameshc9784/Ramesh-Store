import React from "react";

export default function ProductCard({ product, onAddToCart }) {
    return (
        <div className="bg-white p-4 shadow rounded-lg flex flex-col">
            <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto"
            />
            <h2 className="text-sm font-semibold mt-2 line-clamp-2">
                {product.title}
            </h2>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            <button
                onClick={() => onAddToCart(product)}
                className="mt-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
                Add to Cart
            </button>
        </div>
    );
}
