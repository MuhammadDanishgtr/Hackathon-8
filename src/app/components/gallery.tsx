// import Image from 'next/image'

// const galleryImages = [
//   { src: '/PStyle1.png', alt: 'Orange chair'},
//   { src: '/PStyle2.png', alt: 'White chair' },
//   { src: '/PStyle3.png', alt: 'Gray chair' },
//   { src: '/PStyle4.png', alt: 'Another white chair' },
//   { src: '/PStyle5.png', alt: 'Wooden chair' },
// ]
// 'use client'
  
//   import { urlFor } from "@/src/sanity/lib/image";
//   import Image from "next/image"
//   import React,{ useEffect, useState } from "react";
//   import { Product } from "@/types/productstype";
//   import { client } from "@/src/sanity/lib/client";
// import { gallery } from "@/src/sanity/lib/querries";

// export default function Gallery() {
//     const [products,setProducts] = useState<Product[]>([])
//     useEffect(()=>{
//       async function fetchproduct (){
//         const fetchProduct:Product[] = await client.fetch(gallery)
//         setProducts(fetchProduct)
//       }
//       fetchproduct()
//     },[])
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">Explore New and Popular Styles</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           <div className="col-span-2 row-span-2">
//             {products.image && (
//             <Image
//             src= {urlFor(products.image).url()}
//             alt={products.title}
//             width={328}
//               height={328}
//               className="w-full h-full object-cover rounded-lg"
//            />)}
//           </div>
//           {products.slice(1).map((products) => (
//             <div key={products._id}>
//               products.image && (
//             <Image
//             src= {urlFor(products.image).url()}
//             alt={products.title}
//             width={200}
//               height={200}
//               className="w-full h-full flex flex-col object-cover rounded-lg"
//            />)}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// 'use client';

// import { urlFor } from "@/src/sanity/lib/image";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Product } from "@/types/productstype";
// import { client } from "@/src/sanity/lib/client";
// import { gallery } from "@/src/sanity/lib/querries";

// export default function Gallery() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(gallery);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     }
//     fetchProduct();
//   }, []);

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">Explore New and Popular Styles</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {/* Display the first product as a large image */}
//           {products[0]?.image && (
//             <div className="col-span-2 row-span-2">
//               <Image
//                 src={urlFor(products[0].image).url()}
//                 alt={products[0].title || "Revolving white chair"}
//                 width={328}
//                 height={328}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           )}

//           {/* Display the rest of the products */}
//           {products.slice(1).map((products) => (
//             <div key={products._id} className="grid grid-cols-1">
//               {products.image && (
//                 <Image
//                   src={urlFor(products.image).url()}
//                   alt={products.title || "Comfortable chairs"}
//                   width={200}
//                   height={100}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { urlFor } from "@/src/sanity/lib/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/productstype";
import { client } from "@/src/sanity/lib/client";
import { gallery } from "@/src/sanity/lib/querries";

export default function Gallery() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProducts: Product[] = await client.fetch(gallery);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore New and Popular Styles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Display the first product as a large image */}
          {products.length > 0 && products[0]?.image && (
            <div className="md:col-span-2 md:row-span-2">
              <Image
                src={urlFor(products[0].image).url()}
                alt={products[0].title || "Product Image"}
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          {/* Display the rest of the products */}
          {products.slice(1, 5).map((product, index) => (
            <div key={index}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

