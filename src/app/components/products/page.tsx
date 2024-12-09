import ProductGrid from "../../components/product-grid"
import Newsletter from "../../components/newsletter"
import InstagramFeed from "../../components/instagram-feed"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">All Products</h1>
      <ProductGrid />
      <Newsletter />
      <InstagramFeed />
    </div>
  )
}

