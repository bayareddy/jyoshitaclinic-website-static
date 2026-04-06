import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Gali Himabindu',
    specialization: 'Consultant Pediatrics & Neonatology',
    bio: 'MBBS, DNB Pediatrics, NNF Fellowship in Neonatology. Expert in newborn care and child development.',
    image: '/Hima.jpg',
  },
  {
    name: 'Dr. Goura Lokanadha',
    specialization: 'General Physician & Critical Care',
    bio: 'MBBS, DA, IDCCM Fellowship, EDIC. Specialized in critical care and general family medicine.',
    image: '/Loka.jpg',
  },
];

interface DoctorCardProps {
  doctor: typeof doctors[0];
  index: number;
}

function DoctorCard({ doctor, index }: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-[40px] mb-6">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-8">
          <div className="flex gap-4">
            <a href="#" className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-sky-600 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-sky-600 transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-sky-600 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-2xl font-bold text-slate-900 mb-1">{doctor.name}</h4>
        <p className="text-sky-600 font-semibold mb-4">{doctor.specialization}</p>
        <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
          {doctor.bio}
        </p>
      </div>
    </motion.div>
  );
}

export default function Doctors() {
  return (
    <section id="doctors" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">Our Doctors</h2>
          <h3 className="heading-md text-slate-900 mb-4">Meet Our Expert Specialists</h3>
          <p className="text-slate-600">
            Our team of highly qualified and experienced doctors is dedicated to providing exceptional care and support to our patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {doctors.map((doctor, index) => (
            <div key={doctor.name}>
              <DoctorCard doctor={doctor} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
