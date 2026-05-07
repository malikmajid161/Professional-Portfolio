import { Link } from 'react-scroll';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/50 pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-slate-900">Muhammad </span>
              <span className="text-primary-500">Majid Ali</span>
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Crafting modern digital experiences that help businesses and individuals stand out in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/malikmajid161" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammadmajidali" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:malikmajid5140@gmail.com" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-slate-400 hover:text-primary-500 cursor-pointer transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                'Portfolio Design',
                'Web Development',
                'Landing Pages',
                'React Apps',
                'Responsive Design'
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-400 hover:text-primary-500 cursor-default transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Let's Connect</h4>
            <p className="text-slate-400 mb-6">
              Interested in working together? Reach out to me for a free consultation.
            </p>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="btn-primary w-full py-3">Start a Project</button>
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {currentYear} Muhammad Majid Ali. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-slate-900 rounded-full flex items-center justify-center shadow-lg shadow-primary-600/30 hover:bg-primary-500 transition-all duration-300 z-50 group"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
