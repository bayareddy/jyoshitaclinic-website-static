import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, MessageSquare, Send, Stethoscope } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
}

interface Slot {
  time: string;
  displayTime: string;
  isAvailable: boolean;
}

export default function BookAppointment() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [dates, setDates] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    doctorId: '',
    pName: '',
    phoneNo: '',
    slotTime: '',
    reason: ''
  });
  const [selectedScheduleDate, setSelectedScheduleDate] = useState('');
  
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // 1. Generate dates (Current + 2 days)
  useEffect(() => {
    const generatedDates = [];
    for (let i = 0; i <= 2; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      generatedDates.push(`${yyyy}-${mm}-${dd}`);
    }
    setDates(generatedDates);
    if (generatedDates.length > 0) {
      setSelectedScheduleDate(generatedDates[0]);
    }
  }, []);

  // 2. Fetch Doctors
  useEffect(() => {
    fetch('/api/staff/doctors/active')
      .then(res => res.json())
      .then((data: Doctor[]) => {
        setDoctors(data);
        if (data.length > 0) {
          setFormData(prev => ({ ...prev, doctorId: data[0].id.toString() }));
        }
      })
      .catch(err => console.error("Error fetching doctors", err));
  }, []);

  // 3. Fetch Slots when Doctor or Date changes or refresh triggers
  const [refreshSlotsTrigger, setRefreshSlotsTrigger] = useState(0);

  useEffect(() => {
    if (!formData.doctorId || !selectedScheduleDate) return;

    setLoadingSlots(true);

    const fetchSlots = async () => {
      try {
        const res = await fetch(`/api/appointments/slots?doctorId=${formData.doctorId}&date=${selectedScheduleDate}`);
        if (!res.ok) {
           throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        // Ensure res text is present and JSON parseable. 
        // Handles cases where proxy redirects to an HTML page.
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
           throw new TypeError("Oops, we haven't got JSON!");
        }

        const data = await res.json();
        if (data && data.slots) {
          // Filter only available slots
          const availableSlots = data.slots.filter((s: Slot) => s.isAvailable);
          setSlots(availableSlots);
        } else if (Array.isArray(data)) {
           // Fallback in case the API returns the array directly
           const availableSlots = data.filter((s: Slot) => s.isAvailable === true || s.isAvailable === undefined);
           // if isAvailable is not present map them. 
           const mappedSlots = availableSlots.length > 0 && typeof availableSlots[0].time === 'string' ? availableSlots : [];
           setSlots(mappedSlots);
        } else {
          setSlots([]);
        }
      } catch (err) {
        console.error("Error fetching slots", err);
        setSlots([]);
      } finally {
        setLoadingSlots(false);
        setFormData(prev => ({ ...prev, slotTime: '' }));
      }
    };

    fetchSlots();

  }, [formData.doctorId, selectedScheduleDate, refreshSlotsTrigger]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.slotTime) {
      alert("Please select an available slot.");
      return;
    }
    
    setSubmitting(true);
    const appointmentTime = `${selectedScheduleDate} ${formData.slotTime}:00`;
    
    const payload = {
      appointment_time: appointmentTime,
      doctor_id: parseInt(formData.doctorId, 10),
      type: "Consultation",
      status: "scheduled",
      p_name: formData.pName,
      patient_id: null,
      phone_no: formData.phoneNo,
    };

    fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(async res => {
      if (res.ok) {
        setMessage("Appointment booked successfully!");
        setFormData(prev => ({ ...prev, pName: '', phoneNo: '', slotTime: '', reason: '' }));
        setRefreshSlotsTrigger(prev => prev + 1);
        setTimeout(() => setMessage(''), 5000);
      } else {
        const errText = await res.text();
        alert("Failed to book appointment: " + errText);
      }
    })
    .catch(err => {
      console.error(err);
      alert("Error booking appointment. Please try again.");
    })
    .finally(() => setSubmitting(false));
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
            {message && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 font-medium">
                {message}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <User size={16} className="text-sky-500" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pName}
                    onChange={(e) => setFormData(prev => ({...prev, pName: e.target.value}))}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Phone size={16} className="text-sky-500" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNo}
                    onChange={(e) => setFormData(prev => ({...prev, phoneNo: e.target.value}))}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Stethoscope size={16} className="text-sky-500" /> Doctor
                  </label>
                  <select
                    required
                    value={formData.doctorId}
                    onChange={(e) => setFormData(prev => ({...prev, doctorId: e.target.value}))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white appearance-none"
                  >
                    <option value="" disabled>Select a doctor</option>
                    {doctors.map(doc => (
                       <option key={doc.id} value={doc.id}>Dr. {doc.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Calendar size={16} className="text-sky-500" /> Schedule Date
                  </label>
                  <select
                    required
                    value={selectedScheduleDate}
                    onChange={(e) => setSelectedScheduleDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white appearance-none"
                  >
                    <option value="" disabled>Select preferred date</option>
                    {dates.map(date => (
                      <option key={date} value={date}>{date}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Clock size={16} className="text-sky-500" /> Available Slot
                </label>
                <select
                  required
                  value={formData.slotTime}
                  onChange={(e) => setFormData(prev => ({...prev, slotTime: e.target.value}))}
                  disabled={loadingSlots || slots.length === 0}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white appearance-none disabled:opacity-50"
                >
                  <option value="" disabled>
                    {loadingSlots ? 'Loading slots...' : (slots.length > 0 ? 'Select a time slot' : 'No available slots')}
                  </option>
                  {slots.map(slot => (
                    <option key={slot.time} value={slot.time}>{slot.displayTime}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <MessageSquare size={16} className="text-sky-500" /> Reason for Visit (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.reason}
                  onChange={(e) => setFormData(prev => ({...prev, reason: e.target.value}))}
                  placeholder="Tell us briefly about the reason for your visit..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-sky-700 transition-all shadow-lg hover:shadow-sky-200 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? 'Confirming...' : 'Confirm Appointment'}
                {!submitting && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
