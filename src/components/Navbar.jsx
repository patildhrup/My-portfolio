import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Terminal, Menu, X } from "lucide-react"

export default function Navbar() {
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  /* Scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* Navbar blur animation */
  useEffect(() => {
    if (!navRef.current) return
    gsap.to(navRef.current, {
      backgroundColor: scrolled ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0)",
      backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.25)" : "none",
      duration: 0.4,
      ease: "power2.out",
    })
  }, [scrolled])

  /* Mobile/Tablet menu animation */
  useEffect(() => {
    if (!mobileMenuRef.current) return
    gsap.to(mobileMenuRef.current, {
      height: menuOpen ? "auto" : 0,
      opacity: menuOpen ? 1 : 0,
      duration: 0.35,
      ease: "power2.out",
    })
  }, [menuOpen])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 w-full z-50
        px-6 lg:px-10 py-4 lg:py-6
        flex justify-between items-center"
      >
        {/* Logo */}
        <div
  onClick={() => scrollTo("hero")}
  className="group flex items-center gap-2 cursor-pointer"
>
  <Terminal
    className="w-8 h-8 text-primary
    drop-shadow-[0_0_6px_rgba(251,191,36,0.45)]
    group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]
    transition-all duration-300 
"
  />

  <span className="font-mono text-xl font-bold">
    <span
      className="text-white
      group-hover:text-yellow-400
      transition-colors duration-300"
    >
      DP
    </span>
    <span className="text-primary">.devops</span>
  </span>
</div>


        {/* Desktop Links (only ≥ lg) */}
        <ul className="hidden lg:flex gap-8 text-primary font-mono">
          {["about", "tech", "projects", "activities", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollTo(item)}
              className="hover:text-white cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
  onClick={() => scrollTo("contact")}
  className="hidden lg:block p-[2px] rounded-full
  bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-500
  animate-pulse
  shadow-[0_0_25px_rgba(251,191,36,0.6),0_0_45px_rgba(249,115,22,0.55)]
  hover:shadow-[0_0_40px_rgba(251,191,36,0.9),0_0_70px_rgba(249,115,22,0.8)]
  transition-all duration-300"
>
  <span
    className="block px-5 py-2 rounded-full bg-black
    text-yellow-400 font-semibold tracking-wide
    hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500
    hover:text-black transition-all duration-300"
  >
    ⚡ Let's Collaborate
  </span>
</button>



        {/* Hamburger (Mobile + Tablet) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-primary"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile + Tablet Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-[72px] left-0 w-full overflow-hidden
        bg-black/80 backdrop-blur-md z-40 lg:hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <ul className="flex flex-col items-center gap-6 py-8 font-mono text-primary">
          {["about", "tech", "projects", "activities", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollTo(item)}
              className="text-lg hover:text-white cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
