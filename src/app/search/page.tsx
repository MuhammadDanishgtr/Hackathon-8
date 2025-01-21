// import { client } from '../../lib/sanity'
// import ProductCard from '../components/ProductCard'

// async function searchProducts(query: string) {
//   if (!query) return []; // Handle empty query by returning an empty array

//   try {
//     const result = await client.fetch(
//       `*[_type == "product" && name match "*${query}*"]`
//     );
//     console.log('Query:', query);
//     console.log('Result:', result); // Log the result for debugging
//     return result;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return []; // Return an empty array on error
//   }
// }


// export default async function SearchPage({
//   searchParams,
// }: {
//   searchParams: { q: string }
// }) {
//   const query = searchParams.q || ''; // Fallback if searchParams.q is undefined
//   const products = await searchProducts(query);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">
//         {query ? `Search Results for: ${query}` : 'No Search Query Provided'}
//       </h1>
//       {products.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {products.map((product: any) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500">No products found for your search query.</p>
//       )}
//     </div>
//   )
// }
