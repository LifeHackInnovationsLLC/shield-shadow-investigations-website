import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="smoky-bg py-20 bg-gradient-to-b from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="section-heading">About Us</h1>
          <p className="text-accent-silver">
            Professional investigations with integrity, discretion, and results.
          </p>
        </div>
      </section>

      {/* Owner Bio */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Photo Placeholder */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] bg-primary-700 border border-white/10 flex items-center justify-center">
                {/* PLACEHOLDER: Add actual photo */}
                <span className="text-gray-500 text-sm text-center px-4">
                  [Photo of Natasha Bilick]
                </span>
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-2">
              <h2 className="font-display text-2xl tracking-wide mb-2">Natasha Bilick</h2>
              <p className="text-accent-silver text-sm uppercase tracking-wider mb-6">
                Owner & Lead Investigator
              </p>

              {/* PLACEHOLDER: Replace with actual bio from Natasha */}
              <div className="space-y-4 text-gray-300">
                <p>
                  With extensive experience in the insurance investigation industry,
                  Natasha Bilick founded Shield and Shadow Investigations to provide
                  personalized, professional investigative services to insurance carriers,
                  law firms, and businesses throughout South Florida.
                </p>

                <p>
                  [PLACEHOLDER: Add 2-3 paragraphs about Natasha's background, experience,
                  and what led her to start Shield and Shadow Investigations. Include any
                  relevant education, certifications, or career history.]
                </p>

                <p>
                  "I believe every client deserves dedicated attention and thorough
                  investigation work. That's why I personally handle each case with
                  the same level of care and professionalism that I would expect for
                  my own matters."
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="font-display text-lg tracking-wide mb-4">Credentials</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
                  {/* PLACEHOLDER: Add actual credentials */}
                  <li>• Licensed Private Investigator - Florida</li>
                  <li>• Commissioned Notary Public</li>
                  <li>• Certified Process Server</li>
                  <li>• [Additional certifications/training]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-heading">Our Mission</h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            To provide thorough, professional investigation services that help our clients
            make informed decisions. We are committed to integrity, accuracy, and
            confidentiality in every case we handle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We conduct all investigations ethically and within the bounds of the law. Our findings are accurate, unbiased, and properly documented.',
              },
              {
                title: 'Discretion',
                description: 'Every investigation is handled with complete confidentiality. Your information and our findings remain strictly protected.',
              },
              {
                title: 'Results',
                description: 'We focus on delivering actionable intelligence that helps you make decisions. Thorough documentation, clear reporting, and expert testimony when needed.',
              },
            ].map((value) => (
              <div key={value.title} className="bg-primary-800 p-6 border border-white/10">
                <h3 className="font-display text-lg tracking-wide mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-heading">Service Area</h2>
          <p className="text-gray-300 mb-8">
            We provide investigation services throughout South Florida, including:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
            {/* PLACEHOLDER: Confirm exact service area with Natasha */}
            <div>
              <h4 className="font-display text-white mb-2">Miami-Dade</h4>
              <ul className="space-y-1">
                <li>Miami</li>
                <li>Miami Beach</li>
                <li>Coral Gables</li>
                <li>Hialeah</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-white mb-2">Broward</h4>
              <ul className="space-y-1">
                <li>Fort Lauderdale</li>
                <li>Hollywood</li>
                <li>Pompano Beach</li>
                <li>Coral Springs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-white mb-2">Palm Beach</h4>
              <ul className="space-y-1">
                <li>West Palm Beach</li>
                <li>Boca Raton</li>
                <li>Delray Beach</li>
                <li>Palm Beach Gardens</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-white mb-2">Additional</h4>
              <ul className="space-y-1">
                <li>Monroe County</li>
                <li>Martin County</li>
                <li className="text-gray-500 italic">Travel available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl tracking-wide mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact us to discuss your investigation needs. All inquiries are confidential.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
