import React from 'react';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-32 bg-paper border-t border-ink/10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 md:order-1">
                <div className="bg-white p-12 border border-ink/10 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)] rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
                    <div className="flex justify-between items-baseline mb-8 pb-8 border-b border-ink/10">
                        <span className="font-serif text-3xl italic">The Session</span>
                        <span className="font-bold text-2xl">$125</span>
                    </div>
                    
                    <ul className="space-y-6 mb-10">
                        <li className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold shrink-0">1</div>
                            <p className="text-ink/80">45 to 60-minute in-person interaction</p>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold shrink-0">2</div>
                            <p className="text-ink/80">Objective analysis of your first impression, both wins and blind spots.</p>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold shrink-0">3</div>
                            <p className="text-ink/80">Comprehensive PDF report delivered in 48 hours.</p>
                        </li>
                    </ul>

                    <button className="w-full bg-ink text-paper py-4 text-lg font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300">
                        Join Waitlist
                    </button>
                    <p className="text-center text-xs text-ink/40 mt-4">
                        Limited weekly slots available.
                    </p>
                </div>
            </div>

            <div className="order-1 md:order-2 space-y-8">
                <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] text-ink">
                    Stop guessing how you come across.
                </h2>
                <p className="text-xl text-ink/70 font-light leading-relaxed">
                    Get honest feedback on the interface we use to navigate it all: our presence.
                </p>
                <div className="flex items-center gap-3 text-accent font-serif italic text-xl">
                    <span>New York City</span>
                    <span className="w-1 h-1 bg-ink/20 rounded-full"></span>
                    <span>San Francisco</span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;