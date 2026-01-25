import { Link } from 'react-router-dom'

export default function CommercialLines() {
  return (
    <>
      {/* Hero */}
      <section className="smoky-bg py-20 bg-gradient-to-b from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-display text-sm uppercase tracking-wider text-accent-silver mb-4">Services</p>
          <h1 className="section-heading">Commercial Lines Investigations</h1>
          <p className="text-accent-silver">
            Business insurance investigations for commercial property, workers compensation, and liability claims.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-300 mb-8">
            Commercial insurance claims can be complex, involving significant financial stakes
            and multiple parties. Our commercial lines investigation services help carriers
            and businesses verify claims, identify fraud, and gather the evidence needed
            for informed decision-making.
          </p>

          <h2 className="font-display text-2xl tracking-wide mb-4">Commercial Lines Services:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Workers Compensation',
                description: 'Investigation of workplace injury claims including AOE/COE determination, surveillance, and activity checks.',
              },
              {
                title: 'Commercial Property',
                description: 'Investigation of property damage claims including fire, water, theft, and vandalism at commercial locations.',
              },
              {
                title: 'Commercial Auto',
                description: 'Fleet vehicle accidents, delivery incidents, and commercial transportation claims.',
              },
              {
                title: 'Business Interruption',
                description: 'Verification of claimed losses and investigation of circumstances leading to business interruption.',
              },
              {
                title: 'Premises Liability',
                description: 'Investigation of injuries occurring at business locations, including slip and fall and negligent security.',
              },
              {
                title: 'Employee Dishonesty',
                description: 'Investigation of theft, embezzlement, and other employee misconduct claims.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-primary-700 p-6 border border-white/10">
                <h3 className="font-display text-lg tracking-wide mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl tracking-wide mb-4">Industries We Serve:</h2>

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300 mb-12">
            {[
              'Construction',
              'Manufacturing',
              'Retail',
              'Healthcare',
              'Transportation',
              'Hospitality',
              'Real estate',
              'Professional services',
              'Restaurants',
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-accent-gold mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl tracking-wide mb-4">
            Need Commercial Lines Investigation?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact us to discuss your commercial investigation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Request Investigation
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
