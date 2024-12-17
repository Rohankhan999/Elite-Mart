export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[200px] md:h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center px-4">
        <div className="text-center w-full max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Contact Us
          </h1>
          <p className="text-sm text-gray-500">
            Home &gt; Pages &gt;{" "}
            <span className="text-pink-500">Contact Us</span>
          </p>
        </div>
      </div>

      {/* Information Section */}
      <section className="px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Information About Us */}
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A3D] mb-4">
            Information About us
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          {/* Color Dots */}
          <div className="flex space-x-3 mt-4">
            <div className="w-4 h-4 rounded-full bg-pink-500"></div>
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          </div>
        </div>

        {/* Contact Way */}
        <div>
          <h2 className="text-2xl font-bold text-[#1A1A3D] mb-4">Contact Way</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Column 1 */}
            <div className="space-y-4">
              <p className="flex items-start space-x-3 text-gray-600">
                <span className="w-4 h-4 rounded-full bg-orange-500 mt-1"></span>
                <span>
                  20 Margaret St, London <br /> Great Britain, 3NM98-LK
                </span>
              </p>
              <p className="flex items-start space-x-3 text-gray-600">
                <span className="w-4 h-4 rounded-full bg-purple-500 mt-1"></span>
                <span>
                  Tel: 877-67-88-99 <br />
                  E-Mail: shop@store.com
                </span>
              </p>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <p className="flex items-start space-x-3 text-gray-600">
                <span className="w-4 h-4 rounded-full bg-pink-500 mt-1"></span>
                <span>Support Forum - For over 24hr</span>
              </p>
              <p className="flex items-start space-x-3 text-gray-600">
                <span className="w-4 h-4 rounded-full bg-green-500 mt-1"></span>
                <span>Free standard shipping on all orders</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold text-[#1A1A3D] mb-4">Get In Touch</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </p>
          {/* Form Inputs */}
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject*"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <textarea
              placeholder="Type Your Message*"
              className="w-full p-3 border border-gray-300 rounded h-32 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition duration-300"
            >
              Send Mail
            </button>
          </form>
        </div>

        {/* Illustration */}
        <div className="flex justify-center items-center">
          <img
            src="/90.jpeg"
            alt="Contact Illustration"
            className="w-full max-w-sm md:max-w-md object-contain"
          />
        </div>
      </section>
    </div>
  );
}
