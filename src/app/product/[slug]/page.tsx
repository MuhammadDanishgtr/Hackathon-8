// import { client } from "@/src/sanity/lib/client";
// import { urlFor } from "@/src/sanity/lib/image";
// import { Product } from "@/types/productstype";
// import { groq } from "next-sanity";
// import Image from "next/image";

// interface ProductPageProps {
//     params : Promise<{slug : string}>
// }

// async function getProduct (slug:string):Promise<Product>{
//     return client.fetch(
//         groq `*[_type== "products" && slug.current ==$slug][0]{
//         _id,
//         title,
//         _type,
//         category,
//         image,
//         price,
//         priceWithoutDiscount,
//         inventory,
//         badge,
//         description,
//         tags,
//         }`,{slug}
//     )
// }

// export default async function ProductPage( {params}:ProductPageProps){
//     const {slug} = await params;
//     const product = await getProduct(slug)
//     return(
//         <div className="max-w-7xl mx-auto px-4 pt-20">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 <div className="aspect-square">
//                     {product.image && (
//                         <Image 
//                         src = {urlFor(product.image).url()}
//                         alt= {product.title}
//                         width={500}
//                         height={500}
//                         className="rounded large shadow-md"
//                         />

//                     )}
//                 </div>
//                 <div className="flex flex-col gap-8">
//                     <h1 className="text-6xl font-bold">{product.title}</h1>
//                     <p className="text-4xl font-bold" > Price: { product.price}</p>
//                     <p className="text-4xl font-bold">PriceWithoutDiscount: {product.priceWithoutDiscount}</p>
//                     <p className="text-4xl font-bold">Badge: {product.badge}</p>
//                     <p className="text-4xl font-bold">Inventory: {product.inventory}</p>
//                     <p className="text-3xl font-normal">Description: {product.description}</p>

//                 </div>

//             </div>

//         </div>

//     )
// }

// "use client"

// import { client } from "@/src/sanity/lib/client"
// import { urlFor } from "@/src/sanity/lib/image"
// import type { Product } from "@/types/productstype"
// import { ShoppingCart } from "lucide-react"
// import { groq } from "next-sanity"
// import Image from "next/image"
// import { FaPlus, FaMinus } from "react-icons/fa"
// import { useState, useEffect } from "react"
// import { useCart } from "../../context/CartContext"
// import { toast } from "sonner"

// interface ProductPageProps {
//   params: {
//     slug: string
//   }
// }

// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     groq`*[_type== "products" && slug.current ==$slug][0]{
//       _id,
//       title,
//       _type,
//       category,
//       image,
//       price,
//       priceWithoutDiscount,
//       inventory,
//       badge,
//       description,
//       tags,
//     }`,
//     { slug },
//   )
// }

// export default function ProductPage({ params }: ProductPageProps) {
//   const [product, setProduct] = useState<Product | null>(null)
//   const [quantity, setQuantity] = useState(1)
//   const { addToCart } = useCart()

//   useEffect(() => {
//     const loadProduct = async () => {
//       const productData = await getProduct(params.slug)
//       setProduct(productData)
//     }
//     loadProduct()
//   }, [params.slug])

//   const handleQuantityChange = (change: number) => {
//     setQuantity((prev) => {
//       const newQuantity = prev + change
//       if (newQuantity < 1) return 1
//       if (product && newQuantity > product.inventory) {
//         toast.error("Cannot exceed available stock")
//         return prev
//       }
//       return newQuantity
//     })
//   }

//   const handleAddToCart = () => {
//     if (!product) return

//     // Add to cart with current quantity
//     for (let i = 0; i < quantity; i++) {
//       addToCart({
//         _id: product._id,
//         name: product.title,
//         price: product.price,
//         image: product.image,
//         categoryName: product.category,
//       })
//     }

//     toast.success(`Added ${quantity} ${quantity === 1 ? "item" : "items"} to cart`)
//   }

//   if (!product) {
//     return <div className="container mx-auto px-5 py-24">Loading...</div>
//   }

//   return (
//     <section className="text-gray-600 body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url() || "/placeholder.svg"}
//               alt={product.title}
//               width={500}
//               height={500}
//               className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//             />
//           )}
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
//             <div className="rating mt-2">
//               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
//               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//             </div>
//             <p className="leading-relaxed pt-5">{product.description}</p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//               <div className="flex">
//                 <span className="mr-3">Color</span>
//                 <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
//                 <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
//                 <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
//               </div>
//               <div className="flex ml-6 items-center">
//                 <span className="mr-3">Size</span>
//                 <div className="form-control w-full max-w-xs">
//                   <select className="select select-bordered">
//                     <option disabled selected>
//                       Select Size
//                     </option>
//                     <option>S</option>
//                     <option>M</option>
//                     <option>L</option>
//                     <option>XL</option>
//                     <option>Standard</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
//               <span className="text-sm sm:text-base font-medium">Quantity</span>
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="flex items-center text-white bg-indigo-500 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-600 rounded"
//               >
//                 <FaMinus className="w-4 h-4 mr-2" /> Less
//               </button>
//               <div className="text-center text-sm sm:text-base font-semibold tracking-tight">{quantity}</div>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="flex items-center text-white bg-indigo-500 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-600 rounded"
//               >
//                 <FaPlus className="w-4 h-4 mr-2" /> Add
//               </button>
//             </div>

//             <div className="divider"></div>
//             <div className="flex">
//               <span className="title-font font-medium text-2xl text-gray-900">Price: ${product.price}</span>
//               <button
//                 onClick={handleAddToCart}
//                 className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
//               >
//                 <ShoppingCart className="w-6 h-5" /> Add to Cart
//               </button>
//             </div>
//             <span className="title-font font-medium text-2xl text-gray-900">
//               In Stock: {product.inventory} Available
//             </span>

//             <button className="flex justify-around ml-auto mt-4 w-full text-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//               Buy Now & Enjoy the Comfortness
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { client } from "@/src/sanity/lib/client";
import { urlFor } from "@/src/sanity/lib/image";
import type { Product } from "@/types/productstype";
import { ShoppingCart } from "lucide-react";
import { groq } from "next-sanity";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { use } from "react"; // Import use() from React
import { useCart } from "../../context/CartContext";
import { toast } from "sonner";

interface ProductPageProps {
  params: Promise<{ slug: string }>; // Update params to a Promise
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type== "products" && slug.current ==$slug][0]{
      _id,
      title,
      _type,
      category,
      image,
      price,
      priceWithoutDiscount,
      inventory,
      badge,
      description,
      tags,
    }`,
    { slug }
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params); // Unwrap params using React.use()
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      const productData = await getProduct(slug);
      setProduct(productData);
    };
    loadProduct();
  }, [slug]);

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => {
      const newQuantity = prev + change;
      if (newQuantity < 1) return 1;
      if (product && newQuantity > product.inventory) {
        toast.error("Cannot exceed available stock");
        return prev;
      }
      return newQuantity;
    });
  };

  const handleAddToCart = () => {
    if (!product) return;

    // Add to cart with current quantity
    for (let i = 0; i < quantity; i++) {
      addToCart({
        _id: product._id,
        name: product.title,
        price: product.price,
        image: product.image,
        categoryName: product.category,
      });
    }

    toast.success(
      `Added ${quantity} ${quantity === 1 ? "item" : "items"} to cart`
    );
  };

  if (!product) {
    return <div className="container mx-auto px-5 py-24">Loading...</div>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {product.image && (
            <Image
              src={urlFor(product.image).url() || "/placeholder.svg"}
              alt={product.title}
              width={500}
              height={500}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            />
          )}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <div className="rating mt-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="leading-relaxed pt-5">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="form-control w-full max-w-xs">
                  <select className="select select-bordered">
                    <option disabled selected>
                      Select Size
                    </option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>Standard</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <span className="text-sm sm:text-base font-medium">
                Quantity
              </span>
              <button
                onClick={() => handleQuantityChange(-1)}
                className="flex items-center text-white bg-indigo-500 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                <FaMinus className="w-4 h-4 mr-2" /> Less
              </button>
              <div className="text-center text-sm sm:text-base font-semibold tracking-tight">
                {quantity}
              </div>
              <button
                onClick={() => handleQuantityChange(1)}
                className="flex items-center text-white bg-indigo-500 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                <FaPlus className="w-4 h-4 mr-2" /> Add
              </button>
            </div>

            <div className="divider"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                Price: ${product.price}
              </span>
              <button
                onClick={handleAddToCart}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                <ShoppingCart className="w-6 h-5" /> Add to Cart
              </button>
            </div>
            <span className="title-font font-medium text-2xl text-gray-900">
              In Stock: {product.inventory} Available
            </span>

            <button className="flex justify-around ml-auto mt-4 w-full text-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Buy Now & Enjoy the Comfortness
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
