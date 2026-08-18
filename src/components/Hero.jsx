import { motion } from 'framer-motion';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { Link } from 'react-scroll';

const Hero = () => {
  const techStack = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'GitHub'];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-white-and-blue-loop-background-2580-large.mp4" type="video/mp4" />
        </video>
        {/* Soft Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg via-transparent to-light-bg opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-light-bg via-transparent to-light-bg opacity-50"></div>
      </div>
      
      {/* Background Blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-primary-400/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-semibold text-slate-200">Available for New Projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-white drop-shadow-lg"
          >
            I Build <span className="text-gradient">Modern Websites</span> That Help Businesses Grow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            I am <span className="text-white font-bold">Muhammad Majid Ali</span>, a professional web developer and freelancer helping clients build responsive, fast, and beautiful websites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="btn-primary flex items-center space-x-2 group">
                <span>Hire Me</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="btn-outline">View Projects</button>
            </Link>
            <div className="flex space-x-4">
              <a href="https://github.com/malikmajid161" target="_blank" rel="noopener noreferrer" className="p-3 glass-card text-slate-300 hover:text-white hover:bg-dark-card/10 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/muhammadmajidali" target="_blank" rel="noopener noreferrer" className="p-3 glass-card text-slate-300 hover:text-white hover:bg-dark-card/10 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-xl glass border border-slate-700/60 text-sm font-semibold text-slate-300 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 opacity-50"
      >
        <MousePointer2 size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
