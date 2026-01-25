import { Link } from 'react-router-dom'

export default function SIU() {
  return (
    <>
      {/* Hero */}
      <section className="smoky-bg py-20 bg-gradient-to-b from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-display text-sm uppercase tracking-wider text-accent-silver mb-4">Services</p>
          <h1 className="section-heading">SIU Investigations</h1>
          <p className="text-accent-silver">
            Special Investigations Unit services for insurance carriers and self-insured entities.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-8">
              Insurance fraud costs the industry billions of dollars annually, driving up premiums
              for honest policyholders. Our SIU investigation services help insurance carriers
              identify, document, and investigate suspicious claims to protect their interests
              and combat fraud.
            </p>

            <h2 className="font-display text-2xl tracking-wide mb-4">Our SIU Services Include:</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: 'Fraud Investigation',
                  description: 'Thorough investigation of suspicious claims including staged accidents, inflated damages, and false injury claims.',
                },
                {
                  title: 'Background Investigations',
                  description: 'Comprehensive background checks on claimants, witnesses, and service providers.',
                },
                {
                  title: 'Recorded Statements',
                  description: 'Professional recorded statements from claimants, witnesses, and involved parties.',
                },
                {
                  title: 'Social Media Intelligence',
                  description: 'Investigation of social media accounts for evidence contradicting claims.',
                },
                {
                  title: 'Expert Testimony',
                  description: 'Professional testimony in depositions, arbitrations, and trials as needed.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-primary-700 p-6 border border-white/10">
                  <h3 className="font-display text-lg tracking-wide mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl tracking-wide mb-4">Types of Claims We Investigate:</h2>

            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300 mb-12">
              {[
                'Automobile accidents',
                'Property damage',
                'Workers compensation',
                'Disability claims',
                'Slip and fall',
                'Medical provider fraud',
                'Premium fraud',
                'Application fraud',
                'Arson investigation',
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-primary-700 border border-white/10 p-8 mb-12">
              <h2 className="font-display text-xl tracking-wide mb-4">
                Why Choose Shield and Shadow for SIU?
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-gold mr-3">✓</span>
                  <span><strong>Direct Communication</strong> – Work directly with the investigator handling your case</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-3">✓</span>
                  <span><strong>Fast Turnaround</strong> – Quick response times and efficient case handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-3">✓</span>
                  <span><strong>Thorough Documentation</strong> – Detailed reports suitable for litigation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-3">✓</span>
                  <span><strong>Local Expertise</strong> – Deep knowledge of the South Florida area</span>
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
            Need SIU Investigation Services?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact us to discuss your investigation needs. All inquiries are confidential.
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
