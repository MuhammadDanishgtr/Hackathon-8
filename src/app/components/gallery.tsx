import Image from 'next/image'

const galleryImages = [
  { src: '/PStyle1.png', alt: 'Orange chair'},
  { src: '/PStyle2.png', alt: 'White chair' },
  { src: '/PStyle3.png', alt: 'Gray chair' },
  { src: '/PStyle4.png', alt: 'Another white chair' },
  { src: '/PStyle5.png', alt: 'Wooden chair' },
]

export default function Gallery() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore New and Popular Styles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-2 row-span-2">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              width={328}
              height={328}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {galleryImages.slice(1).map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                className="w-full h-full flex flex-col object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

