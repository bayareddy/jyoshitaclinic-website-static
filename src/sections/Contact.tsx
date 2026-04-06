import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
            <h3 className="heading-md text-slate-900 mb-6">Get in Touch with Us</h3>
            <p className="text-slate-600 mb-10">
              Have questions or want to book an appointment? Fill out the form or use our contact details below. We're here to help!
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-4 rounded-2xl text-sky-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                  <p className="text-slate-600">#178, Lokanadha Nivasam, 1st A Cross, Jayanti Nagar, Horamavu, Bengaluru - 560043</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-2xl text-green-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-600">9035219467, 9440284098</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-4 rounded-2xl text-purple-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                  <p className="text-slate-600">lokigoura@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-4 rounded-2xl text-orange-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-slate-600">Mon - Sat: 10:00 AM - 1:00 PM and 5:00 PM - 9:00 PM</p>
                  <p className="text-slate-600">Sun: 10:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-3xl overflow-hidden h-64 shadow-inner border border-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.24584210664!2d77.6614483!3d13.0199447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae111649999999%3A0x0!2zMTPCsDAxJzExLjgiTiA3N8KwMzknNDEuMiJF!5e0!3m2!1sen!2sin!4v1711685618097!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
      </div>
    </section>
  );
}
