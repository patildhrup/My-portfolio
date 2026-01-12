import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const techData = {
  Docker: {
    description: `Worked extensively with Docker to containerize applications,
                  design multi-container architectures, and streamline CI/CD deployments.
                  Created Docker images for microservices and optimized them for production.`,
    projects: [
      "Containerized Node.js microservices for project X",
      "Created custom Docker images for CI/CD pipelines",
      "Optimized container startup time by 30%"
    ]
  },
  Kubernetes: {
    description: `Deployed and managed Kubernetes clusters for production workloads.
                  Configured Helm charts, managed namespaces, and automated scaling.`,
    projects: [
      "Setup AKS/EKS/GKE clusters for microservices",
      "Implemented Helm charts for app deployment",
      "Configured auto-scaling and monitoring"
    ]
  },
  AWS: {
    description: `Designed and deployed cloud infrastructure using AWS services,
                  automated provisioning with Terraform, and implemented best practices for security.`,
    projects: [
      "Built serverless applications using Lambda & API Gateway",
      "Managed S3 buckets, CloudFront, and IAM policies",
      "Automated infrastructure using Terraform"
    ]
  },
  Terraform: {
    description: `Used Terraform to manage infrastructure as code across environments.
                  Implemented reusable modules and automated deployments.`,
    projects: [
      "Created reusable Terraform modules for VPC, ECS, and RDS",
      "Automated AWS infra provisioning",
      "Version-controlled infrastructure code in GitHub"
    ]
  },
  "CI/CD Pipelines": {
    description: `Designed CI/CD pipelines to automate testing, build, and deployment
                  using GitHub Actions, Jenkins, and GitLab CI.`,
    projects: [
      "Configured GitHub Actions for automated deployments",
      "Built Jenkins pipelines for microservices",
      "Implemented rollback strategies in pipelines"
    ]
  },
  Linux: {
    description: `Managed Linux servers for production environments,
                  wrote bash scripts for automation, and monitored system health.`,
    projects: [
      "Automated server setup using shell scripts",
      "Managed Nginx, Apache, and system services",
      "Setup monitoring scripts for uptime alerts"
    ]
  },
  "Git & GitHub": {
    description: `Used Git and GitHub for version control,
                  collaborated in teams using branching strategies, pull requests, and code reviews.`,
    projects: [
      "Implemented Git flow for team projects",
      "Code review and pull request management",
      "Maintained release tags and versioning"
    ]
  },
  "Monitoring & Logging": {
    description: `Configured monitoring and logging tools to ensure production stability.`,
    projects: [
      "Setup Prometheus & Grafana dashboards",
      "Implemented ELK stack for log aggregation",
      "Configured alerts for system anomalies"
    ]
  }
}

const defaultContent = {
  description: [
    `I’m a passionate DevOps Engineer focused on building scalable, secure, and automated cloud infrastructure. I enjoy bridging the gap between development and operations through reliable CI/CD pipelines.`,
    `I have hands-on experience with Docker, Kubernetes, Terraform, AWS, Git, and modern CI/CD platforms. My approach emphasizes automation-first workflows and production-ready systems.`,
    `My goal is to grow as a cloud and DevOps professional while contributing to impactful, real-world projects.`
  ]
}

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function AboutUs() {
  const [selectedTech, setSelectedTech] = useState(null)

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black px-6 md:px-20 py-28 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500 mr-2">02.</span>
            About Me
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm md:text-base">
            A brief introduction about who I am and what I do.
          </p>
        </motion.div>

        {/* Content + Tech Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
        >
          {/* Text Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTech || "default"}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, x: 20 }}
              className="text-zinc-400 leading-relaxed space-y-4 text-sm md:text-base"
            >
              {selectedTech ? (
                <>
                  <p className="text-white font-medium text-lg">{selectedTech}</p>
                  <p>{techData[selectedTech].description}</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    {techData[selectedTech].projects.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  {defaultContent.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Tech Stack */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-white">Tech I Work With</h3>
            <motion.ul variants={containerVariants} className="grid grid-cols-2 gap-4 text-zinc-300">
              {Object.keys(techData).map((tech) => (
                <motion.li
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className={`cursor-pointer px-4 py-3 rounded-xl border border-zinc-800 hover:text-primary hover:border-primary
                             transition-all duration-300
                             ${
                               selectedTech === tech
                                 ? "bg-orange-500/20 border-orange-500 text-white"
                                 : "bg-zinc-900/60"
                             }`}
                >
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
