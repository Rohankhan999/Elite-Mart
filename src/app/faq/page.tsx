export default function FAQ() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[200px] md:h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center px-4">
        <div className="text-center w-full max-w-7xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">FAQs</h1>
          <p className="text-sm text-gray-500">
            Home &gt; Pages &gt; <span className="text-pink-500">FAQs</span>
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - General Information */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6 text-center lg:text-left">
            General Information
          </h2>

          <div className="space-y-6">
            {/* Question 1 */}
            <div>
              <h3 className="font-bold text-lg text-[#171717] mb-2">
                Eu dictumst cum at sed euismod condimentum?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique nulla vitae, consequat gravida sagittis.
              </p>
            </div>

            {/* Question 2 */}
            <div>
              <h3 className="font-bold text-lg text-[#171717] mb-2">
                Magna bibendum est fermentum eros?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique nulla vitae, consequat gravida sagittis.
              </p>
            </div>

            {/* Question 3 */}
            <div>
              <h3 className="font-bold text-lg text-[#171717] mb-2">
                Odio muskana hak eris consequat scelerisque?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique nulla vitae, consequat gravida sagittis.
              </p>
            </div>

            {/* Question 4 */}
            <div>
              <h3 className="font-bold text-lg text-[#171717] mb-2">
                Elit id blandit sabora bol velit qua maro?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique nulla vitae, consequat gravida sagittis.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Ask a Question */}
        <div className="bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 className="text-2xl font-bold text-black mb-6 text-center lg:text-left">
            Ask a Question
          </h2>

          <form action="#" method="post" className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject*"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Type Your Message*"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300"
              >
                Send Mail
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Logo Section */}
      <div className="container mx-auto px-4 mt-12 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
          <img src="/logz5.jpeg" alt="Logo 1" className="w-24 h-24 object-contain" />
          <img src="/logz1.jpeg" alt="Logo 2" className="w-24 h-24 object-contain" />
          <img src="/logz2.jpeg" alt="Logo 3" className="w-24 h-24 object-contain" />
          <img src="/logz4.jpeg" alt="Logo 4" className="w-24 h-24 object-contain" />
          <img src="/logz3.jpeg" alt="Logo 5" className="w-24 h-24 object-contain" />
        </div>
      </div>
    </div>
  );
}
