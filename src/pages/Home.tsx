import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Home() {
  const services = [
    {
      title: 'SIU Investigations',
      description: 'Comprehensive Special Investigations Unit services for insurance carriers. Fraud detection, documentation, and expert testimony.',
      link: '/services/siu',
    },
    {
      title: 'General Liability',
      description: 'Thorough liability investigations including scene documentation, witness interviews, and evidence collection.',
      link: '/services/general-liability',
    },
    {
      title: 'Personal Lines',
      description: 'Investigation services for personal insurance claims including auto, homeowners, and personal injury.',
      link: '/services/personal-lines',
    },
    {
      title: 'Commercial Lines',
      description: 'Business insurance investigations covering property damage, workers compensation, and commercial auto.',
      link: '/services/commercial-lines',
    },
    {
      title: 'Process Server',
      description: 'Professional and timely service of legal documents with proper proof of service documentation.',
      link: '/services/process-server',
    },
    {
      title: 'Notary Public',
      description: 'Mobile notary services available throughout our service area. Convenient scheduling for your needs.',
      link: '/services/notary-public',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 text-center py-20">
          <Logo size="xl" />

          <div className="w-24 h-px bg-white/30 mx-auto my-8" />

          <p className="font-display text-lg md:text-xl tracking-wide text-gray-300 mb-4">
            Natasha Bilick
          </p>

          <p className="text-accent-silver mb-8 max-w-2xl mx-auto">
            Professional investigative services with integrity, discretion, and results.
            Serving insurance carriers, law firms, and businesses throughout
            South Florida.
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

      {/* Services Overview */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            Comprehensive investigation services tailored to meet the needs of
            insurance carriers, attorneys, and businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="card-smoky-glow group bg-primary-700 p-6 border border-white/10"
              >
                <h3 className="font-display text-lg tracking-wide mb-3 group-hover:text-accent-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-sm text-gray-500 group-hover:text-white transition-colors">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals / Why Choose Us */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Why Choose Us</h2>
          <p className="section-subheading">
            Experience the difference of working with a dedicated, owner-operated
            investigation firm.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Personal Service',
                description: 'Work directly with the owner. No corporate bureaucracy, just direct communication and accountability.',
              },
              {
                title: 'Local Expertise',
                description: 'Deep knowledge of South Florida. We know the area, the courts, and how to get results.',
              },
              {
                title: 'Fast Response',
                description: 'Small firm means faster turnaround. We respond quickly to urgent investigation needs.',
              },
              {
                title: 'Confidential',
                description: 'All investigations handled with the utmost discretion. Your information stays protected.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-display text-lg tracking-wide mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-primary-800 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-xl tracking-wide mb-6">Licensed & Professional</h2>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            {/* PLACEHOLDER: Update with actual credentials */}
            <span>Licensed Private Investigator - FL</span>
            <span className="hidden sm:inline">•</span>
            <span>Commissioned Notary Public</span>
            <span className="hidden sm:inline">•</span>
            <span>Certified Process Server</span>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            {/* PLACEHOLDER: Add license number, certification details */}
            Florida State Licensed • Fully Insured • Professional Standards
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">
            Contact us today to discuss your investigation needs. All inquiries
            are handled confidentially.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <a href="tel:516-233-4044" className="btn-outline">
              516-233-4044
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
