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
          className="flex items-center gap-2 cursor-pointer"
        >
          <Terminal className="w-8 h-8 text-primary" />
          <span className="font-mono text-xl font-bold">
            DP<span className="text-primary">.devops</span>
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
          className="hidden lg:block border border-primary px-5 py-2 rounded-full
          text-primary hover:bg-primary hover:text-black transition"
        >
          Let's Collaborate
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
