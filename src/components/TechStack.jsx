import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function TechStack() {
  const marqueeRef = useRef(null)

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
  if (!marquee) return

  const speed = 100 // pixels per second
  const totalWidth = marquee.scrollWidth / 2

  gsap.to(marquee, {
    x: `-=${totalWidth}`,
    duration: totalWidth / speed,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => {
        return parseFloat(x) % totalWidth
      }),
    },
  })
}, [])


  return (
    <section className="bg-gradient-to-br from-black via-zinc-950 to-black py-20 overflow-hidden relative">
      

      {/* Left Blur */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32
                      bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

      {/* Right Blur */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32
                      bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex gap-10 w-max px-32"
        >
          {[...techs, ...techs].map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div
  className="w-24 h-24 rounded-full
             bg-zinc-900 border border-zinc-800
             flex items-center justify-center
             shadow-lg
             hover:border-orange-500
             transition"
>
  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
    <img
      src={tech.img}
      alt={tech.name}
      className="w-10 h-10 object-contain"
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
