'use client'; // Ensure this file runs on the client side

import React from "react";
import { useRouter } from "next/navigation"; // Use Next.js router for navigation

const FeaturedProducts = () => {
  const router = useRouter();

  const products = [
    {
      id: 1, // Unique identifier
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/feature1.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "Code - Y523202",
      price: "$42.00",
      image: "/feature2.png",
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "Code - Y523203",
      price: "$42.00",
      image: "/feature3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "Code - Y523204",
      price: "$42.00",
      image: "/feature4.png",
    },
  ];

  const handleViewDetails = (id: number) => {
    // Navigate to the dynamic Product Details Page
    router.push(`/productDetails/${id}`);
  };

  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ height: "361px" }} // Optional height for consistent card size
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.code}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>
              {/* Overlay with View Details button */}
              <div className="absolute inset-0 bg-purple-500 text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                <button
                  className="py-2 px-4 bg-white text-purple-500 font-bold rounded-md shadow-md"
                  onClick={() => handleViewDetails(product.id)} // Call the navigation function
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
