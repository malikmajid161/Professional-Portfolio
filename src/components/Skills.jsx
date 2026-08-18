import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  const categories = [
    { title: 'Frontend', key: 'frontend' },
    { title: 'Backend', key: 'backend' },
    { title: 'Database & Services', key: 'database' },
    { title: 'Tools & Workflow', key: 'tools' },
    { title: 'Other Skills', key: 'other' },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">My Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive overview of the technologies and tools I use to bring projects to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-amber-500 pl-4">
                {cat.title}
              </h3>
              <div className="space-y-6">
                {skills[cat.key].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-semibold">{skill.name}</span>
                      <span className="text-amber-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-dark-card/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
