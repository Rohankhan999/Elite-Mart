'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/image';
import Image from 'next/image';


function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResults() {
      if (!query) return;
      
      const searchQuery = `*[_type == "product" && (lower(name) match "*${query.toLowerCase()}*" || lower(description) match "*${query.toLowerCase()}*")] {
        _id,
        name,
        description,
        price,
        image
      }`;
      
      try {
        const data = await client.fetch(searchQuery);
        setResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-[#FB2E86] mb-6">Search Results for: {query}</h1>
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <p className="text-gray-600">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((product: any) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
              {product.image && (
                <div className="relative w-full h-[200px] mb-4">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    fill
                    className="object-contain rounded"
                    priority={true}
                  />
                </div>
              )}
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
              {product.price && (
                <p className="text-[#FB2E86] font-bold text-lg">${product.price}</p>
              )}
            </div>
          ))}
        </div>
      )}
      {results.length === 0 && !loading && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No products found matching your search.</p>
        </div>
      )}
    </div>
  );
}

export default function SearchResults() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
