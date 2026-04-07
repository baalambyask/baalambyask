import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigateToSection?: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  const navigate = useNavigate();

  const handleNavClick = (path: string, sectionId?: string) => {
    if (sectionId && onNavigateToSection) {
      onNavigateToSection(sectionId);
    } else if (path === '/ask') {
      navigate('/ask');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (path === '/ballam') {
      navigate('/ballam');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 md:py-20 border-t border-white/5 relative overflow-hidden w-full">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-footer" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 md:gap-20 mb-2">
          <div className="space-y-8 sm:space-y-10">
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">

              <div className="flex flex-col min-w-0">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white heading-serif leading-tight tracking-tight">Attitude Skills Knowledge<br></br> Educational Society</span>
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-medium text-slate-500">
              Nurturing inner strength and academic excellence since 2007. Dedicated to foundational and high-school success through structured pedagogical frameworks.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://www.facebook.com/profile.php?id=61579490459770" className="w-10 sm:w-12 h-10 sm:h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group shadow-2xl flex-shrink-0"><Facebook size={18} className="md:w-5 md:h-5 text-slate-400 group-hover:text-white transition-colors" /></a>
              <a href="https://www.youtube.com/@baalambyaskeds" className="w-10 sm:w-12 h-10 sm:h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all group shadow-2xl flex-shrink-0"><Youtube size={18} className="md:w-5 md:h-5 text-slate-400 group-hover:text-white transition-colors" /></a>
              <a href="https://www.instagram.com/baalam.byaskeds?utm_source=qr&igsh=cm56eDB5cjl0eDEy" className="w-10 sm:w-12 h-10 sm:h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all group shadow-2xl flex-shrink-0"><Instagram size={18} className="md:w-5 md:h-5 text-slate-400 group-hover:text-white transition-colors" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 sm:mb-8 lg:mb-10 uppercase tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] text-[9px] sm:text-[10px]">Quick Links</h4>
            <ul className="space-y-4 sm:space-y-5 lg:space-y-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
              <li><button onClick={() => handleNavClick('/', 'about')} className="hover:text-orange-500 transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavClick('/', 'teachers')} className="hover:text-orange-500 transition-colors">Our Team</button></li>
              <li><button onClick={() => handleNavClick('/', 'contact')} className="hover:text-orange-500 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 sm:mb-8 lg:mb-10 uppercase tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] text-[9px] sm:text-[10px]">Programs</h4>
            <ul className="space-y-4 sm:space-y-5 lg:space-y-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
              <li><button onClick={() => handleNavClick('/ask')} className="hover:text-orange-500 transition-colors">ASK ACADEMY (VII-X)</button></li>
              <li><button onClick={() => handleNavClick('/ballam')} className="hover:text-orange-500 transition-colors">BAALAM PRESCHOOL</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 sm:mb-8 lg:mb-10 uppercase tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] text-[9px] sm:text-[10px]">Registered Office</h4>
            <ul className="space-y-4 sm:space-y-6 lg:space-y-8 text-xs sm:text-sm font-bold">
              <li className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                <div className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10 flex-shrink-0">
                  <MapPin size={18} className="md:w-6 md:h-6 text-orange-600" />
                </div>
                <span className="leading-relaxed text-slate-400 text-xs sm:text-sm">Address 1-9-295/13/A/4 <br></br>Vidyanagar, Hyderabad,<br />Telangana, India - 500044</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10 flex-shrink-0">
                  <Phone size={18} className="md:w-6 md:h-6 text-orange-600" />
                </div>
                <span className="text-slate-400 text-xs sm:text-sm">(+91) 92465 43851</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10 flex-shrink-0">
                  <Mail size={18} className="md:w-6 md:h-6 text-orange-600" />
                </div>
                <span className="text-slate-400 text-xs sm:text-sm">askacademy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className=" border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© 2026 ASK & BAALAM EDUCATIONAL SOCIETIES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
