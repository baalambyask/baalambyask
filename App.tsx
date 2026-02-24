

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroPortals from './components/HeroPortals';
import AboutSection from './components/AboutSection';
import TeachersSection from './components/TeachersSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import BallamPage from './components/BallamPage';
import AskPage from './components/AskPage';

const Home = () => (
  <>
    <HeroPortals />
    <AboutSection />
    <TeachersSection />
    <TestimonialsSection />
    <ContactSection />
  </>
);

const App: React.FC = () => (
  <div className="min-h-screen relative text-slate-950 selection:bg-orange-600/10 font-sans">
    <BrowserRouter>
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/baalam" element={<BallamPage onBack={() => window.history.back()} />} />
          <Route path="/ask" element={<AskPage onBack={() => window.history.back()} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
