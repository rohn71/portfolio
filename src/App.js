import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DoodleBackground from './components/DoodleBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ResumeSection from './components/ResumeSection';
import ConnectSection from './components/ConnectSection';

function App() {
  return (
    <div className="App">
      <DoodleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <ConnectSection />
      </main>
    </div>
  );
}

export default App;