import { motion } from 'motion/react';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-50 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <ShieldCheck size={16} />
            <span>Trusted Healthcare Provider</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Jyoshita <span className="text-sky-600">Children's Clinic</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Gentle care for growing smiles. We provide comprehensive medical services with a focus on pediatric excellence and family wellness.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="bg-sky-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-sky-700 transition-all shadow-lg hover:shadow-sky-200 flex items-center gap-2 group cursor-pointer"
            >
              Book Appointment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="bg-white border-2 border-slate-100 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-sky-200 hover:bg-sky-50 transition-all cursor-pointer"
            >
              Our Services
            </ScrollLink>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">10+</span>
              <span className="text-sm text-slate-500">Years Exp.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">5k+</span>
              <span className="text-sm text-slate-500">Happy Patients</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="/Hero.jpg"
              alt="Excellence in Healthcare"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4"
          >
            <div className="bg-green-100 p-3 rounded-xl text-green-600">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Available</p>
              <p className="text-sm font-bold text-slate-900">24/7 Support</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4"
          >
            <div className="bg-sky-100 p-3 rounded-xl text-sky-600">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Expert</p>
              <p className="text-sm font-bold text-slate-900">Top Doctors</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
