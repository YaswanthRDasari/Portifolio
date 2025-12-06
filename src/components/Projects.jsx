import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="section-padding">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured <span className="gradient-text">Products</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resumeData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-6 flex flex-col hover:transform hover:-translate-y-2 transition-all duration-300 group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">{project.title}</h3>
                            <div className="flex gap-3 text-text-secondary">
                                <FaGithub className="hover:text-text-primary cursor-pointer" />
                            </div>
                        </div>

                        <p className="text-xs font-mono text-accent-secondary mb-4">{project.tech}</p>

                        <div className="flex-grow">
                            <ul className="space-y-2 text-sm text-text-secondary">
                                {project.description.map((desc, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span>•</span> {desc}
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

export default Projects;
