import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function GetInTouch() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-500 mr-2">04.</span>
            Get In Touch
          </h2>

          <p className="text-zinc-400 max-w-xl leading-relaxed mb-10">
            I'm currently open to new opportunities. Whether you have a question
            about infrastructure, want to collaborate on a project, or just
            want to say hi, my inbox is always open!
          </p>

          {/* Contact Info */}
          <div className="space-y-6 text-zinc-300">
            <div className="flex items-center gap-4">
              <span className="p-3 rounded-full bg-orange-500/10 text-orange-500">
                <Mail size={20} />
              </span>
              <span>patildhrup45@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-3 rounded-full bg-orange-500/10 text-orange-500">
                <MapPin size={20} />
              </span>
              <span>Palghar, India</span>
            </div>
          </div>
          

          {/* Social Icons */}
          <div className="flex gap-4 mt-10">
  <a
    href="https://github.com/patildhrup"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-300
               hover:border-orange-500 hover:text-orange-500 transition"
  >
    <Github size={20} />
  </a>

  <a
    href="https://linkedin.com/in/patildhrup"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-300
               hover:border-orange-500 hover:text-orange-500 transition"
  >
    <Linkedin size={20} />
  </a>

  <a
    href="https://twitter.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-300
               hover:border-orange-500 hover:text-orange-500 transition"
  >
    <Twitter size={20} />
  </a>
</div>
</div>

        {/* RIGHT FORM */}
        <div className="bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl">
          <form className="space-y-6">
            
            <div>
              <label className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-4 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-4 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                rows="5"
                placeholder="Hello! I'd like to discuss..."
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
        </div>
      </div>
    </section>
  )
}

