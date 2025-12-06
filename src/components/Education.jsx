import React from 'react';
import { resumeData } from '../data';

const Education = () => {
    return (
        <section className="section-padding" id="education">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Education */}
                <div>
                    <h2 className="text-3xl font-bold mb-8">Education</h2>
                    <div className="space-y-6">
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="glass-panel p-6 border-l-4 border-accent-primary">
                                <h3 className="text-xl font-bold text-text-primary mb-1">{edu.school}</h3>
                                <p className="text-accent-primary mb-2">{edu.degree}</p>
                                <span className="text-sm text-text-secondary block">{edu.date}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications & Achievements */}
                <div>
                    <h2 className="text-3xl font-bold mb-8">Achievements</h2>
                    <div className="glass-panel p-6 mb-8">
                        <ul className="space-y-4">
                            {resumeData.achievements.map((item, index) => (
                                <li key={index} className="flex gap-3 text-text-secondary">
                                    <span className="text-accent-secondary mt-1">★</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-8">Certifications</h2>
                    <div className="glass-panel p-6">
                        <ul className="space-y-4">
                            {resumeData.certifications.map((item, index) => (
                                <li key={index} className="flex gap-3 text-text-secondary">
                                    <span className="text-accent-primary mt-1">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
