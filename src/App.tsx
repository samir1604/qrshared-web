import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Questionnaire } from "./components/Questionnaire";
import { Footer } from "./components/Footer";
import { DownloadSection } from "./components/DownloadSection";
import { UserGuide } from "./components/UserGuide";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <UserGuide />
        <Questionnaire />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
