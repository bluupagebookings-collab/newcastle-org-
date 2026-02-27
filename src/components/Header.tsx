import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <div className="flex items-center">
            <Link className="flex items-center gap-1.5" to="/">
              <img src="https://i.ibb.co/WpRMjw7K/1771954845123.jpg" alt="KNAWP Logo" className="h-10 sm:h-12 w-auto rounded-md" referrerPolicy="no-referrer" />
            </Link>
          </div>
          <div className="flex items-center gap-6 xl:gap-10">
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              <Link className={`relative text-xs font-bold tracking-wider transition-colors duration-300 group ${isActive('/about') ? 'text-brand-teal' : 'text-navy/90 hover:text-navy'}`} to="/about">
                ABOUT
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-teal transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link className={`relative text-xs font-bold tracking-wider transition-colors duration-300 group ${isActive('/pillars') ? 'text-brand-teal' : 'text-navy/90 hover:text-navy'}`} to="/pillars">
                PILLARS
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-teal transition-all duration-300 ${isActive('/pillars') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link className={`relative text-xs font-bold tracking-wider transition-colors duration-300 group ${isActive('/programs') ? 'text-brand-teal' : 'text-navy/90 hover:text-navy'}`} to="/programs">
                PROGRAMS
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-teal transition-all duration-300 ${isActive('/programs') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link className={`relative text-xs font-bold tracking-wider transition-colors duration-300 group ${isActive('/events') ? 'text-brand-teal' : 'text-navy/90 hover:text-navy'}`} to="/events">
                EVENTS
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-teal transition-all duration-300 ${isActive('/events') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link className={`relative text-xs font-bold tracking-wider transition-colors duration-300 group ${isActive('/volunteer') ? 'text-brand-teal' : 'text-navy/90 hover:text-navy'}`} to="/volunteer">
                VOLUNTEER
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-teal transition-all duration-300 ${isActive('/volunteer') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </nav>
            <Link className="hidden lg:block px-6 xl:px-8 py-2.5 bg-brand-teal text-white font-bold text-xs tracking-wider rounded-none hover:bg-navy transition-colors duration-300 uppercase" to="/donate">
              Donate
            </Link>
            <button 
              className="lg:hidden p-2 text-navy hover:text-brand-teal transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-navy/10 shadow-xl py-4 px-6 flex flex-col gap-4"
        >
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/about') ? 'text-brand-teal' : 'text-navy'}`}>ABOUT</Link>
          <Link to="/pillars" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/pillars') ? 'text-brand-teal' : 'text-navy'}`}>PILLARS</Link>
          <Link to="/programs" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/programs') ? 'text-brand-teal' : 'text-navy'}`}>PROGRAMS</Link>
          <Link to="/events" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/events') ? 'text-brand-teal' : 'text-navy'}`}>EVENTS</Link>
          <Link to="/volunteer" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/volunteer') ? 'text-brand-teal' : 'text-navy'}`}>VOLUNTEER</Link>
          <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-white bg-brand-teal text-center py-3 rounded-none mt-2 uppercase">DONATE</Link>
        </motion.div>
      )}
    </header>
  );
}
