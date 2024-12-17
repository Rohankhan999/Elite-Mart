"use client";
import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaSearch, FaPlus, FaHeart } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  colors: string[];
  image: string;
}

const products: Product[] = [
  { id: 1, title: "Vel elit euismod", price: 20.0, oldPrice: 26.0, colors: ["Brown"], image: "/latest1.png" },
  { id: 2, title: "Luctus purus metus", price: 22.0, oldPrice: 28.0, colors: ["Yellow"], image: "/latest2.png" },
  { id: 3, title: "Quam ornare eget", price: 18.0, oldPrice: 24.0, colors: ["White"], image: "/latest4.png" },
  { id: 4, title: "Faucibus risus nunc", price: 25.0, oldPrice: 30.0, colors: ["White"], image: "/latest3.png" },
];

export default function ShopGridPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<any>({});

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleOptionChange = (id: number, type: string, value: string) => {
    setSelectedOptions((prev: any) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: value,
      },
    }));
  };

  const addToCart = (product: Product) => {
    const options = selectedOptions[product.id];

    if (!options?.color || !options?.size) {
      alert("Please select both color and size before adding to cart.");
      return;
    }

    const productWithOptions = { ...product, color: options.color, size: options.size };
    const updatedCart = [...cart, productWithOptions];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.title} has been added to the cart!`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="w-full h-[200px] sm:h-[286px] bg-[#F6F5FF] flex flex-col items-start justify-center px-4 md:px-6 lg:px-10">
        <div className="text-center w-full">
          <h1 className="text-2xl sm:text-4xl font-bold text-black mb-4">Shop Grid Default</h1>
          <p className="text-sm text-gray-500 mt-2">
            Home &gt; Pages &gt; <span className="text-pink-500">Shop Grid Default</span>
          </p>
        </div>
      </div>



      {/* Content Section */}
      <div className="mt-10 px-4 sm:px-10">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Ecommerce Accessories &amp; Fashion Items</h2>
        <p className="text-gray-600 mt-1">About 9,620 results (0.62 seconds)</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-4 sm:px-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md mb-[20] rounded-lg p-4">
            {/* Product Image */}
            <div className="group relative overflow-hidden rounded-lg hover:bg-gray-100 transition-color p-2">
              <img src={product.image} alt={product.title} className="w-full h-43 object-cover" />
              {/* Icons Overlay */}
              <div className="absolute bottom-0 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => addToCart(product)} className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
                  <FaShoppingCart className="text-gray-700 hover:text-gray-900" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
                  <FaSearch className="text-gray-700 hover:text-gray-900" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
                  <FaPlus className="text-gray-700 hover:text-gray-900" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
                  <FaHeart className="text-gray-700 hover:text-red-500" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <h3 className="text-sm font-bold text-gray-700 mb-2 text-center">{product.title}</h3>

            {/* Color Selection */}
            <div className="text-center mb-2">
              <select
                onChange={(e) => handleOptionChange(product.id, "color", e.target.value)}
                className="border px-2 py-1 text-sm w-full"
              >
                <option value="">Select Color</option>
                {product.colors.map((color, index) => (
                  <option key={index} value={color}>{color}</option>
                ))}
              </select>
            </div>

            {/* Size Selection */}
            <div className="text-center mb-2">
              <select
                onChange={(e) => handleOptionChange(product.id, "size", e.target.value)}
                className="border px-2 py-1 text-sm w-full"
              >
                <option value="">Select Size</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
              </select>
            </div>

            {/* Price */}
            <div className="flex justify-center gap-2">
              <p className="text-sm font-bold text-black">${product.price.toFixed(2)}</p>
              <p className="text-sm text-pink-500 line-through">${product.oldPrice.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
