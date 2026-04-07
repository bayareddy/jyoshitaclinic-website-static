/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Doctors from './sections/Doctors';
import BookAppointment from './sections/BookAppointment';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <BookAppointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
