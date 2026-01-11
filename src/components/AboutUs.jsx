import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function AboutUs() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black px-6 md:px-20 py-28 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-orange-500 mr-2">02.</span>
            About Me
          </motion.h2>

          <motion.p
            variants={item}
            className="text-zinc-400 max-w-2xl"
          >
            A brief introduction about who I am and what I do.
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          {/* Text */}
          <motion.div
            variants={item}
            className="text-zinc-400 leading-relaxed space-y-6"
          >
            <p>
              I’m a passionate{" "}
              <span className="text-white font-medium">DevOps Engineer</span>{" "}
              focused on building scalable, secure, and automated cloud
              infrastructure. I enjoy bridging the gap between development and
              operations through reliable CI/CD pipelines.
            </p>

            <p>
              I have hands-on experience with Docker, Kubernetes, Terraform,
              AWS, Git, and modern CI/CD platforms. My approach emphasizes
              automation-first workflows and production-ready systems.
            </p>

            <p>
              My goal is to grow as a cloud and DevOps professional while
              contributing to impactful, real-world projects.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-6">
              Tech I Work With
            </h3>

            <ul className="grid grid-cols-2 gap-4 text-zinc-300">
              {[
                "Docker",
                "Kubernetes",
                "AWS",
                "Terraform",
                "CI/CD Pipelines",
                "Linux",
                "Git & GitHub",
                "Monitoring & Logging",
              ].map((tech) => (
                <motion.li
                  key={tech}
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800
                             transition-all duration-300
                             hover:border-orange-500/40
                             hover:shadow-[0_0_12px_rgba(249,115,22,0.15)]"
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
