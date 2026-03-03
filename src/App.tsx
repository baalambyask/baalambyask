
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroPortals from './components/HeroPortals';
import AskPage from './components/AskPage';
import BallamPage from './components/BallamPage';
import AboutSection from './components/AboutSection';
import JobsSection from './components/JobsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResultsSection from './components/ResultsSection';
import TeachersSection from './components/TeachersSection';
import FaqSection from './components/FaqSection';
import TestimonialsSection from './components/TestimonialsSection';
import BrochureSection from './components/BrochureSection';
import AiAdvisor from './components/AiAdvisor';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroPortals />
      <AboutSection />
      {/* <ResultsSection /> */}
      {/* <BrochureSection /> */}
      <TeachersSection />
      <TestimonialsSection />
      {/* <FaqSection /> */}
      {/* <AiAdvisor /> */}
      {/* <JobsSection /> */}
      <ContactSection />
    </>
  );
};

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateToSection = (sectionId: string) => {
    // If not on home, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 96; // navbar height
          window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 96; // navbar height
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    }
  };    

  // make sure every route change starts at top of page
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleBack = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative text-slate-950 selection:bg-orange-600/10 font-sans">
      <Navbar onNavigateToSection={handleNavigateToSection} />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ask" element={<AskPage onBack={handleBack} />} />
          <Route path="/ballam" element={<BallamPage onBack={handleBack} />} />
        </Routes>
      </main>
      <Footer onNavigateToSection={handleNavigateToSection} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
