import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest">
            Salesforce & Full Stack Developer
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Engineering <br />
            <span className="text-indigo-500">Scalable Solutions.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Hi, I'm Aryan Gurubacharya. I build robust applications bridging CRM automation, AI integration, and modern web technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="group relative px-8 py-3 bg-indigo-600 text-white font-bold rounded-full flex items-center gap-2 hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#" 
              className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </motion.div>
        
        <div className="hidden md:block"></div>
      </div>

      <motion.a 
        href="#about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;