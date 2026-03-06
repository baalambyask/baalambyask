
import React from 'react';
import { PROGRAMS } from '../constants';
import { ChevronRight, BookOpen, ArrowRight } from 'lucide-react';

const BrochureSection: React.FC = () => {
  return (
    <section id="brochure" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 md:mb-24 lg:mb-32 gap-8 sm:gap-10 md:gap-12">
          <div className="max-w-3xl">
            <span className="text-orange-600 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-4 sm:mb-6 block">Our Curriculum</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 heading-serif leading-tight mb-6 sm:mb-8">
              Academic Roadmap <span className="text-slate-300 font-sans text-2xl sm:text-3xl md:text-4xl font-light italic">(Grades VII-X)</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
              A structured roadmap designed to transition students from core concepts to global leadership through inquiry and HOTS development.
            </p>
          </div>
          <button className="group flex items-center gap-3 sm:gap-4 text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-900 hover:text-orange-600 transition-colors whitespace-nowrap">
            Full Curriculum <ArrowRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-3 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
          {PROGRAMS.map((program, idx) => (
            <div 
              key={program.id} 
              className="bg-white p-8 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group cursor-pointer flex flex-col justify-between transition-all duration-500 hover:shadow-2xl"
            >
              <div>
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-slate-50 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 md:mb-10 text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-600 transition-all duration-500 flex-shrink-0">
                  <BookOpen size={28} className="md:w-10 md:h-10" />
                </div>
                <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-slate-100 text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-8 text-slate-500">
                  Grade {program.grade}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-slate-900 heading-serif group-hover:text-orange-600 transition-colors leading-tight">{program.title}</h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 font-medium">
                  {program.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 sm:pt-8 md:pt-10 border-t border-slate-50">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em]">
                  Phase {idx + 1}
                </span>
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  <ChevronRight size={28} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
