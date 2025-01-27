'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';


interface Product {
  _id: string;
  name: string;
  code: string;
  price: number;
  image: {
    asset: {
      url: string | { _type: "image"; asset: { _ref: string } }
    };
  };
  description: string;
  category: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products = [] }: FeaturedProductsProps) => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = React.useState(true);
  const [visibleProducts, setVisibleProducts] = useState(4);

  React.useEffect(() => {
    if (products.length > 0) {
      setIsLoading(false);
    }
  }, [products]);

  if (isLoading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  const handleViewDetails = (id: string) => {
    router.push(`/productDetails/${id}`);
  };

  const handleViewMore = () => {
    setVisibleProducts(prev => prev + 4);
  };

  const handleAddToCart = (product: Product) => {
    const cartProduct = {
      ...product,
      image: {
        asset: {
          url: typeof product.image.asset.url === 'string' 
            ? product.image.asset.url 
            : ''
        }
      }
    };
    addToCart(cartProduct);
    toast.success('Added to cart!');
  };
  

  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, visibleProducts).map((product) => (
            <div
              key={product._id}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ height: "361px" }}
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={typeof product.image.asset.url === 'string' ? product.image.asset.url : ''}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.code}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">$
                  {product.price}
                </p>
              </div>
              <div className="absolute inset-0 bg-purple-500 text-white opacity-0 hover:opacity-100 flex flex-col items-center justify-center gap-3 rounded-xl transition duration-300">
                <button
                  className="py-2 px-4 bg-white text-purple-500 font-bold rounded-md shadow-md hover:bg-gray-100"
                  onClick={() => handleViewDetails(product._id)}
                >
                  View Details
                </button>
                <button
                  className="py-2 px-4 bg-white text-purple-500 font-bold rounded-md shadow-md hover:bg-gray-100"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {visibleProducts < products.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewMore}
              className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition duration-300"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
