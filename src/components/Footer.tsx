import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-primary-800 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <Logo size="sm" />
            <p className="mt-4 text-sm text-gray-400">
              Professional investigative services serving South Florida and surrounding areas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services/siu" className="hover:text-white transition-colors">SIU Investigations</Link></li>
              <li><Link to="/services/general-liability" className="hover:text-white transition-colors">General Liability</Link></li>
              <li><Link to="/services/personal-lines" className="hover:text-white transition-colors">Personal Lines</Link></li>
              <li><Link to="/services/commercial-lines" className="hover:text-white transition-colors">Commercial Lines</Link></li>
              <li><Link to="/services/process-server" className="hover:text-white transition-colors">Process Server</Link></li>
              <li><Link to="/services/notary-public" className="hover:text-white transition-colors">Notary Public</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:516-233-4044" className="hover:text-white transition-colors">
                  516-233-4044
                </a>
              </li>
              <li>
                <a href="mailto:NBilick@shieldandshadowinvestigation.com" className="hover:text-white transition-colors break-all">
                  NBilick@shieldandshadowinvestigation.com
                </a>
              </li>
              <li className="pt-2">
                {/* PLACEHOLDER: Add actual service area */}
                <span className="text-gray-500">South Florida</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Shield and Shadow Investigations. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2 md:mt-0">
            {/* PLACEHOLDER: Add license number when provided */}
            Licensed Private Investigator - Florida
          </p>
        </div>
      </div>
    </footer>
  )
}
