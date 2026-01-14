import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function TechStack() {
  const marqueeRef = useRef(null)
  const innerRef = useRef(null)

  const techs = [
    { name: "Docker", img: "/tech/docker.png" },
    { name: "Kubernetes", img: "/tech/k8s.png" },
    { name: "AWS", img: "/tech/aws.png" },
    { name: "Terraform", img: "/tech/tr.jpg" },
    { name: "Git", img: "/tech/git.png" },
    { name: "Python", img: "/tech/py.jpg" },
    { name: "HTML", img: "/tech/html.png" },
    { name: "CSS", img: "/tech/css.png" },
    { name: "Tailwind", img: "/tech/tailwind.png" },
    { name: "React", img: "/tech/react.png" },
  ]

  useEffect(() => {
    const marquee = marqueeRef.current
    const inner = innerRef.current
    if (!marquee || !inner) return

    const ctx = gsap.context(() => {
      const totalWidth = inner.offsetWidth / 2

      gsap.set(marquee, { x: 0, force3D: true })

      gsap.to(marquee, {
        x: -totalWidth,
        duration: 30,          // increase = smoother
        ease: "none",          // VERY IMPORTANT
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-gradient-to-br from-black via-zinc-950 to-black py-20 overflow-hidden relative">
      {/* Fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Marquee */}
      <div ref={marqueeRef} className="flex will-change-transform">
        <div
          ref={innerRef}
          className="flex gap-6 md:gap-10 px-10 md:px-32"
        >
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 shrink-0"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    draggable="false"
                  />
                </div>
              </div>
              <span className="text-sm text-zinc-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
