'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function HektoDemo() {
  const router = useRouter();
  
  const [cartItems, setCartItems] = useState<any[]>([]);
  
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F6F5FF] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#FB2E86] mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600">Start shopping to add products to your cart!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[200px] md:h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center px-4">
        <div className="text-center w-full max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Hekto Demo
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4 py-6">
        {/* Left Section: Contact and Shipping Form */}
        <div className="w-full md:w-2/3 bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Hekto Demo</h2>
          <p className="text-gray-500 mb-6">Cart / Information / Shipping / Payment</p>

          {/* Contact Information */}
          <div className="bg-[#F6F5FF] p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="w-full border p-3 rounded mb-4"
            />
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              <span>Keep me up to date on news and exclusive offers</span>
            </label>
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Shipping Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name (optional)"
                className="border p-3 rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border p-3 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full border p-3 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full border p-3 rounded mb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="City"
                className="border p-3 rounded"
              />
              <input
                type="text"
                placeholder="Bangladesh"
                className="border p-3 rounded"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border p-3 rounded"
              />
            </div>
          </div>

          <button className="bg-pink-500 text-white py-3 px-6 rounded w-full hover:bg-pink-600 transition">
           <Link href="/" >Continue Shipping</Link>
          </button> 
        </div>

        {/* Right Section: Cart Summary */}
        <div className="w-full md:w-1/3 bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="space-y-4">
          {cartItems.map((item, index) => (
  <div key={index} className="flex items-center justify-between">
    <Image
      src={item.image?.asset?.url || '/placeholder.jpg'} // Fallback to placeholder
      alt={item.name}
      width={60}
      height={60}
      className="rounded border object-cover"
      priority
    />
    <div className="flex-1 mx-4">
      <p className="font-semibold">{item.name}</p>
      <p className="text-gray-500 text-sm">Color: {item.color}</p>
      <p className="text-gray-500 text-sm">Size: {item.size}</p>
    </div>
    <p className="font-semibold">${item.price}</p>
  </div>
))}
          </div>

          {/* Cart Totals */}
          <div className="bg-[#F6F5FF] p-4 rounded-lg mt-6">
            <p className="flex justify-between text-lg font-semibold mb-2">
              Subtotal: <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-lg font-semibold">
              Total: <span>${total.toFixed(2)}</span>
            </p>
            <p className="text-gray-500 text-sm mt-4">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2"></span>
              Shipping & taxes calculated at checkout
            </p>
          </div>

          
<button 
  className="w-full bg-green-500 text-white py-3 mt-6 rounded hover:bg-green-600 transition"
  onClick={() => router.push('/ordercompleted')}
>
  Proceed To Payment
</button>
        </div>
      </div>
    </div>
  );
}
