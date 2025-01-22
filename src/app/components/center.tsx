'use client';

import { useState, useEffect } from 'react';
import { client } from '../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';


const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface Product {
  _id: string;
  name: string;
  price: number;
  image: any;
}

export default function Center() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();
  const { addToCart, cart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][0...4]{
        _id,
        name,
        price,
        image
      }`;
      const result = await client.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);
  

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

   const isInCart = (productId: string) => {
    return cart.some(item => item._id === productId);
  };

  return (
      <div className="font-sans text-gray-900">
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
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-16 h-16 mb-4 object-contain"
              />
              <p className="text-lg font-semibold mb-2">{item.title}</p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

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
              <li className="flex items-center space-x-2 mb-2 w-full">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>All types of furniture available</span>
              </li>
              <li className="flex items-center space-x-2 mb-2 w-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Exclusive designs and latest arrivals</span>
              </li>
              <li className="flex items-center space-x-2 mb-2 w-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Special discount offers</span>
              </li>
            </ul>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleAddToCart({
                    _id: 'featured-sofa',
                    name: 'B&B Italian Sofa',
                    price: 32.00,
                    image: {
                      asset: {
                        url: '/blues.jpeg'
                      }
                    }
                  })}
                  className={`${
                    isInCart('featured-sofa')
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-pink-500 hover:bg-pink-700'
                  } text-white font-bold py-2 px-4 rounded transition-colors duration-300`}
                >
                  {isInCart('featured-sofa') ? 'In Cart' : 'Add to Cart'}
                </button>
                <div className="flex flex-col">
                  <span className="text-lg">B&B Italian Sofa</span>
                  <span className="text-lg">$32.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12 text-indigo-800">
          Trending Products
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-12">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg p-4 text-center group relative transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gray-100 flex items-center justify-center h-56 mx-auto relative rounded-lg overflow-hidden">
                <img
                  src={urlFor(product.image).width(300).url()}
                  alt={product.name}
                  className="h-48 w-48 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <button 
                      onClick={() => router.push(`/productDetails/${product._id}`)}
                      className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className={`${
                        isInCart(product._id)
                          ? 'bg-purple-500 hover:bg-purple-600'
                          : 'bg-pink-500 hover:bg-pink-600'
                      } text-white px-4 py-2 rounded-full transition-colors duration-300 block`}
                    >
                      {isInCart(product._id) ? 'In Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
              <p className="font-semibold mt-4 text-lg">{product.name}</p>
              <p className="text-pink-600 font-medium text-lg">${product.price}</p>
            </div>
          ))}
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

          <ul className="text-gray-700 mb-6 space-y-2">
            <li>✅ Material exposed like metals</li>
            <li>✅ Simple lines and geometric figures</li>
            <li>✅ Industrial materials like woods</li>
          </ul>

          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition duration-300">
            Shop Now
          </button>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <div className="relative w-[250px] h-[300px]">
            <img
              src="/brown.jpeg" // Replace with your chair image path
              alt="Discount Chair"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
  
        {/* Section 5: Top Categories */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
  <h3 className="text-3xl font-bold text-center mb-12 text-indigo-800 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-pink-500 after:mx-auto after:mt-4">
    Top Categories
  </h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-12 max-w-7xl mx-auto">
    {["Minki Chair 1", "Mini Chair 2", "Mini Chair", "Mini Chair"].map((item, index) => (
      <div
        key={index}
        className="bg-white p-6 text-center group relative rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      >
        <div className="flex items-center justify-center h-48 mx-auto relative overflow-hidden bg-gradient-to-b from-gray-50 to-white rounded-lg">
          <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
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
            className="h-40 w-40 object-contain transform transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
          />
          <button className="absolute bottom-4 bg-green-500 text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-green-600 transform -translate-y-2 group-hover:translate-y-0">
            View Details
          </button>
        </div>
        <p className="font-semibold text-lg mt-4 text-gray-800 group-hover:text-indigo-800 transition-colors">{item}</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-pink-600 font-medium text-lg">$49.99</span>
          <span className="text-sm text-gray-500 line-through">$69.99</span>
        </div>
        <div className="mt-3 flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
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
  