"use client";
import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaSearch, FaPlus, FaHeart } from "react-icons/fa";
import {client} from "../../sanity/lib/client";
import { urlFor } from '../../sanity/lib/image';
import { toast } from 'react-hot-toast';
import { useCart } from '../context/CartContext';


interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  colors: string[];
  image: string;
}
interface ProductOptions {
  color?: string;
  size?: string;
}
const products: Product[] = [
  { id: 1, title: "Vel elit euismod", price: 20.0, oldPrice: 26.0, colors: ["Brown"], image: "/latest1.png" },
  { id: 2, title: "Luctus purus metus", price: 22.0, oldPrice: 28.0, colors: ["Yellow"], image: "/latest2.png" },
  { id: 3, title: "Quam ornare eget", price: 18.0, oldPrice: 24.0, colors: ["White"], image: "/latest4.png" },
  { id: 4, title: "Faucibus risus nunc", price: 25.0, oldPrice: 30.0, colors: ["White"], image: "/latest3.png" },
];

export default function ShopGridPage() {
  const { addToCart } = useCart();
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: ProductOptions }>({});
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [allProducts, setAllProducts] = useState<any[]>([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]`;
      const fetchedProducts = await client.fetch(query);
      setAllProducts(fetchedProducts);
    };
    
    fetchProducts();
  }, []);
  
  const handleViewMore = () => {
    setVisibleProducts(prev => prev + 4);
  };
  const handleOptionChange = (id: number, type: "color" | "size", value: string) => {
    setSelectedOptions((prev: { [key: number]: ProductOptions }) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: value,
      },
    }));
  };


  const handleAddToCart = (product: any) => {
    const options = selectedOptions[product._id];

    if (!options?.color || !options?.size) {
      toast.error("Please select both color and size", {
        duration: 2000,
      });
      return;
    }

    const cartItem = {
      _id: product._id,
      name: product.name,
      price: parseFloat(product.price),
      quantity: 1,
      image: {
        asset: {
          url: urlFor(product.image).url()
        }
      }
    };

    addToCart(cartItem);
    toast.success(`${product.name} added to cart!`, {
      duration: 2000,
    });
  };

  
  return (
    <div className="bg-white min-h-screen">
      {/* Enhanced Header Section */}
      <div className="w-full h-[250px] sm:h-[300px] bg-gradient-to-r from-[#F6F5FF] to-[#F0EEFF] flex flex-col items-start justify-center px-4 md:px-6 lg:px-10 shadow-sm">
        <div className="text-center w-full space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            Shop Grid Default
          </h1>
          <nav className="text-sm font-medium">
            <ol className="flex justify-center items-center space-x-2">
              <li className="hover:text-gray-600 cursor-pointer">Home</li>
              <li className="text-gray-400">/</li>
              <li className="hover:text-gray-600 cursor-pointer">Pages</li>
              <li className="text-gray-400">/</li>
              <li className="text-pink-500">Shop Grid Default</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Enhanced Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-b pb-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Ecommerce Accessories & Fashion Items
          </h2>
          <p className="text-gray-500 text-sm">About 9,620 results (0.62 seconds)</p>
        </div>

        {/* Enhanced Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allProducts && allProducts.length > 0 ? (
            allProducts.slice(0, visibleProducts).map((product) => (
              <div key={product._id} 
                   className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Product Image Container */}
                <div className="group relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Enhanced Icons Overlay */}
                  <div className="absolute bottom-4 left-4 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-20px] group-hover:translate-x-0">
                    <button onClick={() => handleAddToCart(product)} 
                            className="p-3 rounded-full bg-white shadow-md hover:bg-pink-500 hover:text-white transition-all duration-200">
                      <FaShoppingCart className="text-lg" />
                    </button>
                    <button className="p-3 rounded-full bg-white shadow-md hover:bg-pink-500 hover:text-white transition-all duration-200">
                      <FaSearch className="text-lg" />
                    </button>
                    <button className="p-3 rounded-full bg-white shadow-md hover:bg-pink-500 hover:text-white transition-all duration-200">
                      <FaHeart className="text-lg" />
                    </button>
                  </div>
                </div>

                {/* Enhanced Product Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {product.name}
                  </h3>

                  {/* Enhanced Selectors */}
                  <div className="space-y-3">
                    <select
                      onChange={(e) => handleOptionChange(product._id, "color", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">Select Color</option>
                      <option value="Brown">Brown</option>
                      <option value="Black">Black</option>
                      <option value="White">White</option>
                    </select>

                    <select
                      onChange={(e) => handleOptionChange(product._id, "size", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">Select Size</option>
                      <option value="S">Small</option>
                      <option value="M">Medium</option>
                      <option value="L">Large</option>
                    </select>
                  </div>

                  {/* Enhanced Price Display */}
                  <div className="flex justify-center items-center gap-3">
                    <span className="text-xl font-bold text-pink-500">
                      ${product.price}
                    </span>
                    {product.discountPercentage && (
                      <span className="text-sm text-gray-400 line-through">
                        ${(parseFloat(product.price) * (1 + product.discountPercentage/100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              Loading products...
            </div>
          )}
        </div>

        {/* Enhanced View More Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleViewMore}
            className="px-8 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View More Products
          </button>
        </div>
      </div>
    </div>
  );
}