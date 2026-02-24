import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const TeachersSection: React.FC = () => {
  const teachers = [
    {
      name: 'V. Lakshmi Padmaja',
      role: 'Founder & Head of Academics',
      qual: 'M.Sc., M.Ed.',
      specialization: 'Chemistry & ECCE Specialist',
      bio: 'Over 15 years of experience in corporate coaching and early childhood education.',
      image: ''
    },
    {
      name: 'Dr. K. Santa Deepti',
      role: 'Institutional Advisor',
      qual: 'Ph.D.',
      specialization: 'Early Childhood Development',
      bio: 'Passionate educator with 2 decades of experience in preschool management.',
      image: ''
    },
    {
      name: 'Dr. B. Ganesh Kumar',
      role: 'Vice President',
      qual: 'Ph.D.',
      specialization: 'Physical Discipline & Growth',
      bio: 'Expert in integrating physical wellness with academic rigor.',
      image: ''
    }
  ];

  return (
    <section id="teachers" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 -skew-x-12 translate-x-1/2" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-24">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 heading-serif leading-tight mb-8">
            Our Faculty
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Led by experienced educators committed to nurturing the next generation of leaders through rigorous pedagogy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {teachers.map((teacher, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-slate-900 heading-serif">{teacher.name}</h3>
                <p className="text-orange-600 font-bold text-[15px] uppercase tracking-[0.2em]">{teacher.role}</p>
                <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <div className=" bg-white rounded-lg shadow-sm">
                  </div>
                  <span>{teacher.qual}</span>
                </div>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  {teacher.bio}
                </p>
                <div className="pt-8 border-t border-slate-200 flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
