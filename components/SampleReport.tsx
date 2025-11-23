import React from 'react';

const SampleReport: React.FC = () => {
  return (
    <section className="py-24 bg-[#F2F0E9] border-t border-ink/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 italic">The Deliverable</h2>
            <p className="text-ink/60 text-lg">
                No distinct vague platitudes. You get a physical takeaway.
            </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
            {/* The Report Paper */}
            <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-16 md:mx-4 relative rotate-1 transition-transform duration-500 hover:rotate-0">
                
                {/* Header of Report */}
                <div className="border-b-2 border-ink/10 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <div className="text-accent font-bold text-xs tracking-[0.3em] uppercase mb-2">Upfront Service</div>
                        <h3 className="text-3xl md:text-4xl font-serif text-ink">Vibe Check: "The Supportive, Warm Friend"</h3>
                    </div>
                    <div className="text-right font-mono text-xs text-ink/40 uppercase tracking-widest">
                        <div>Subject: K.L.</div>
                        <div>Setting: Drinks</div>
                    </div>
                </div>

                {/* Body of Report */}
                <div className="grid md:grid-cols-12 gap-12">
                    
                    {/* Left Col: Stats */}
                    <div className="md:col-span-4 space-y-8 md:border-r md:border-ink/5 md:pr-8 border-b border-ink/5 md:border-b-0 pb-8 md:pb-0 h-fit sticky top-8">
                         <div>
                            <h4 className="font-sans text-xs font-bold text-ink/40 uppercase tracking-widest mb-2">First Read</h4>
                            <ul className="space-y-2 font-serif italic text-lg text-ink/80">
                                <li>"Tastefully Minimalist"</li>
                                <li>"Socially Fluent"</li>
                                <li>"Carefully Opinionated"</li>
                            </ul>
                         </div>
                         <div>
                            <h4 className="font-sans text-xs font-bold text-ink/40 uppercase tracking-widest mb-2">The Pull</h4>
                            <p className="font-serif text-lg leading-tight text-ink/80">
                                High emotional intelligence and immediate warmth that invites strangers in.
                            </p>
                         </div>
                         <div>
                             <h4 className="font-sans text-xs font-bold text-ink/40 uppercase tracking-widest mb-2">The Friction</h4>
                             <p className="font-serif text-lg leading-tight text-ink/80">
                                 Prioritizing harmony over distinctness; "sheathing" opinions in courtesy.
                             </p>
                         </div>
                    </div>

                    {/* Right Col: Content */}
                    <div className="md:col-span-8 space-y-6 text-ink/80 font-serif text-lg leading-relaxed">
                         <p>
                             My first impression (before we even spoke) was that you read as warm and inviting. Your outfit had that clean, minimal precision: nothing loud, everything intentional. The top matching your eye color felt like a quiet flex. I assumed you were someone who leads with kindness; that assumption turned out correct.
                         </p>
                         
                         <p>
                             In conversation, there was an easy blend of enthusiasm and social attunement. You opened by complimenting the bar choice, checked whether I’d been waiting too long, and even asked where you should sit - small moves that signaled care. We joked through the drink menu, you offered to pay, and you tossed quick compliments around (the bartender’s shirt got one). Most of what you shared was vividly personal. Emotional access felt readily available, like you were inviting me into your world instead of making me knock.
                         </p>

                         <p>
                            I noticed you lit up around the concrete and the lived: stories, people, sensory detail. When the conversation drifted into the abstract - opinions, frameworks, the “why” behind the “what” - your answers tightened and sometimes sounded a touch pre-loaded. Not evasive, just compact. It was as if the further we got from the human texture of things, the less oxygen the topic had for you.
                         </p>

                         <div className="pl-6 border-l-2 border-accent/20 my-8 py-2 italic bg-accent/5">
                            "I found myself waiting for the moment it would turn from “what you feel” to “what you think.” I wanted to hear your angle when stakes or disagreement show up... That moment didn’t fully arrive."
                         </div>

                         <p>
                             On the body-language front, you were animated and expressive. You speak with your hands, hold steady eye contact, and track with thoughtful nods - the vibe of “I’m here with you.” You gave the impression of active listening and kept the energy buoyant.
                         </p>

                         <p>
                             In terms of conversational flow, the rhythm was fairly smooth. You have a reliable move of tossing the conversation back with a return question; it kept things flowing whether you were genuinely curious, politely maintaining pace, or just landing the plane on your own thought. Occasionally, it felt like that caretaking impulse sanded off the edge where your more unfiltered opinions might have appeared.
                         </p>
                         
                         <p>
                             Overall, you come across as generous, socially intelligent, and clearly tuned to the comfort of the person across from you. That makes you easy to be around - and it also means your own sharper viewpoints can stay backstage if you sense they might disrupt the harmony. I left feeling warm, welcomed, and genuinely curious to meet the version of you that surfaces when you have a strong stance.
                         </p>
                    </div>
                </div>

                 {/* Stamp */}
                <div className="absolute bottom-8 right-8 border-4 border-ink/10 text-ink/10 font-bold text-xl p-2 -rotate-12 pointer-events-none uppercase hidden md:block">
                    Confidential
                </div>

            </div>
            
            {/* Decorative items behind */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-ink/10 -z-10 rotate-[-2deg] bg-paper"></div>
        </div>
      </div>
    </section>
  );
};

export default SampleReport;