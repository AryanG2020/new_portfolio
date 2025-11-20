import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-display font-bold text-white tracking-tighter hover:text-indigo-400 transition-colors">
          ARYAN<span className="text-indigo-500">.DEV</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Socials & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#contact" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-full transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-6 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-indigo-400"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 pt-4 border-t border-slate-800">
            <a href="#" className="text-gray-400"><Github size={24} /></a>
            <a href="#" className="text-gray-400"><Linkedin size={24} /></a>
            <a href="#" className="text-gray-400"><Mail size={24} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
