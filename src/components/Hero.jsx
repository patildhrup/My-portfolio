import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
      gsap.from(".hero-avatar", {
        scale: 0.6,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      gsap.to(".hero-avatar", {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      })
      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      })
      gsap.from(".hero-btns", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center
      text-center px-4 pt-28"
    >
      {/* Badge */}
      <div className="hero-badge mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
        <span className="text-primary text-sm tracking-widest">
          hey there 👋
        </span>
      </div>

      {/* Avatar */}
      <div className="hero-avatar mb-6">
        <img
          src="profile-pic.png"
          alt="Dhrup Patil"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64
          rounded-full border-4 border-primary/40 object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4">
        Dhrup Patil
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle max-w-2xl text-base sm:text-lg md:text-2xl font-mono text-[#afa29d]">
        <span className="text-primary">&lt;</span>{" "}
        <span className="font-semibold">
          DevOps Engineer | Cloud Architect | Automator
        </span>{" "}
        <span className="text-primary">/&gt;</span>
      </p>

      {/* Buttons */}
      <div className="hero-btns flex flex-col sm:flex-row gap-4 mt-10">
        <button
          onClick={() => scrollTo("projects")}
          className="bg-primary px-8 py-4 rounded-full text-black font-semibold
          hover:scale-105 transition"
        >
          View Projects →
        </button>

        <button
          onClick={() => scrollTo("contact")}
          className="border border-gray-600 px-8 py-4 rounded-full
          hover:border-primary transition"
        >
          Contact Me
        </button>
      </div>
    </section>
  )
}
