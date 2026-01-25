import { Link } from 'react-router-dom'

export default function NotaryPublic() {
  return (
    <>
      {/* Hero */}
      <section className="smoky-bg py-20 bg-gradient-to-b from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-display text-sm uppercase tracking-wider text-accent-silver mb-4">Services</p>
          <h1 className="section-heading">Notary Public</h1>
          <p className="text-accent-silver">
            Mobile notary services available throughout South Florida.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-300 mb-8">
            Need a document notarized? We offer convenient mobile notary services
            that come to you. Available throughout our service area with flexible
            scheduling including evenings and weekends.
          </p>

          <h2 className="font-display text-2xl tracking-wide mb-4">Notary Services:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Document Notarization',
                description: 'Official notarization of signatures on legal documents, contracts, and agreements.',
              },
              {
                title: 'Oath Administration',
                description: 'Administration of oaths and affirmations for affidavits and sworn statements.',
              },
              {
                title: 'Affidavits',
                description: 'Witnessing and notarizing affidavits and sworn statements.',
              },
              {
                title: 'Acknowledgments',
                description: 'Acknowledgment of signatures for deeds, powers of attorney, and other legal documents.',
              },
              {
                title: 'Copy Certification',
                description: 'Certification of copies of original documents.',
              },
              {
                title: 'Mobile Service',
                description: 'We come to your location - home, office, hospital, or other convenient location.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-primary-700 p-6 border border-white/10">
                <h3 className="font-display text-lg tracking-wide mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl tracking-wide mb-4">Common Documents We Notarize:</h2>

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300 mb-12">
            {[
              'Real estate documents',
              'Powers of attorney',
              'Wills and trusts',
              'Loan documents',
              'Medical directives',
              'Business contracts',
              'Immigration documents',
              'School forms',
              'Affidavits',
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-accent-gold mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-700 border border-white/10 p-8">
              <h2 className="font-display text-xl tracking-wide mb-4">Scheduling</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Same-day appointments often available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Evening and weekend availability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>We come to your location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Hospital and care facility visits</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-700 border border-white/10 p-8">
              <h2 className="font-display text-xl tracking-wide mb-4">What to Bring</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Valid government-issued photo ID</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>The document(s) to be notarized</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Do NOT sign beforehand - sign in notary's presence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>All signers must be present</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl tracking-wide mb-4">
            Need a Notary?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact us to schedule your notary appointment. Mobile service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Schedule Appointment
            </Link>
            <a href="tel:516-233-4044" className="btn-outline">
              Call: 516-233-4044
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
