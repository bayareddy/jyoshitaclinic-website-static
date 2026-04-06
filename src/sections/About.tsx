import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img
                  src="/1.png"
                  alt="Clinic Reception"
                  className="rounded-3xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="/2.jpg"
                  alt="Consultation Room"
                  className="rounded-3xl shadow-lg w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="/3.jpg"
                  alt="Doctor with Child"
                  className="rounded-3xl shadow-lg w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="/4.jpg"
                  alt="Happy Patient"
                  className="rounded-3xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-600 text-white p-8 rounded-full shadow-2xl hidden md:block">
              <p className="text-center font-bold text-2xl">10+</p>
              <p className="text-center text-xs uppercase tracking-widest">Years</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">About Jyoshita Clinic</h2>
            <h3 className="heading-md text-slate-900 mb-6">Dedicated to Providing the Best Medical Care for Your Family</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              At Jyoshita Clinic, we believe that every patient deserves personalized and compassionate care. Our mission is to foster a healthy community by providing accessible, high-quality medical services in a warm and welcoming environment.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                'Expert Pediatric & General Care',
                'State-of-the-art Medical Facilities',
                'Compassionate & Friendly Staff',
                'Patient-Centered Approach',
                'Convenient Location & Timings'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full text-green-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-sky-50 p-8 rounded-[32px] border border-sky-100">
              <h4 className="font-bold text-slate-900 mb-2 italic">"Our Mission"</h4>
              <p className="text-slate-600 italic">
                To provide gentle care for growing smiles and ensure the well-being of every family member through excellence in medical practice and human connection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
