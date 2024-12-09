import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Wing Chair",
    image: "/TCategories1.png",
    count: "3584 Products",
  },
  {
    id: 2,
    name: "Wooden Chair",
    image: "/TCategories2.png",
    count: "157 Products",
  },
  {
    id: 3,
    name: "Desk Chair",
    image: "/TCategories3.png",
    count: "154 Products",
  },
]

export default function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className=" w-[424px] h-[424px] border rounded-[10px] object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-sm opacity-80">{category.count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

