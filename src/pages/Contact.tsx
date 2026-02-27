import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // PLACEHOLDER: Implement actual form submission
    // Options: JotForm embed, Formspree, custom backend, etc.
    console.log('Form submitted:', formData)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <section className="smoky-bg py-20 bg-gradient-to-b from-primary-700 to-primary-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="section-heading">Thank You</h1>
            <p className="text-accent-silver">
              Your message has been received.
            </p>
          </div>
        </section>

        <section className="py-20 bg-primary-800">
          <div className="max-w-xl mx-auto px-4 text-center">
            <div className="bg-primary-700 border border-white/10 p-8">
              <h2 className="font-display text-xl tracking-wide mb-4">
                We'll Be In Touch
              </h2>
              <p className="text-gray-400 mb-6">
                Thank you for contacting Shield and Shadow Investigations.
                We typically respond within 2 hours during business hours.
              </p>
              <p className="text-gray-400 mb-6">
                For urgent matters, please call us directly at{' '}
                <a href="tel:516-233-4044" className="text-white hover:text-accent-gold">
                  516-233-4044
                </a>
              </p>
              <p className="text-sm text-gray-500">
                All communications are strictly confidential.
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="smoky-bg py-20 bg-gradient-to-b from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="section-heading">Contact Us</h1>
          <p className="text-accent-silver">
            Get in touch to discuss your investigation needs. All inquiries are confidential.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-xl tracking-wide mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:516-233-4044"
                    className="text-xl text-white hover:text-accent-gold transition-colors"
                  >
                    516-233-4044
                  </a>
                </div>

                <div>
                  <h3 className="font-display text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:NBilick@shieldandshadowinvestigation.com"
                    className="text-white hover:text-accent-gold transition-colors break-all"
                  >
                    NBilick@shieldandshadowinvestigation.com
                  </a>
                </div>

                <div>
                  <h3 className="font-display text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Service Area
                  </h3>
                  <p className="text-gray-300">
                    Long Island, NYC, and surrounding areas
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Response Time
                  </h3>
                  <p className="text-gray-300">
                    We typically respond within 2 hours during business hours.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500">
                  All communications are strictly confidential. Your information
                  is protected and will never be shared.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-primary-700 border border-white/10 p-8">
                <h2 className="font-display text-xl tracking-wide mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-primary-800 border border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:border-white/50 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-primary-800 border border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:border-white/50 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-primary-800 border border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:border-white/50 focus:outline-none transition-colors"
                        placeholder="(555) 555-5555"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm text-gray-400 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-primary-800 border border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:border-white/50 focus:outline-none transition-colors"
                        placeholder="Company name (optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm text-gray-400 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-primary-800 border border-white/20 px-4 py-3 text-white focus:border-white/50 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="siu">SIU Investigation</option>
                      <option value="general-liability">General Liability</option>
                      <option value="personal-lines">Personal Lines</option>
                      <option value="commercial-lines">Commercial Lines</option>
                      <option value="process-server">Process Server</option>
                      <option value="notary">Notary Public</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-primary-800 border border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:border-white/50 focus:outline-none transition-colors resize-none"
                      placeholder="Please describe your needs..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500">
                    By submitting this form, you agree that your information will be used
                    to respond to your inquiry. All communications are confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
