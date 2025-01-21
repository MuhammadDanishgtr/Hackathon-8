import Hero from "../app/components/hero"
import BrandLogos from "../app/components/brand-logos"
import FeaturedProducts from "../app/components/featured-products"
import Categories from "../app/components/categories"
import Gallery from "../app/components/gallery"
import Products from "../app/components/products"

export default function Home() {
  return (
    <> 
      <Hero />
      <BrandLogos />
      <FeaturedProducts />
       <Categories />
      <Gallery />
      <Products />
    </>
  )
}

// import { fetchProducts, fetchCategories } from '../lib/sanity'
// import SearchBar from './components/SearchBar'
// import CategoryList from './components/CategoryList'
// import ProductCard from './components/ProductCard'
// import Cart from './components/Cart'

// export default async function Home() {
//   const products = await fetchProducts()
//   const categories = await fetchCategories()

//   return (
//     <main className="flex min-h-screen flex-col items-center p-24">
//       <h1 className="text-4xl font-bold mb-8">Our Store</h1>
//       <SearchBar />
//       <div className="w-full max-w-7xl">
//         <CategoryList categories={categories} />
//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="w-full md:w-3/4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {products.map((product: any) => (
//                 <ProductCard key={product._id} product={product} />
//               ))}
//             </div>
//           </div>
//           <div className="w-full md:w-1/4">
//             <Cart />
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }


