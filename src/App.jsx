import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Location } from './components/Location'
import { Benefits } from './components/Benefits'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Location />
        <Benefits />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
