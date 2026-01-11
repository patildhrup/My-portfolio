import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Terminal } from "lucide-react"

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!navRef.current) return

    gsap.to(navRef.current, {
      backgroundColor: scrolled
        ? "rgba(0, 0, 0, 0.65)"
        : "rgba(0, 0, 0, 0)",
      backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      boxShadow: scrolled
        ? "0 10px 30px rgba(0,0,0,0.25)"
        : "0 0 0 rgba(0,0,0,0)",
      duration: 0.4,
      ease: "power2.out",
    })
  }, [scrolled])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 px-10 py-6 flex justify-between items-center transition-colors"
    >
      {/* Logo → HERO */}
      <div
        onClick={() => scrollTo("hero")}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
          <Terminal className="w-8 h-8 text-primary relative z-10" />
        </div>
        <span className="font-mono text-xl font-bold tracking-tighter group-hover:text-primary transition-colors">
          DP<span className="text-primary">.devops</span>
        </span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-primary font-mono">
        <li onClick={() => scrollTo("about")} className="hover:text-white cursor-pointer">
          About
        </li>
        <li onClick={() => scrollTo("tech")} className="hover:text-white cursor-pointer">
          Skills
        </li>
        <li onClick={() => scrollTo("projects")} className="hover:text-white cursor-pointer">
          Projects
        </li>
        <li onClick={() => scrollTo("activities")} className="hover:text-white cursor-pointer">
          activities
        </li>
        <li onClick={() => scrollTo("contact")} className="hover:text-white cursor-pointer">
          Contact
        </li>
      </ul>

      {/* CTA → CONTACT */}
      <button
        onClick={() => scrollTo("contact")}
        className="border border-primary px-5 py-2 rounded-md text-primary hover:bg-primary hover:text-black transition"
      >
        Hire Me
      </button>
    </nav>
  )
}
