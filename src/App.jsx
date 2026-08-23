import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Services from './sections/Services.jsx'
import Process from './sections/Process.jsx'
import TechStack from './sections/TechStack.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import WhyWorkWithMe from './sections/WhyWorkWithMe.jsx'
import Resume from './sections/Resume.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <a href="#home" className="visually-hidden">Skip to main content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <TechStack />
        <Projects />
        <Experience />
        <WhyWorkWithMe />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
