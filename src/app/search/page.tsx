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
      
      const searchQuery = `*[_type == "product" && (name match "*${query}*" || description match "*${query}*")] {
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
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8">
      <h1 className="text-2xl mb-4">Search Results for: {query}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((product: any) => (
            <div key={product._id} className="border p-4 rounded shadow-md hover:shadow-lg transition-shadow">
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
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              {product.price && (
                <p className="text-[#FB2E86] font-bold text-lg">${product.price}</p>
              )}
            </div>
          ))}
        </div>
      )}
      {results.length === 0 && !loading && (
        <p className="text-center text-gray-500">No products found matching your search.</p>
      )}
    </div>
  );
}

export default function SearchResults() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}