import { Link } from 'react-router-dom'

export default function PersonalLines() {
  return (
    <>
      {/* Hero */}
      <section className="smoky-bg py-20 bg-gradient-to-b from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-display text-sm uppercase tracking-wider text-accent-silver mb-4">Services</p>
          <h1 className="section-heading">Personal Lines Investigations</h1>
          <p className="text-accent-silver">
            Investigation services for personal insurance claims including auto, homeowners, and personal injury.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-300 mb-8">
            Personal lines insurance claims require careful investigation to verify facts,
            assess damages, and identify any indicators of fraud. We provide comprehensive
            investigation services for auto, homeowners, and personal injury claims.
          </p>

          <h2 className="font-display text-2xl tracking-wide mb-4">Personal Lines Services:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Auto Accident Investigation',
                description: 'Scene documentation, witness interviews, vehicle inspections, and reconstruction analysis for motor vehicle claims.',
              },
              {
                title: 'Property Claims',
                description: 'Investigation of homeowner claims including fire, water damage, theft, and vandalism.',
              },
              {
                title: 'Personal Injury Verification',
                description: 'Activity checks and surveillance to verify reported injuries and claimed limitations.',
              },
              {
                title: 'AOE/COE Investigations',
                description: 'Arising Out of Employment / Course of Employment investigations for personal injury claims.',
              },
              {
                title: 'Claimant Interviews',
                description: 'Recorded statements and interviews with claimants, witnesses, and involved parties.',
              },
              {
                title: 'Background Investigation',
                description: 'Prior claims history, social media research, and background checks on claimants.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-primary-700 p-6 border border-white/10">
                <h3 className="font-display text-lg tracking-wide mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl tracking-wide mb-4">Claim Types We Handle:</h2>

          <ul className="grid grid-cols-2 gap-3 text-gray-300 mb-12">
            {[
              'Auto collision claims',
              'Comprehensive auto claims',
              'Uninsured motorist claims',
              'Homeowner property damage',
              'Theft and burglary',
              'Personal injury protection (PIP)',
              'Umbrella policy claims',
              'Rental property claims',
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
            Need Personal Lines Investigation?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact us to discuss your investigation needs.
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
