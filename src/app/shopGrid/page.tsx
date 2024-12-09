import { FaShoppingCart, FaSearch, FaPlus, FaHeart } from "react-icons/fa";
export default function ShopGridPage() {
    return (
      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <div
  className="w-full h-[286px] bg-[#F6F5FF] relative top-[15px] flex flex-col  items-start justify-center px-6 opacity-100 "
>
  <div className="text-center">
    <h1 className="text-4xl font-bold text-black mb-4 ml-[158px]">Shop Grid Default</h1>
    <p className="text-sm text-gray-500 mt-4 ml-[75px]">
      Home &gt; Pages &gt; <span className="text-pink-500">Shop Grid Default</span>
    </p>
  </div>
</div>

  
        {/* Divider */}
        <hr className="border-t-2  border-blue-500 my-2 " />
  
        {/* Content Section */}
        <div className="mt-[100px] ml-[175px] ">
          {/* Title */}
          <h2 className="text-2xl  font-semibold mb-2 ">
            Ecommerce Accessories &amp; Fashion Items
          </h2>
          <p className=" text-gray-600 mt-2">
            About 9,620 results (0.62 seconds)
          </p>
  </div>
          {/* Filters */}
          <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-6 ml-[720px] -mt-[123px]">
            <div className="flex items-center space-x-2">
              <label htmlFor="per-page" className="text-sm text-gray-700">
                Per Page:
              </label>
              <input
                type="number"
                id="per-page"
                className="w-16 border border-gray-300 rounded-md p-1 text-sm"
                placeholder="10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort-by" className="text-sm text-gray-700">
                Sort By:
              </label>
              <select
                id="sort-by"
                className="border border-gray-300 rounded-md p-1 text-sm"
              >
                <option>Best Match</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="view" className="text-sm text-gray-700">
                View:
              </label>
              <input
                type="text"
                id="view"
                className="w-16 border border-gray-300 rounded-md p-1 text-sm"
                placeholder="Grid"
              />
            </div>
          </div>
          </div>
  
          {/* Product Grid */}
          <div className=" flex justify-center flex-wrap gap-6 mt-[50px] px-[60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-[50px]">
            {/* Product Card */}
            <div className="bg-white shadow-md rounded-lg  p-4">
            
              <div className="group relative overflow-hidden rounded-lg hover:bg-gray-100 transition-color  p-4">
              <img 
                src="/latest1.png"
                alt="Comfort Handy Craft"
              />

              {/* Icons Overlay */}
              <div className="absolute bottom-0 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
    {/* Shopping Cart */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaShoppingCart className="text-gray-700 text-1xl hover:text-gray-900" />
    </button>

    {/* Search */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaSearch className="text-gray-700 text-1xl hover:text-gray-900" />
    </button>

    {/* Plus Icon */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaPlus className="text-gray-700 text-1xl hover:text-gray-900" />
    </button>

    {/* Heart Icon */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaHeart className="text-gray-700 text-1xl hover:text-red-500" />
    </button>
  </div>
              </div>
              
              
              <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">
                Vel elit euismod
              </h3>
              <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>
             <div className="flex gap-2 ml-[60px] "> 
              <p className="text-sm font-bold text-black">$20.00</p>
              <p className="text-sm text-pink-500 line-through">$26.00</p>
              </div>
            </div>
  
            {/* Repeat Product Card for other products */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="group relative overflow-hidden rounded-lg hover:bg-gray-100 transition-color  p-4">
              <img 
                src="/latest2.png"
                alt="Comfort Handy Craft"
              />

               {/* Icons Overlay */}
               <div className="absolute bottom-0 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
    {/* Shopping Cart */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaShoppingCart className="text-gray-700 text-1xl hover:text-gray-900" />
    </button>

    {/* Search */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaSearch className="text-gray-700 text-1xl hover:text-gray-900" />
    </button>

    {/* Plus Icon */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaPlus className="text-gray-700 text-1xl hover:text-gray-900" />
    </button>

    {/* Heart Icon */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaHeart className="text-gray-700 text-1xl hover:text-red-500" />
    </button>
  </div>
              </div>
              <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">
                Ultrices condimentum imperdiet
              </h3>
              <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>
             <div className="flex text-center gap-2 ml-[60px]">
              <p className="text-sm font-bold text-black">$20.00</p>
               <p className="text-sm text-pink-500 line-through">$26.00</p>
               </div>
            </div>
  
            <div className="bg-white shadow-md rounded-lg p-4">
            <div className="group relative overflow-hidden rounded-lg hover:bg-gray-100 transition-color  p-4">
              <img 
                src="/chair3.png"
                alt="Comfort Handy Craft"
              />

              {/* Icons Overlay */}
              <div className="absolute bottom-0 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
    {/* Shopping Cart */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaShoppingCart className="text-gray-700 text-1xl hover:text-gray-900" />
    </button>

    {/* Search */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaSearch className="text-gray-700 text-1xl hover:text-gray-900" />
    </button>

    {/* Plus Icon */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaPlus className="text-gray-700 text-1xl hover:text-gray-900" />
    </button>

    {/* Heart Icon */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaHeart className="text-gray-700 text-1xl hover:text-red-500" />
    </button>
  </div>
              </div>
              <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">
                Vitae suspendisse sed
              </h3>
              <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>
              <div className="flex text-center gap-2 ml-[60px]">
              <p className="text-sm font-bold text-black">$20.00</p>
              <p className="text-sm text-pink-500 line-through">$26.00</p>
            </div>
            </div>
  
            <div className="bg-white shadow-md rounded-lg p-4">
            <div className="group relative overflow-hidden rounded-lg hover:bg-gray-100 transition-color  p-4">
              <img 
                src="/feature1.png"
                alt="Comfort Handy Craft"
              />

              {/* Icons Overlay */}
              <div className="absolute bottom-0 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
    {/* Shopping Cart */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaShoppingCart className="text-gray-700 text-1xl hover:text-gray-900" />
    </button>

    {/* Search */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaSearch className="text-gray-700 text-1xl hover:text-gray-900" />
    </button>

    {/* Plus Icon */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaPlus className="text-gray-700 text-1xl hover:text-gray-900" />
    </button>

    {/* Heart Icon */}
    <button className="p-2 rounded-full bg-gray-100 hover:bg-white transition-colors">
      <FaHeart className="text-gray-700 text-1xl hover:text-red-500" />
    </button>
  </div>
              </div>
              <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">
                Sed at fermentum
              </h3>
              <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>
              <div className="flex text-center gap-2 ml-[60px]">
              <p className="text-sm font-bold text-black">$20.00</p>
              <p className="text-sm text-pink-500 line-through">$26.00</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center justify-center h-52  rounded-md mb-4">
              <img 
                src="/feature2.png"
                alt="Comfort Handy Craft"
              />
              </div>
              <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">
                Sed at fermentum
              </h3>
              <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>
              <div className="flex text-center gap-2 ml-[60px]">
              <p className="text-sm font-bold text-black">$20.00</p>
              <p className="text-sm text-pink-500 line-through">$26.00</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center justify-center h-52  rounded-md mb-4">
              <img 
                src="/feature3.png"
                alt="Comfort Handy Craft"
              />
              </div>
              <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">
                Sed at fermentum
              </h3>
              <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>
              <div className="flex text-center gap-2 ml-[60px]">
              <p className="text-sm font-bold text-black">$20.00</p>
              <p className="text-sm text-pink-500 line-through">$26.00</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center justify-center h-52  rounded-md mb-4">
              <img 
                src="/feature1.png"
                alt="Comfort Handy Craft"
              />
              </div>
              <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">
                Sed at fermentum
              </h3>
              <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>
              <div className="flex text-center gap-2 ml-[60px]">
              <p className="text-sm font-bold text-black">$20.00</p>
              <p className="text-sm text-pink-500 line-through">$26.00</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center justify-center h-52  rounded-md mb-4">
              <img 
                src="/latest2.png"
                alt="Comfort Handy Craft"
              />
              </div>
              <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">
                Sed at fermentum
              </h3>
              <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>
              <div className="flex text-center gap-2 ml-[60px]">
              <p className="text-sm font-bold text-black">$20.00</p>
              <p className="text-sm text-pink-500 line-through">$26.00</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center justify-center h-52  rounded-md mb-4">
              <img 
                src="/latest3.png"
                alt="Comfort Handy Craft"
              />
              </div>
              <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">
                Sed at fermentum
              </h3>
              <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>
              <div className="flex text-center gap-2 ml-[60px]">
              <p className="text-sm font-bold text-black">$20.00</p>
              <p className="text-sm text-pink-500 line-through">$26.00</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center justify-center h-52  rounded-md mb-4">
              <img 
                src="/latest4.png"
                alt="Comfort Handy Craft"
              />
              </div>
              <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">
                Sed at fermentum
              </h3>
              <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>
              <div className="flex text-center gap-2 ml-[60px]">
              <p className="text-sm font-bold text-black">$20.00</p>
              <p className="text-sm text-pink-500 line-through">$26.00</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center justify-center h-52  rounded-md mb-4">
              <img 
                src="/chair2.png"
                alt="Comfort Handy Craft"
              />
              </div>
              <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">
                Sed at fermentum
              </h3> <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>
              <div className="flex text-center gap-2 ml-[60px]">
              <p className="text-sm font-bold text-black">$20.00</p>
              <p className="text-sm text-pink-500 line-through">$26.00</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center justify-center h-52  rounded-md mb-4">
              <img 
                src="/chair.png"
                alt="Comfort Handy Craft"
              />
              </div>
              <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">
                Sed at fermentum
              </h3>
              <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>
              <div className="flex text-center gap-2 ml-[60px]">
              <p className="text-sm font-bold text-black">$20.00</p>
              <p className="text-sm text-pink-500 line-through">$26.00</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-8 mb-[50px]">
  <img
    src="/logz.jpeg"
    alt="Logo 1"
    className="w-40 h-40 object-contain"
  />
  <img
    src="/logz1.jpeg"
    alt="Logo 2"
    className="w-40 h-40 object-contain"
  />
  <img
    src="/logz2.jpeg"
    alt="Logo 3"
    className="w-40 h-40 object-contain"
  />
  <img
    src="/logz4.jpeg"
    alt="Logo 4"
    className="w-40 h-40 object-contain"
  />
  <img
    src="/logz3.jpeg"
    alt="Logo 5"
    className="w-40 h-40 object-contain"
  />
</div>

        </div>

        
    );
  }
  