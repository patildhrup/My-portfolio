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
    // link: "https://www.credly.com/",
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

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const item = activities[currentIndex]

  const handleNext = () => {
    if (currentIndex < activities.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <section
      id="activities"
      className="relative py-24 px-6 bg-dark text-white"
    >
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Activities & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My learning journey, professional certifications, workshops, and technical activities.
          </p>
        </motion.div>

        {/* Activity Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
        >
          {/* LEFT → Content */}
          <motion.div
            initial={{ opacity: 0, x: window.innerWidth > 768 ? -80 : 0, y: window.innerWidth <= 768 ? 20 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <span className="text-sm font-mono text-primary">
                  {item.type}
                </span>
              </div>
            </div>

            <p className="text-muted-foreground">
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

          {/* RIGHT → Image */}
          <motion.div
            initial={{ opacity: 0, x: window.innerWidth > 768 ? 80 : 0, y: window.innerWidth <= 768 ? 20 : 0, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-lg aspect-video md:aspect-auto h-64 md:h-80"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-4 rounded-full border border-primary text-primary
                       disabled:opacity-40 disabled:cursor-not-allowed
                       hover:bg-primary hover:text-black transition"
          >
            <ArrowLeft size={22} />
          </button>

          <span className="text-sm font-mono text-muted-foreground">
            {currentIndex + 1} / {activities.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentIndex === activities.length - 1}
            className="p-4 rounded-full border border-primary text-primary
                       disabled:opacity-40 disabled:cursor-not-allowed
                       hover:bg-primary hover:text-black transition"
          >
            <ArrowRight size={22} />
          </button>
        </div>

      </div>
    </section>
  )
}
