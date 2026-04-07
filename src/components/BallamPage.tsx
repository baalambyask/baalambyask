import React, { useState } from 'react';
import {
  ChevronLeft,
  Award,
  ShieldCheck,
  Users,
  Tv,
  Wind,
  Camera,
  Heart,
  Music,
  CheckCircle2,
  Play,
  Zap,
  X
} from 'lucide-react';

const BallamPage = ({ onBack }) => {
  const ENROLL_LINK = "https://forms.gle/C6t5knPJiaoqwKXA7";
  const [selectedLevel, setSelectedLevel] = useState(null);

  const schoolLevels = [
    {
      name: "Playgroup",
      age: "2-3 Years",
      color: "from-pink-300 to-rose-200",
      borderColor: "border-rose-400",
      bgColor: "bg-rose-50",
      icon: "🎨",
      description: "Social & Sensory Development",
      focus: "Play-based exploration and bonding"
    },
    {
      name: "Nursery",
      age: "3-4 Years",
      color: "from-amber-300 to-orange-200",
      borderColor: "border-orange-400",
      bgColor: "bg-orange-50",
      icon: "🎭",
      description: "Language & Creative Skills",
      focus: "Phonics and self-expression"
    },
    {
      name: "Pre-Primary 1",
      age: "4-5 Years",
      color: "from-sky-300 to-blue-200",
      borderColor: "border-blue-400",
      bgColor: "bg-blue-50",
      icon: "🔬",
      description: "Cognitive & Math Foundation",
      focus: "Logical thinking and problem-solving"
    },
    {
      name: "Pre-Primary 2",
      age: "5-6 Years",
      color: "from-emerald-300 to-green-200",
      borderColor: "border-green-400",
      bgColor: "bg-green-50",
      icon: "🎓",
      description: "School Readiness",
      focus: "Advanced literacy and discipline"
    }
  ];

  const approaches = [
    { icon: <Heart size={28} />, title: "Screen-Free Zone", description: "No to TVs or Mobile Screens - No to Digital addiction" },
    { icon: <Play size={28} />, title: "Play-Based Learning", description: "Every concept taught through games and activities" },
    { icon: <CheckCircle2 size={28} />, title: "NEP 2020 Aligned", description: "Promotes values, creative thinking & citizenship" },
    { icon: <Music size={28} />, title: "Holistic Development", description: "Balance of academics, arts, and physical education" },
    { icon: <Zap size={28} />, title: "Trained Teachers & Support Staff", description: "Certified teachers in ECCE - Trained Staff" },
    { icon: <Users size={28} />, title: "Mother Teacher : Student Ratio  1:12", description: "The best among schools in Hyderabad for individual attention" },
  ];

  const whyChoose = [
    { icon: <CheckCircle2 size={28} />, title: "Curriculum NCF 2023 aligned with NEP 2020", description: "Holistic development for 21st century skills" },
    { icon: <Heart size={28} />, title: "Parent Involvement", description: "Whatsapp Reporting - Parent teacher meets / workshops every quarter." },
    { icon: <Award size={28} />, title: "Proven Track Record", description: "18 years of trusted education in Vidyanagar." },
    { icon: <ShieldCheck size={28} />, title: "Safety Protocols", description: "Medical-grade sanitization and hygiene standards." },
    { icon: <Wind size={28} />, title: "Clean Environment", description: "Mosquito mesh in all classes, Purified air & water facility." },
    { icon: <Camera size={28} />, title: "CCTV Transparency", description: "Real-Time monitoring of all classes and play areas 24x7." }

  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden pt-14 sm:pt-16 md:pt-20 lg:pt-24">
      {/* TOP ANNOUNCEMENT */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-[#0056b3] to-[#0080d4] text-white py-2 sm:py-3 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="text-xs sm:text-sm font-semibold">🎓 Admissions Open for 2026-27</div>
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#ff9500] text-white font-bold text-[10px] sm:text-xs rounded-full flex-shrink-0">
          Limited Seats Available
        </div>
      </div>

      <main>

        {/* HERO SECTION */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-1 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-[#0056b3] hover:text-[#003d85] transition-colors font-bold text-xs sm:text-sm mb-6 sm:mb-8"
            >
              <ChevronLeft size={16} className="md:w-5 md:h-5" /> Back to Home
            </button>

            {/* Logo & Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
              <div className="w-full lg:w-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0056b3] leading-tight mb-3 sm:mb-4">
                  Baalam Pre School<br></br><span className="text-[#0080d4]"></span>
                </h1>
                <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0056b] leading-tight mb-3 sm:mb-4">
                  Playgroup, Nursery, PP1 & PP2<br></br><span className="text-[#0080d4]"></span>
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 font-medium max-w-2xl">
                  Premium preschool education with play-based learning, safety, and holistic development. Our motto is "Nurturing the inner strength in every child".
                </p>
              </div>
              <div className="hidden lg:block text-right flex-shrink-0">
                <div className="inline-flex flex-col items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#e1f5fe] border-2 border-[#0056b3] rounded-2xl">
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#0056b3] uppercase tracking-widest">Admissions Open</span>
                  <span className="text-lg sm:text-2xl font-black text-[#ff9500]">04.03.2026</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 my-8 sm:my-10 md:my-12">
              <a
                href={ENROLL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#ff9500] text-white font-black rounded-2xl hover:scale-105 transition-transform shadow-lg text-xs sm:text-sm uppercase tracking-widest"
              >
                Apply Now
              </a>
              <a
                href="tel:8977224488"
                className="px-6 sm:px-8 py-3 sm:py-4 border-3 border-[#0056b3] text-[#0056b3] font-black rounded-2xl hover:bg-[#e1f5fe] transition-colors text-xs sm:text-sm uppercase tracking-widest"
              >
                Call Us
              </a>
            </div>


            {/* Key Stats Banner */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 bg-[#e1f5fe] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
              <div className="text-center min-w-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0056b3] mb-1 sm:mb-2 break-words">12:1</div>
                <p className="text-[8px] sm:text-[9px] md:text-xs font-bold text-slate-600 uppercase tracking-wider md:tracking-widest">Student<br className="sm:hidden" /> Ratio</p>
              </div>
              <div className="text-center border-l border-r border-[#0056b3]/20 min-w-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0056b3] mb-1 sm:mb-2">18</div>
                <p className="text-[8px] sm:text-[9px] md:text-xs font-bold text-slate-600 uppercase tracking-wider md:tracking-widest">Years<br className="sm:hidden" /> Trust</p>
              </div>
              <div className="text-center min-w-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0056b3] mb-1 sm:mb-2">0%</div>
                <p className="text-[8px] sm:text-[9px] md:text-xs font-bold text-slate-600 uppercase tracking-wider md:tracking-widest">Screen<br className="sm:hidden" /> Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE PUZZLE SECTION */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#0056b3] mb-4">Our Learning Programs</h2>
              <p className="text-slate-600 font-medium">Click on each section to explore what we offer for your child</p>
            </div>

            {/* Interactive Puzzle Image Container */}
            <div className="relative w-full">
              {/* Puzzle Image */}
              <img
                src="images/puzzle.png"
                alt="Learning Levels Puzzle"
                className="w-full h-auto object-cover"
              />

              {/* Invisible Clickable Zones - Positioned absolutely over the image */}
              {/* Playgroup - Top Left (25% of width, 50% of height) */}
              <div
                onClick={() => setSelectedLevel(0)}
                className="absolute top-0 left-0 w-1/2 h-1/2 cursor-pointer hover:bg-black/ transition-all duration-300"
                title="Click to view Playgroup details"
                style={{ pointerEvents: 'auto' }}
              />

              {/* Nursery - Top Right */}
              <div
                onClick={() => setSelectedLevel(1)}
                className="absolute top-0 right-0 w-1/2 h-1/2 cursor-pointer hover:bg-black/ transition-all duration-300"
                title="Click to view Nursery details"
                style={{ pointerEvents: 'auto' }}
              />

              {/* Pre-Primary 1 - Bottom Left */}
              <div
                onClick={() => setSelectedLevel(2)}
                className="absolute bottom-0 left-0 w-1/2 h-1/2 cursor-pointer hover:bg-black/ transition-all duration-300"
                title="Click to view Pre-Primary 1 details"
                style={{ pointerEvents: 'auto' }}
              />

              {/* Pre-Primary 2 - Bottom Right */}
              <div
                onClick={() => setSelectedLevel(3)}
                className="absolute bottom-0 right-0 w-1/2 h-1/2 cursor-pointer hover:bg-black/ transition-all duration-300"
                title="Click to view Pre-Primary 2 details"
                style={{ pointerEvents: 'auto' }}
              />
            </div>
          </div>
        </section>


        {/*
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#e1f5fe]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0056b3] mb-2 sm:mb-4">Our Learning Levels</h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">Each stage is carefully designed for your child's growth</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {schoolLevels.map((level, idx) => (
                <div
                  key={idx}
                  className={`${level.bgColor} border-3 sm:border-4 ${level.borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
                >
                  {/* Gradient Background 
                  <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

                  <div className="relative z-10">
                    {/* Icon 
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">{level.icon}</div>

                    {/* Title & Age 
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0056b3] mb-1 sm:mb-2">{level.name}</h3>
                    <p className="text-[8px] sm:text-[9px] md:text-sm font-bold text-slate-500 uppercase tracking-wider md:tracking-widest mb-4 sm:mb-6">{level.age}</p>

                    {/* Description 
                    <p className="text-sm sm:text-base md:text-lg font-bold text-slate-700 mb-2 sm:mb-3">{level.description}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{level.focus}</p>

                    {/* Bottom Accent 
                    <div className="mt-4 sm:mt-6 flex items-center gap-2 text-[#0056b3] font-bold text-xs sm:text-sm">
                      <CheckCircle2 size={16} className="flex-shrink-0" /> Perfect for this age
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>  */}

        {/* TWO-COLUMN FEATURES */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
              {/* What's Our Approach? */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0056b3] mb-8 sm:mb-12">What's Our Approach?</h3>
                <div className="space-y-6 sm:space-y-8">
                  {approaches.map((item, idx) => (
                    <div key={idx} className="flex gap-4 sm:gap-6">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 flex-shrink-0 bg-[#e1f5fe] border-3 border-[#0056b3] rounded-2xl flex items-center justify-center text-[#0056b3]">
                        {React.cloneElement(item.icon, { size: 24 })}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base md:text-lg font-black text-slate-900 mb-1 sm:mb-2">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why PratiBaalam? */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0056b3] mb-8 sm:mb-12">Why Baalam?</h3>
                <div className="space-y-6 sm:space-y-8">
                  {whyChoose.map((item, idx) => (
                    <div key={idx} className="flex gap-4 sm:gap-6">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 flex-shrink-0 bg-[#ffcc00]/20 border-3 border-[#ffcc00] rounded-2xl flex items-center justify-center text-[#0056b3]">
                        {React.cloneElement(item.icon, { size: 24 })}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base md:text-lg font-black text-slate-900 mb-1 sm:mb-2">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY & NEP SECTION */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#0056b3] to-[#0080d4] text-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">Safety & Standards.</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Camera size={32} className="flex-shrink-0 text-[#ffcc00]" />
                  <div>
                    <p className="font-bold text-lg mb-1">Parents Whatsapp Community and Class wise group support</p>
                    {/* <p className="text-blue-100 text-sm">Monitor your child anytime via our secure parent portal</p> */}
                  </div>
                </li>
                <li className="flex gap-4">
                  <Wind size={32} className="flex-shrink-0 text-[#ffcc00]" />
                  <div>
                    <p className="font-bold text-lg mb-1">Medical-Grade Hygiene</p>
                    <p className="text-blue-100 text-sm">Air purifiers, sanitization, and mosquito mesh throughout</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 size={32} className="flex-shrink-0 text-[#ffcc00]" />
                  <div>
                    <p className="font-bold text-lg mb-1">NEP 2020 Compliant</p>
                    <p className="text-blue-100 text-sm">Curriculum aligned with National Education Policy</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center">
              <Award size={64} className="mx-auto text-[#ffcc00] mb-6" />
              <h4 className="text-2xl font-black mb-4">Certified Quality</h4>
              <p className="text-blue-100 text-sm leading-relaxed mb-8">
                Our curriculum combines Montessori principles with modern educational research, ensuring your child thrives socially, emotionally, and academically.
              </p>
            </div>
          </div>
        </section>


        {/* MODAL POPUP */}
        {selectedLevel !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedLevel(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-[#0056b3] text-white rounded-full flex items-center justify-center hover:bg-[#003d85] transition-colors shadow-lg"
              >
                <X size={24} />
              </button>

              {/* Modal Content */}
              <div className={`p-10 md:p-12 ${schoolLevels[selectedLevel].bgColor}`}>
                {/* Header */}
                <div className="mb-8">
                  <div className="text-6xl mb-4">{schoolLevels[selectedLevel].icon}</div>
                  <h2 className="text-5xl font-black text-[#0056b3] mb-2">{schoolLevels[selectedLevel].name}</h2>
                  <p className="text-xl font-bold text-slate-600 uppercase tracking-widest">{schoolLevels[selectedLevel].age}</p>
                </div>

                {/* Main Description */}
                <div className="space-y-6 border-t border-[#0056b3]/20 pt-8">
                  <div>
                    <h3 className="text-2xl font-black text-[#0056b3] mb-3">What We Focus On</h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">{schoolLevels[selectedLevel].description}</p>
                    <p className="text-base text-slate-600 leading-relaxed">{schoolLevels[selectedLevel].focus}</p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-black text-[#0056b3] mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {selectedLevel === 0 && (
                        <>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0056b3] mt-1 flex-shrink-0" />
                            <span className="text-slate-700 font-bold">Sensory exploration with educational toys and materials</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0056b3] mt-1 flex-shrink-0" />
                            <span className="text-slate-700 font-bold">Social bonding through group activities</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0056b3] mt-1 flex-shrink-0" />
                            <span className="text-slate-700 font-bold">Foundation for language and motor skills</span>
                          </li>
                        </>
                      )}
                      {selectedLevel === 1 && (
                        <>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0056b3] mt-1 flex-shrink-0" />
                            <span className="text-slate-700 font-bold">Phonics and early reading skills</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0056b3] mt-1 flex-shrink-0" />
                            <span className="text-slate-700 font-bold">Creative expression through art and music</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0056b3] mt-1 flex-shrink-0" />
                            <span className="text-slate-700 font-bold">Personal and social development</span>
                          </li>
                        </>
                      )}
                      {selectedLevel === 2 && (
                        <>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0056b3] mt-1 flex-shrink-0" />
                            <span className="text-slate-700 font-bold">Mathematics fundamentals and logic</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0056b3] mt-1 flex-shrink-0" />
                            <span className="text-slate-700 font-bold">Problem-solving through engaging activities</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0056b3] mt-1 flex-shrink-0" />
                            <span className="text-slate-700 font-bold">Scientific curiosity and exploration</span>
                          </li>
                        </>
                      )}
                      {selectedLevel === 3 && (
                        <>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0056b3] mt-1 flex-shrink-0" />
                            <span className="text-slate-700 font-bold">School-level reading and writing skills</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0056b3] mt-1 flex-shrink-0" />
                            <span className="text-slate-700 font-bold">Structured learning and discipline</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0056b3] mt-1 flex-shrink-0" />
                            <span className="text-slate-700 font-bold">Confidence building for school transition</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 border-t border-[#0056b3]/20">
                    <a
                      href={ENROLL_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-4 bg-[#0056b3] text-white font-black rounded-2xl text-center uppercase tracking-widest hover:bg-[#003d85] transition-all shadow-lg"
                    >
                      Enroll Your Child
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA SECTION */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto bg-[#e1f5fe] rounded-3xl p-12 text-center border-4 border-[#0056b3]">
            <h2 className="text-4xl font-black text-[#0056b3] mb-4">Ready to Transform Your Child's Early Years?</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Join Baalam and give your child the gift of play-based, science-backed education in a safe, nurturing environment.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={ENROLL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-[#ff9500] text-white font-black rounded-2xl hover:scale-105 transition-transform shadow-xl text-lg uppercase tracking-widest"
              >
                Apply Now - Limited Seats
              </a>
              <div className="text-sm font-bold text-slate-600 uppercase tracking-widest">
                Vidyanagar, Hyderabad |  8977224488
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BallamPage;