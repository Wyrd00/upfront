import React from 'react';
import { Coffee, Eye, FileText } from 'lucide-react';

const ProcessStep = ({ number, icon: Icon, title, desc }: { number: string, icon: any, title: string, desc: string }) => (
  <div className="group relative p-8 border border-ink/10 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-default bg-paper">
    <div className="absolute top-4 right-4 text-6xl font-serif text-ink/5 font-bold group-hover:text-accent/10 transition-colors">
      {number}
    </div>
    <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-6 text-sage group-hover:bg-accent group-hover:text-paper transition-colors duration-500">
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-serif mb-4">{title}</h3>
    <p className="text-ink/70 leading-relaxed font-sans">
      {desc}
    </p>
  </div>
);

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-paper">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-serif mb-6">The Process.</h2>
          <p className="text-xl text-ink/70 leading-relaxed">
            We provide the one thing your friends are too polite to give you: the unvarnished truth of how you land. No scripts, no clinical assessments—just the raw reality of your presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10 shadow-sm overflow-hidden">
           <ProcessStep 
             number="01"
             icon={Coffee}
             title="The Setup"
             desc="We meet in a neutral, public space — you can pick between a walk, a casual coffee, park hang, whatever is comfortable. This is designed to feel low-key and natural, not performative nor an interview. Once you choose a setting, we'll send a short note the morning of what to expect."
           />
           <ProcessStep 
             number="02"
             icon={Eye}
             title="The Interaction"
             desc="For 45 minutes, we just talk; the conversation is designed to be natural, as if a mutual friend introduced us."
           />
           <ProcessStep 
             number="03"
             icon={FileText}
             title="The Report"
             desc="Within 48 hours, we'll send you a written reflection of how your presence came across. Specifically, what drew us in, what felt off, and what stuck. It's candid, but not callous."
           />
        </div>
      </div>
    </section>
  );
};

export default Process;