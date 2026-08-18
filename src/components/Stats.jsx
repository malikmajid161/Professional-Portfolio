import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, Code2, Users, Trophy } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

const Stats = () => {
  const stats = [
    { label: 'GitHub Projects', value: '30+', icon: <Github size={24} />, color: 'text-emerald-400' },
    { label: 'Commits this Year', value: '1,200+', icon: <GitBranch size={24} />, color: 'text-cyan-400' },
    { label: 'Happy Clients', value: '50+', icon: <Users size={24} />, color: 'text-blue-400' },
    { label: 'Years Experience', value: '2+', icon: <Trophy size={24} />, color: 'text-rose-400' },
  ];

  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Developer Journey</h2>
          <p className="section-subtitle">
            A quick look at my open-source contributions, professional experience, and continuous dedication to writing clean, scalable code.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-8 text-center flex flex-col items-center justify-center space-y-4 group"
            >
              <div className={`p-4 rounded-2xl bg-dark-bg/50 border border-white/5 ${stat.color} group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <h3 className="text-4xl font-extrabold text-white">{stat.value}</h3>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10 md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                <Code2 className="mr-3 text-primary-400" size={28} />
                Open Source Enthusiast
              </h3>
              <p className="text-slate-300 leading-relaxed max-w-2xl">
                I actively contribute to open-source projects, build free tools for the community, and continuously explore the latest technologies like Next.js, Framer Motion, and AI integrations (YOLOv8, OpenAI).
              </p>
            </div>
            <a 
              href="https://github.com/malikmajid161" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap inline-flex items-center"
            >
              <Github className="mr-2" size={20} />
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
