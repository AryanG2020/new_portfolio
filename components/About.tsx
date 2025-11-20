import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../constants';
import Skills3D from './Skills3D';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-indigo-500">Me</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 whitespace-pre-line">
              {ABOUT_TEXT}
            </p>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
                <h3 className="text-2xl font-bold text-indigo-400 mb-1">4+</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Years Exp</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors">
                <h3 className="text-2xl font-bold text-purple-400 mb-1">15+</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Projects</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-pink-500 transition-colors">
                <h3 className="text-2xl font-bold text-pink-400 mb-1">3.9</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">GPA</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-indigo-900/20 border border-indigo-500/30 rounded-xl">
              <h4 className="text-indigo-300 font-bold mb-2 text-sm uppercase">Education</h4>
              <p className="text-white font-medium">DePauw University</p>
              <p className="text-gray-400 text-sm">Bachelors in Computer Science & Economics</p>
              <p className="text-gray-500 text-xs mt-1">Dean's Honor List (2021-2024)</p>
            </div>
          </motion.div>

          {/* 3D Skills Interactive Area */}
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative h-[500px] w-full bg-slate-900/30 rounded-full border border-indigo-500/10 shadow-[0_0_50px_rgba(99,102,241,0.1)]"
          >
             <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/40 px-4 py-1 rounded-full border border-white/10 backdrop-blur-md z-10 pointer-events-none">
                <p className="text-xs text-indigo-300 font-bold tracking-widest">INTERACTIVE SKILL CLOUD</p>
             </div>
             <Skills3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;