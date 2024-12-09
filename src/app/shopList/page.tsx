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
      {/* Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF] flex flex-col items-start justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4 ml-[158px]">Shop List</h1>
          <p className="text-sm text-gray-500 mt-4 ml-[165px]">
            Home &gt; Pages &gt; <span className="text-pink-500">Shop List</span>
          </p>
        </div>
      </div>


      {/* Content Section */}
      <div className="mt-[100px] ml-[175px]">
        <h2 className="text-2xl font-semibold mb-2">
          Ecommerce Accessories &amp; Fashion Items
        </h2>
        <p className="text-gray-600 mt-2">About 9,620 results (0.62 seconds)</p>
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

      {/* Product Cards Section */}
      <div className="flex flex-col gap-6 mt-16 px-6 items-center mb-[30px]">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 border rounded-lg shadow-sm  w-[900px] "
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-64 h-30 object-cover rounded-lg"
            />

            {/* Product Details */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{product.title} 

              <div className="flex justify-center items-center space-x-2 mb-2 -mt-5">
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

            {/* Actions with react-icons */}
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
    </div>
  );
}

  



 