import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import Canvas3D from './components/Canvas3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
      <p className="text-indigo-300 font-display tracking-widest animate-pulse">INITIALIZING REALITY...</p>
    </div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <div className="bg-slate-950 min-h-screen text-white selection:bg-indigo-500/30 selection:text-indigo-200">
        
        {/* 3D Background Layer */}
        <Suspense fallback={<LoadingScreen />}>
          <Canvas3D />
        </Suspense>

        {/* UI Layer */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </div>

        {/* Interactive Elements */}
        <AIChat />
      </div>
    </HashRouter>
  );
}

export default App;
