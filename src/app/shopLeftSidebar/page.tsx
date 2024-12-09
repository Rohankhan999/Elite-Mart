import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';

export default function ShopListPage() {
  const products = [
    {
      title: 'Accumsan tincidunt',
      originalPrice: '59.00',
      discountedPrice: '26.00',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/q.jpeg',
    },
    {
      title: 'In nulla',
      originalPrice: '52.00',
      discountedPrice: '26.00',
      rating: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/d.jpeg',
    },
    {
      title: 'Vel sem',
      originalPrice: '50.00',
      discountedPrice: '26.00',
      rating: 3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/a.jpeg',
    },
    {
        title: 'Porttitor cum',
        originalPrice: '59.00',
        discountedPrice: '26.00',
        rating: 4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/b.jpeg',
      },
      {
        title: 'Nunc in',
        originalPrice: '50.00',
        discountedPrice: '26.00',
        rating: 4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/k.jpeg',
      },
      {
        title: 'Vitae facilisis',
        originalPrice: '59.00',
        discountedPrice: '26.00',
        rating: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/o.jpeg',
      },
      {
        title: 'Curabitur lectus',
        originalPrice: '59.00',
        discountedPrice: '26.00',
        rating: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/p.jpeg',
      },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4 mr-[720px]">Shop List</h1>
          <p className="text-sm text-gray-500 mr-[720px]">
            Home &gt; Pages &gt; <span className="text-pink-500">Shop List</span>
          </p>
        </div>
      </div>

      <div className="mt-[100px] ml-[175px]">
          <h2 className="text-2xl font-semibold mb-2">
            Ecommerce Accessories &amp; Fashion Items
          </h2>
          <p className="text-gray-600 mt-2">About 9,620 results (0.62 seconds)</p>
        </div>

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

    <div className="bg-white min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-6 mt-[65px] mb-[35px] ml-[166px]">
        <h2 className="text-lg font-semibold mb-4">Product Brand</h2>
        <div className="space-y-2">
          {['Coaster Furniture', 'Fusion Dot High Fashion', 'Unique Furniture Restor', 'Dream Furniture Flipping', 'Young Repurposed', 'Green DIY furniture'].map((brand, index) => (
            <div key={index}>
              <input type="checkbox" id={`brand-${index}`} className="mr-2" />
              <label htmlFor={`brand-${index}`} className="text-sm">{brand}</label>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">Discount Offer</h2>
        <div className="space-y-2">
          {['20% Cashback', '5% Cashback Offer', '25% Discount Offer'].map((offer, index) => (
            <div key={index}>
              <input type="checkbox" id={`offer-${index}`} className="mr-2" />
              <label htmlFor={`offer-${index}`} className="text-sm">{offer}</label>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">Rating Item</h2>
        <div className="space-y-2">
          {[5, 4, 3, 2].map((rating, index) => (
            <div key={index}>
              <input type="checkbox" id={`rating-${index}`} className="mr-2" />
              <label htmlFor={`rating-${index}`} className="text-sm">
                {Array.from({ length: rating }, (_, i) => '★').join('')} ({Math.floor(Math.random() * 3000)})
              </label>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">Categories</h2>
        <div className="space-y-2">
          {['Prestashop', 'Magento', 'Bigcommerce', 'osCommerce', '3dcart', 'Bags', 'Accessories', 'Jewellery', 'Watches'].map((category, index) => (
            <div key={index}>
              <input type="checkbox" id={`category-${index}`} className="mr-2" />
              <label htmlFor={`category-${index}`} className="text-sm">{category}</label>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">Price Filter</h2>
        <div className="space-y-2">
          {['$0.00 - $150.00', '$150.00 - $350.00', '$150.00 - $504.00', '$450.00+'].map((price, index) => (
            <div key={index}>
              <input type="checkbox" id={`price-${index}`} className="mr-2" />
              <label htmlFor={`price-${index}`} className="text-sm">{price}</label>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">Filter By Color</h2>
        <div className="space-y-2">
          {['Blue', 'Orange', 'Brown', 'Green', 'Purple', 'Sky'].map((color, index) => (
            <div key={index}>
              <input type="checkbox" id={`color-${index}`} className="mr-2" />
              <label htmlFor={`color-${index}`} className="text-sm">{color}</label>
            </div>
          ))}
        </div>
      </div>

      
     

       

        {/* Products Section */}
        <div className="grid grid-cols-1 gap-6 mt-16 px-5 items-center mb-[35px]">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 border rounded-lg shadow-sm"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-64 h-30 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{product.title}

                <div className="flex justify-center items-center space-x-2 mb-2 -mt-5 ml-[60px]">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div> {/* Red Dot */}
    <div className="w-3 h-3 bg-blue-500 rounded-full"></div> {/* Blue Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full"></div> {/* Green Dot */}
  </div>

                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">${product.discountedPrice}</span>
                  <span className="text-gray-500 line-through">${product.originalPrice}</span>
                </div>
                <div className="flex items-center mt-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 ${i < product.rating ? 'fill-current' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <FaShoppingCart className="text-gray-600 hover:text-black" />
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <FaHeart className="text-red-400 hover:text-red-600" />
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <FaSearch className="text-gray-600 hover:text-black" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="mt-12 flex justify-center space-x-8 mb-[30px]">
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

  



 