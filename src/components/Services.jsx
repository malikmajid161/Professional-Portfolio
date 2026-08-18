import { motion } from 'framer-motion';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            I offer a wide range of web development services to help you build a professional online presence and grow your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-8 group border border-transparent hover:border-emerald-500/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-400/20 flex items-center justify-center mb-6 group-hover:bg-emerald-400/30 transition-colors">
                <service.icon className="text-emerald-600 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
