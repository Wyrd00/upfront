import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-paper">
      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        
        <div className="md:col-span-7 space-y-8 z-10">
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] text-ink">
            People already have a <span className="italic text-accent">take</span> on you. You just haven’t heard it — yet.
          </h1>
          <p className="text-xl md:text-2xl text-ink/70 max-w-lg font-light leading-relaxed">
            Upfront is a live, in-person read of your vibe— how you're perceived at first glance, halfway through, and by end of a 60 minute interaction.
          </p>
          
          <div className="space-y-6 pt-2">
            <div className="inline-block bg-accent/5 border border-accent/10 text-accent px-4 py-3 rounded-lg text-sm font-bold tracking-wide leading-relaxed max-w-lg">
              Sessions are running weekly in NYC and SF. Join the waitlist now and we'll let you know when slots are available again.
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="bg-ink text-paper px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300">
                Join Waitlist
              </a>
              <a href="#process" className="border border-ink text-ink px-8 py-4 rounded-full text-lg font-medium hover:bg-ink/5 transition-colors duration-300">
                How it Works
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col items-center gap-8">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Social Warmth" 
              className="w-full h-full object-cover rounded-sm shadow-2xl border-8 border-white grayscale contrast-125 animate-in fade-in duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-paper p-4 rounded-sm shadow-lg -rotate-3 w-48 text-center font-serif text-xl italic">
              "Charming, but tries a bit too hard."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;