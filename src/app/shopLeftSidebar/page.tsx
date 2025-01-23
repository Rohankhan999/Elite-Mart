'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { client } from '../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { useCart } from '../context/CartContext';


const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}
interface Product {
  _id: string;
  name: string;
  price: string;
  image: any;
  category: string;
}
interface Filters {
  brands: string[];
  offers: string[];
  ratings: number[];
  categories: string[];
  priceRanges: string[];
  colors: string[];
}
interface PriceRange {
  min: number;
  max: number;
}

const ShopListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(6); 
  const [hasMore, setHasMore] = useState(true); // Track if more products are available


   
  const [filters, setFilters] = useState<Filters>({
    brands: [],
    offers: [],
    ratings: [],
    categories: [],
    priceRanges: [],
    colors: [],
  });
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const handleLoadMore = async () => {
    const nextBatch = visibleProducts + 6; // Load 6 more products
    setVisibleProducts(nextBatch);
    
    
    if (nextBatch >= filteredProducts.length) {
      
      const query = `*[_type == "product"]`; // Modify this query based on your needs
      const newProducts = await client.fetch(query);
      
      if (newProducts.length <= nextBatch) {
        setHasMore(false);
      }
    }
  };

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const query = `*[_type == "product"]`;
        const fetchedProducts = await client.fetch(query);
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts); // Set initial filtered products
        setHasMore(fetchedProducts.length > visibleProducts);
        setIsLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false); // Make sure to set loading to false even if there's an error
      }
    };
  
    fetchProducts();
  }, []);
  
  

  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...products];
  
      // Price filter
      if (selectedPriceRange) {
        filtered = filtered.filter(product => {
          const price = parseFloat(product.price);
          return price >= selectedPriceRange.min && price <= selectedPriceRange.max;
        });
      }
  
      setFilteredProducts(filtered);
    };
  
    applyFilters();
  }, [filters, products, selectedPriceRange]);
   

  const handlePriceRangeChange = (min: number, max: number) => {
    setSelectedPriceRange({ min, max });
  };

  const { addToCart, cartItemsCount } = useCart();
  
  const handleAddToCart = (product: Product) => {
    const cartItem = {
      _id: product._id,  // Changed from id to _id
      name: product.name,
      price: parseFloat(product.price),
      quantity: 1,
      image: {  // Match the Product interface structure
        asset: {
          url: urlFor(product.image).url()
        }
      }
    };
  
    addToCart(cartItem);
    toast.success('Product added to cart!', {
      duration: 2000,
      position: 'top-center',
    });

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  const handleFilterChange = (type: keyof Filters, value: string | number) => {
    setFilters(prev => {
      const updatedFilters = { ...prev };
      
      if (type === 'ratings') {
        const ratingsArray = updatedFilters[type];
        if (typeof value === 'number') {
          if (ratingsArray.includes(value)) {
            updatedFilters[type] = ratingsArray.filter(item => item !== value);
          } else {
            updatedFilters[type] = [...ratingsArray, value];
          }
        }
      } else {
        const stringArray = updatedFilters[type] as string[];
        if (typeof value === 'string') {
          if (stringArray.includes(value)) {
            updatedFilters[type] = stringArray.filter(item => item !== value);
          } else {
            updatedFilters[type] = [...stringArray, value];
          }
        }
      }
      
      return updatedFilters;
    });
  };
  
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white min-h-screen">
       {/* Mobile Sidebar Toggle */}
       <button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-pink-500 text-white rounded"
      >
        ☰
      </button>
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
      <div className="flex flex-col md:flex-row mt-8 gap-8 px-6 md:px-12 lg:px-20">
        {/* Sidebar */}
        <div className={`
    fixed md:relative w-64 h-full bg-white shadow-lg 
    transform transition-transform duration-300 ease-in-out z-10
    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
    md:translate-x-0
  `}>
  <div className="p-4 overflow-y-auto h-full">
    {/* Product Brand */}
    <h2 className="text-lg font-semibold mb-4">Product Brand</h2>
    <div className="space-y-2">
      {['Coaster Furniture', 'Fusion Dot High Fashion', 'Unique Furniture Restor', 'Dream Furniture Flipping', 'Young Repurposed', 'Green DIY furniture'].map((brand, index) => (
        <div key={index}>
          <input type="checkbox" id={`brand-${index}`} className="mr-2" />
          <label htmlFor={`brand-${index}`} className="text-sm">{brand}</label>
        </div>
      ))}
    </div>

    {/* Discount Offer */}
    <h2 className="text-lg font-semibold mt-6 mb-4">Discount Offer</h2>
    <div className="space-y-2">
      {['20% Cashback', '5% Cashback Offer', '25% Discount Offer'].map((offer, index) => (
        <div key={index}>
          <input type="checkbox" id={`offer-${index}`} className="mr-2" />
          <label htmlFor={`offer-${index}`} className="text-sm">{offer}</label>
        </div>
      ))}
    </div>

    {/* Rating Item */}
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

    {/* Categories */}
    <h2 className="text-lg font-semibold mt-6 mb-4">Categories</h2>
    <div className="space-y-2">
      {['Prestashop', 'Magento', 'Bigcommerce', 'osCommerce', '3dcart', 'Bags', 'Accessories', 'Jewellery', 'Watches'].map((category, index) => (
        <div key={index}>
          <input type="checkbox" id={`category-${index}`} className="mr-2" />
          <label htmlFor={`category-${index}`} className="text-sm">{category}</label>
        </div>
      ))}
    </div>

    {/* Price Filter */}
    <h2 className="text-lg font-semibold mt-6 mb-4">Price Filter</h2>
<div className="space-y-2">
  {[
    { label: '$0.00 - $150.00', min: 0, max: 150 },
    { label: '$150.00 - $350.00', min: 150, max: 350 },
    { label: '$350.00 - $504.00', min: 350, max: 504 },
    { label: '$450.00+', min: 450, max: 99999 }
  ].map((range, index) => (
    <div key={index}>
      <input 
        type="checkbox" 
        id={`price-${index}`} 
        className="mr-2"
        checked={selectedPriceRange?.min === range.min && selectedPriceRange?.max === range.max}
        onChange={() => handlePriceRangeChange(range.min, range.max)}
      />
      <label htmlFor={`price-${index}`} className="text-sm">{range.label}</label>
    </div>
  ))}
</div>

   {/* Filter By Color */}
<h2 className="text-lg font-semibold mt-6 mb-4">Filter By Color</h2>
<div className="space-y-2">
  {['Blue', 'Orange', 'Brown', 'Green', 'Purple', 'Sky'].map((color, index) => (
    <div key={index}>
      <input 
        type="checkbox" 
        id={`color-${index}`} 
        className="mr-2"
        checked={filters.colors.includes(color)}
        onChange={() => handleFilterChange('colors', color)}
      />
      <label htmlFor={`color-${index}`} className="text-sm">{color}</label>
    </div>
  ))}
</div>
</div>
</div>
      {/* Product Section */}
      <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-sm">
            <div className="relative group">
              <img
                src={urlFor(product.image).width(300).url()}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
            {/* Icons overlay */}
<div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
  <button
    onClick={() => handleAddToCart(product)}
    className="p-2 bg-white rounded-full shadow-md hover:bg-pink-500 hover:text-white transition-colors"
  >
    <FaShoppingCart className="w-5 h-5" />
  </button>
  <button className="p-2 bg-white rounded-full shadow-md hover:bg-pink-500 hover:text-white transition-colors">
    <FaHeart className="w-5 h-5" />
  </button>
  <button className="p-2 bg-white rounded-full shadow-md hover:bg-pink-500 hover:text-white transition-colors">
    <FaSearch className="w-5 h-5" />
  </button>
</div>


            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.category}</p>
              <p className="text-pink-500 font-bold text-lg mt-2">${product.price}</p>
            </div>
          </div>
        ))}
</div>

{/* View More Button in a separate container */}
{/* View More Button */}
{/* View More Button */}
{hasMore && filteredProducts.length > visibleProducts && (
          <div className="w-full flex justify-center mt-8 mb-8">
            <button
              onClick={handleLoadMore}
              className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition-colors text-lg font-semibold"
            >
              View More
            </button>
          </div>
        )}
</div>
      </div>
    </div>
  );
}
export default ShopListPage;



  