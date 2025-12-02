import React from 'react';
import { SKILLS } from '../constants';

export const SkillsTicker = () => {
  return (
    <div className="py-12 border-y border-zinc-900 bg-zinc-950 overflow-hidden flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
            {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
                <span key={index} className="text-4xl md:text-6xl font-bold text-zinc-800 mx-8 hover:text-zinc-600 transition-colors uppercase cursor-default">
                    {skill}
                </span>
            ))}
        </div>
    </div>
  );
};