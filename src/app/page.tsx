import React from "react";

import Hero from "./components/hero";
import Featured from "./components/featured";
import Latest from "./components/latest";

import Blog from "./components/blog";
import Center from "./components/center";


//
export default function Home() {
  return (
    <div>
    
     
      
      <Hero/>
      <Featured/>
      <Latest/>
      <Center/>
      <Blog/>

      
    </div>

    
  );
}