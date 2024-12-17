import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';

export default function ShopListPage() {
  const products = [
    {
      title: 'Accumsan tincidunt',
      originalPrice: '59.00',
      discountedPrice: '26.00',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/as.jpeg',
    },
    {
      title: 'In nulla',
      originalPrice: '52.00',
      discountedPrice: '26.00',
      rating: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/er.jpeg',
    },
    {
      title: 'Vel sem',
      originalPrice: '50.00',
      discountedPrice: '26.00',
      rating: 3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/uj.jpeg',
    },
    {
        title: 'Porttitor cum',
        originalPrice: '59.00',
        discountedPrice: '26.00',
        rating: 4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/jk.jpeg',
      },
      {
        title: 'Nunc in',
        originalPrice: '50.00',
        discountedPrice: '26.00',
        rating: 4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/km.jpeg',
      },
      {
        title: 'Vitae facilisis',
        originalPrice: '59.00',
        discountedPrice: '26.00',
        rating: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/qq.jpeg',
      },
      {
        title: 'Curabitur lectus',
        originalPrice: '59.00',
        discountedPrice: '26.00',
        rating: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/xc.jpeg',
      },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-black mb-4">Shop Left Sidebar</h1>
        <p className="text-sm text-gray-500">
          Home &gt; Pages &gt; <span className="text-pink-500">Shop Left Sidebar</span>
        </p>
      </div>

      {/* Intro Section */}
      <div className="px-6 md:px-12 lg:px-20 mt-8">
        <h2 className="text-2xl font-semibold mb-2">
          Ecommerce Accessories &amp; Fashion Items
        </h2>
        <p className="text-gray-600 mt-2">About 9,620 results (0.62 seconds)</p>

        {/* Filters */}
        <div className="mt-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
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
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row mt-8 gap-8 px-6 md:px-12 lg:px-20">
        {/* Sidebar */}
        <div className="lg:w-1/4 bg-gray-100 p-6 rounded-lg">
          {/* Sidebar Filters */}
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
                {Array.from({ length: rating }, () => '★').join('')} ({Math.floor(Math.random() * 3000)})
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

        {/* Product Section */}
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2 gap-y-px ">
  {products.map((product, index) => (
    <div
      key={index}
      className="flex flex-col items-center h-[320] bg-white p-1 border  gap-1 shadow-sm w-56" // Reduced padding from `p-4` to `p-2`
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-50 object-cover rounded-lg mb-2" // Reduced height from `h-48` to `h-36` and margin from `mb-4` to `mb-2`
      />
      <h3 className="text-sm font-semibold text-center"> {/* Changed text size from `text-lg` to `text-base` */}
        {product.title}
      </h3>
      <div className="flex items-center justify-center mt-1"> {/* Reduced margin from `mt-2` to `mt-1` */}
        <span className="text-red-500 font-bold text-sm">${product.discountedPrice}</span> {/* Changed text size from `text-lg` to `text-md` */}
        <span className="text-gray-500 line-through ml-1">${product.originalPrice}</span>
      </div>
      <div className="flex justify-center mt-1"> {/* Reduced margin from `mt-2` to `mt-1` */}
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`${
              i < product.rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <div className="flex space-x-2 mt-2"> {/* Reduced margin from `mt-4` to `mt-2` */}
        <button className="p-1 bg-gray-100 rounded-full hover:bg-gray-200">
          <FaShoppingCart />
        </button>
        <button className="p-1 bg-gray-100 rounded-full hover:bg-gray-200">
          <FaHeart />
        </button>
        <button className="p-1 bg-gray-100 rounded-full hover:bg-gray-200">
          <FaSearch />
        </button>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Logos Section */}
      <div className="mt-12 flex justify-center flex-wrap gap-4 px-6">
        {[5, 1, 2, 4, 3].map((i) => (
          <img
            key={i}
            src={`/logz${i}.jpeg`}
            alt={`Logo ${i}`}
            className="w-20 h-20 sm:w-32 sm:h-32 object-contain"
          />
        ))}
      </div>
    </div>
  );
}


  



 
  