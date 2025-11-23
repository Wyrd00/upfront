import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import SampleReport from './components/SampleReport';
import DigitalVibeCheck from './components/DigitalVibeCheck';
import Booking from './components/Booking';
import Logo from './components/Logo';

const App: React.FC = () => {
  return (
    <div className="font-sans text-ink antialiased selection:bg-accent selection:text-paper">
      <Header />
      <main>
        <Hero />
        <Process />
        <SampleReport />
        <DigitalVibeCheck />
        <Booking />
      </main>
      <footer className="bg-ink text-paper py-16 text-center">
        <div className="container mx-auto px-6 flex flex-col items-center gap-8">
          <Logo light className="scale-110" />
          <div className="text-sm text-paper/50 max-w-md font-light">
            "If you want to improve, be content to be thought foolish and stupid." — Epictetus (and us, probably).
          </div>
          <div className="text-xs text-paper/30 pt-8 border-t border-paper/10 w-full max-w-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Upfront. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;