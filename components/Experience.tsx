import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400">My professional journey</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon Dot */}
                <div className="absolute left-0 md:left-1/2 md:-ml-[20px] w-9 h-9 bg-slate-900 border-2 border-indigo-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)] mt-1.5">
                  <Briefcase size={14} className="text-indigo-400" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-2xl hover:border-indigo-500/50 transition-all hover:shadow-xl group">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                        <h4 className="text-indigo-400 font-medium">{exp.company}</h4>
                      </div>
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-xs font-bold rounded-full whitespace-nowrap border border-indigo-500/20">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0 opacity-70"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for layout balance */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;