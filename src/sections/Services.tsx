import { motion } from 'motion/react';
import { Baby, Stethoscope, Activity, Heart, Shield, Thermometer } from 'lucide-react';

const services = [
  {
    title: 'Pediatric Care',
    description: 'Specialized medical care for infants, children, and adolescents with a gentle touch.',
    icon: Baby,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'General Medicine',
    description: 'Comprehensive health checkups and treatments for patients of all ages.',
    icon: Stethoscope,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Vaccinations',
    description: 'Complete immunization schedules to protect your family from preventable diseases.',
    icon: Shield,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Health Screenings',
    description: 'Regular diagnostic tests and screenings to monitor and maintain optimal health.',
    icon: Activity,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Emergency Care',
    description: 'Immediate medical attention for urgent health concerns and minor injuries.',
    icon: Thermometer,
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'Family Wellness',
    description: 'Holistic approach to health focusing on nutrition, lifestyle, and mental well-being.',
    icon: Heart,
    color: 'bg-pink-50 text-pink-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
          <h3 className="heading-md text-slate-900 mb-4">Comprehensive Healthcare Solutions</h3>
          <p className="text-slate-600">
            We offer a wide range of medical services tailored to meet the unique needs of our patients, ensuring the best possible outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-6 text-sky-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <span className="text-lg">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
