import React, { Suspense } from "react";
import { client } from '../sanity/lib/client';
import Hero from "./components/hero";
import FeaturedProducts from './components/featured';
import Latest from "./components/latest";
import Blog from "./components/blog";
import Center from "./components/center";

async function getProducts() {
  const query = `*[_type == "product"]{
    _id,
    name,
    code,
    price,
    image {
      asset -> {
        url
      }
    },
    description,
    category
  }`;

  return await client.fetch(query);
}

function LoadingFallback() {
  return <div>Loading...</div>;
}

export default async function Home() {
  const products = await getProducts();
 
  return (
    <div>
      <Suspense fallback={<LoadingFallback />}>
        <Hero/>
        <FeaturedProducts products={products} />
        <Latest/>
        <Center/>
        <Blog/>
      </Suspense>
    </div>
  );
}
