import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'React', 'Node.js', 'Tailwind', 'Firebase'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tech.some(t => t.includes(filter)) || p.tech.includes(filter));

  return (
    <section id="projects" className="section-padding bg-slate-50/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work, showcasing my skills in frontend and full-stack development.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 scale-105' 
                    : 'glass text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all hover:scale-110">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 text-slate-900 rounded-full hover:bg-white/20 transition-colors">
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-rose-100 text-rose-600 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-rose-500 font-bold text-sm hover:underline flex items-center space-x-1">
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 font-semibold text-sm hover:text-slate-900 flex items-center space-x-1">
                      <span>Code</span>
                      <GithubIcon size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
