'use client'
import Image from "next/image"
import { urlFor } from "@/src/sanity/lib/image";
  import React,{ useEffect, useState } from "react";
  import { Product } from "@/types/productstype";
  import { client } from "@/src/sanity/lib/client";
  import { featuredProduct, instagramfeed } from '@/src/sanity/lib/querries';

// const instagramImages = [
//   { src: "/TCategories2.png", alt: "Wooden chairs" },
//   { src: "/TCategories1.png", alt: "Gray chair" },
//   { src: "/Product2.png", alt: "Pink chair" },
//   { src: "/Product1.png", alt: "White chair" },
//   { src: "/Product3.png", alt: "Orange chair" },
//   { src: "/TCategories3.png", alt: "Office chair" },
// ]


export default function InstagramFeed() {
  const [products,setProducts] = useState<Product[]>([])
      useEffect(()=>{
        async function fetchfeaturedproduct (){
          const fetchfeaturedProduct:Product[] = await client.fetch(instagramfeed)
          setProducts(fetchfeaturedProduct)
        }
        fetchfeaturedproduct()
      },[])
  
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Follow Products And Discounts On Instagram
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((products) => (
          <div key={products._id} className="relative aspect-square">
            {products.image && (
             <Image
             src= {urlFor(products.image).url()}
            alt="Instagram"
            fill
            className="object-cover hover:opacity-90 transition-opacity cursor-pointer"
            />)}
          </div>
        ))}
      </div>
    </section>
  )
}

