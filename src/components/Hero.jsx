import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })

      gsap.from(".hero-avatar", {
  scale: 0.6,
  opacity: 0,
  duration: 0.8,
  delay: 0.15,
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
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      })

      gsap.from(".hero-btns", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
        <span className="hero-badge rounded-full border-primary text-primary text-sm tracking-widest">
          hey there's
        </span>
      </div>

      {/* Profile Image */}
<div className="hero-avatar mb-8">
  <img
    src="profile-pic.png"
    alt="Dhrup Patil"
    className="
      w-56 h-56
      md:w-64 md:h-64
      rounded-full
      border-4 border-primary/40
      object-cover
      shadow-lg
      shadow-[0_0_40px_rgba(99,102,241,0.6)]
    "
  />
</div>


      <h1 className="hero-title text-5xl md:text-7xl font-extrabold mb-6">
        Dhrup Patil
      </h1>

      <p className="hero-subtitle text-2xl md:text-xl font-mono text-[#afa29d]">
  <span className="text-primary text-3xl md:text-4xl">&lt; </span>
  <span className="text-2xl md:text-4xl font-semibold">
    DevOps Engineer | Cloud Architect | Automator
  </span>
  <span className="text-primary text-3xl md:text-4xl"> /&gt;</span>
</p>


      <div className="hero-btns flex gap-6 mt-10">
        <button className="bg-primary px-8 py-4 rounded-full text-black font-semibold hover:scale-105 transition">
          View Projects →
        </button>

        <button className="border border-gray-600 px-8 py-4 rounded-full hover:border-primary transition">
          Contact Me
        </button>
      </div>
    </section>
  )
}
