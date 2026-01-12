import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { useRef } from "react"
import toast from "react-hot-toast"


export default function GetInTouch() {


   const formRef = useRef(null) 

  const sendEmail = (e) => { 
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
  toast.success("Message sent successfully 🚀")
  formRef.current.reset()
})
.catch(() => {
  toast.error("Failed to send message ❌")
})
  }

  // Variants for scroll animation
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-500 mr-2">04.</span>
            Get In Touch
          </motion.h2>

          <motion.p variants={itemVariants} className="text-zinc-400 max-w-xl leading-relaxed mb-10">
            I'm currently open to new opportunities. Whether you have a question
            about infrastructure, want to collaborate on a project, or just
            want to say hi, my inbox is always open!
          </motion.p>

          {/* Contact Info */}
          <motion.div variants={containerVariants} className="space-y-6 text-zinc-300">
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="p-3 rounded-full bg-orange-500/10 text-orange-500">
                <Mail size={20} />
              </span>
              <span>patildhrup45@gmail.com</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="p-3 rounded-full bg-orange-500/10 text-orange-500">
                <MapPin size={20} />
              </span>
              <span>Palghar, India</span>
            </motion.div>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={containerVariants} className="flex gap-4 mt-10">
            <motion.a
              variants={itemVariants}
              href="https://github.com/patildhrup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-300
                         hover:border-orange-500 hover:text-orange-500 transition"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="https://linkedin.com/in/patildhrup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-300
                         hover:border-orange-500 hover:text-orange-500 transition"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="https://x.com/dev_patildhrup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-300
                         hover:border-orange-500 hover:text-orange-500 transition"
            >
              <Twitter size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl"
        >
           <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

            <div>
              <label className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                name="user_name"   // ✅ ADDED
                placeholder="John Doe"
                required
                className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-4 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                name="user_email"  // ✅ ADDED
                placeholder="john@example.com"
                required
                className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-4 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                rows="5"
                name="message"     // ✅ ADDED
                placeholder="Hello! I'd like to discuss..."
                required
                className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-4 focus:outline-none focus:border-orange-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-4 rounded-xl transition"
            >
              Send Message
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  )
}
