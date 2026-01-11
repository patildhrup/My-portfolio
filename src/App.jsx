import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import StarBackground from "./components/StarBackground"
import GetInTouch from "./components/GetInTouch"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"
import TechStack from "./components/TechStack"

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <StarBackground />
      <Navbar />
      <Hero />
      <AboutUs />
      <TechStack />
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  )
}
