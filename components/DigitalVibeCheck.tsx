import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import { getDigitalVibeCheck } from '../services/geminiService';
import { ReadingState, VibeResponse } from '../types';

const DigitalVibeCheck: React.FC = () => {
  const [input, setInput] = useState('');
  const [state, setState] = useState<ReadingState>(ReadingState.IDLE);
  const [result, setResult] = useState<VibeResponse | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    
    setState(ReadingState.READING);
    try {
      const data = await getDigitalVibeCheck(input);
      setResult(data);
      setState(ReadingState.COMPLETE);
    } catch (e) {
      setState(ReadingState.ERROR);
    }
  };

  return (
    <section id="vibe-check" className="py-24 bg-ink text-paper relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">The Digital Vibe Check</h2>
          <p className="text-lg text-paper/70">
            Curious? Get a micro-dose of our service right now. Type in your go-to introduction, bio, or a text you sent recently. Our AI model, trained on our specific feedback philosophy, will read you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Input Side */}
          <div className="bg-paper/5 border border-paper/10 p-8 rounded-xl flex flex-col gap-4">
            <label className="text-xs uppercase tracking-widest text-accent font-bold">Your Input</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. 'Hey, I'm Alex. I like hiking and craft beer.' or 'Just checking in!'"
              className="w-full h-48 bg-transparent border border-paper/20 rounded-lg p-4 text-lg focus:border-accent focus:outline-none resize-none placeholder-paper/20 transition-colors"
              disabled={state === ReadingState.READING}
            />
            <button
              onClick={handleAnalyze}
              disabled={state === ReadingState.READING || !input.trim()}
              className={`mt-auto w-full py-4 rounded-lg font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-all ${
                state === ReadingState.READING 
                  ? 'bg-paper/10 cursor-wait text-paper/50' 
                  : 'bg-accent hover:bg-accent/90 text-paper'
              }`}
            >
              {state === ReadingState.READING ? (
                <>Reading the room <RefreshCw className="animate-spin h-4 w-4"/></>
              ) : (
                <>Analyze Me <Sparkles className="h-4 w-4" /></>
              )}
            </button>
          </div>

          {/* Output Side */}
          <div className="bg-paper text-ink p-8 rounded-xl relative flex flex-col min-h-[320px]">
            {state === ReadingState.IDLE && (
              <div className="flex-1 flex flex-col items-center justify-center opacity-40">
                <Sparkles className="h-12 w-12 mb-4 text-ink/30" />
                <p className="font-serif italic text-xl">"Waiting for your signal..."</p>
              </div>
            )}

            {state === ReadingState.READING && (
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mb-6"></div>
                <p className="font-serif italic text-xl animate-pulse">Getting trusted opinions...</p>
              </div>
            )}

            {state === ReadingState.COMPLETE && result && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col h-full">
                 <div className="flex justify-between items-start mb-6 border-b border-ink/10 pb-4">
                    <div>
                        <span className="text-xs uppercase tracking-widest text-ink/50">Detected Vibe</span>
                        <h3 className="text-2xl font-serif italic text-accent">{result.vibe}</h3>
                    </div>
                 </div>
                 <div className="flex-1 flex items-center">
                    <p className="text-lg md:text-xl leading-relaxed font-medium">
                        "{result.analysis}"
                    </p>
                 </div>
                 <div className="mt-6 text-xs text-ink/40 text-center font-sans uppercase tracking-widest">
                    • Not a human replacement ;)
                 </div>
              </div>
            )}
             {state === ReadingState.ERROR && (
              <div className="flex-1 flex flex-col items-center justify-center text-accent">
                <p>The spirits are silent. Try again.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalVibeCheck;