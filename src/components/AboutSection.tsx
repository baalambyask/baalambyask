
import React from 'react';
import { History, Users, BookOpen, GraduationCap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        {/* Founders Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 heading-serif leading-tight">
            About Us
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video md:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-10 md:mb-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] group">
              <img
                src="images/au.jpeg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Founders"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-6 sm:left-8 md:left-10 right-6 sm:right-8 md:right-10">

              </div>

            </div>
            <p className="text-black font-bold italic text-lg sm:text-xl md:text-2xl leading-tight heading-serif">
              Late VGK Murthy garu & V Sarada garu <br></br>The founding President and Vice President of ASK EDUCATIONAL SOCIETY
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-24 items-start">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <div>
              <div className="mt-8 sm:mt-10 md:mt-12 space-y-6 sm:space-y-8 md:space-y-10 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                <p>
                  ASK Educational Society was founded with a vision to strengthen students’ foundational learning and cultivate higher-order thinking skills. It began as an after-school program focused on helping students go beyond rote learning and develop analytical and problem-solving abilities.
                </p>
                <p>
                  VGK Murthy garu, an Electrical Engineer and former Deputy Director of DGE&T (Directorate General of Employment & Training), dedicated his career to skill development in India. After his retirement, he established an Industrial Training Institute (ITI) to support underserved communities by offering training in Electrical and Mechanical trades, empowering young people with employable skills.
                </p>
                <p>
                  Inspired by this commitment to education, VL Padmaja, a Chemistry educator with over a decade of experience in the corporate coaching sector, founded ASK Educational Society in 2007. She recognized that while the demand for engineering and professional careers in India was rapidly growing, many students lacked strong conceptual foundations at the high school level. ASK Academy was created to address this gap by nurturing higher-order thinking, conceptual clarity, and academic confidence among students.
                </p>
                <p>
                  Over the past 18 years, ASK Educational Society has guided students from more than 50 schools across SSC, CBSE, and ICSE boards. Many of these students have gone on to achieve success in their academic and professional journeys.
                </p>
                <p>
                  This journey also sparked a deeper realization for Padmaja: if strong academic foundations are crucial for success in high school, they must begin much earlier in a child’s educational journey…
                </p>
                <p>
                  Building on 18 years of academic excellence, “BAALAM” marks ASK Educational Society’s foray into Pre-School and Early Childhood Care and Education in 2026, extending its mission to nurture curiosity, confidence, and foundational learning from the earliest years.                </p>
                <p className="italic text-slate-500 border-l-8 border-orange-500/20 pl-6 sm:pl-8 py-3 sm:py-4">
                  "Building on 18 years of academic excellence, 'BAALAM' marks ASK EDUCATIONAL SOCIETY's foray into pre-school and Early Childhood Care and Education in 2026."
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:sticky lg:top-40">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">
              <h5 className="font-bold text-slate-900 mb-3 sm:mb-4 text-xl sm:text-2xl heading-serif">Academic Leadership</h5>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">V.Lakshmi Padmaja leads the Academic Team with Subject experts</p>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">
              <h5 className="font-bold text-slate-900 mb-3 sm:mb-4 text-xl sm:text-2xl heading-serif">Pedagogical Framework</h5>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">Focus on 'Higher Order Thinking Skills' (HOTS) and integrated IIT Foundation principles.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">
              <h5 className="font-bold text-slate-900 mb-3 sm:mb-4 text-xl sm:text-2xl heading-serif">Established 2007</h5>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">Building on 18 years of academic excellence in after-school education.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">
              <h5 className="font-bold text-slate-900 mb-3 sm:mb-4 text-xl sm:text-2xl heading-serif">Community Legacy</h5>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">Serving students from over 50 schools across SSC, CBSE, and ICSE boards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
