import React from 'react';
import { SOCIALS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-zinc-950 grid grid-cols-1 md:grid-cols-12 gap-12">
       <div className="md:col-span-4">
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">(02)</h2>
            <h2 className="text-4xl font-serif italic text-white">About Me</h2>
       </div>
       
       <div className="md:col-span-8 flex flex-col gap-12">
            <div className="text-xl md:text-3xl leading-relaxed text-zinc-300 font-light">
                <p className="mb-8">
                    I am a full-stack Web3 Developer and AI Automation Engineer driven by an insatiable curiosity. 
                    Creating seamless connections between smart contracts and front-end applications is where I thrive.
                </p>
                <p>
                    Currently, I'm exploring the boundaries of AI automation, using tools like <strong className="text-white font-normal">n8n</strong> and <strong className="text-white font-normal">LLMs</strong> to build agents that not only work but think. 
                    Sharing my journey with the community gives me the dopamine hit I need to keep pushing forward.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-zinc-900">
                <div>
                    <h3 className="text-zinc-500 mb-4 uppercase text-xs tracking-widest">Education</h3>
                    <p className="text-white text-lg">Bachelor of Technology</p>
                    <p className="text-zinc-400">Aeronautical Engineering</p>
                    <p className="text-zinc-500 text-sm mt-1">Hindustan Institute of Technology and Science (2017 - 2021)</p>
                </div>
                <div>
                    <h3 className="text-zinc-500 mb-4 uppercase text-xs tracking-widest">Connect</h3>
                    <div className="flex flex-col gap-2 items-start">
                        <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-zinc-400 transition-colors hover-trigger group">
                            LinkedIn <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                        </a>
                        <a href={`mailto:${SOCIALS.email}`} className="flex items-center gap-2 text-white hover:text-zinc-400 transition-colors hover-trigger group">
                            Email <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                        </a>
                        <a href={SOCIALS.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-zinc-400 transition-colors hover-trigger group">
                            Portfolio <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                        </a>
                    </div>
                </div>
            </div>
       </div>
    </section>
  );
};