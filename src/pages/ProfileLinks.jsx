import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { useEffect } from "react"
import confetti from "canvas-confetti"

export default function ProfileLinks() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate("/home", { replace: true })
  }, [navigate])
  
  // 🎉 Confetti on first render
  useEffect(() => {
    const duration = 1.5 * 1000
    const end = Date.now() + duration

    const colors = ["#ff4d00", "#ffffff", "#00d8ff"]

    ;(function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      })
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    })()
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark text-white px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Profile Image → FROM TOP */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: [0, -15, 0] }}
          transition={{
            opacity: { duration: 0.8 },
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-60 h-60 rounded-full border-4 border-primary overflow-hidden shadow-lg"
        >
          <img
            src="/profile-pic.png"
            alt="Dhrup Patil"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold font-mono"
        >
          Dhrup Patil
        </motion.h2>

        {/* Buttons → FROM BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <a
            href="https://linkedin.com/in/patildhrup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://github.com/patildhrup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition"
          >
            <Github size={20} />
            GitHub
          </a>

          <a
            href="/home"
            className="flex items-center justify-center px-6 py-3 rounded-full bg-primary text-black hover:opacity-90 transition"
          >
            Portfolio
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
