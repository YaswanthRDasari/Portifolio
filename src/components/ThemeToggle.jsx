import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
    // Initialize state from local storage or default to dark
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved ? saved !== 'light' : true;
        }
        return true;
    });

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    // Check for first visit to show guide popup
    useEffect(() => {
        const timer = setTimeout(() => {
            const demoShown = sessionStorage.getItem('themeDemoShown');
            if (!demoShown) {
                setShowPopup(true);
            }
        }, 1000); // Small delay for better UX on load

        return () => clearTimeout(timer);
    }, []);

    const handlePopupAction = () => {
        setIsDark(!isDark);
        setShowPopup(false);
        sessionStorage.setItem('themeDemoShown', 'true');
    };

    const handleDismiss = () => {
        setShowPopup(false);
        sessionStorage.setItem('themeDemoShown', 'true');
    };

    return (
        <div className="relative">
            {/* Guide Popup */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="glass-panel p-6 max-w-md w-full text-center relative overflow-hidden"
                        >
                            {/* Decorative gradient blob */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-primary/20 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-secondary/20 rounded-full blur-2xl"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center text-white text-xl mb-4 shadow-lg shadow-purple-500/30">
                                    {isDark ? <FaSun /> : <FaMoon />}
                                </div>
                                <h3 className="text-xl font-bold mb-2">Adjust Your View</h3>
                                <p className="text-text-secondary mb-6">
                                    The theme toggle switch is located at the top right for your eye comfort.
                                </p>

                                <div className="flex gap-3 w-full">
                                    <button
                                        onClick={handleDismiss}
                                        className="flex-1 py-2 px-4 rounded-lg border border-glass-border hover:bg-glass-border transition-colors text-sm font-medium"
                                    >
                                        Got it
                                    </button>
                                    <button
                                        onClick={handlePopupAction}
                                        className="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all transform hover:-translate-y-0.5 text-sm font-medium"
                                    >
                                        Toggle Theme
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-glass-bg border border-glass-border hover:bg-glass-border transition-colors relative group"
                aria-label="Toggle Theme"
            >
                <div className="relative z-10 text-accent-primary">
                    {isDark ? <FaMoon /> : <FaSun />}
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-accent-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>
        </div>
    );
};

export default ThemeToggle;
