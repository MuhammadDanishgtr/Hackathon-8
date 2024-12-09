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

