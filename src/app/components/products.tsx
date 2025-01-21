// import Image from 'next/image';
// import { Button } from "../../app/components/ui/button";

// import { ShoppingCart } from 'lucide-react';



// const products = [
//   { id: 1, name: 'Library Stool Chair', price: 20, image: '/Product1.png', tag: 'New' },
//   { id: 2, name: 'Library Stool Chair', price: 20, image: '/Product2.png', tag: 'Sale' },
//   { id: 3, name: 'Library Stool Chair', price: 20, image: '/Product3.png' },
//   { id: 4, name: 'Library Stool Chair', price: 20, image: '/Product4.png' },
//   { id: 5, name: 'Library Stool Chair', price: 20, image: '/Product5.png', tag: 'New' },
//   { id: 6, name: 'Library Stool Chair', price: 20, image: '/Product6.png' },
//   { id: 7, name: 'Library Stool Chair', price: 20, image: '/Product7.png' },
//   { id: 8, name: 'Library Stool Chair', price: 20, image: '/Product8.png', tag: 'Sale' },
// ]
'use client'
  
import { ShoppingCart } from 'lucide-react'
import { Button } from "../../app/components/ui/button"
import { urlFor } from "@/src/sanity/lib/image";
import Image from "next/image"
import React,{ useEffect, useState } from "react";
import { Product } from "@/types/productstype";
import { client } from "@/src/sanity/lib/client";
import { ourProducts } from '@/src/sanity/lib/querries';




export default function Products() { 
 const [products,setProducts] = useState<Product[]>([])
  useEffect(()=>{
    async function fetchproduct (){
      const fetchProduct:Product[] = await client.fetch(ourProducts)
      setProducts(fetchProduct)
    }
    fetchproduct()
  },[])
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((products) => (
            <div key={products._id} className="group relative">
              <div className="relative aspect-square bg-[#F7F7F7] rounded-lg overflow-hidden">
                {products.image && (
                                <Image
                                  src= {urlFor(products.image).url()}
                                  alt={products.title}
                                  fill
                                  className="object-cover"
                                />)}
                {products.tags && (
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs text-white rounded ${
                    products.tags === 'New' ? 'bg-[#00BAB5]' : 'bg-[#FF8A8A]'
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
