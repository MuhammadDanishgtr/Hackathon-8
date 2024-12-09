import ContactForm from "../../../../app/components/contact-form"
import ContactInfo from "../../../../app/components/contact-info"
import FeatureBoxes from "../../../../app/components/feature-boxes"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#272343] mb-4">
          Get In Touch With Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <ContactInfo />
        <ContactForm />
      </div>

      <FeatureBoxes />
    </div>
  )
}

