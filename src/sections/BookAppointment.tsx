import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, MessageSquare, Send, Stethoscope } from 'lucide-react';
import React, { useState } from 'react';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_no: '',
    doctor: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setFormData({
          first_name: '',
          last_name: '',
          phone_no: '',
          doctor: '',
          date: '',
          time: '',
        });
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to book appointment');
    }
  };

  return (
    <section id="book-appointment" className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Book an <span className="text-sky-600">Appointment</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Schedule a visit for your child with our expert pediatricians. We ensure a comfortable and friendly environment for your little ones.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-sky-600">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Flexible Scheduling</h3>
                  <p className="text-slate-600">Choose a time that works best for your family.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-sky-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Minimal Wait Time</h3>
                  <p className="text-slate-600">We value your time and strive to keep appointments on schedule.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <User size={16} className="text-sky-500" /> First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                    value={formData.first_name}
                    onChange={handleChange}
                    name="first_name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <User size={16} className="text-sky-500" /> Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                    value={formData.last_name}
                    onChange={handleChange}
                    name="last_name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Phone size={16} className="text-sky-500" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                    value={formData.phone_no}
                    onChange={handleChange}
                    name="phone_no"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Stethoscope size={16} className="text-sky-500" /> Doctor
                  </label>
                  <select
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white appearance-none"
                    value={formData.doctor}
                    onChange={handleChange}
                    name="doctor"
                    required
                  >
                    <option value="" disabled>Select a doctor</option>
                    <option value="Gali Himabindu">Dr. Gali Himabindu</option>
                    <option value="Goura Lokanadha">Dr. Goura Lokanadha</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Calendar size={16} className="text-sky-500" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                    value={formData.date}
                    onChange={handleChange}
                    name="date"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Clock size={16} className="text-sky-500" /> Preferred Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                    value={formData.time}
                    onChange={handleChange}
                    name="time"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <MessageSquare size={16} className="text-sky-500" /> Reason for Visit (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us briefly about the reason for your visit..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-sky-700 transition-all shadow-lg hover:shadow-sky-200 flex items-center justify-center gap-2 group"
              >
                Confirm Appointment
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
