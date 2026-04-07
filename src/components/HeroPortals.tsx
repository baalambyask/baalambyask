import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, GraduationCap, School } from 'lucide-react';

const HeroPortals: React.FC = () => {
  const [hovered, setHovered] = useState<'ask' | 'baalam' | null>(null);
  const navigate = useNavigate();

  const BAALAM_ENROLL_LINK = "https://forms.gle/C6t5knPJiaoqwKXA7";
  const ASK_ENROLL_LINK = "https://forms.gle/UgEE6mWxR5pF8PyZA";

  return (
    <section className="relative w-full min-h-screen md:h-screen overflow-hidden flex flex-col md:flex-row bg-slate-950 pt-16 sm:pt-20 md:pt-0">
      {/* ASK Side */}
      <div 
        className={`relative flex-1 flex flex-col items-center justify-center transition-all duration-500 ease-out cursor-pointer group overflow-hidden w-full md:min-h-screen`}
        onMouseEnter={() => setHovered('ask')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => navigate('/ask')}
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
        
        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 px-4 py-8 sm:py-10">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-white rounded-2xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center p-6 shadow-2xl shadow-orange-500/30 transition-all duration-500 group-hover:scale-105 flex-shrink-0">
            <img src="images/ask.jpeg" alt="ASK" className="w-full h-full object-contain" />
          </div>
          <div className="text-center space-y-1 sm:space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white heading-serif tracking-tight whitespace-nowrap">
              ASK ACADEMY
            </h2>
            <p className="text-orange-500 text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] uppercase">High School Excellence</p>

            <a
              href={ASK_ENROLL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
            >
              Enroll Now <ArrowRight size={18}/>
            </a>
          </div>
        </div>
      </div>

      {/* BAALAM Side */}
      <div 
        className={`relative flex-1 flex flex-col items-center justify-center transition-all duration-500 ease-out cursor-pointer group overflow-hidden w-full md:min-h-screen border-t md:border-t-0 md:border-l border-white/10`}
        onMouseEnter={() => setHovered('baalam')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => navigate('/ballam')}
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

        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 px-4 py-8 sm:py-10">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-white rounded-2xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center p-6 shadow-2xl shadow-blue-500/30 transition-all duration-500 group-hover:scale-105 flex-shrink-0">
            <img src="images/baalam.jpeg" alt="BAALAM" className="w-full h-full object-contain" />
          </div>
          <div className="text-center space-y-1 sm:space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white heading-serif tracking-tight whitespace-nowrap">
              BAALAM PRE SCHOOL
            </h2>
            <p className="text-green-500 text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] uppercase">Foundational Excellence</p>

            <a
              href={BAALAM_ENROLL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Enroll Now <ArrowRight size={18}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPortals;