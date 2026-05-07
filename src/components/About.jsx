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
            <div className="relative z-10 rounded-3xl overflow-hidden glass border border-slate-200/60 p-2">
              <img 
                src="/profile.png" 
                alt="Muhammad Majid Ali"
                className="rounded-2xl w-full h-[500px] object-cover hover:brightness-110 transition-all duration-500"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-slate-200/60 z-20 shadow-2xl">
              <span className="block text-3xl font-bold text-violet-600">2+</span>
              <span className="text-slate-600 text-sm font-medium">Years of Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-slate-900">About Me</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              I am a dedicated Web Developer and Freelancer with a passion for building high-quality websites. I specialize in creating clean, responsive, and user-friendly web solutions for businesses, startups, and individuals.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Working on platforms like <span className="text-violet-600 font-semibold">Fiverr</span> and <span className="text-violet-600 font-semibold">Upwork</span>, I have helped clients globally transform their ideas into functional digital realities. My focus is always on performance, scalability, and exceptional user experience.
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
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</h4>
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
