"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
  color: string;
  size: string;
}


const ShopCartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleQuantityChange = (id: string, value: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: value,
            total: Number(item.price) * value
          }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const calculateSubtotal = () =>
    cartItems.reduce((sum, item) => sum + Number(item.total), 0).toFixed(2);


  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[200px] md:h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 md:mb-4">
            Shop Cart
          </h1>
          <p className="text-xs md:text-sm text-gray-500">
            Home &gt; Pages &gt; <span className="text-pink-500">Shop Cart</span>
          </p>
        </div>
      </div>

      <div className="p-4 md:p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Table */}
          <div className="flex-1 bg-white shadow-md rounded-lg overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left bg-gray-50">
                  <th className="p-4 text-xs md:text-base">Product</th>
                  <th className="p-4 text-xs md:text-base">Price</th>
                  <th className="p-4 text-xs md:text-base">Quantity</th>
                  <th className="p-4 text-xs md:text-base">Total</th>
                  <th className="p-4 text-xs md:text-base">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center p-4">
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50 text-sm md:text-base"
                    >
                      <td className="p-4 flex items-center gap-2 md:gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-14 h-14 md:w-20 md:h-20 rounded object-cover"
                        />
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-xs md:text-sm text-gray-500">
                            Color: {item.color} | Size: {item.size}
                          </p>
                        </div>
                      </td>
                      <td className="p-4">${Number(item.price|| 0).toFixed(2)}</td>
                      <td className="p-4">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity || 1}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value) || 1
                            )
                          }
                          className="w-12 md:w-16 border rounded p-1 text-center"
                        />
                      </td>
                      <td className="p-4">${Number(item.total || 0).toFixed(2)}</td>
                      <td className="p-4">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="flex flex-col md:flex-row justify-between p-4 gap-4">
              <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Update Cart
              </button>
              <button
                onClick={handleClearCart}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Right Column: Cart Totals and Shipping */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {/* Cart Totals */}
            <div className="bg-[#F6F5FF] p-6 rounded">
              <h3 className="text-center text-lg font-bold mb-4">Cart Totals</h3>
              <div className="flex justify-between">
                <p>Subtotal:</p>
                <p className="font-semibold">${calculateSubtotal()}</p>
              </div>
              <hr className="my-4 border-t border-gray-200" />
              <div className="flex justify-between mt-2">
                <p>Total:</p>
                <p className="font-semibold">${calculateSubtotal()}</p>
              </div>
              <button className="bg-green-500 text-white w-full mt-4 py-2 rounded hover:bg-green-600">
                <Link href="/HektoDemo">Proceed To Checkout</Link>
              </button>
            </div>

            {/* Calculate Shipping */}
            <div className="bg-[#F6F5FF] p-6 rounded">
              <h3 className="text-center text-lg font-bold mb-4">
                Calculate Shipping
              </h3>
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full border rounded p-2 mb-4"
              />
              <input
                type="text"
                placeholder="Mirpur Dhaka - 1200"
                className="w-full border rounded p-2 mb-4"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border rounded p-2 mb-4"
              />
              <button className="bg-pink-500 text-white w-full py-2 rounded hover:bg-pink-600">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCartPage;
