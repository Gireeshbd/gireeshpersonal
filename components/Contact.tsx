import React from 'react';
import { SOCIALS } from '../constants';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="min-h-[80vh] bg-zinc-100 text-zinc-950 px-6 md:px-12 py-24 flex flex-col justify-between relative">
        
        <div>
             <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">(03)</h2>
             <h2 className="text-4xl font-serif italic text-zinc-900">Start a Project</h2>
        </div>

        <div className="flex flex-col gap-8 z-10">
            <motion.a 
                href={`mailto:${SOCIALS.email}`}
                className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter hover:text-zinc-600 transition-colors hover-trigger break-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                LET'S TALK
            </motion.a>
            <div className="flex flex-col md:flex-row justify-between items-end border-t border-zinc-300 pt-8 gap-8">
                <div className="max-w-md">
                    <p className="text-xl text-zinc-600">
                        I share tips and tricks to become a good developer and lead a great life. Reach out for collaborations or just to say hi.
                    </p>
                </div>
                <div className="flex flex-col items-end text-right">
                    <a href={`mailto:${SOCIALS.email}`} className="text-lg font-medium hover-trigger">{SOCIALS.email}</a>
                    <p className="text-zinc-500">{SOCIALS.phone}</p>
                    <p className="text-zinc-400 text-sm mt-8">© {new Date().getFullYear()} Gireesh Reddy</p>
                </div>
            </div>
        </div>
    </section>
  );
};