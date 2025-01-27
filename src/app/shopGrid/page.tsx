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
      {allProducts && allProducts.length > 0 ? (
  allProducts.slice(0, visibleProducts).map((product) => (
    <div key={product._id} className="bg-white shadow-md mb-[20] rounded-lg p-4 flex flex-col h-[500px]">
      {/* Product Image */}
      <div className="group relative overflow-hidden rounded-lg hover:bg-gray-100 transition-color p-2 h-[550px]">
        <img
          src={urlFor(product.image).url()} 
          alt={product.name} 
          className="w-full h-43 object-cover" 
        />
        {/* Icons Overlay */}
        <div className="absolute bottom-0 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
      onClick={() => handleAddToCart(product)} 
      className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors"
    >
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
      <h3 className="text-sm font-bold text-gray-700 mb-2 text-center">{product.name}</h3>

      {/* Color Selection */}
      <div className="text-center mb-2">
        <select
          onChange={(e) => handleOptionChange(product._id, "color", e.target.value)}
          className="border px-2 py-1 text-sm w-full"
        >
          <option value="">Select Color</option>
          <option value="Brown">Brown</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
        </select>
      </div>

      {/* Size Selection */}
      <div className="text-center mb-2">
        <select
          onChange={(e) => handleOptionChange(product._id, "size", e.target.value)}
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
        <p className="text-sm font-bold text-black">${product.price}</p>
        {product.discountPercentage && (
          <p className="text-sm text-pink-500 line-through">
            ${(parseFloat(product.price) * (1 + product.discountPercentage/100)).toFixed(2)}
          </p>
        )}
      </div>
    </div>
  ))
) : (
  <div>Loading products...</div>
)}

      </div>

      <div className="flex justify-center mt-8">
        <button 
          onClick={handleViewMore}
          className="bg-[#FB2E86] text-white px-6 py-2 rounded hover:bg-[#E21E80] transition-colors"
        >
          View More
        </button>
      </div>
    </div>
  );}
