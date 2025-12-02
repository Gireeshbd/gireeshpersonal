import React, { useState } from 'react';
import { EXPERIENCE, PROJECTS, ExperienceItem } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface ListItemProps {
    item: ExperienceItem;
    index: number;
}

const ListItem: React.FC<ListItemProps> = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-t border-zinc-800 group"
        >
            <div 
                className="py-8 px-2 flex flex-col md:flex-row md:items-baseline justify-between cursor-pointer hover:bg-zinc-900/50 transition-colors hover-trigger"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex-1 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                    <span className="text-zinc-500 font-mono text-sm w-32">{item.period}</span>
                    <h3 className="text-2xl md:text-3xl font-medium text-zinc-200 group-hover:text-white transition-colors">
                        {item.company}
                    </h3>
                </div>
                
                <div className="flex items-center justify-between md:justify-end w-full md:w-1/3 mt-4 md:mt-0 gap-4">
                    <span className="text-zinc-400 text-sm md:text-base">{item.role}</span>
                    <span className="text-zinc-600 group-hover:text-white transition-colors">
                        {isOpen ? <Minus size={20}/> : <Plus size={20} />}
                    </span>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 pl-2 md:pl-44 pr-2 md:pr-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-zinc-400 leading-relaxed mb-4 text-lg">
                                    {item.location}
                                </p>
                                <ul className="list-disc list-inside text-zinc-500 space-y-2">
                                    {item.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap content-start gap-2">
                                {item.tech?.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 border border-zinc-800 rounded-full text-xs text-zinc-400 hover:border-zinc-600 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const WorkList = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-zinc-950">
        <div className="mb-16">
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">(01)</h2>
            <h2 className="text-4xl md:text-5xl font-serif italic text-white">Selected Work & Experience</h2>
        </div>

        <div className="flex flex-col">
            {[...EXPERIENCE, ...PROJECTS].map((item, index) => (
                <ListItem key={item.id} item={item} index={index} />
            ))}
        </div>
    </section>
  );
};