import { useState } from "react"
import { motion } from "framer-motion"
import {
  Award,
  BookOpen,
  Briefcase,
  ExternalLink,
  ArrowLeft,
  Ship,
  ArrowRight,
  Cloud,
  BarChart,
  Leaf,
  Code,
  Zap,
  Cpu,
} from "lucide-react"

/* Activities Data */
const activities = [
  {
  title: "VCET Hackathon 2024 – Code the Cosmos",
  type: "Hackathon",
  description:
    "Participated in a 2-day national-level hackathon focused on problem-solving, teamwork, and building innovative technical solutions under time constraints.",
  icon: <Zap />,
  image: "/activities/Hackethon-2024-VCET.png",
}
,
 {
  title: "VCET Hackathon 2025 – Race to the Future",
  type: "Hackathon",
  description:
    "Participated in a 2-day national-level hackathon focused on problem-solving, teamwork, and building innovative technical solutions under time constraints.",
  icon: <Zap />,
  image: "/activities/hackethon-2025-VCET.png",
}
,
{
  title: "AWS: Zero To Hero – TrainWithShubham",
  type: "Certification",
  description: "Mastered end-to-end cloud infrastructure including IAM security, VPC networking, and EBS/S3 storage. Gained hands-on experience with AWS CLI, RDS/Dynomodb databases, and monitoring tools (CloudWatch). Specialized in modern architectures via Serverless (Lambda), Containerization, and Kubernetes on AWS (EKS), culminating in a comprehensive Serverless mega-project.",
  icon: <Cloud />,
  image: "/activities/AWS-certification.png",
},
   {
    title: "AWS DevOps Masterclass",
    type: "workshop",
    description:
      "Gained hands-on experience with AWS DevOps practices including CI/CD pipelines, cloud automation, and deployment strategies.",
    icon: <BarChart />,
    image: "/activities/cert1.jpg",
  },
  {
  title: "Deep Learning in Ecological Studies – ISRO (IIRS)",
  type: "Workshop",
  description: "Participated in a specialized IIRS Outreach Programme workshop conducted by the Indian Space Research Organisation, focusing on the applications of Deep Learning in environmental and ecological data.",
  icon: <Cpu />, // Or <Globe />
  image: "/activities/Isro-workshop.jpeg",
},
  {
    title: "Generative AI for DevOps Masterclass",
    type: "workshop",
    description:
    "Completed an intensive masterclass on applying Generative AI in DevOps workflows, including CI/CD automation, monitoring, and intelligent infrastructure management.",
      
    icon: <BarChart />,
    image: "/activities/cert2.jpg",
  },
  {
    title: "Innovathons'25 a national level project presentation hackathon",
    type: "Activity",
    description:
      "Hands-on workshop covering Docker containerization, Kubernetes architecture, pod management, and application deployments.",
    icon: <Briefcase />,
    image: "/activities/cert3.jpg",
  },
  {
    title: "PhonePe Data Analysis using Power BI",
    type: "Workshop",
    description:
      "Participated in a data analytics workshop focused on visualizing and analyzing PhonePe transaction data using Power BI dashboards.",
    icon: <BarChart />,
    image: "/activities/dataAnalyst-workshop.png",
  },
  {
    title: "Green Skills & Artificial Intelligence",
    type: "Certification",
    description:
      "Completed a foundation course on Green Skills and Artificial Intelligence under the Skills4Future program, focusing on sustainable and ethical AI.",
    icon: <Leaf />,
    image: "/activities/datascience-workshop.jpeg",
  },
  {
    title: "Full Stack Web Development",
    type: "Certification",
    description:
      "Successfully completed a full-stack development program covering HTML, CSS, JavaScript, Node.js, MongoDB, and React.",
    icon: <Code />,
    image: "/activities/fullstack-apnacollege.png",
  },
  {
    title: "Webcade 2024 Hackathon",
    type: "Hackathon",
    description:
      "Participated in a 12-hour state-level hackathon, collaborating in a team to design and present an innovative technical solution.",
    icon: <Zap />,
    image: "/activities/Hackethon-2024-SJ.png",
  },
  {
    title: "Generative AI Innovation Workshop",
    type: "Workshop",
    description:
      "Attended an industry-led workshop on Generative AI innovation, exploring real-world AI applications and emerging trends.",
    icon: <Cpu />,
    image: "/activities/datascience-workshop2.jpeg",
  },
  {
  title: "Kubernetes For Absolute Beginners – KodeKloud",
  type: "Certification",
  description: "Successfully completed a comprehensive crash course covering Kubernetes architecture, pods, deployments, and services, gaining hands-on experience in container orchestration.",
  icon: <Ship />, // Or <Cloud />
  image: "/activities/k8s-certification.png",
},

]

/* Animation Variants */
const contentVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const imageVariant = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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

        {/* Animated Card */}
        <motion.div
          key={currentIndex}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
        >

          {/* Content Card (Left) */}
          <motion.div
            variants={contentVariant}
            className="p-5 sm:p-6 rounded-2xl border border-white/10
            bg-white/5 backdrop-blur-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
              rounded-full bg-primary/10 text-primary">
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

          {/* Certificate Image (Right) */}
          <motion.div
            variants={imageVariant}
            className="relative rounded-2xl overflow-hidden
            border border-primary/20 shadow-lg
            h-56 sm:h-64 md:h-80"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover
              hover:scale-105 transition-transform duration-500"
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
