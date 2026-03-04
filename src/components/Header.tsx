import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to a search results page or handle search logic here
      // For now, we'll just log it and close the search
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
      // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-teal origin-left z-[60]"
        style={{ scaleX }}
      />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <div className="flex items-center">
            <Link className="flex items-center gap-1.5" to="/">
              <img src="https://i.ibb.co/0R5GDGhM/1771954845123-removebg-preview.png" alt="KNAWP Logo" className="h-10 sm:h-12 w-auto" referrerPolicy="no-referrer" />
            </Link>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 xl:gap-10">
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
              <Link className={`relative text-xs font-bold tracking-wider transition-colors duration-300 group ${isActive('/blog') ? 'text-brand-teal' : 'text-navy/90 hover:text-navy'}`} to="/blog">
                BLOG
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-teal transition-all duration-300 ${isActive('/blog') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </nav>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-navy hover:text-brand-teal transition-colors"
                aria-label="Toggle search"
              >
                <Search className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

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
      </div>

      {/* Search Bar Dropdown */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-cream border-b border-navy/10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <form onSubmit={handleSearch} className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-navy/50" />
                <input
                  type="text"
                  placeholder="Search for events, blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors"
                  autoFocus
                />
                <button 
                  type="button" 
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 p-1 text-navy/50 hover:text-navy transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-navy/10 shadow-xl py-4 px-6 flex flex-col gap-4"
          >
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/about') ? 'text-brand-teal' : 'text-navy'}`}>ABOUT</Link>
            <Link to="/pillars" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/pillars') ? 'text-brand-teal' : 'text-navy'}`}>PILLARS</Link>
            <Link to="/programs" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/programs') ? 'text-brand-teal' : 'text-navy'}`}>PROGRAMS</Link>
            <Link to="/events" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/events') ? 'text-brand-teal' : 'text-navy'}`}>EVENTS</Link>
            <Link to="/volunteer" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/volunteer') ? 'text-brand-teal' : 'text-navy'}`}>VOLUNTEER</Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs font-bold tracking-wider py-2 border-b border-gray-100 ${isActive('/blog') ? 'text-brand-teal' : 'text-navy'}`}>BLOG</Link>
            <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-white bg-brand-teal text-center py-3 rounded-none mt-2 uppercase">DONATE</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
