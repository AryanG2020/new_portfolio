import React, { useRef } from 'react';
import { EXPERIENCE } from '../constants';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Briefcase, Calendar, Terminal, Shield, Cpu, Trophy } from 'lucide-react';

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = 20 / 2;

const ExperienceCard = ({ exp, index }: { exp: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth return
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 50, delay: index * 0.1 }}
      className="relative w-full mb-16 group perspective-1000"
    >
      {/* Connection Line Node */}
      <div className="absolute left-[-29px] top-8 w-6 h-6 rounded-full bg-slate-900 border-2 border-indigo-500 z-20 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.8)]">
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
      </div>

      {/* Holographic Card */}
      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-xl p-8 shadow-2xl overflow-hidden group-hover:border-indigo-500/50 transition-colors duration-300">
        
        {/* Spotlight Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(99,102,241,0.15),transparent_40%)]" />

        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />

        {/* Card Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-700/50 pb-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-500/20 rounded-lg border border-indigo-500/30 text-indigo-300">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white tracking-wide group-hover:text-indigo-300 transition-colors">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-mono">
                <Shield size={14} />
                <span>{exp.company}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-600 group-hover:border-indigo-500/50 transition-colors">
            <Calendar size={14} className="text-gray-400" />
            <span className="text-xs font-mono text-gray-300">{exp.period}</span>
          </div>
        </div>

        {/* Content (Logs) */}
        <div className="space-y-3 relative z-10">
          {exp.description.map((item: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="flex items-start gap-3 group/item"
            >
              <Terminal size={16} className="mt-1 text-indigo-500/50 shrink-0 group-hover/item:text-indigo-400 transition-colors" />
              <p className="text-gray-400 text-sm leading-relaxed font-mono group-hover/item:text-gray-200 transition-colors">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 min-h-screen flex flex-col">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.9)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        {/* Header Section (HUD Style) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-indigo-500/30 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="text-indigo-500 animate-spin-slow" />
              <span className="text-xs font-mono text-indigo-400 tracking-[0.3em]">SYSTEM_LOGS_V2.4</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white">
              Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Simulation</span>
            </h2>
          </div>
          
          {/* Gamified Stats */}
          <div className="flex gap-6 mt-6 md:mt-0">
             <div className="text-right">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Current Level</p>
                <p className="text-2xl font-bold text-white font-mono">Lvl. 4</p>
             </div>
             <div className="text-right">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Achievements</p>
                <div className="flex gap-1 justify-end mt-1">
                   <Trophy size={16} className="text-yellow-500" />
                   <Trophy size={16} className="text-gray-400" />
                   <Trophy size={16} className="text-orange-700" />
                </div>
             </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-0">
          {/* Central Glowing Line */}
          <div className="absolute left-[0px] md:left-[-17px] top-4 bottom-0 w-[2px] bg-slate-800">
             <motion.div 
               className="absolute top-0 left-0 right-0 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]"
               initial={{ height: "0%" }}
               whileInView={{ height: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeInOut" }}
             />
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>

          {/* Bottom Terminator */}
          <div className="absolute bottom-[-20px] left-[-24px] md:left-[-41px] flex items-center gap-4 opacity-50">
             <div className="w-12 h-[2px] bg-indigo-500/50" />
             <span className="text-xs font-mono text-indigo-400">END_OF_LOGS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
