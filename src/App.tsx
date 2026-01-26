import { Routes, Route, useSearchParams } from 'react-router-dom'
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
import EffectVideoBackground from './components/smoke-effects/EffectVideoBackground'

function App() {
  const [searchParams] = useSearchParams()
  const useVideoBackground = searchParams.get('video') === '1'

  return (
    <div className={`${useVideoBackground ? 'video-bg-mode' : 'smoke-viewport-edges bg-primary-900'} min-h-screen text-white flex flex-col`}>
      {useVideoBackground && <EffectVideoBackground />}
      <div className={useVideoBackground ? 'relative z-20 flex flex-col min-h-screen' : 'contents'}>
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
    </div>
  )
}

export default App
