import { motion } from "framer-motion"

export default function ProfileLinks() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark text-white px-6">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        {/* Profile Image */}
        <div className="w-60 h-60 rounded-full border-4 border-primary overflow-hidden shadow-lg">
          <img
            src="/profile-pic.png"   // <-- add your image in public folder
            alt="Dhrup Patil"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-3xl font-bold font-mono">
          Dhrup Patil
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="https://linkedin.com/in/patildhrup"
            target="_blank"
            className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/patildhrup"
            target="_blank"
            className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="/home"
            target="_blank"
            className="px-6 py-3 rounded-full bg-primary text-black hover:opacity-90 transition"
          >
            Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  )
}
