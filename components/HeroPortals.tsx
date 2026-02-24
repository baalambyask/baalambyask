
import React, { useState } from 'react';
import { ArrowRight, GraduationCap, School } from 'lucide-react';

interface HeroPortalsProps {
  onNavigate: (path: string) => void;
}

const HeroPortals: React.FC<HeroPortalsProps> = ({ onNavigate }) => {
  const [hovered, setHovered] = useState<'ask' | 'baalam' | null>(null);

  const ENROLL_LINK = "https://forms.gle/C6t5knPJiaoqwKXA7";

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row bg-slate-950">
      {/* ASK Side */}
      <div 
        className={`relative flex-1 flex flex-col items-center justify-center transition-all duration-500 ease-out cursor-pointer group overflow-hidden `}
        onMouseEnter={() => setHovered('ask')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => onNavigate('ask')}
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.theconversation.com/files/49135/original/22qc7r28-1400667334.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip" 
            className={`w-full h-full object-cover transition-transform duration-500 `}
            alt="ASK"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition-colors duration-500" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-3xl flex items-center justify-center p-6 shadow-2xl shadow-orange-500/30 transition-all duration-500 group-hover:scale-105">
            <img src="public/images/ask.jpeg" alt="ASK" className="w-full h-full object-contain" />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-5xl md:text-8xl font-bold text-white heading-serif tracking-tighter">ASK <br></br>ACADEMY</h2>
            <p className="text-orange-500 text-sm md:text-lg font-bold tracking-[0.4em] uppercase">Secondary Excellence</p>
          </div>
        </div>
      </div>

      {/* BAALAM Side */}
      <div 
        className={`relative flex-1 flex flex-col items-center justify-center transition-all duration-500 ease-out cursor-pointer group overflow-hidden border-t md:border-t-0 md:border-l border-white/10`}
        onMouseEnter={() => setHovered('baalam')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => onNavigate('ballam')}
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.freepik.com/free-photo/set-children-toys_93675-130772.jpg?semt=ais_user_personalization&w=740&q=80" 
            className={`w-full h-full object-cover transition-transform duration-500`}
            alt="BAALAM"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition-colors duration-500" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-3xl flex items-center justify-center p-6 shadow-2xl shadow-blue-500/30 transition-all duration-500 group-hover:scale-105">
            <img src="public/images/baalam.jpeg" alt="BAALAM" className="w-full h-full object-contain" />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-5xl md:text-8xl font-bold text-white heading-serif tracking-tighter">BAALAM<br></br>PLAY SCHOOL</h2>
            <p className="text-blue-500 text-sm md:text-lg font-bold tracking-[0.4em] uppercase">Foundational Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPortals;
