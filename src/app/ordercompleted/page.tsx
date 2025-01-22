'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function OrderCom() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Gradient */}
      <div className="w-full h-[200px] md:h-[286px] bg-gradient-to-r from-[#F6F5FF] via-[#FDFBFF] to-[#FFEEF9] flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
            Order Completed
          </h1>
          <p className="text-xs md:text-sm text-gray-600 tracking-wide">
            Home &gt; Pages &gt; <span className="text-pink-500 font-medium">Order Completed</span>
          </p>
        </motion.div>
      </div>

      {/* Modern Order Completion Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-8 shadow-lg"
        >
          <span className="text-white text-4xl md:text-5xl">✓</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Your Order Is Completed!
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>

          <Link href="/">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md font-medium">
              Continue Shopping
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Modern Logo Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gray-50 py-16 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {["/logz5.jpeg", "/logz1.jpeg", "/logz2.jpeg", "/logz4.jpeg", "/logz3.jpeg"].map((logo, index) => (
              <motion.img
                key={index}
                whileHover={{ scale: 1.1 }}
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="w-24 md:w-32 mx-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
