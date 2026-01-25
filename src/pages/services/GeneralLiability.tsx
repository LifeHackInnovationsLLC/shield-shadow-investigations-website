import { Link } from 'react-router-dom'

export default function GeneralLiability() {
  return (
    <>
      {/* Hero */}
      <section className="smoky-bg py-20 bg-gradient-to-b from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-display text-sm uppercase tracking-wider text-accent-silver mb-4">Services</p>
          <h1 className="section-heading">General Liability Investigations</h1>
          <p className="text-accent-silver">
            Thorough liability investigations to establish facts and protect your interests.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-300 mb-8">
            When liability claims arise, having accurate, well-documented information is critical.
            Our general liability investigations help insurance carriers, businesses, and attorneys
            establish the facts, identify responsible parties, and gather evidence for claims
            resolution or litigation.
          </p>

          <h2 className="font-display text-2xl tracking-wide mb-4">Investigation Services:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Scene Investigation',
                description: 'Prompt response to document incident scenes, conditions, and potential hazards before evidence is lost or altered.',
              },
              {
                title: 'Witness Interviews',
                description: 'Location and interview of witnesses to obtain statements and establish the sequence of events.',
              },
              {
                title: 'Evidence Collection',
                description: 'Gathering physical evidence, photographs, video footage, and documentation relevant to the incident.',
              },
              {
                title: 'Surveillance',
                description: 'Activity checks and surveillance to verify claimed injuries and limitations.',
              },
              {
                title: 'Background Research',
                description: 'Investigation into prior claims, litigation history, and relevant background information.',
              },
              {
                title: 'Report Preparation',
                description: 'Comprehensive reports documenting findings, evidence, and conclusions suitable for claims handling or litigation.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-primary-700 p-6 border border-white/10">
                <h3 className="font-display text-lg tracking-wide mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl tracking-wide mb-4">Types of Liability Claims:</h2>

          <ul className="grid grid-cols-2 gap-3 text-gray-300 mb-12">
            {[
              'Premises liability',
              'Slip and fall accidents',
              'Product liability',
              'Construction accidents',
              'Assault and negligent security',
              'Food poisoning claims',
              'Dog bites',
              'Swimming pool accidents',
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-accent-gold mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-primary-700 border border-white/10 p-8">
            <h2 className="font-display text-xl tracking-wide mb-4">Time-Sensitive Response</h2>
            <p className="text-gray-300">
              Liability investigations are often time-sensitive. Evidence can be altered or
              lost, witnesses' memories fade, and scenes change. We understand the importance
              of rapid response and can mobilize quickly to document scenes and gather evidence
              while it's still available.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl tracking-wide mb-4">
            Need a Liability Investigation?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact us promptly to ensure critical evidence is preserved.
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
