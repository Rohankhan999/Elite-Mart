// pages/about.js

export default function aboutUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4 md:mr-[720px]">
            About us
          </h1>
          <p className="text-sm text-gray-500 md:mr-[720px]">
            Home &gt; Pages &gt;{" "}
            <span className="text-pink-500">About Us</span>
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-12 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/1.jpeg"
              alt="About Us"
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Content */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
            <h2 className="text-3xl font-bold mb-4 text-[#1A1A3D]">
              Know About Our Ecommerce Business, History
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis.
            </p>
            <button className="bg-pink-500 text-white px-6 py-2 mt-4 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h3 className="text-3xl text-center font-bold mb-8">Our Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-20">
          {/* Feature 1 */}
          <div className="text-center">
            <img
              src="/3.jpeg"
              alt="Free Delivery"
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h4 className="font-semibold text-lg">Free Delivery</h4>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <img
              src="/2.jpeg"
              alt="100% Cash Back"
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h4 className="font-semibold text-lg">100% Cash Back</h4>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <img
              src="/6.jpeg"
              alt="Quality Product"
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h4 className="font-semibold text-lg">Quality Product</h4>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center">
            <img
              src="/4.jpeg"
              alt="24/7 Support"
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h4 className="font-semibold text-lg">24/7 Support</h4>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 px-6 md:px-20 text-center bg-[#F6F5FF] mb-[40px]">
        <h3 className="text-3xl font-bold mb-8">Our Client Say!</h3>
        <div className="flex flex-col items-center">
          {/* Testimonial Images */}
          <div className="flex flex-wrap justify-center space-x-4 mb-6">
            <img
              src="/5.jpeg"
              alt="Client 1"
              className="w-16 h-16 rounded-full mb-4 md:mb-0"
            />
            <img
              src="/8.jpeg"
              alt="Client 2"
              className="w-16 h-16 rounded-full mb-4 md:mb-0"
            />
            <img
              src="/7.jpeg"
              alt="Client 3"
              className="w-16 h-16 rounded-full"
            />
          </div>
          {/* Testimonial Content */}
          <h4 className="font-semibold text-lg">Selina Gomez</h4>
          <p className="text-gray-500 text-sm mb-4">CEO of Online Digital</p>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dui
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam.
          </p>
        </div>
      </section>
    </div>
  );
}
