'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';


const products = [
  {
    id: 1,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "$42.00",
    image: "/feature1.png",
    discountPrice: 4500,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod metus non lectus viverra, sit amet facilisis magna congue.',
    relatedProducts: [
      { id: 1, name: 'Men Fashion Wear', price: 1400, image: '/z.jpeg' },
      { id: 2, name: 'Women Fashion', price: 1200, image: '/ty.jpeg' },
      { id: 3, name: 'Women Fashion', price: 1200, image: '/kp.jpeg' },
      { id: 4, name: 'Women Fashion', price: 1200, image: '/wtr.jpeg' },
    ],
  },
  {
    id: 2,
    name: "Another Chair",
    code: "Code - X12345",
    price: "$50.00",
    image: "/feature2.png",
    discountPrice: 4800,
    description:
      'Another chair description.',
    relatedProducts: [
      { id: 1, name: 'Men Fashion Wear', price: 1400, image: '/z.jpeg' },
      { id: 2, name: 'Women Fashion', price: 1200, image: '/ty.jpeg' },
      { id: 3, name: 'Women Fashion', price: 1200, image: '/kp.jpeg' },
      { id: 4, name: 'Women Fashion', price: 1200, image: '/wtr.jpeg' },
    ],
  },
  {
    id: 3,
    name: "the Chair",
    code: "Code - X12345",
    price: "$50.00",
    image: "/feature3.png",
    discountPrice: 4800,
    description:
      'Another chair description.',
    relatedProducts: [
      { id: 1, name: 'Men Fashion Wear', price: 1400, image: '/z.jpeg' },
      { id: 2, name: 'Women Fashion', price: 1200, image: '/ty.jpeg' },
      { id: 3, name: 'Women Fashion', price: 1200, image: '/kp.jpeg' },
      { id: 4, name: 'Women Fashion', price: 1200, image: '/wtr.jpeg' },
    ],
  },
  {
    id: 4,
    name: "Anotherss Chair",
    code: "Code - X12345",
    price: "$50.00",
    image: "/feature4.png",
    discountPrice: 4800,
    description:
      'Another chair description.',
    relatedProducts: [
      { id: 1, name: 'Men Fashion Wear', price: 1400, image: '/z.jpeg' },
      { id: 2, name: 'Women Fashion', price: 1200, image: '/ty.jpeg' },
      { id: 3, name: 'Women Fashion', price: 1200, image: '/kp.jpeg' },
      { id: 4, name: 'Women Fashion', price: 1200, image: '/wtr.jpeg' },
    ],
  }
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [activeTab, setActiveTab] = useState('description');
  if (!product) return <p>Product not found</p>;

  

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <p>{product.description}</p>;
      case 'additionalInfo':
        return <p>Additional product information</p>;
      case 'reviews':
        return <p>Customer reviews go here.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="w-full h-[200px] md:h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 md:mb-4">
            Product Details
          </h1>
          <p className="text-xs md:text-sm text-gray-500">
            Home &gt; Pages &gt; <span className="text-pink-500">Product Details</span>
          </p>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="max-w-7xl mx-auto mt-[30] p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full  rounded-lg shadow-md"
            />
            <div className="grid grid-cols-4 gap-2 mt-4">
              {['/chair3.png', '/chair.png', '/chair2.png', '/chair.png'].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-30 object-cover rounded-md border cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl text-gray-600 mt-2">
              <del>${product.price}</del>{' '}
              <span className="text-red-500">${product.discountPrice}</span>
            </p>
            <p className="mt-4">{product.description}</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Add to Cart
            </button>
            <div className="mt-4">
              <p><strong>Categories:</strong> Furniture</p>
              <p><strong>Tags:</strong> Chair, Modern</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#F6F5FF] mt-8 px-4 py-6">
        <div className="flex justify-center space-x-6 border-b pb-2">
          {['description', 'additionalInfo', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 ${
                activeTab === tab
                  ? 'border-b-2 border-blue-600 font-bold'
                  : 'text-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="mt-6 text-center">{renderTabContent()}</div>
      </div>

      {/* Related Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.relatedProducts.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-2 font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
              <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-8 mb-8">
        {['/logz.jpeg', '/logz1.jpeg', '/logz2.jpeg', '/logz4.jpeg', '/logz3.jpeg'].map(
          (logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="w-24 md:w-40 h-auto object-contain"
            />
          )
        )}
      </div>
    </div>
  );
}



