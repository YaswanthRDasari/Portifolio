import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <section id="skills" className="section-padding">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core <span className="gradient-text">Competencies</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(resumeData.skills).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-6"
                    >
                        <h3 className="text-xl font-bold mb-4 text-accent-primary">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
