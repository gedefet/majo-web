import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Treatments from './components/Treatments'
import Philosophy from './components/Philosophy'
import ImageBreak from './components/ImageBreak'
import Novedades from './components/Novedades'
import Reviews from './components/Reviews'
import Redes from './components/Redes'
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
        <ImageBreak />
        <Novedades />
        <Reviews />
        <Redes />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
