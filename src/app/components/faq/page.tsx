import FaqAccordion from "../../components/faq-accordion"

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#272343] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Questions Looks Here
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
        </div>
        <FaqAccordion />
      </div>
    </div>
  )
}

