import { Link } from 'react-router-dom'

export default function ProcessServer() {
  return (
    <>
      {/* Hero */}
      <section className="smoky-bg py-20 bg-gradient-to-b from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-display text-sm uppercase tracking-wider text-accent-silver mb-4">Services</p>
          <h1 className="section-heading">Process Server</h1>
          <p className="text-accent-silver">
            Professional and timely service of legal documents throughout our service area.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-300 mb-8">
            Proper service of process is essential to ensuring your legal matters proceed
            smoothly. Our process serving team provides professional, reliable service
            of legal documents with accurate proof of service documentation.
          </p>

          <h2 className="font-display text-2xl tracking-wide mb-4">Documents We Serve:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Summons & Complaints',
                description: 'Initiating civil lawsuits with proper service to defendants.',
              },
              {
                title: 'Subpoenas',
                description: 'Subpoenas duces tecum and ad testificandum for depositions and trials.',
              },
              {
                title: 'Court Orders',
                description: 'Restraining orders, orders to show cause, and other court orders.',
              },
              {
                title: 'Legal Notices',
                description: 'Eviction notices, demand letters, and other legal notifications.',
              },
              {
                title: 'Divorce Papers',
                description: 'Divorce petitions, summons, and related family law documents.',
              },
              {
                title: 'Business Documents',
                description: 'Corporate service, service on registered agents, and business entities.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-primary-700 p-6 border border-white/10">
                <h3 className="font-display text-lg tracking-wide mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary-700 border border-white/10 p-8">
              <h2 className="font-display text-xl tracking-wide mb-4">Our Process</h2>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-gold font-display mr-3">1.</span>
                  <span>Receive documents and service instructions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold font-display mr-3">2.</span>
                  <span>Attempt service at provided addresses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold font-display mr-3">3.</span>
                  <span>Document all service attempts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold font-display mr-3">4.</span>
                  <span>Provide affidavit of service upon completion</span>
                </li>
              </ol>
            </div>

            <div className="bg-primary-700 border border-white/10 p-8">
              <h2 className="font-display text-xl tracking-wide mb-4">Additional Services</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Skip tracing to locate difficult-to-find individuals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Rush and same-day service available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Weekend and evening attempts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Real-time status updates</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-900 border border-white/10 p-8 text-center">
            <h2 className="font-display text-xl tracking-wide mb-4">Service Area</h2>
            <p className="text-gray-300 mb-4">
              We provide process serving throughout South Florida including Miami-Dade,
              Broward, and Palm Beach counties.
            </p>
            <p className="text-sm text-gray-500">
              {/* PLACEHOLDER: Confirm service area and any travel fees */}
              Contact us for service outside our primary area.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl tracking-wide mb-4">
            Need Documents Served?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact us with your service requirements. We'll provide prompt, professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Request Service
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
