import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Doctors', to: 'doctors' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="bg-sky-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <HeartPulse className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Jyoshita Children's Clinic
          </span>
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-sky-600 font-semibold"
              className="text-sm font-medium text-slate-600 hover:text-sky-600 cursor-pointer transition-colors"
            >
              {link.name}
            </ScrollLink>
          ))}
          <ScrollLink
            to="book-appointment"
            smooth={true}
            duration={500}
            className="bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-sky-700 transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            Book Now
          </ScrollLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-sky-600 cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <ScrollLink
                to="book-appointment"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="bg-sky-600 text-white px-6 py-3 rounded-xl text-center font-bold"
              >
                Book Appointment
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
