

import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, ExternalLink } from 'lucide-react';
import { useNavigate, useLocation, NavLink as RouterNavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ENROLL_LINK = "https://forms.gle/C6t5knPJiaoqwKXA7";
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => navigate('/')}
        >
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-1 shadow-2xl shadow-orange-500/20 transition-transform group-hover:scale-105">
            <img src="public/images/ask.jpeg" alt="ASK" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white heading-serif leading-none tracking-tight">
              ASK & BAALAM
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-orange-500 uppercase mt-1.5">
              EDUCATIONAL SOCIETIES
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <RouterNavLink to="/" end className={({ isActive }) => `text-xs font-bold uppercase tracking-widest transition-all relative py-2 ${isActive ? 'text-orange-500' : 'text-slate-400 hover:text-white'}`}>HOME</RouterNavLink>
          <a href="#about" className="text-xs font-bold uppercase tracking-widest transition-all relative py-2 text-slate-400 hover:text-white">ABOUT US</a>
          <a href="#teachers" className="text-xs font-bold uppercase tracking-widest transition-all relative py-2 text-slate-400 hover:text-white">OUR FACULTY</a>
          <a href="#contact" className="text-xs font-bold uppercase tracking-widest transition-all relative py-2 text-slate-400 hover:text-white">CONTACT</a>
          <RouterNavLink to="/ask" className={({ isActive }) => `text-xs font-bold uppercase tracking-widest transition-all relative py-2 ${isActive ? 'text-orange-500' : 'text-slate-400 hover:text-white'}`}>ASK ACADEMY</RouterNavLink>
          <RouterNavLink to="/baalam" className={({ isActive }) => `text-xs font-bold uppercase tracking-widest transition-all relative py-2 ${isActive ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}>BAALAM PRESCHOOL</RouterNavLink>
          <a 
            href={ENROLL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-orange-500 transition-all flex items-center gap-2 shadow-lg shadow-orange-600/20"
          >
            Enroll Now <ExternalLink size={14} />
          </a>
        </div>

        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-white/10 px-6 py-12 flex flex-col gap-8 shadow-2xl">
          <RouterNavLink to="/" end className={({ isActive }) => `text-xl font-bold uppercase tracking-widest text-left ${isActive ? 'text-orange-500' : 'text-white'}`}>HOME</RouterNavLink>
          <a href="#about" className="text-xl font-bold uppercase tracking-widest text-left text-white">ABOUT US</a>
          <a href="#teachers" className="text-xl font-bold uppercase tracking-widest text-left text-white">OUR FACULTY</a>
          <a href="#contact" className="text-xl font-bold uppercase tracking-widest text-left text-white">CONTACT</a>
          <RouterNavLink to="/ask" className={({ isActive }) => `text-xl font-bold uppercase tracking-widest text-left ${isActive ? 'text-orange-500' : 'text-white'}`}>ASK ACADEMY</RouterNavLink>
          <RouterNavLink to="/baalam" className={({ isActive }) => `text-xl font-bold uppercase tracking-widest text-left ${isActive ? 'text-blue-500' : 'text-white'}`}>BAALAM PRESCHOOL</RouterNavLink>
          <a 
            href={ENROLL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full px-8 py-5 bg-orange-600 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-2xl text-center flex items-center justify-center gap-2 shadow-xl shadow-orange-600/20"
          >
            Enroll Now <ExternalLink size={18} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
