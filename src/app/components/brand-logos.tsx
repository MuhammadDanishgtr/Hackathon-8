import Image from 'next/image'

const brands = [
  { name: 'Zapier', logo: '/Logo1.png' },
  { name: 'Pipedrive', logo: '/Logo2.png' },
  { name: 'CIB Bank', logo: '/Logo3.png' },
  { name: 'Zara', logo: '/Logo4.png' },
  { name: 'Burnt Toast', logo: '/Logo5.png' },
  { name: 'Planday', logo: '/Logo6.png' },
  { name: 'Moz', logo: '/Logo7.png' },
]

export default function BrandLogos() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div key={brand.name} className="w-1/2 sm:w-1/3 md:w-auto">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={120}
                height={40}
                className=" w-[85px] h-[87px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

