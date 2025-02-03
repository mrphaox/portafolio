'use client'
import Banner from '@/components/Banner';
import Aboutme from '@/components/Aboutme';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import { ThemeProvider } from '@/context/ThemeProvider';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useState } from 'react';
import Preloader from '@/components/Preloader';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <ThemeProvider>
      {!loadingComplete && <Preloader onAnimationComplete={() => setLoadingComplete(true)} />}
      {loadingComplete && (
        <main className="w-full bg-sky-950 text-gray-300 px-4">
          <div className="max-w-screen mx-auto lg:pt-10">
          <ParticlesBackground />
            <ThemeSwitcher />
            <Banner />
            <Aboutme />
            <Experience />
            <Education />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </main>
      )}
    </ThemeProvider>
  );
}
