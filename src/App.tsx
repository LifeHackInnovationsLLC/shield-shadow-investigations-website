import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import SIU from './pages/services/SIU'
import GeneralLiability from './pages/services/GeneralLiability'
import PersonalLines from './pages/services/PersonalLines'
import CommercialLines from './pages/services/CommercialLines'
import ProcessServer from './pages/services/ProcessServer'
import NotaryPublic from './pages/services/NotaryPublic'

function App() {
  return (
    <div className="smoke-viewport-edges min-h-screen bg-primary-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/siu" element={<SIU />} />
          <Route path="/services/general-liability" element={<GeneralLiability />} />
          <Route path="/services/personal-lines" element={<PersonalLines />} />
          <Route path="/services/commercial-lines" element={<CommercialLines />} />
          <Route path="/services/process-server" element={<ProcessServer />} />
          <Route path="/services/notary-public" element={<NotaryPublic />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
