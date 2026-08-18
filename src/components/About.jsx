import { motion } from 'framer-motion';
import { CheckCircle2, Award, Briefcase, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '2+', icon: Award },
    { label: 'Projects Completed', value: '50+', icon: Briefcase },
    { label: 'Happy Clients', value: '40+', icon: Users },
    { label: 'Satisfaction Rate', value: '100%', icon: CheckCircle2 },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden glass border border-white/10 p-2">
              <img 
                src="/profile.png" 
                alt="Muhammad Majid Ali"
                className="rounded-2xl w-full h-[500px] object-cover hover:brightness-110 transition-all duration-500"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/10 z-20 shadow-2xl">
              <span className="block text-3xl font-bold text-violet-600">2+</span>
              <span className="text-slate-300 text-sm font-medium">Years of Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              I am a dedicated AI Engineer and Web Developer with a passion for building high-quality, fully deployed digital solutions. I specialize in creating clean, responsive, and intelligent web applications for businesses, startups, and individuals.
            </p>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              My focus is on integrating advanced AI models into robust web frontends, ensuring performance, scalability, and exceptional user experiences. All my major projects are real-world ready and fully functional.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 border-b-4 border-transparent hover:border-violet-500"
                >
                  <stat.icon className="text-violet-600 mb-4" size={28} />
                  <h4 className="text-2xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
