import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nuestro Colegio', href: '/colegio' },
    { name: 'Inscripciones', href: '/inscripciones' },
    { name: 'Academia', href: '/academia' },
    { name: 'Actividades', href: '/actividades' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-primary"
          >
            <Link to="/">ESCUELA</Link>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }}>
                <Link 
                  to={link.href}
                  className="text-light hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            className="md:hidden text-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark"
          >
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ x: 10 }}
                >
                  <Link
                    to={link.href}
                    className="block py-2 text-light hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;