import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      title: 'SIU Investigations',
      description: 'Comprehensive Special Investigations Unit services for insurance carriers. We help identify, document, and investigate suspected fraudulent claims across all lines of insurance.',
      features: ['Fraud detection & documentation', 'Surveillance', 'Recorded statements', 'Background investigations', 'Expert testimony'],
      link: '/services/siu',
    },
    {
      title: 'General Liability',
      description: 'Thorough liability investigations to help determine the facts and circumstances of incidents. We document scenes, interview witnesses, and gather evidence.',
      features: ['Scene investigations', 'Witness interviews', 'Evidence collection', 'Photo/video documentation', 'Report preparation'],
      link: '/services/general-liability',
    },
    {
      title: 'Personal Lines',
      description: 'Investigation services for personal insurance claims including auto accidents, homeowner claims, and personal injury matters.',
      features: ['Auto accident investigation', 'Property damage assessment', 'Injury verification', 'AOE/COE investigations', 'Claimant interviews'],
      link: '/services/personal-lines',
    },
    {
      title: 'Commercial Lines',
      description: 'Business insurance investigations covering commercial property, workers compensation, commercial auto, and business liability claims.',
      features: ['Workers compensation', 'Commercial property', 'Business interruption', 'Commercial auto', 'Premises liability'],
      link: '/services/commercial-lines',
    },
    {
      title: 'Process Server',
      description: 'Professional service of legal documents throughout our service area. Timely delivery with proper documentation and proof of service.',
      features: ['Civil summons & complaints', 'Subpoenas', 'Court orders', 'Legal notices', 'Skip tracing available'],
      link: '/services/process-server',
    },
    {
      title: 'Notary Public',
      description: 'Mobile notary services available throughout Long Island and NYC. Convenient scheduling to meet your needs, including evenings and weekends.',
      features: ['Mobile service available', 'Document notarization', 'Oath administration', 'Affidavits & affirmations', 'Flexible scheduling'],
      link: '/services/notary-public',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="smoky-bg py-20 bg-gradient-to-b from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="section-heading">Our Services</h1>
          <p className="text-accent-silver">
            Comprehensive investigation services for insurance carriers, attorneys, and businesses.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-primary-700 border border-white/10 p-8"
              >
                <h2 className="font-display text-xl tracking-wide mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-accent-gold mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-block font-display text-sm uppercase tracking-wider text-white hover:text-accent-gold transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-heading">Our Process</h2>
          <p className="section-subheading">
            We follow a systematic approach to ensure thorough, professional results on every case.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your needs and objectives to understand the scope of the investigation.' },
              { step: '02', title: 'Investigation', description: 'Our team conducts thorough fieldwork, interviews, and research as needed.' },
              { step: '03', title: 'Documentation', description: 'All findings are carefully documented with photos, video, and detailed reports.' },
              { step: '04', title: 'Delivery', description: 'You receive a comprehensive report with our findings and conclusions.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-3xl font-display text-accent-gold mb-2">{item.step}</div>
                <h3 className="font-display text-lg tracking-wide mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-800 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl tracking-wide mb-4">
            Need Investigation Services?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact us to discuss your specific needs. We'll provide a prompt response
            and help determine the best approach for your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Request Consultation
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
