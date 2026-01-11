import { useState } from "react"
import { Github } from "lucide-react"
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
    title: "Infrastructure as Code Library",
    description:
      "Reusable Terraform modules for multi-cloud deployments.",
    image: "keegan-houser--Q_t4SCN8c4-unsplash - Copy.jpg",
    tags: ["Terraform", "AWS", "Azure"],
    link: "https://github.com/in/patildhrup/project1",
  },
]

export default function Projects() {
  const VISIBLE_COUNT = 3
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT)

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black px-6 md:px-20 py-24 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-14"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-orange-500 mr-2">03.</span>
              Projects
            </h2>
            <p className="text-zinc-400">
              A collection of real-world projects showcasing automation, cloud, and DevOps practices.
            </p>
          </div>

          <a
            href="https://github.com/patildhrup"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-orange-500 hover:underline"
          >
            View Github Profile →
          </a>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative rounded-3xl overflow-hidden
                         bg-gradient-to-b from-zinc-900/80 to-zinc-950/90
                         border border-zinc-800
                         shadow-2xl
                         hover:border-orange-500/50
                         transition"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
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

                {/* Actions */}
                <div className="flex justify-end text-zinc-400">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-500 transition"
                      aria-label={`Open ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More / Show Less */}
        {projects.length > VISIBLE_COUNT && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border border-orange-500 text-orange-500
                         hover:bg-orange-500 hover:text-black transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
