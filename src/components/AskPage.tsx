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
  const ENROLL_LINK = "https://forms.gle/C6t5knPJiaoqwKXA7";

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
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden pt-24">
      {/* TOP ANNOUNCEMENT */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 px-6 flex justify-between items-center">
        <div className="text-sm font-semibold">🎓 Admissions Open for 2026-27</div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-full">
          Limited Seats Available
        </div>
      </div>

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-20 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors font-bold text-sm mb-8"
            >
              <ChevronLeft size={18} /> Back to Home
            </button>

            {/* Logo & Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-6xl md:text-7xl font-black text-orange-600 leading-tight mb-4">
                  ASK<span className="text-orange-700"> Academy</span>
                </h1>
                <p className="text-lg text-slate-600 font-medium max-w-2xl">
                  Building higher order thinking skills for Classes VI-X. Structured academic excellence since 2007.
                </p>
              </div>
              <div className="hidden lg:block text-right">
                <div className="inline-flex flex-col items-center gap-2 px-6 py-4 bg-orange-50 border-2 border-orange-600 rounded-2xl">
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Admissions Open</span>
                  <span className="text-2xl font-black text-blue-700">27.03.2026</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 my-10">
              <a 
                href={ENROLL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-transform shadow-lg text-sm uppercase tracking-widest"
              >
                Apply Now
              </a>
              <a 
                href="tel:8977224488"
                className="px-8 py-4 border-3 border-orange-600 text-orange-600 font-black rounded-2xl hover:bg-orange-50 transition-colors text-sm uppercase tracking-widest"
              >
                Call Us
              </a>
            </div>

            {/* Key Stats Banner */}
            <div className="grid grid-cols-3 gap-4 bg-orange-50 rounded-3xl p-8">
              <div className="text-center">
                <div className="text-3xl font-black text-orange-600 mb-2">18+</div>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="text-center border-l border-r border-orange-600/20">
                <div className="text-3xl font-black text-orange-600 mb-2">500+</div>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">Alumni Success</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-orange-600 mb-2">3</div>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">Structured Phases</p>
              </div>
            </div>
          </div>
        </section>

        {/* LEARNING PHASES SECTION */}
        <section className="py-20 px-6 bg-orange-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-orange-600 mb-4">Our Learning Framework</h2>
              <p className="text-slate-600 font-medium">Three structured phases designed for comprehensive development</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningPhases.map((phase, idx) => (
                <div 
                  key={idx}
                  className={`${phase.bgColor} border-4 ${phase.borderColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
                >
                  <div className="relative z-10">
                    {/* Grade & Subtitle */}
                    <div className="mb-6">
                      <p className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-2">{phase.grade}</p>
                      <h3 className="text-4xl font-black text-orange-600 mb-2">{phase.name}</h3>
                      <p className="text-xs font-bold text-blue-700 uppercase tracking-widest">{phase.subtitle}</p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg font-bold text-slate-700 mb-3">{phase.description}</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{phase.focus}</p>
                    
                    {/* Highlights */}
                    <div className="space-y-3 pt-4 border-t border-orange-600/20">
                      {phase.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-orange-600 text-sm font-bold">
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          {highlight}
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
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-orange-600 mb-4">Why Choose ASK?</h2>
              <p className="text-slate-600 font-medium">Proven excellence in secondary education for nearly two decades</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyAsk.map((item, idx) => (
                <div key={idx} className="p-8 border-2 border-orange-100 rounded-2xl hover:border-blue-600 hover:shadow-lg transition-all group">
                  <div className="text-orange-600 mb-4 group-hover:text-blue-700 transition-colors">{item.icon}</div>
                  <h3 className="text-xl font-black text-orange-600 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 px-6 bg-orange-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-orange-600 mb-4">Learning Features</h2>
              <p className="text-slate-600 font-medium">Comprehensive approach to student success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="p-8 bg-white border-2 border-orange-100 rounded-2xl hover:border-blue-600 hover:shadow-lg transition-all group">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="text-xl font-black text-orange-600 mb-3">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto bg-orange-50 rounded-3xl p-12 text-center border-4 border-orange-600">
            <h2 className="text-4xl font-black text-orange-600 mb-4">Ready to Excel in Your Academics?</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Join ASK Academy and develop the critical thinking skills needed for board success and beyond.
            </p>
            <div className="flex flex-col gap-4">
              <a 
                href={ENROLL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-transform shadow-xl text-lg uppercase tracking-widest"
              >
                Apply Now - Limited Seats
              </a>
              <div className="text-sm font-bold text-slate-600 uppercase tracking-widest">
                📍 Vidyanagar, Hyderabad | 📞 +91 92465 43851
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AskPage;