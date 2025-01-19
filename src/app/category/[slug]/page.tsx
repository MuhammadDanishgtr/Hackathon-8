import { client } from '../../../lib/sanity'
import ProductCard from '../../components/ProductCard'

async function fetchCategoryProducts(slug: string) {
  return await client.fetch(`*[_type == "product" && $slug in categories[]->slug.current]`, { slug })
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const products = await fetchCategoryProducts(params.slug)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Category: {params.slug}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

