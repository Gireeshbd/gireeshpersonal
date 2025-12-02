import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkList } from './components/WorkList';
import { SkillsTicker } from './components/SkillsTicker';
import { About } from './components/About';
import { Contact } from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { ChatBot } from './components/ChatBot';
import { USER_IMAGE_SRC } from './constants';

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {isDesktop && <CustomCursor />}
      
      <Header />
      
      <main>
        <Hero userImage={USER_IMAGE_SRC} />
        <SkillsTicker />
        <WorkList />
        <About />
        <Contact />
      </main>

      <ChatBot />
    </div>
  );
}

export default App;