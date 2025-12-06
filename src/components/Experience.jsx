import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional <span className="gradient-text">Journey</span></h2>

            <div className="max-w-4xl mx-auto relative border-l border-white/10 ml-4 md:ml-10 space-y-12">
                {resumeData.experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-accent-secondary shadow-[0_0_10px_var(--accent-secondary)]"></div>

                        <div className="glass-panel p-6 md:p-8 hover:bg-glass-border transition-colors duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-text-primary">{job.company}</h3>
                                    <span className="text-sm text-accent-primary font-medium">{job.location}</span>
                                </div>
                            </div>

                            {/* Roles Loop */}
                            <div className="mb-6 space-y-6">
                                {job.roles.map((role, rIndex) => (
                                    <div key={rIndex} className={`relative ${rIndex !== job.roles.length - 1 ? 'pb-6 border-l border-white/10 pl-4 ml-1' : 'pl-5'}`}>
                                        {/* Small dot for role */}
                                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-glass-border"></div>
                                        <h4 className="text-lg font-semibold text-text-primary">{role.title}</h4>
                                        <span className="text-xs uppercase tracking-wider text-text-secondary">{role.date}</span>
                                    </div>
                                ))}
                            </div>

                            <ul className="space-y-3 list-none text-text-secondary">
                                {job.description.map((desc, i) => (
                                    <li key={i} className="leading-relaxed flex items-start gap-3">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0"></span>
                                        <span>
                                            {desc.split(/(promoted within 10 months)/i).map((part, pIndex) =>
                                                part.toLowerCase() === 'promoted within 10 months' ?
                                                    <strong key={pIndex} className="text-accent-secondary">{part}</strong> :
                                                    part
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
