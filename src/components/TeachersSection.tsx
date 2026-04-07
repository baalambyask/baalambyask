import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const TeachersSection: React.FC = () => {
  const teachers = [
    {
      name: 'V. Lakshmi Padmaja',
      qual: 'M.Sc., M.Ed.',
      specialization: 'Chemistry & ECCE Specialist',
      bio: 'Over 2 decades in IIT foundation coaching. Specialized in Early Childhood Care Education in M.Ed. from University College of Education, Osmania University',
      image: '/images/vlp.jpeg'
    },
    {
      name: 'Dr.Santa Deepthi Kuppa',
      qual: 'Ph.D.  LL.B ',
      specialization: 'Early Childhood Development',
      bio: 'Certified Neurodiversity Counselor.',
      image: '/images/sdk.jpeg'
    },
    {
      name: 'Dr. B. Ganesh Kumar',
      qual: 'Ph.D.',
      specialization: 'Physical Discipline & Growth',
      bio: '1st Psychologist for the Indian Men and Women Cricket Teams - Certified Yoga and Cognitive Behaviour Therapist.',
      image: '/images/bgk.jpeg'
    },
    {
      name: 'Siva S. Kasturi',
      qual: 'Ph.D. PGDM (HR & FIN) MBA (Systems) PMP',
      specialization: 'Physical Discipline & Growth',
      bio: 'Social Scientist & Public Policy Specialist, Management Consultant & Teacher.',
      image: '/images/ssk.jpeg'
    },
    {
      name: 'Maganti J Muthukumaraswamy',
      qual: 'M.A.  M.B.A. HR & Tech Management.',
      specialization: 'Physical Discipline & Growth',
      bio: 'Psychometrician and Management Professional with a passion for Water and Waste Management in civic bodies.',
      image: '/images/mjm.jpeg'
    }
  ];

  return (
    <section id="teachers" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 -skew-x-12 translate-x-1/2" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 heading-serif leading-tight mb-6 sm:mb-8">
            Our Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            Led by experienced educators committed to nurturing the next generation of leaders through rigorous pedagogy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
          {teachers.map((teacher, idx) => (
            <div key={idx} className="group bg-white rounded-2xl sm:rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
              
              {/* IMAGE */}
              <div className="w-full h-100 overflow-hidden rounded-xl mb-4">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 heading-serif">{teacher.name}</h3>
                
                <p className="text-orange-600 font-bold text-[13px] sm:text-[15px] tracking-[0.15em] sm:tracking-[0.2em]">
                  {/* {teacher.role} */}
                </p>

                <div className="flex items-center gap-3 text-slate-400 text-xs font-bold tracking-widest">
                  <div className="bg-white rounded-lg shadow-sm">
                  </div>
                  <span>{teacher.qual}</span>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {teacher.bio}
                </p>

                <div className="pt-6 sm:pt-8 border-t border-slate-200 flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
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