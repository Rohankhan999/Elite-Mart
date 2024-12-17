
import Link from "next/link";

export default function OrderCom() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[200px] md:h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 md:mb-4">
            Order Completed
          </h1>
          <p className="text-xs md:text-sm text-gray-500">
            Home &gt; Pages &gt; <span className="text-pink-500">Order Completed</span>
          </p>
        </div>
      </div>

      {/* Order Completed Section */}
      <div className="relative flex flex-col items-center justify-center py-8 px-4 text-center">
        {/* Check Icon */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F6F5FF] flex items-center justify-center mb-6">
          <span className="text-pink-500 text-3xl md:text-4xl font-bold">✓</span>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
          Your Order Is Completed!
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-8 px-4 max-w-[500px]">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>

        {/* Continue Shopping Button */}
        <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition">
          <Link href="/">Continue Shopping</Link>
        </button>

        {/* Clock Image */}
        <div className="absolute hidden md:block top-[40] left-[8] lg:left-[56] top-[70]">
          <img src="/zxc.jpeg" alt="Clock Icon" width={50} height={50} />
        </div>

        {/* Notepad Image */}
        <div className="absolute hidden md:block bottom-0 right-[120] lg:right-20">
          <img src="/bnm.jpeg" alt="Notepad Icon" width={50} height={50} />
        </div>

        {/* Dotted Lines */}
        <div>
          {/* Vertical Line */}
          <div className="hidden md:block absolute top-1/4 left-8 lg:left-20 h-[250px] border-l-2 border-dotted border-gray-300"></div>
          {/* Horizontal Line */}
          <div className="hidden md:block absolute bottom-4 left-8 lg:left-20 w-[calc(100%-200px)] border-b-2 border-dotted border-gray-300"></div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 justify-items-center px-4 mb-8">
        <img
          src="/logz5.jpeg"
          alt="Logo 1"
          width={100}
          height={100}
          className="object-contain"
        />
        <img
          src="/logz1.jpeg"
          alt="Logo 2"
          width={100}
          height={100}
          className="object-contain"
        />
        <img
          src="/logz2.jpeg"
          alt="Logo 3"
          width={100}
          height={100}
          className="object-contain"
        />
        <img
          src="/logz4.jpeg"
          alt="Logo 4"
          width={100}
          height={100}
          className="object-contain"
        />
        <img
          src="/logz3.jpeg"
          alt="Logo 5"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
}
