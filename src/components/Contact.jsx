import React from 'react';
import { resumeData } from '../data';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer id="contact" className="py-20 border-t border-white/10 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="gradient-text">Collaborate</span></h2>
                <p className="text-text-secondary max-w-xl mx-auto mb-10 text-lg">
                    I'm always open to discussing new AI projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div className="flex justify-center gap-8 mb-12 flex-wrap">
                    <a href={`tel:${resumeData.phone}`} className="text-4xl text-text-secondary hover:text-accent-primary transition-colors flex items-center gap-2 group" title="Call Me">
                        <span className="text-lg font-mono opacity-0 group-hover:opacity-100 transition-opacity absolute -mt-12 bg-glass-bg px-2 py-1 rounded">{resumeData.phone}</span>
                        <FaPhone />
                    </a>
                    <a href={`mailto:${resumeData.email}`} className="text-4xl text-text-secondary hover:text-accent-primary transition-colors">
                        <FaEnvelope />
                    </a>
                    <a href={resumeData.social[0].url} target="_blank" rel="noopener noreferrer" className="text-4xl text-text-secondary hover:text-accent-primary transition-colors">
                        <FaLinkedin />
                    </a>
                    <a href={resumeData.social[1].url} target="_blank" rel="noopener noreferrer" className="text-4xl text-text-secondary hover:text-accent-primary transition-colors">
                        <FaGithub />
                    </a>
                </div>

                <p className="text-sm text-text-secondary">
                    © 2025 {resumeData.name}. Built with React & Vite.
                </p>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-accent-primary/10 blur-[100px] pointer-events-none"></div>
        </footer>
    );
};

export default Contact;
