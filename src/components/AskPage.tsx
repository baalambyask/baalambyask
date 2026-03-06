import React from 'react';
import { 
  ChevronLeft,
  Award,
  ShieldCheck, 
  Users, 
  TrendingUp,
  Flame,
  Target,
  Lightbulb,
  CheckCircle2,
  Rocket,
  Zap
} from 'lucide-react';

const AskPage = ({ onBack }) => {
  const ENROLL_LINK = "https://forms.gle/UgEE6mWxR5pF8PyZA";

  const learningPhases = [
    {
      name: "SOUMYAA",
      subtitle: "Launch Phase",
      grade: "Classes VI & VII",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-400",
      description: "Foundation Building & Interest Development",
      focus: "Improve Attention & Focus, Strengthen Fundamentals, Build Confidence",
      highlights: ["Interest Building", "Attention Focus", "Fundamentals Strong", "Confidence Boost"]
    },
    {
      name: "SAADHANA",
      subtitle: "Acceleration Phase",
      grade: "Classes VIII & IX",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-400",
      description: "IIT Foundation Integration & Discipline Building",
      focus: "IIT Foundation, Steady Pace, Self-Discipline, SMART Goals",
      highlights: ["IIT Foundation", "Self-Discipline", "Goal Setting", "Pace Control"]
    },
    {
      name: "SARVAGJNA",
      subtitle: "Excellence Phase",
      grade: "Class X",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-400",
      description: "Board Mastery & Advanced Preparation",
      focus: "Concept Mastery, Board Coverage, Advanced Level, Intermediate Ready",
      highlights: ["Concept Master", "Board Coverage", "Advanced Level", "Intermediate Ready"]
    }
  ];

  const whyAsk = [
    { icon: <Target size={28} />, title: "Results-Driven Approach", description: "Structured curriculum focused on measurable student outcomes" },
    { icon: <Users size={28} />, title: "Expert Faculty", description: "Certified educators with 15+ years in higher secondary education" },
    { icon: <TrendingUp size={28} />, title: "Progress Tracking", description: "Real-time monitoring with monthly reports and parent meetings" },
    { icon: <Flame size={28} />, title: "HOTS Development", description: "Higher Order Thinking Skills through application-based learning" },
    { icon: <Award size={28} />, title: "Track Record", description: "18+ years of excellence in board examination results" },
    { icon: <ShieldCheck size={28} />, title: "Safe Learning", description: "Disciplined environment with structured daily routines" }
  ];

  const features = [
    { icon: <Rocket size={28} />, title: "Rigorous Curriculum", description: "Aligned with SSC, CBSE & ICSE boards with advanced concepts" },
    { icon: <Zap size={28} />, title: "Interactive Sessions", description: "Problem-solving through classroom discussions and activities" },
    { icon: <CheckCircle2 size={28} />, title: "Regular Tests", description: "Weekly tests to assess progress and identify weak areas" },
    { icon: <Lightbulb size={28} />, title: "Doubt Solving", description: "One-on-one sessions for conceptual clarity" },
    { icon: <Users size={28} />, title: "Small Batches", description: "Personalized attention with low teacher-to-student ratio" },
    { icon: <Award size={28} />, title: "Certified Curriculum", description: "Recognized and approved by educational boards" }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden pt-14 sm:pt-16 md:pt-20 lg:pt-24">
      {/* TOP ANNOUNCEMENT */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-orange-600 to-orange-700 text-white py-2 sm:py-3 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="text-xs sm:text-sm font-semibold">🎓 Admissions Open for 2026-27</div>
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white font-bold text-[10px] sm:text-xs rounded-full flex-shrink-0">
          Limited Seats Available
        </div>
      </div>

      <main>
        {/* HERO SECTION */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors font-bold text-xs sm:text-sm mb-6 sm:mb-8"
            >
              <ChevronLeft size={16} className="md:w-5 md:h-5" /> Back to Home
            </button>

            {/* Logo & Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
              <div className="w-full lg:w-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-orange-600 leading-tight mb-3 sm:mb-4">
                  ASK<span className="text-orange-700"> Academy</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 font-medium max-w-2xl">
                  Building higher order thinking skills for Classes VI-X. Structured academic excellence since 2007.
                </p>
              </div>
              <div className="hidden lg:block text-right flex-shrink-0">
                <div className="inline-flex flex-col items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-orange-50 border-2 border-orange-600 rounded-2xl">
                  <span className="text-[9px] sm:text-[10px] font-bold text-orange-600 uppercase tracking-widest">Admissions Open</span>
                  <span className="text-lg sm:text-2xl font-black text-blue-700">27.03.2026</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 my-8 sm:my-10 md:my-12">
              <a 
                href={ENROLL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-transform shadow-lg text-xs sm:text-sm uppercase tracking-widest"
              >
                Apply Now
              </a>
              <a 
                href="tel:9246543851"
                className="px-6 sm:px-8 py-3 sm:py-4 border-3 border-orange-600 text-orange-600 font-black rounded-2xl hover:bg-orange-50 transition-colors text-xs sm:text-sm uppercase tracking-widest"
              >
                Call Us
              </a>
            </div>

            {/* Key Stats Banner */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 bg-orange-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
              <div className="text-center min-w-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-orange-600 mb-1 sm:mb-2 break-words">18+</div>
                <p className="text-[8px] sm:text-[9px] md:text-xs font-bold text-slate-600 uppercase tracking-wider md:tracking-widest">Years<br className="sm:hidden" /> Experience</p>
              </div>
              <div className="text-center border-l border-r border-orange-600/20 min-w-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-orange-600 mb-1 sm:mb-2 break-words">500+</div>
                <p className="text-[8px] sm:text-[9px] md:text-xs font-bold text-slate-600 uppercase tracking-wider md:tracking-widest">Alumni<br className="sm:hidden" /> Success</p>
              </div>
              <div className="text-center min-w-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-orange-600 mb-1 sm:mb-2">3</div>
                <p className="text-[8px] sm:text-[9px] md:text-xs font-bold text-slate-600 uppercase tracking-wider md:tracking-widest">Structured<br className="sm:hidden" /> Phases</p>
              </div>
            </div>
          </div>
        </section>

        {/* LEARNING PHASES SECTION */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-orange-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-orange-600 mb-2 sm:mb-4">Our Learning Framework</h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">Three structured phases designed for comprehensive development</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {learningPhases.map((phase, idx) => (
                <div 
                  key={idx}
                  className={`${phase.bgColor} border-3 sm:border-4 ${phase.borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
                >
                  <div className="relative z-10">
                    {/* Grade & Subtitle */}
                    <div className="mb-4 sm:mb-6">
                      <p className="text-xs sm:text-[9px] md:text-sm font-bold text-slate-600 uppercase tracking-wider md:tracking-widest mb-1 sm:mb-2">{phase.grade}</p>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-orange-600 mb-2">{phase.name}</h3>
                      <p className="text-[8px] sm:text-[9px] md:text-xs font-bold text-blue-700 uppercase tracking-wider md:tracking-widest">{phase.subtitle}</p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg font-bold text-slate-700 mb-2 sm:mb-3">{phase.description}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6">{phase.focus}</p>
                    
                    {/* Highlights */}
                    <div className="space-y-2 sm:space-y-3 pt-4 sm:pt-4 border-t border-orange-600/20">
                      {phase.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-orange-600 text-xs sm:text-sm font-bold">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                          <span className="break-words">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ASK SECTION */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-orange-600 mb-2 sm:mb-4">Why Choose ASK?</h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">Proven excellence in secondary education for nearly two decades</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {whyAsk.map((item, idx) => (
                <div key={idx} className="p-6 sm:p-8 border-2 border-orange-100 rounded-2xl hover:border-blue-600 hover:shadow-lg transition-all group">
                  <div className="text-orange-600 mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors">{React.cloneElement(item.icon, { size: 24 })}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-black text-orange-600 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-orange-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-orange-600 mb-2 sm:mb-4">Learning Features</h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">Comprehensive approach to student success</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="p-6 sm:p-8 bg-white border-2 border-orange-100 rounded-2xl hover:border-blue-600 hover:shadow-lg transition-all group">
                  <div className="text-blue-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">{React.cloneElement(feature.icon, { size: 24 })}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-black text-orange-600 mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto bg-orange-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center border-3 sm:border-4 border-orange-600">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-orange-600 mb-2 sm:mb-4">Ready to Excel in Your Academics?</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed font-medium">
              Join ASK Academy and develop the critical thinking skills needed for board success and beyond.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <a 
                href={ENROLL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 sm:py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-transform shadow-xl text-xs sm:text-sm md:text-base uppercase tracking-wider md:tracking-widest"
              >
                Apply Now - Limited Seats
              </a>
              <div className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider md:tracking-widest">
                 Vidyanagar, Hyderabad |  +91 92465 43851
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AskPage;