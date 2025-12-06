import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-accent-primary font-medium mb-4">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        {resumeData.name}
                    </h1>
                    <h3 className="text-2xl md:text-4xl text-text-secondary mb-8 font-light">
                        I build the bridge between <span className="text-text-primary">robust Full Stack engineering</span> <br />
                        and the new world of <span className="gradient-text">Generative AI</span>
                    </h3>
                    <p className="max-w-2xl mx-auto text-text-secondary mb-10 text-lg leading-relaxed">
                        {resumeData.summary}
                    </p>

                    <div className="flex justify-center gap-4">
                        <a href="#contact" className="btn btn-primary">Let's Connect</a>
                        <a href={resumeData.social[1].url} target="_blank" rel="noopener noreferrer" className="btn glass-panel hover:bg-white/10">GitHub</a>
                        <a href={resumeData.social[0].url} target="_blank" rel="noopener noreferrer" className="btn glass-panel hover:bg-white/10">LinkedIn</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
