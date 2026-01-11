export default function AboutUs() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black px-6 md:px-20 py-24 text-white"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500 mr-2">02.</span>
            About Me
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            A brief introduction about who I am and what I do.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          
          {/* Text */}
          <div className="text-zinc-400 leading-relaxed space-y-6">
            <p>
              I’m a passionate DevOps Engineer with a strong interest in building
              scalable, secure, and automated cloud infrastructure. I enjoy
              bridging the gap between development and operations by designing
              efficient CI/CD pipelines and managing containerized applications.
            </p>

            <p>
              I have hands-on experience with tools like Docker, Kubernetes,
              Terraform, AWS, Git, and modern CI/CD platforms. I believe in clean
              architecture, automation-first thinking, and continuous learning
              to deliver production-ready solutions.
            </p>

            <p>
              My goal is to grow as a cloud and DevOps professional while
              contributing to impactful projects that solve real-world problems.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Tech I Work With</h3>
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
                <li
                  key={tech}
                  className="px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
