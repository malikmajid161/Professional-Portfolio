import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "John D.",
      role: "E-commerce Business Owner",
      platform: "Fiverr",
      content: "Majid is an exceptional developer. He delivered my business website ahead of schedule and the quality was beyond my expectations. Highly recommended!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=john"
    },
    {
      name: "Sarah M.",
      role: "Startup Founder",
      platform: "Upwork",
      content: "Excellent communication and technical skills. Majid helped us build our MVP from scratch using React and Tailwind. Truly a professional.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Michael R.",
      role: "Marketing Director",
      platform: "Direct Client",
      content: "I've worked with many developers, but Majid's attention to detail and modern design sense really stand out. Our conversion rate increased significantly.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=michael"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Don't just take my word for it. Here's what my clients have to say about working with me on various platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 relative"
            >
              <div className="absolute -top-5 right-10 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/30">
                <Quote className="text-white" size={20} />
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full border-2 border-primary-500/30" />
                <div>
                  <h4 className="text-xl font-bold text-white">{review.name}</h4>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </div>

              <div className="flex text-yellow-500 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              <p className="text-slate-300 italic leading-relaxed mb-8">
                "{review.content}"
              </p>

              <div className="pt-6 border-t border-white/10/50">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-500">
                  Client from {review.platform}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
