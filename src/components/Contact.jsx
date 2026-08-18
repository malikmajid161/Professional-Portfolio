import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-100 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your next project? Let's discuss how I can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email Me</h4>
                  <p className="text-slate-300">malikmajid5140@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">WhatsApp</h4>
                  <p className="text-slate-300">03021651294</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                  <p className="text-slate-300">Wah Rawalpindi, Pakistan</p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/malikmajid161" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-600 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammadmajidali" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary-600 transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Full Name" 
                    className="w-full bg-dark-card/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="youremail@example.com" 
                    className="w-full bg-dark-card/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Service Needed</label>
                <select className="w-full bg-dark-card/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors appearance-none">
                  <option className="bg-dark-card">Portfolio Website</option>
                  <option className="bg-dark-card">Business Website</option>
                  <option className="bg-dark-card">React Application</option>
                  <option className="bg-dark-card">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-dark-card/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary bg-sky-600 hover:bg-sky-700 shadow-sky-200 flex items-center justify-center space-x-2 py-4">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
