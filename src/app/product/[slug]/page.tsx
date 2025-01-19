import { client } from '../../../lib/sanity'
import Image from 'next/image'

async function fetchProduct(slug: string) {
  return await client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug })
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await fetchProduct(params.slug)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Available Sizes:</h3>
            <div className="flex space-x-2">
              {product.sizes.map((size: string) => (
                <span key={size} className="px-3 py-1 border rounded-full">
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Available Colors:</h3>
            <div className="flex space-x-2">
              {product.colors.map((color: string) => (
                <span
                  key={color}
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

