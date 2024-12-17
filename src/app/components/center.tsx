import Image from 'next/image';
export default function Center() {
    return (
      <div className="font-sans text-gray-900">
        {/* Section 1: What Shopex Offer */}
        {/* Section 1: What Shopex Offer */}
<section className="bg-gray-50 py-10 text-center">
  <h2 className="text-3xl font-bold mb-8 text-indigo-800">What Shopex Offer!</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
    {[
      { title: "24/7 Support", imgSrc: "/3.jpeg" },
      { title: "Fast Shipping", imgSrc: "/2.jpeg" },
      { title: "Best Quality", imgSrc: "/6.jpeg" },
      { title: "Easy Returns", imgSrc: "/4.jpeg" },
    ].map((item, index) => (
      <div
        key={index}
        className="p-6 bg-white shadow-md rounded-md text-center flex flex-col items-center"
      >
        {/* Add Image */}
        <img
          src={item.imgSrc}
          alt={item.title}
          className="w-16 h-16 mb-4 object-contain"
        />
        {/* Title */}
        <p className="text-lg font-semibold mb-2">{item.title}</p>
        {/* Description */}
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    ))}
  </div>
</section>

  
        {/* Section 2: Unique Features */}
        <section className="py-10 px-8 bg-gray-100">
          <div className="flex flex-col lg:flex-row items-center">
            <img
              src="/blues.jpeg"
              alt="Blue Chair"
              className="w-full lg:w-1/2 rounded-lg"
            />
            <div className="lg:w-1/2 lg:pl-12 mt-6 lg:mt-0">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-800">
                Unique Features Of Latest & Trending Products
              </h3>
              <ul className="flex flex-col text-gray-700 space-y-3 mb-4">
  {/* First item - takes the full line */}
  <li className="flex items-center space-x-2 mb-2 w-full">
    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
    <span>All types of furniture available</span>
  </li>
  
  {/* Second item - wraps to the second line */}
  <li className="flex items-center space-x-2 mb-2 w-full">
    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
    <span>Exclusive designs and latest arrivals</span>
  </li>
  
  {/* Third item - wraps to the second line */}
  <li className="flex items-center space-x-2 mb-2 w-full">
    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
    <span>Special discount offers</span>
  </li>
</ul>


              <div className="flex mt-[150]">
              <button className="px-6 py-2 bg-pink-500 text-white rounded-md">
                Add To Cart
              </button>
              <p className="text-blue-700 ml-[10] font-bold block">B&B Italian Sofa</p>
             <div className="mt-[20] -ml-[125]"> <p className="text-blue-800 ">$32.00</p></div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Section 3: Trending Products */}
        <section className="py-10 bg-gray-50 ">
          <h3 className="text-3xl font-bold text-center mb-8 text-indigo-800">
            Trending Products
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
            {["Chair 1", "Chair 2", "Chair 3", "Chair 4"].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md  p-2 text-center group relative"
              >
                <div className="bg-gray-300 border  flex items-center justify-center w-30 h-40 mx-auto relative">
        
        
        {/* Image */}
        <img 
          src={
            index === 0
              ? '/chair.png'       
              : index === 1
              ? '/chair2.png'        
              : index === 2
              ? '/chair3.png'        
              : '/latest1.png'       
          }
          alt={item}
          className="h-32 w-28  "
        />
        
        {/* Button inside circle */}
        <button className="absolute bg-green-500 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100">
          View Shop
        </button>
        
      </div>
                  {/* Title */}
      <p className="font-semibold mt-2">{item}</p>

{/* Price */}
<p className="text-gray-700 text-sm mt-1">$49.99</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Section 4: Discount Item */}
        {/* Discount Section */}
      <section className="py-10 px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold  text-indigo-800 mb-4">
            Discount Item
          </h1>
          <div className='flex gap-[20] text-blue-800   justify-center'><p className='hover:text-pink-500 hover:underline'>Wood Chair</p>
          <p className='hover:text-pink-500 hover:underline'>Plastic Chair</p>
          <p className='hover:text-pink-500 hover:underline'>Sofa Collection</p></div>
          
        </div>
      </section>

      {/* Existing Discount Item Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 md:p-12 ml-[20]">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            20% Discount Of All Products
          </h2>
          <p className="text-pink-500 font-semibold mb-4">Eams Sofa Compact</p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>

          {/* Bullet Points */}
          <ul className="text-gray-700 mb-6 space-y-2">
            <li>✅ Material exposed like metals</li>
            <li>✅ Simple lines and geometric figures</li>
            <li>✅ Industrial materials like woods</li>
          </ul>

          {/* Button */}
          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <div className="relative w-[250px] h-[300px]">
            <img
              src="/brown.jpeg" // Replace with your chair image path
              alt="Discount Chair"
              layout="fill"
              
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
  
        {/* Section 5: Top Categories */}
        <section className="py-10 gap-[90]">
          <h3 className="text-3xl font-bold text-center mb-8 text-indigo-800">
            Top Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
  {["Minki Chair 1", "Mini Chair 2", "Mini Chair", "Mini Chair"].map((item, index) => (
    <div
      key={index}
      className="bg-white  p-4 text-center group relative"
    >
      {/* Image container */}
      <div className="bg-gray-300 border rounded-full flex items-center justify-center w-24 h-24 mx-auto relative">
        {/* Purple circle on hover */}
        
        {/* Image */}
        <img 
          src={
            index === 0
              ? '/chair.png'       
              : index === 1
              ? '/chair2.png'        
              : index === 2
              ? '/chair3.png'        
              : '/latest1.png'       
          }
          alt={item}
          className="h-16 w-16  object-cover"
        />
        
        {/* Button inside circle */}
        <button className="absolute bg-green-500 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100">
          View Shop
        </button>
        
      </div>
      

      {/* Title */}
      <p className="font-semibold mt-2">{item}</p>

      {/* Price */}
      <p className="text-gray-700 text-sm mt-1">$49.99</p>
    </div>
  ))}
</div>



        </section>
  
        {/* Section 6: Newsletter */}
        <section className="py-10 px-8 text-center bg-gray-100">
          <h3 className="text-2xl font-bold text-indigo-800 mb-4">
            Get Latest Update By Subscribing To Our Newsletter
          </h3>
          <button className="px-6 py-2 bg-pink-500 text-white rounded-md">
            Subscribe Now
          </button>
        </section>
      </div>
    );
  }
  