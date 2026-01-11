import StarBackground from "../components/StarBackground"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutUs from "../components/AboutUs"
import TechStack from "../components/TechStack"
import Projects from "../components/Projects"
import GetInTouch from "../components/GetInTouch"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark text-white overflow-x-hidden">
      
      {/* Background */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Page Sections */}
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="tech">
        <TechStack />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <GetInTouch />
      </section>

      <Footer />
    </main>
  )
}
