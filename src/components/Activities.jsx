import { useState } from "react"
import { motion } from "framer-motion"
import {
  Award,
  BookOpen,
  Briefcase,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"

const activities = [
  {
    title: "AWS Cloud Practitioner",
    type: "Certification",
    description:
      "Foundational AWS cloud concepts, IAM, EC2, S3, billing and pricing models.",
    icon: <Award />,
    image: "/activities/cert1.jpg",
  },
  {
    title: "Docker & Kubernetes Workshop",
    type: "Activity",
    description:
      "Hands-on workshop covering Docker, Kubernetes architecture and deployments.",
    icon: <Briefcase />,
    image: "/activities/cert2.jpg",
  },
  {
    title: "DevOps Bootcamp",
    type: "Training",
    description:
      "CI/CD pipelines, GitHub Actions, Terraform, monitoring & DevOps practices.",
    icon: <BookOpen />,
    image: "/activities/cert3.jpg",
  },
]

/* Animation variants */
const contentVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const item = activities[currentIndex]

  return (
    <section
      id="activities"
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-dark text-white"
    >
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Activities & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            My learning journey, professional certifications, workshops, and technical activities.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          key={currentIndex}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
        >
          {/* Content */}
          <motion.div
            variants={contentVariant}
            className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  {item.title}
                </h3>
                <span className="text-xs sm:text-sm font-mono text-primary">
                  {item.type}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground">
              {item.description}
            </p>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-primary hover:underline"
              >
                View Certificate <ExternalLink size={14} />
              </a>
            )}
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariant}
            className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-lg
            h-56 sm:h-64 md:h-80"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 sm:gap-8">
          <button
            onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
            disabled={currentIndex === 0}
            className="p-3 sm:p-4 rounded-full border border-primary text-primary
            disabled:opacity-40 hover:bg-primary hover:text-black transition"
          >
            <ArrowLeft size={20} />
          </button>

          <span className="text-xs sm:text-sm font-mono text-muted-foreground">
            {currentIndex + 1} / {activities.length}
          </span>

          <button
            onClick={() =>
              setCurrentIndex((i) => Math.min(i + 1, activities.length - 1))
            }
            disabled={currentIndex === activities.length - 1}
            className="p-3 sm:p-4 rounded-full border border-primary text-primary
            disabled:opacity-40 hover:bg-primary hover:text-black transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
