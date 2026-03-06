import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "ASK Academy transformed my son's approach to learning. He went from memorizing to truly understanding concepts.",
      author: "Parent of Grade IX Student",
      school: "CBSE Board"
    },
    {
      text: "The focus on Higher Order Thinking Skills helped me crack my entrance exams with confidence. Highly recommended!",
      author: "Former Student",
      school: "Now at IIT Madras"
    },
    {
      text: "Baalam is a wonderful place for early education. The teachers are caring and the curriculum is perfectly balanced.",
      author: "Parent of Nursery Student",
      school: "Baalam Academy"
    }
  ];

  return (
    <section id="testimonials" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 heading-serif leading-tight mb-6 sm:mb-8">
            Testimonials
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            Real stories from parents and students who have experienced the ASK & BAALAM difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-100 relative group hover:shadow-2xl transition-all duration-500">
              <Quote className="text-orange-50 absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10 w-16 h-16 sm:w-20 sm:h-20 group-hover:text-orange-100 transition-colors" />
              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 sm:mb-10 md:mb-12 relative z-10 italic heading-serif">
                "{t.text.replace(/ASK Academy/g, 'ASK ACADEMY').replace(/Baalam/g, 'BAALAM')}"
              </p>
              <div className="relative z-10 pt-6 sm:pt-8 border-t border-slate-50">
                <p className="font-bold text-slate-900 text-base sm:text-lg">{t.author}</p>
                <p className="text-orange-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-2">{t.school.replace(/Baalam Academy/g, 'BAALAM ACADEMY')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
