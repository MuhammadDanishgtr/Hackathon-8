// import Image from "next/image"
// import { Button } from "../../app/components/ui/button";

// import { ShoppingCart } from 'lucide-react'

// const products = [
//   {
//     id: 1,
//     name: "Library Stool Chair",
//     price: 20,
//     image: "/FProduct1.png",
//     tag: "New",
//   },
//   {
//     id: 2,
//     name: "Library Stool Chair",
//     price: 20,
//     image: "/FProduct2.png",
//     tag: "Sales",
//   },
//   {
//     id: 3,
//     name: "Library Stool Chair",
//     price: 20,
//     image: "/FProduct3.png",
//     tag: "",
//   },
//   {
//     id: 4,
//     name: "Library Stool Chair",
//     price: 20,
//     image: "/FProduct4.png",
//     tag: "",
//   },
  
// ]

'use client'
  
  import { ShoppingCart } from 'lucide-react'
  import { Button } from "../../app/components/ui/button"
  import { urlFor } from "@/src/sanity/lib/image";
  import Image from "next/image"
  import React,{ useEffect, useState } from "react";
  import { Product } from "@/types/productstype";
  import { client } from "@/src/sanity/lib/client";
  import { featuredProduct } from '@/src/sanity/lib/querries';

export default function FeaturedProducts() {
   const [products,setProducts] = useState<Product[]>([])
    useEffect(()=>{
      async function fetchfeaturedproduct (){
        const fetchfeaturedProduct:Product[] = await client.fetch(featuredProduct)
        setProducts(fetchfeaturedProduct)
      }
      fetchfeaturedproduct()
    },[])
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((products) => (
            <div key={products._id} className="group relative">
              <div className="relative aspect-square bg-[#F7F7F7] rounded-lg overflow-hidden">
                {products.image && (
                                <Image
                                  src= {urlFor(products.image).url()}
                                  alt={products.title}
                                  fill
                                  className="object-cover w-[312px] h-[312px] rounded"
                                />)}
                {products.tags && (
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs text-white rounded ${
                    products.tags === "New" ? "bg-[#00BAB5]" : "bg-[#FF8A8A]"
                  }`}>
                    {products.tags}
                  </span>
                )}
                <Button
                  className="absolute bottom-4 right-4 bg-white text-black hover:bg-[#00BAB5] hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  size="icon"
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{products.title}</h3>
                  <p className="text-[#00BAB5]">${products.price}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


