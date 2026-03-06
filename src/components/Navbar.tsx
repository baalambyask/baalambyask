

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onNavigateToSection?: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Check if it's a section link (has a #)
    if (href.startsWith('#') && onNavigateToSection) {
      onNavigateToSection(href.substring(1));
    } else if (href === 'home' || href === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === 'ask' || href === '/ask') {
      navigate('/ask');
    } else if (href === 'ballam' || href === '/ballam') {
      navigate('/ballam');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 lg:h-24 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 sm:gap-4 cursor-pointer group flex-shrink-0"
          onClick={() => handleNavClick('home')}
        >

          <div className="flex flex-col min-w-0">
            <span className="text-sm sm:text-lg lg:text-xl font-bold text-white heading-serif leading-tight tracking-tight truncate sm:whitespace-normal">
              Attitude Skills Knowledge<br></br> Educational Society
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 lg:gap-">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label} 
              onClick={() => handleNavClick(link.href)}
              className={`text-xs font-bold uppercase tracking-widest transition-all relative py-2 text-slate-400 hover:text-white whitespace-nowrap`}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
          <a 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 lg:px-8 py-2 lg:py-3 bg-orange-600 text-white text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] rounded-full hover:bg-orange-500 transition-all flex items-center gap-2 shadow-lg shadow-orange-600/20 flex-shrink-0"
          >
            ADMISSIONS OPENED
          </a>
        </div>

        <button 
          className="lg:hidden p-2 text-white flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-white/10 px-6 py-12 flex flex-col gap-8 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label} 
              onClick={() => handleNavClick(link.href)}
              className={`text-xl font-bold uppercase tracking-widest text-left text-white`}
            >
              {link.label.toUpperCase()}
            </button>
          ))}

        </div>
      )}
    </nav>
  );
};

export default Navbar;
