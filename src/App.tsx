/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Mail, Phone, Heart, Calendar, CheckCircle2, Menu, X } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroImages = [
    "https://i.ibb.co/0yBNCPCP/rnb-gathering-1772031387245.png",
    "https://i.ibb.co/Hfb2j30m/rnb-gathering-1772031343356.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-teal selection:text-dark-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-lg border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            <div className="flex items-center">
              <a className="flex items-center gap-1.5" href="/">
                <img src="https://i.ibb.co/WpRMjw7K/1771954845123.jpg" alt="KNAWP Logo" className="h-10 sm:h-12 w-auto rounded-md" referrerPolicy="no-referrer" />
              </a>
            </div>
            <div className="flex items-center gap-6 xl:gap-10">
              <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
                <a className="relative text-xs font-bold tracking-wider transition-colors duration-300 group text-navy/90 hover:text-navy" href="#about">
                  ABOUT
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="relative text-xs font-bold tracking-wider transition-colors duration-300 group text-navy/90 hover:text-navy" href="#pillars">
                  PILLARS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="relative text-xs font-bold tracking-wider transition-colors duration-300 group text-navy/90 hover:text-navy" href="#programs">
                  PROGRAMS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="relative text-xs font-bold tracking-wider transition-colors duration-300 group text-navy/90 hover:text-navy" href="#events">
                  EVENTS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="relative text-xs font-bold tracking-wider transition-colors duration-300 group text-navy/90 hover:text-navy" href="#volunteer">
                  VOLUNTEER
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              </nav>
              <a className="hidden lg:block px-6 xl:px-8 py-2.5 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-teal-dark text-dark-800 font-bold text-xs tracking-wider rounded-full hover:shadow-lg hover:shadow-brand-teal/30 transition-all duration-300 hover:scale-105 uppercase" href="#donate">
                Donate
              </a>
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
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-navy py-2 border-b border-gray-100">ABOUT</a>
            <a href="#pillars" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-navy py-2 border-b border-gray-100">PILLARS</a>
            <a href="#programs" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-navy py-2 border-b border-gray-100">PROGRAMS</a>
            <a href="#events" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-navy py-2 border-b border-gray-100">EVENTS</a>
            <a href="#volunteer" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-navy py-2 border-b border-gray-100">VOLUNTEER</a>
            <a href="#donate" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wider text-white bg-gradient-to-r from-brand-teal to-brand-blue text-center py-3 rounded-md mt-2 uppercase">DONATE</a>
          </motion.div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-teal/5 blur-3xl"></div>
            <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-blue/5 blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-row items-center justify-between gap-4 lg:gap-8">
              
              {/* Text Content */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="w-[55%] lg:w-1/2 flex flex-col justify-center text-left pt-0"
              >
                <motion.div variants={fadeUp} className="flex items-center justify-start gap-2 sm:gap-3 mb-3 sm:mb-6">
                  <span className="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full bg-brand-teal/10 text-brand-teal-dark text-[8px] sm:text-xs font-bold tracking-widest uppercase border border-brand-teal/20">
                    Newcastle, KZN
                  </span>
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="text-[20px] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl font-black text-navy tracking-tight sm:leading-[1.05] uppercase mb-3 sm:mb-6">
                  Keep Newcastle <br className="hidden sm:block lg:hidden xl:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">
                    Alive With
                  </span> <br className="hidden sm:block lg:hidden xl:block" />
                  Possibilities
                </motion.h1>
                
                <motion.p variants={fadeUp} className="text-navy/70 text-[10px] sm:text-lg max-w-xl mx-0 leading-relaxed font-medium mb-5 sm:mb-10 line-clamp-3 sm:line-clamp-none">
                  A new community movement dedicated to uplifting lives, unlocking opportunities, and bringing people together through meaningful events.
                </motion.p>
                
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2 sm:gap-4 w-full sm:w-auto">
                  <a className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-4 bg-navy text-white font-bold text-[9px] sm:text-sm uppercase tracking-wider rounded-full overflow-hidden w-full sm:w-auto transition-all hover:shadow-xl hover:shadow-navy/20" href="#donate">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                      Support <span className="hidden sm:inline">Our Mission</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  <a className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-4 bg-white text-navy border-2 border-navy/10 font-bold text-[9px] sm:text-sm uppercase tracking-wider rounded-full hover:border-brand-teal hover:text-brand-teal transition-colors duration-300 w-full sm:w-auto" href="#volunteer">
                    Volunteer
                  </a>
                </motion.div>
              </motion.div>

              {/* Image/Visual Content */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="w-[45%] lg:w-1/2 relative lg:pl-10 mt-0"
              >
                {/* Main Image Container */}
                <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-navy/10 border border-navy/5">
                  {heroImages.map((src, idx) => (
                    <img
                      key={src}
                      alt={`Hero slide ${idx + 1}`}
                      className={`object-cover object-center w-full h-full absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        idx === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                      src={src}
                      referrerPolicy="no-referrer"
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
                </div>

                {/* Floating Glassmorphic Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-3 -left-3 sm:-bottom-8 sm:-left-8 lg:-left-12 bg-white/90 backdrop-blur-xl p-2 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-white/50 w-[110px] sm:w-auto sm:max-w-[280px]"
                >
                  <div className="flex items-center gap-1.5 sm:gap-4 mb-1 sm:mb-3">
                    <div className="flex -space-x-2 sm:-space-x-3">
                      <img className="w-5 h-5 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-white object-cover" src="https://i.ibb.co/BHJyftPV/1772021833601.jpg" alt="Member" />
                      <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full border sm:border-2 border-white bg-brand-teal flex items-center justify-center text-white text-[7px] sm:text-xs font-bold">+50</div>
                    </div>
                  </div>
                  <p className="text-navy font-bold text-[7px] sm:text-sm leading-tight">
                    Join our growing community.
                  </p>
                </motion.div>
                
                {/* Decorative Dots */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(circle,var(--color-brand-teal)_2px,transparent_2px)] [background-size:12px_12px] opacity-20 -z-10 hidden sm:block"></div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative bg-cream overflow-hidden py-12 sm:py-24 lg:py-32">
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
                    src="https://i.ibb.co/BHJyftPV/1772021833601.jpg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 sm:w-48 h-32 sm:h-48 border-2 border-brand-teal/30 -z-10"></div>
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 bg-brand-teal/10 -z-10"></div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="lg:col-span-6 lg:col-start-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-px bg-brand-teal"></div>
                  <span className="text-brand-teal font-bold tracking-[0.25em] text-[10px] uppercase">
                    A Movement Born in Newcastle
                  </span>
                </div>
                <h2 className="text-4xl xl:text-5xl font-black text-dark-800 mb-8 leading-[1.05] uppercase">
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
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-[1.05] max-w-3xl uppercase">
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
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
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
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark-800 leading-[1.05] uppercase">
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
                  className={`p-6 sm:p-10 rounded-2xl border ${program.active ? 'bg-[#faf8f5] border-brand-teal/30' : 'bg-white border-gray-100'}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <h4 className="text-lg sm:text-xl font-black text-dark-800 uppercase tracking-wide">{program.title}</h4>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit ${program.active ? 'bg-brand-teal text-dark-900' : 'bg-gray-100 text-gray-500'}`}>
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
                <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark-800 mb-8 leading-[1.05] uppercase">
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
                className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden mt-8 lg:mt-0"
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
                  <a className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-teal hover:text-dark-900 transition-colors duration-300 w-full sm:w-auto" href="#contact">
                    Join The Movement
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="relative overflow-hidden bg-dark-950">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative">
          <div className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-teal-dark py-10 sm:py-14 md:py-16">
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
                <a className="flex items-center gap-3 mb-5 sm:mb-6 group" href="/">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <img src="https://i.ibb.co/WpRMjw7K/1771954845123.jpg" alt="KNAWP Logo" className="h-10 sm:h-12 w-auto rounded-md" referrerPolicy="no-referrer" />
                      <span className="font-heading text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
                        KNAWP
                      </span>
                    </div>
                  </div>
                </a>
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
