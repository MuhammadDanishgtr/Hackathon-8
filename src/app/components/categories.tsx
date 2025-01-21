
// const categories = [
  //   {
    //     id: 1,
    //     name: "Wing Chair",
    //     image: "/TCategories1.png",
    //     count: "3584 Products",
//   },
//   {
//     id: 2,
//     name: "Wooden Chair",
//     image: "/TCategories2.png",
//     count: "157 Products",
//   },
//   {
  //     id: 3,
//     name: "Desk Chair",
//     image: "/TCategories3.png",
//     count: "154 Products",
//   },
// ]
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { urlFor } from "@/src/sanity/lib/image";
// import React, { useEffect, useState } from "react";
// import { client } from "@/src/sanity/lib/client";
// import { Categoriess } from "@/src/sanity/lib/querries";

// interface Category {
//   _id: string;
//   categories: string;
//   products: string;
//   image?: {
//     asset: {
//       _ref: string;
//       _type: "image";
//     };
//   };
//   slug?: {
//     current: string;
//   };
// }

// export default function Categories() {
//   const [products, setProducts] = useState<Category[]>([]);

//   useEffect(() => {
//     async function fetchCategory() {
//       try {
//         const fetchCategory: Category[] = await client.fetch(Categoriess);
//         console.log("Fetched categories:", fetchCategory); // Debug fetched data
//         setProducts(fetchCategory);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     }
//     fetchCategory();
//   }, []);

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {products
//             .filter((category) => category.slug?.current) // Exclude invalid categories
//             .map((category: Category) => (
//               <Link
//                 key={category._id}
//                 href={`/category/${category.slug.current}`}
//                 className="group relative aspect-[4/3] overflow-hidden rounded-lg"
//               >
//                 {category.image ? (
//                   <Image
//                     src={urlFor(category.image).url() || "/placeholder.svg"}
//                     alt={category.categories || "Category"}
//                     fill
//                     className="w-[424px] h-[424px] border rounded-[10px] object-cover transition-transform group-hover:scale-110"
//                   />
//                 ) : (
//                   <div className="w-[424px] h-[424px] bg-gray-300 flex items-center justify-center rounded-[10px]">
//                     <p className="text-gray-500">No Image</p>
//                   </div>
//                 )}
//                 <div className="absolute inset-0 bg-black/40">
//                   <div className="absolute bottom-6 left-6 text-white">
//                     <h3 className="text-xl font-semibold">{category.categories}</h3>
//                     <p className="text-sm opacity-80">{category.products}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// 'use client'

// import Image from "next/image";
// import Link from "next/link";
// import { urlFor } from "@/src/sanity/lib/image";
//   import React,{ useEffect, useState } from "react";
//   import { Category } from "@/types/categoriestype";
//   import { client } from "@/src/sanity/lib/client";
//   import {Categoriess } from "@/src/sanity/lib/querries";
  

// export default function Categories() {
//   const [products,setProducts] = useState<Category[]>([])
//   useEffect(()=>{
//       async function fetchcategory (){
//         const fetchCategory:Category[] = await client.fetch(Categoriess)
//         setProducts(fetchCategory)
//       }
//       fetchcategory()
//     },[])
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {Categories.map((Categories:Category) => (
//             <Link
//               key={Categories._id}
//               href={`/category/${Categories._id}`}
//               className="group relative aspect-[4/3] overflow-hidden rounded-lg"
//             >
//               {Categories.image && (
//                               <Image
//                                 src= {urlFor(Categories.image).url()}
//                                 alt={Categories.categories}
//                                 fill
//                                 className="w-[424px] h-[424px] border rounded-[10px] object-cover transition-transform group-hover:scale-110"
//                               />)} 
            
//               <div className="absolute inset-0 bg-black/40">
//                 <div className="absolute bottom-6 left-6 text-white">
//                   <h3 className="text-xl font-semibold">{Categories.categories}</h3>
//                   <p className="text-sm opacity-80">{Categories.products}</p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client';

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/src/sanity/lib/image";
import React, { useEffect, useState } from "react";
import { Category } from "@/types/categoriestype";
import { client } from "@/src/sanity/lib/client";
import { Categoriess } from "@/src/sanity/lib/querries";

export default function Categories() {
  const [products, setProducts] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategory() {
      const fetchCategory: Category[] = await client.fetch(Categoriess);
      setProducts(fetchCategory);
    }
    fetchCategory();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((category: Category) => (
            <Link
              key={category._id}
              href={`/category/${category._id}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              {category.image && (
                <Image
                  src={urlFor(category.image).url()}
                  alt={category.categories}
                  fill
                  className="w-[424px] h-[424px] border rounded-[10px] object-cover transition-transform group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/40">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">{category.categories}</h3>
                  <p className="text-sm opacity-80">{category.products}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


