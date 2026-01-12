import { useState, useEffect } from "react"
import { Github,ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Kubernetes Cluster Autoscaler",
    description:
      "Automated scaling solution for K8s clusters based on custom metrics.",
    image: "keegan-houser--Q_t4SCN8c4-unsplash - Copy.jpg",
    tags: ["Kubernetes", "Go", "AWS"],
    link: "https://github.com/in/patildhrup/project1",
  },
  {
    title: "CI/CD Pipeline Visualization",
    description:
      "Real-time dashboard for monitoring Jenkins and GitHub Actions pipelines.",
    image: "keegan-houser--Q_t4SCN8c4-unsplash - Copy.jpg",
    tags: ["React", "Jenkins", "GraphQL"],
    link: "https://github.com/in/patildhrup/project1",
  },
  {
    title: "Infrastructure as Code Library",
    description:
      "Reusable Terraform modules for multi-cloud deployments.",
    image: "keegan-houser--Q_t4SCN8c4-unsplash - Copy.jpg",
    tags: ["Terraform", "AWS", "Azure"],
    link: "https://github.com/in/patildhrup/project1",
  },
  {
    title: "Cloud Cost Optimizer",
    description:
      "Tool to analyze and reduce cloud infrastructure costs.",
    image: "keegan-houser--Q_t4SCN8c4-unsplash - Copy.jpg",
    tags: ["AWS", "Lambda", "Python"],
    link: "https://github.com/in/patildhrup/project1",
  },
]

export default function Projects() {
  const VISIBLE_COUNT = 3
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + VISIBLE_COUNT
  )

  const handleNext = () => {
    if (currentIndex + VISIBLE_COUNT < projects.length) {
      setCurrentIndex((prev) => prev + VISIBLE_COUNT)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - VISIBLE_COUNT)
    }
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black px-6 md:px-20 py-24 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-orange-500 mr-2">03.</span>
          Projects
        </h2>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={currentIndex}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="rounded-3xl overflow-hidden
                         bg-gradient-to-b from-zinc-900/80 to-zinc-950/90
                         border border-zinc-800
                         hover:border-orange-500/50
                         transition"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs
                                 bg-orange-500/10 text-orange-400
                                 border border-orange-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-orange-500"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-6 mt-16">
  <button
    onClick={handlePrev}
    disabled={currentIndex === 0}
    className="p-4 rounded-full border border-orange-500 text-orange-500
               disabled:opacity-40 hover:bg-orange-500 hover:text-black transition"
  >
    <ArrowLeft size={22} />
  </button>

  <button
    onClick={handleNext}
    disabled={currentIndex + VISIBLE_COUNT >= projects.length}
    className="p-4 rounded-full border border-orange-500 text-orange-500
               disabled:opacity-40 hover:bg-orange-500 hover:text-black transition"
  >
    <ArrowRight size={22} />
  </button>
</div>

      </div>
    </section>
  )
}
