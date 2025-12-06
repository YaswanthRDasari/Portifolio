import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
    // Initialize state from local storage or default to dark (no data-theme attr means :root defaults)
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved ? saved !== 'light' : true;
        }
        return true;
    });

    const [isDemoing, setIsDemoing] = useState(false);
    const controls = useAnimation();

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

    // Demo Animation on Mount
    useEffect(() => {
        const runDemo = async () => {
            // Check if we've already shown the demo in this session to avoid annoyance
            // For now, per user request "when a user loads", we might skip the check or use sessionStorage
            if (sessionStorage.getItem('themeDemoShown')) return;

            await new Promise(r => setTimeout(r, 1500)); // Wait 1.5s

            setIsDemoing(true);

            // Pulse effect
            await controls.start({
                scale: [1, 1.2, 1],
                boxShadow: ["0 0 0px var(--accent-primary)", "0 0 20px var(--accent-secondary)", "0 0 0px var(--accent-primary)"],
                transition: { duration: 0.8, repeat: 1 }
            });

            // Toggle to Light
            setIsDark(false);
            await new Promise(r => setTimeout(r, 1200)); // Wait 1.2s

            // Toggle back to Dark (or whatever it was)
            setIsDark(true);

            setIsDemoing(false);
            // Mark as shown
            sessionStorage.setItem('themeDemoShown', 'true');
        };

        runDemo();
    }, [controls]);

    return (
        <div className="relative">
            <AnimatePresence>
                {isDemoing && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 10 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap bg-accent-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg pointer-events-none"
                    >
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-secondary rotate-45"></div>
                        Watch me! 👆
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                animate={controls}
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full bg-glass-bg border border-glass-border hover:bg-glass-border transition-colors relative overflow-hidden group ${isDemoing ? 'ring-2 ring-accent-secondary ring-offset-2 ring-offset-bg-color' : ''}`}
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
