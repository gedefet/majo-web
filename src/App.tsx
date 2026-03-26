import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Treatments from './components/Treatments'
import Philosophy from './components/Philosophy'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Philosophy />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
