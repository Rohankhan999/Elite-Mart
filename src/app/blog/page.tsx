
import Link from "next/link";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaPenNib, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Blog() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Blog Page</h1>
          <p className="text-sm text-gray-500">
            Home &gt; Pages &gt; <span className="text-pink-500">Blog Page</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
        {/* Blog Posts Section */}
        <div className="w-full md:w-2/3 space-y-8">
          {/* Blog Card */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="border rounded-lg shadow-md">
              <Link href="/singleblog">
                <img
                  src={
                    index === 0
                      ? "/iu.jpeg"
                      : index === 1
                      ? "/poo.jpeg"
                      : index === 2
                      ? "/wty.jpeg"
                      : `/default-image.jpeg`
                  }
                  alt={`Blog ${index + 1}`}
                  className="w-full h-[200px] md:h-[300px] object-cover rounded-t-lg"
                />
              </Link>
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4 mb-2">
                  <div className="flex items-center text-pink-700">
                    <FaPenNib />
                    <span className="ml-1">Surf Axion</span>
                  </div>
                  <div className="flex items-center text-orange-500">
                    <MdOutlineCalendarMonth />
                    <span className="ml-1">Aug 20, 2023</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-blue-900 mb-2">
                  <Link href="/singleblog">
                    Mauris at orci non vulputate diam tincidunt nec.
                  </Link>
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <Link
                  href="/singleblog"
                  className="text-pink-500 font-semibold hover:underline mt-4 inline-block"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <button
                key={i}
                className={`h-10 w-10 flex items-center justify-center rounded border ${
                  i === 0
                    ? "bg-pink-500 text-white"
                    : "text-gray-500 hover:bg-pink-500 hover:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 space-y-6">
          {/* Search */}
          <div>
            <h3 className="text-lg font-bold mb-2">Search</h3>
            <input
              type="text"
              placeholder="Search here..."
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {["Hobbies (14)", "Women (21)", "Fashion (10)", "Technology (18)", "Sports (12)", "Lifestyle (16)"].map(
                (category, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="block hover:bg-pink-500 hover:text-white p-2 rounded-md transition"
                    >
                      {category}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-3">
              {["/jm.jpeg", "/yz.jpeg", "/kjl.jpeg", "/gb.jpeg"].map((img, i) => (
                <li key={i} className="flex items-center gap-4">
                  <img src={img} alt="Recent Post" className="w-12 h-12 rounded object-cover" />
                  <div>
                    <a href="#" className="hover:text-pink-500 block">
                      In a long established fact
                    </a>
                    <p className="text-gray-600 text-sm">Aug 09 2020</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>


            {/* Sale Product */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sale Product</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/hn.jpeg"
                  alt="Sale Product"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="text-gray-700">Elli arouise e min mauris</p>
                  <span className="text-pink-500 font-semibold">$120.00</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/sx.jpeg"
                  alt="Sale Product"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="text-gray-700">Elli arouise e min mauris</p>
                  <span className="text-pink-500 font-semibold">$120.00</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/sx.jpeg"
                  alt="Sale Product"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="text-gray-700">Venenatis pulvinar ex enim</p>
                  <span className="text-pink-500 font-semibold">$100.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Offer Product */}
         <div>
  <h3 className="text-lg font-bold mb-4">Offer Product</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* Item 1 */}
    <div className="flex items-center gap-4">
      <img
        src="/fv.jpeg"
        alt="Offer Product"
        className="w-16 h-16 object-cover rounded-md"
      />
      <div>
        <p className="text-gray-700">Duis feugiat elit nisi</p>
        <span className="text-pink-500 font-semibold">$150.00</span>
      </div>
    </div>
    
    {/* Item 2 */}
    <div className="flex items-center gap-4">
      <img
        src="/dc.jpeg"
        alt="Offer Product"
        className="w-16 h-16 object-cover rounded-md"
      />
      <div>
        <p className="text-gray-700">Sed placerat turpis sit</p>
        <span className="text-pink-500 font-semibold">$130.00</span>
      </div>
    </div>
    
    {/* Item 3 */}
    <div className="flex items-center gap-4">
      <img
        src="/qa.jpeg"
        alt="Offer Product"
        className="w-16 h-16 object-cover rounded-md"
      />
      <div>
        <p className="text-gray-700">Sed placerat turpis sit</p>
        <span className="text-pink-500 font-semibold">$130.00</span>
      </div>
    </div>
    
    {/* Item 4 */}
    <div className="flex items-center gap-4">
      <img
        src="/az.jpeg"
        alt="Offer Product"
        className="w-16 h-16 object-cover rounded-md"
      />
      <div>
        <p className="text-gray-700">Sed placerat turpis sit</p>
        <span className="text-pink-500 font-semibold">$130.00</span>
      </div>
    </div>
  </div>
</div>

  
            {/* Social Links */}
            <div>
            <h3 className="text-lg font-bold mb-4">Follow</h3>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, color: "bg-blue-500", hover: "hover:bg-blue-600" },
                { icon: <FaTwitter />, color: "bg-blue-400", hover: "hover:bg-blue-600" },
                { icon: <FaInstagram />, color: "bg-pink-500", hover: "hover:bg-pink-600" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-white rounded-full p-3 flex items-center justify-center ${item.color} ${item.hover}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
               {/* Tags */}
               <div>
  <h3 className="text-lg font-bold mb-4">Tags</h3>
  <div className="flex flex-wrap gap-x-4 gap-y-2">
    {/* First Row */}
    <div className="basis-full flex gap-x-4">
      <a href="#" className="text-sm underline text-blue-600 hover:text-pink-500">
        General
      </a>
      <a href="#" className="text-sm underline text-blue-600 hover:text-pink-500">
        Attasi
      </a>
      <a href="#" className="text-sm underline text-blue-600 hover:text-pink-500">
        Insta
      </a>
    </div>

    {/* Second Row */}
    <div className="basis-full flex gap-x-4">
      <a href="#" className="text-sm underline text-blue-600 hover:text-pink-500">
        General
      </a>
      <a href="#" className="text-sm underline text-blue-600 hover:text-pink-500">
        Bibsaas
      </a>
      <a href="#" className="text-sm underline text-blue-600 hover:text-pink-500">
        Nulla
      </a>
    </div>
  </div>
</div>
        </div>
      </div>
  
        
         {/* Logos */}
      <div className="mt-12 flex flex-wrap justify-center gap-8 mb-8">
      {["/logz5.jpeg", "/logz1.jpeg", "/logz2.jpeg", "/logz4.jpeg", "/logz3.jpeg"].map((src, i) => (
        <img key={i} src={src} alt={`Logo ${i + 1}`} className="w-24 h-24 md:w-40 md:h-40 object-contain" />
      ))}
    </div>
      </div>
    );
  }
  

 