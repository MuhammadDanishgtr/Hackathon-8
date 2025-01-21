import Link from 'next/link'

interface categorys {
  _id: string
  name: string
  slug: {
    current: string
  }
}

export default function CategoryList({ categories }: { categories: categorys[] }) {
  return (
    <div className="flex space-x-4 mb-8 overflow-x-auto">
      {categories.map((category) => (
        <Link
          key={category._id}
          href={`/category/${category.slug.current}`}
          className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors whitespace-nowrap"
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}

