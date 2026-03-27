import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="font-heading text-2xl font-bold text-indigo-950 mb-8 text-center">
        Contact us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3  ">
        <div className="flex flex-col gap-2  pt-6 px-6 sm:pt-12 text-center md:text-left">
          <div>
            <h2 className="font-heading font-semibold text-indigo-900 mb-1">
              Get in touch
            </h2>
            <p className="text-sm font-body text-indigo-800 leading-relaxed">
              Fill out the form if you have questions about your order or a
              product. We will reach out to you as soon as possible.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm text-indigo-700"></div>
        </div>
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
