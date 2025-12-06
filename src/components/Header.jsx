import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3 mx-4 mt-4' : 'py-6 bg-transparent'
                }`}
            style={scrolled ? { width: 'calc(100% - 2rem)', left: '1rem' } : {}}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-xl font-bold font-space">
                    <span className="gradient-text">Yaswanth.</span>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className="nav-link cursor-pointer text-sm font-medium uppercase tracking-wider"
                            offset={-100}
                        >
                            {item}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
