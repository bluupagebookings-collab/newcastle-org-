/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Mail, Phone, Heart, Calendar, CheckCircle2, Menu, X, Search, Facebook, Twitter, MessageCircle, Link2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    location: '',
    brief: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (formErrors[id]) {
      setFormErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.firstName.trim()) errors.firstName = "Name is required";
    if (!formData.lastName.trim()) errors.lastName = "Surname is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.age) {
      errors.age = "Age is required";
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0 || Number(formData.age) > 120) {
      errors.age = "Please enter a valid age between 1 and 120";
    }
    if (!formData.location) errors.location = "Please select a location";
    if (!formData.brief.trim()) errors.brief = "Please provide a short brief";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAssistanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', age: '', location: '', brief: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  const heroImages = [
    "https://i.ibb.co/0yBNCPCP/rnb-gathering-1772031387245.png",
    "https://i.ibb.co/Hfb2j30m/rnb-gathering-1772031343356.png"
  ];

  useEffect(() => {
    // Hero slider removed to keep the website solid and stable
  }, []);

  const fadeUp = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
                <Link className="relative text-xs font-bold tracking-wider transition-colors duration-300 group text-navy/90 hover:text-navy" to="/about">
                  ABOUT
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className="relative text-xs font-bold tracking-wider transition-colors duration-300 group text-navy/90 hover:text-navy" to="/pillars">
                  PILLARS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className="relative text-xs font-bold tracking-wider transition-colors duration-300 group text-navy/90 hover:text-navy" to="/programs">
                  PROGRAMS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className="relative text-xs font-bold tracking-wider transition-colors duration-300 group text-navy/90 hover:text-navy" to="/events">
                  EVENTS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className="relative text-xs font-bold tracking-wider transition-colors duration-300 group text-navy/90 hover:text-navy" to="/volunteer">
                  VOLUNTEER
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className="relative text-xs font-bold tracking-wider transition-colors duration-300 group text-navy/90 hover:text-navy" to="/blog">
                  BLOG
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-300 group-hover:w-full"></span>
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
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-navy py-2 border-b border-gray-100">ABOUT</Link>
              <Link to="/pillars" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-navy py-2 border-b border-gray-100">PILLARS</Link>
              <Link to="/programs" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-navy py-2 border-b border-gray-100">PROGRAMS</Link>
              <Link to="/events" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-navy py-2 border-b border-gray-100">EVENTS</Link>
              <Link to="/volunteer" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-navy py-2 border-b border-gray-100">VOLUNTEER</Link>
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-navy py-2 border-b border-gray-100">BLOG</Link>
              <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-white bg-brand-teal text-center py-3 rounded-none mt-2 uppercase">DONATE</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[100svh] min-h-[600px] overflow-hidden bg-navy">
          <div className="absolute inset-0 bg-navy">
            {heroImages.map((src, idx) => (
              <img
                key={src}
                alt={`Hero slide ${idx + 1}`}
                className={`object-cover object-center w-full h-full absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentSlide ? 'opacity-50' : 'opacity-0'
                }`}
                src={src}
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-10"></div>
          
          <div className="absolute inset-0 z-20 flex items-center justify-center pt-16 sm:pt-20">
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-4xl"
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
                  <span className="text-brand-teal text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase">
                    Newcastle, KZN
                  </span>
                </motion.div>
                <motion.div variants={fadeUp} className="overflow-hidden mb-4 sm:mb-6">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.05] sm:leading-[1] uppercase break-words">
                    KEEP NEWCASTLE ALIVE WITH POSSIBILITIES
                  </h1>
                </motion.div>
                <motion.p variants={fadeUp} className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light mb-8 sm:mb-10">
                  A new community movement dedicated to uplifting lives, unlocking opportunities, and bringing people together through meaningful events, support, and empowerment programs.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4">
                  <a className="group inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 bg-brand-teal text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-none hover:bg-white hover:text-navy transition-colors duration-300 w-fit" href="#donate">
                    Support Our Mission
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a className="inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 border border-white/30 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-none hover:border-white hover:bg-white/10 transition-colors duration-300 w-fit" href="#volunteer">
                    Become a Volunteer
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative bg-cream overflow-hidden py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              <motion.div variants={fadeUp} className="lg:col-span-5 relative px-4 sm:px-0">
                <div className="relative aspect-[3/4] rounded-none overflow-hidden shadow-2xl">
                  <img 
                    alt="Sphe Dlamini, Founder" 
                    className="object-cover object-top w-full h-full transition-all duration-700" 
                    src="https://i.ibb.co/ksHdb78G/IMG-5383-2.jpg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="lg:col-span-6 lg:col-start-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-px bg-brand-teal"></div>
                  <span className="text-brand-teal font-bold tracking-[0.25em] text-[10px] uppercase">
                    A Movement Born in Newcastle
                  </span>
                </div>
                <h2 className="text-4xl xl:text-5xl font-black text-dark-800 mb-8 leading-[1.05] uppercase break-words">
                  EVERY RESIDENT DESERVES
                  <br />
                  <span className="text-brand-teal">ACCESS TO OPPORTUNITY</span>
                </h2>
                <div className="text-dark-800/60 text-base leading-relaxed mb-8 space-y-4">
                  <p>
                    <strong className="text-dark-800">KNAWP</strong> is a community organisation created to transform lives across Newcastle, KwaZulu-Natal.
                  </p>
                  <p>
                    From youth development to welfare support, from skills training to cultural events — everything we do is designed to help Newcastle thrive.
                  </p>
                  <p>
                    Born and raised in Newcastle, founder Sphe Dlamini has a deep connection to the community he calls home. Growing up, he saw both the challenges residents face and the incredible potential that often goes unrealised.
                  </p>
                </div>
                <div className="border-l-2 border-brand-teal pl-5 mb-8">
                  <p className="font-signature text-3xl text-dark-800">
                    Sphe Dlamini
                  </p>
                  <p className="text-dark-800/40 text-[10px] uppercase tracking-[0.2em] mt-1">
                    Founder & Director
                  </p>
                </div>
                <blockquote className="text-xl font-heading italic text-dark-800 mb-8 max-w-lg">
                  “We envision a Newcastle where every resident feels empowered to contribute — a future defined by opportunity, dignity, and hope.”
                </blockquote>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="pillars" className="py-16 sm:py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-brand-teal/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-[150px]"></div>
          
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-12 sm:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
                <span className="text-brand-teal font-bold tracking-[0.25em] text-[9px] sm:text-[10px] uppercase">
                  What We Do
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-[1.05] max-w-3xl uppercase break-words">
                THREE PILLARS OF
                <br />
                <span className="text-brand-teal">CHANGE</span>
              </motion.h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            >
              {[
                {
                  title: "COMMUNITY EVENTS",
                  subtitle: "Culture & Unity",
                  desc: "Inclusive events that celebrate culture, creativity, and unity.",
                  img: "https://i.ibb.co/TDCX7wBW/rnb-gathering-1772054012867.jpg"
                },
                {
                  title: "SUPPORT INITIATIVES",
                  subtitle: "Welfare",
                  desc: "Assistance for individuals and families facing hardship.",
                  img: "https://i.ibb.co/0yBNCPCP/rnb-gathering-1772031387245.png"
                },
                {
                  title: "EMPOWERMENT PROGRAMS",
                  subtitle: "Skills & Confidence",
                  desc: "Workshops and development initiatives that build skills and confidence.",
                  img: "https://i.ibb.co/XfB6zrvd/Reskill-Group-Huddle.jpg"
                }
              ].map((pillar, idx) => (
                <motion.div key={idx} variants={fadeUp} className="group block h-full">
                  <div className="relative overflow-hidden rounded-2xl h-[360px] sm:h-full sm:min-h-[400px]">
                    <img 
                      alt={pillar.title} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" 
                      src={pillar.img}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                    <div className="absolute top-5 left-5">
                      <div className="w-10 h-10 bg-brand-teal rounded-lg flex items-center justify-center font-black text-dark-900">
                        0{idx + 1}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                      <span className="text-brand-teal text-[9px] font-bold uppercase tracking-[0.2em] mb-1 sm:mb-2 block">
                        {pillar.subtitle}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-white leading-tight mb-2 group-hover:text-brand-teal transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-2">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-12 sm:mb-16"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
                <span className="text-brand-teal font-bold tracking-[0.25em] text-[9px] sm:text-[10px] uppercase">
                  Our Initiatives
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark-800 leading-[1.05] uppercase break-words">
                BUILDING FUTURES
                <br className="hidden sm:block" />
                <span className="text-brand-teal">ACROSS NEWCASTLE</span>
              </motion.h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Skills & Employment",
                  status: "Launching Soon",
                  desc: "Career training covering digital skills, entrepreneurship, trades, and financial literacy.",
                  active: true
                },
                {
                  title: "Youth Development",
                  status: "In Planning",
                  desc: "Mentorship and leadership programs for the next generation.",
                  active: false
                },
                {
                  title: "Community Welfare",
                  status: "In Planning",
                  desc: "Direct support for vulnerable individuals and families.",
                  active: false
                },
                {
                  title: "Arts & Culture",
                  status: "In Planning",
                  desc: "Celebrating diversity through art, music, dance, and storytelling.",
                  active: false
                }
              ].map((program, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeUp} 
                  className={`p-6 sm:p-10 rounded-none border ${program.active ? 'bg-[#faf8f5] border-brand-teal/30' : 'bg-white border-gray-100'}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <h4 className="text-lg sm:text-xl font-black text-dark-800 uppercase tracking-wide">{program.title}</h4>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-none w-fit ${program.active ? 'bg-navy text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {program.status}
                    </span>
                  </div>
                  <p className="text-sm text-dark-800/70 leading-relaxed">
                    {program.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-16 sm:py-24 lg:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                  <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
                  <span className="text-brand-teal font-bold tracking-[0.25em] text-[9px] sm:text-[10px] uppercase">
                    Upcoming Gatherings
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark-800 mb-8 leading-[1.05] uppercase break-words">
                  WHAT'S HAPPENING
                  <br />
                  <span className="text-brand-teal">IN NEWCASTLE</span>
                </motion.h2>
                
                <motion.div variants={fadeUp} className="space-y-0 mb-8 sm:mb-10">
                  <div className="flex gap-5 group">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-brand-teal ring-4 ring-brand-teal/20 shrink-0 mt-1"></div>
                      <div className="w-px flex-1 bg-brand-teal/20 my-1"></div>
                    </div>
                    <div className="pb-8">
                      <p className="text-brand-teal text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                        Mar 28, 2026
                      </p>
                      <h4 className="font-bold text-dark-800 text-base sm:text-lg mb-2 uppercase">
                        KNAWP First Community Event
                      </h4>
                      <p className="text-dark-800/60 text-sm mb-3">
                        A celebration of community, connection, and a powerful beginning.
                      </p>
                      <p className="text-dark-800/40 text-xs flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        Newcastle, KZN
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-gray-300 shrink-0 mt-1"></div>
                    </div>
                    <div className="pb-8">
                      <p className="text-gray-400 text-xs italic">
                        More events coming soon.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-none overflow-hidden"
              >
                <img 
                  alt="Community Event" 
                  className="object-cover w-full h-full" 
                  src="https://i.ibb.co/Pzc82WVY/1771954802701.jpg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="px-3 py-1.5 bg-brand-teal text-dark-900 text-[9px] font-bold uppercase tracking-widest inline-block mb-3">
                    Featured Event
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
                    First Community Event
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Request Assistance Section */}
        <section id="assistance" className="py-16 sm:py-24 lg:py-32 bg-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-10 sm:mb-12 text-center"
            >
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
                <span className="text-brand-teal font-bold tracking-[0.25em] text-[9px] sm:text-[10px] uppercase">
                  We Are Here For You
                </span>
                <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] uppercase mb-4">
                REQUEST <span className="text-brand-teal">ASSISTANCE</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/70 text-sm sm:text-base max-w-xl mx-auto">
                If you or someone you know in Newcastle needs support, please fill out the form below. Our team will review your request and get in touch.
              </motion.p>
            </motion.div>

            <motion.form 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="bg-white p-6 sm:p-10 rounded-none shadow-2xl space-y-5 sm:space-y-6"
              onSubmit={handleAssistanceSubmit}
              noValidate
            >
              {submitSuccess && (
                <div className="bg-brand-teal/10 border border-brand-teal text-brand-teal-dark px-4 py-3 rounded-none text-sm font-medium mb-6">
                  Request submitted successfully. Our team will review your request and get in touch soon.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-[10px] font-bold uppercase tracking-wider text-navy block">Name</label>
                  <input type="text" id="firstName" value={formData.firstName} onChange={handleInputChange} className={`w-full bg-cream border ${formErrors.firstName ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors`} placeholder="Enter your name" />
                  {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-[10px] font-bold uppercase tracking-wider text-navy block">Surname</label>
                  <input type="text" id="lastName" value={formData.lastName} onChange={handleInputChange} className={`w-full bg-cream border ${formErrors.lastName ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors`} placeholder="Enter your surname" />
                  {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-navy block">Email Address</label>
                  <input type="email" id="email" value={formData.email} onChange={handleInputChange} className={`w-full bg-cream border ${formErrors.email ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors`} placeholder="Enter your email" />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="age" className="text-[10px] font-bold uppercase tracking-wider text-navy block">Age</label>
                  <input type="number" id="age" min="0" max="120" value={formData.age} onChange={handleInputChange} className={`w-full bg-cream border ${formErrors.age ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors`} placeholder="Enter your age" />
                  {formErrors.age && <p className="text-red-500 text-xs mt-1">{formErrors.age}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="text-[10px] font-bold uppercase tracking-wider text-navy block">Location in Newcastle (KZN)</label>
                <select id="location" value={formData.location} onChange={handleInputChange} className={`w-full bg-cream border ${formErrors.location ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors appearance-none`}>
                  <option value="" disabled>Select your neighborhood / township</option>
                  <option value="Amajuba Park">Amajuba Park</option>
                  <option value="Arbor Park">Arbor Park</option>
                  <option value="Aviary Hill">Aviary Hill</option>
                  <option value="Barry Hertzog Park">Barry Hertzog Park</option>
                  <option value="Blaauwbosch">Blaauwbosch</option>
                  <option value="Fairleigh">Fairleigh</option>
                  <option value="Fernwood">Fernwood</option>
                  <option value="Hutten Heights">Hutten Heights</option>
                  <option value="Karabos">Karabos</option>
                  <option value="Lennoxton">Lennoxton</option>
                  <option value="Madadeni">Madadeni</option>
                  <option value="Ncandu Park">Ncandu Park</option>
                  <option value="Newcastle Central">Newcastle Central</option>
                  <option value="Osizweni">Osizweni</option>
                  <option value="Paradise">Paradise</option>
                  <option value="Pioneer Park">Pioneer Park</option>
                  <option value="Roy Point">Roy Point</option>
                  <option value="Schuins Hoogte">Schuins Hoogte</option>
                  <option value="Signal Hill">Signal Hill</option>
                  <option value="Siyahlala-la">Siyahlala-la</option>
                  <option value="Sunnyridge">Sunnyridge</option>
                  <option value="Sunset View">Sunset View</option>
                  <option value="Suryaville">Suryaville</option>
                  <option value="Other">Other</option>
                </select>
                {formErrors.location && <p className="text-red-500 text-xs mt-1">{formErrors.location}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="brief" className="text-[10px] font-bold uppercase tracking-wider text-navy block">Short Brief (How can we help?)</label>
                <textarea id="brief" rows={4} value={formData.brief} onChange={handleInputChange} className={`w-full bg-cream border ${formErrors.brief ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors resize-none`} placeholder="Please describe the assistance you need..."></textarea>
                {formErrors.brief && <p className="text-red-500 text-xs mt-1">{formErrors.brief}</p>}
              </div>

              <button type="submit" className="w-full bg-brand-teal text-white font-bold text-xs uppercase tracking-wider py-4 hover:bg-navy transition-colors duration-300">
                Submit Request
              </button>
            </motion.form>
          </div>
        </section>

        {/* Donation & Volunteer Section */}
        <section id="donate" className="relative overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="bg-dark-900 px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 flex flex-col justify-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-px bg-brand-teal"></div>
                  <span className="text-brand-teal font-bold tracking-[0.25em] text-[9px] uppercase">
                    Make a Difference
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.05] uppercase">
                  YOUR SUPPORT
                  <br />
                  <span className="text-brand-teal">STARTS SOMETHING</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-white/60 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
                  KNAWP is brand new. Every contribution directly funds events, programs, and support initiatives.
                </motion.p>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                  {[
                    { amount: "R100", impact: "Supports a community event" },
                    { amount: "R250", impact: "Funds a skills workshop" },
                    { amount: "R500", impact: "Supports youth mentorship" },
                    { amount: "R1,000", impact: "Provides essential resources" }
                  ].map((tier, idx) => (
                    <motion.div key={idx} variants={fadeUp} className="border border-white/10 rounded-xl p-5 hover:border-brand-teal/50 transition-colors bg-white/5">
                      <div className="text-2xl font-black text-brand-teal mb-2">
                        {tier.amount}
                      </div>
                      <div className="text-white/70 text-xs">
                        {tier.impact}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} className="bg-brand-teal/10 border border-brand-teal/20 rounded-xl p-5 mb-8">
                  <p className="text-brand-blue text-sm font-medium">
                    Payment gateway coming soon. Contact us directly to donate today.
                  </p>
                </motion.div>
              </motion.div>
            </div>
            
            <div id="volunteer" className="bg-cream px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 flex flex-col justify-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-px bg-navy"></div>
                  <span className="text-navy font-bold tracking-[0.25em] text-[9px] uppercase">
                    Volunteer With Us
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark-800 mb-6 leading-[1.05] uppercase">
                  HELP BUILD SOMETHING
                  <br />
                  <span className="text-navy">MEANINGFUL</span>
                </motion.h2>
                
                <motion.div variants={fadeUp} className="mt-8 mb-10">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-dark-800 mb-6">Why Volunteer:</h4>
                  <ul className="space-y-4">
                    {[
                      "Be part of the movement from day one",
                      "Connect with community-minded people",
                      "Receive a certificate of service",
                      "Flexible involvement"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-brand-teal mr-3 shrink-0" />
                        <span className="text-sm text-dark-800/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <a className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-teal hover:text-dark-900 transition-colors duration-300 w-fit" href="#contact">
                    Join The Movement
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

        {/* News & Updates Section */}
        <section id="news" className="py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-12 sm:mb-16"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
                <span className="text-brand-teal font-bold tracking-[0.25em] text-[9px] sm:text-[10px] uppercase">
                  Latest News
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark-800 leading-[1.05] uppercase">
                NEWS & <span className="text-brand-teal">UPDATES</span>
              </motion.h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid lg:grid-cols-3 gap-8 lg:gap-12"
            >
              {[
                {
                  id: 1,
                  heading: "KNAWP Officially Launches to Transform Newcastle",
                  dateline: "Feb 28, 2026",
                  excerpt: "In a landmark moment for community development, local visionary Sphe Dlamini has officially unveiled Keep Newcastle Alive With Possibilities (KNAWP)...",
                  image: "https://i.ibb.co/ksHdb78G/IMG-5383-2.jpg"
                },
                {
                  id: 2,
                  heading: "Digital Skills Bootcamp Set to Empower Local Youth",
                  dateline: "Mar 10, 2026",
                  excerpt: "Addressing the critical need for tech literacy in the modern job market, KNAWP has announced its inaugural Digital Skills Bootcamp...",
                  image: "https://i.ibb.co/XfB6zrvd/Reskill-Group-Huddle.jpg"
                },
                {
                  id: 3,
                  heading: "Community Food Drive Delivers Hope to Vulnerable Families",
                  dateline: "Mar 22, 2026",
                  excerpt: "Demonstrating the power of collective action, KNAWP's recent community food and clothing drive successfully provided essential supplies to over 50 families...",
                  image: "https://i.ibb.co/0yBNCPCP/rnb-gathering-1772031387245.png"
                }
              ].map((article) => {
                return (
                  <motion.article key={article.id} variants={fadeUp} className="bg-cream border border-gray-200 flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.heading} 
                        className="object-cover object-top w-full h-full transition-transform duration-700 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      <div className="mb-4">
                        <span className="text-brand-teal text-[10px] font-bold uppercase tracking-[0.2em] block mb-1">
                          {article.dateline}
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-black text-navy leading-tight mb-4 uppercase break-words">
                        {article.heading}
                      </h3>
                      
                      <div className="text-navy/80 text-sm leading-relaxed space-y-4 flex-grow">
                        <p>
                          {article.excerpt}
                        </p>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                        <Link to={`/blog/${article.id}`} className="inline-flex items-center gap-2 text-brand-teal font-bold text-xs uppercase tracking-wider hover:text-navy transition-colors">
                          Read More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="mt-12 text-center"
            >
              <Link to="/blog" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-navy text-navy font-bold text-xs uppercase tracking-wider hover:bg-navy hover:text-white transition-colors">
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
