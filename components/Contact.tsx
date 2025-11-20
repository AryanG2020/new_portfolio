import React from 'react';
import { Mail, MapPin, Linkedin, Phone, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative z-10 bg-gradient-to-t from-indigo-900/20 to-transparent">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Currently open to new opportunities in Salesforce Development and Software Engineering.
        </p>
        
        <a 
          href="mailto:aryan.gurubacharya@gmail.com" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] mb-16"
        >
          <Mail className="w-5 h-5" />
          aryan.gurubacharya@gmail.com
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-12">
          <div className="flex flex-col items-center gap-2">
            <MapPin className="text-indigo-400 mb-2" />
            <h3 className="text-white font-bold">Location</h3>
            <p className="text-gray-500">Greencastle, IN / Remote</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Phone className="text-indigo-400 mb-2" />
            <h3 className="text-white font-bold">Phone</h3>
            <p className="text-gray-500">(765) 712-2135</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-4 mb-2">
               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
            <h3 className="text-white font-bold">Socials</h3>
            <p className="text-gray-500">LinkedIn & GitHub</p>
          </div>
        </div>
        
        <footer className="mt-24 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Aryan Gurubacharya. Built with React, Three.js & Gemini.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;