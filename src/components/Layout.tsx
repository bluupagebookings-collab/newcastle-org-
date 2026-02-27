import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-teal selection:text-dark-900 overflow-x-hidden w-full relative">
      {/* Header */}
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
                <Link className={`relative text-xs font-bold tracking-wider transition-colors duration-300 group ${isActive('/assistance') ? 'text-brand-teal' : 'text-navy/90 hover:text-navy'}`} to="/assistance">
                  ASSISTANCE
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-teal transition-all duration-300 ${isActive('/assistance') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
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
            <Link to="/about" onClick={closeMenu} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/about') ? 'text-brand-teal' : 'text-navy'}`}>ABOUT</Link>
            <Link to="/pillars" onClick={closeMenu} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/pillars') ? 'text-brand-teal' : 'text-navy'}`}>PILLARS</Link>
            <Link to="/programs" onClick={closeMenu} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/programs') ? 'text-brand-teal' : 'text-navy'}`}>PROGRAMS</Link>
            <Link to="/events" onClick={closeMenu} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/events') ? 'text-brand-teal' : 'text-navy'}`}>EVENTS</Link>
            <Link to="/assistance" onClick={closeMenu} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/assistance') ? 'text-brand-teal' : 'text-navy'}`}>ASSISTANCE</Link>
            <Link to="/volunteer" onClick={closeMenu} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/volunteer') ? 'text-brand-teal' : 'text-navy'}`}>VOLUNTEER</Link>
            <Link to="/donate" onClick={closeMenu} className="text-xs font-bold tracking-wider text-white bg-brand-teal text-center py-3 rounded-none mt-2 uppercase">DONATE</Link>
          </motion.div>
        )}
      </header>

      <main className="flex-grow pt-20 sm:pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-dark-950">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative">
          <div className="bg-brand-teal py-10 sm:py-14 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
                <div className="text-center lg:text-left">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-dark-800 leading-tight uppercase">
                    Let's Build Newcastle Together
                  </h2>
                  <p className="text-dark-800/70 text-sm sm:text-base mt-2 max-w-md mx-auto lg:mx-0">
                    Reach out to us to donate, volunteer, or learn more.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
              <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                <Link className="flex items-center gap-3 mb-5 sm:mb-6 group" to="/">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <img src="https://i.ibb.co/WpRMjw7K/1771954845123.jpg" alt="KNAWP Logo" className="h-10 sm:h-12 w-auto rounded-md" referrerPolicy="no-referrer" />
                      <span className="font-heading text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
                        KNAWP
                      </span>
                    </div>
                  </div>
                </Link>
                <p className="text-white/50 text-sm leading-relaxed mb-5 sm:mb-6 max-w-xs">
                  A community movement dedicated to uplifting, empowering, and connecting the people of Newcastle.
                </p>
                <p className="text-white/30 text-xs">
                  Founded February 2026
                </p>
              </div>
              
              <div className="col-span-1 lg:col-span-4 lg:col-start-9">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 sm:mb-5">
                  Contact Us
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <div className="group">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5 flex items-center gap-2">
                        <Mail className="w-3 h-3" /> Email
                      </p>
                      <p className="text-white/70 text-sm group-hover:text-brand-teal transition-colors">
                        hello@knawp.org <span className="text-brand-teal/50 text-xs ml-1">(placeholder)</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="group">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5 flex items-center gap-2">
                        <Phone className="w-3 h-3" /> Phone / WhatsApp
                      </p>
                      <p className="text-white/70 text-sm group-hover:text-brand-teal transition-colors">
                        +27 (0) 00 000 0000 <span className="text-brand-teal/50 text-xs ml-1">(placeholder)</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="group">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5 flex items-center gap-2">
                        <MapPin className="w-3 h-3" /> Location
                      </p>
                      <p className="text-white/70 text-sm">
                        Newcastle, KwaZulu-Natal, South Africa
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                  <p className="text-brand-teal/50 text-xs italic">Social media coming soon.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                <div className="text-white/30 text-xs sm:text-sm text-center sm:text-left">
                  <p>
                    © 2026 Keep Newcastle Alive With Possibilities. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
