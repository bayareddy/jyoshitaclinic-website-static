import { HeartPulse, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-sky-500 p-2 rounded-lg">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">Jyoshita Children's Clinic</span>
            </div>
            <p className="text-sm leading-relaxed">
              Gentle care for growing smiles. Providing high-quality medical services with compassion and excellence in Bengaluru.
            </p>
            <p className="text-sm font-medium text-sky-400">lokigoura@gmail.com</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {['Home', 'About', 'Services', 'Doctors', 'Contact'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="hover:text-sky-400 cursor-pointer transition-colors"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              <li>Pediatric Care</li>
              <li>General Medicine</li>
              <li>Vaccinations</li>
              <li>Health Screenings</li>
              <li>Emergency Care</li>
              <li>Family Wellness</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-6">Subscribe to our newsletter for health tips and updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-slate-800 border-none rounded-xl px-4 py-3 text-sm flex-1 focus:ring-2 focus:ring-sky-500 outline-none"
              />
              <button className="bg-sky-600 text-white p-3 rounded-xl hover:bg-sky-700 transition-all">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Jyoshita Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sky-400">Privacy Policy</a>
            <a href="#" className="hover:text-sky-400">Terms of Service</a>
            <a href="#" className="hover:text-sky-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
