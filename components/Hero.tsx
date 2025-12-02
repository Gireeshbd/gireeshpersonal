import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  userImage: string;
}

export const Hero: React.FC<HeroProps> = ({ userImage }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950 flex flex-col justify-between pt-32 pb-12 px-4 md:px-12">
      
      {/* Background Noise/Grain & Gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2 mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      {/* Floating Elements */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-32 left-6 md:left-12 z-20 flex flex-col gap-2"
      >
         <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest border border-zinc-800 rounded-full px-3 py-1 w-fit bg-zinc-950/50 backdrop-blur-sm">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             Open to Work
         </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center md:block">
        
        {/* Layered Text & Image Container */}
        <div className="relative w-full max-w-[1600px] mx-auto h-[60vh] md:h-[70vh] flex flex-col justify-center">
            
            {/* Name - Top Layer */}
            <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[15vw] md:text-[13vw] font-black leading-[0.8] tracking-tighter text-zinc-100 mix-blend-exclusion relative z-30 text-center md:text-left select-none"
            >
                GIREESH
            </motion.h1>

            {/* Middle Section with Image overlapping */}
            <div className="relative flex flex-col md:flex-row justify-between items-center md:items-end w-full -mt-4 md:-mt-12">
                
                {/* Role Description */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="order-2 md:order-1 max-w-md text-center md:text-left mt-8 md:mt-0 p-4 md:p-0 backdrop-blur-sm md:backdrop-blur-none rounded-xl bg-zinc-950/50 md:bg-transparent border border-zinc-800 md:border-none"
                >
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-2">AI Automation Engineer</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                        Transforming chaotic workflows into elegant, automated systems using <span className="text-zinc-200 font-bold">LLMs</span> and <span className="text-zinc-200 font-bold">Python</span>.
                    </p>
                </motion.div>

                {/* Name - Bottom Layer (Last Name) */}
                <motion.h1 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="order-1 md:order-2 text-[15vw] md:text-[13vw] font-black leading-[0.8] tracking-tighter text-transparent text-stroke md:text-zinc-100 md:text-stroke-0 relative z-10 select-none"
                >
                    REDDY
                </motion.h1>
            </div>

            {/* Hero Image - Absolute positioned to layer between text */}
            <motion.div
                initial={{ scale: 1.2, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] lg:w-[550px] aspect-[3/4] z-20 pointer-events-none"
            >
                <div className="w-full h-full relative">
                     <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                     <img 
                        src={userImage} 
                        alt="Gireesh Reddy" 
                        className="w-full h-full object-cover object-top grayscale contrast-125 brightness-110 mask-image-gradient"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                        }}
                     />
                     {/* Decoration Lines */}
                     <div className="absolute -left-4 top-1/4 w-1 h-24 bg-white/20"></div>
                     <div className="absolute -right-4 bottom-1/4 w-1 h-24 bg-white/20"></div>
                </div>
            </motion.div>
        </div>

      </div>

      {/* Bottom Footer Area */}
      <div className="relative z-30 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-900 pt-6">
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-8 text-xs font-mono text-zinc-500 uppercase tracking-widest"
        >
            <span>Bangalore, IN</span>
            <span>{new Date().getFullYear()}</span>
        </motion.div>

        <motion.a
             href="#work"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.4 }}
             className="group flex items-center gap-3 text-sm font-medium text-white hover:text-zinc-300 transition-colors cursor-pointer hover-trigger"
        >
            <span className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                <ArrowDown size={14} />
            </span>
            SCROLL FOR WORK
        </motion.a>
      </div>
    </section>
  );
};