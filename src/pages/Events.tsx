import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, ArrowRight, Clock, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';

export default function Events() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-teal selection:text-dark-900 overflow-x-hidden w-full relative bg-cream">
      <Header />
      <PageHero title="Events" subtitle="Upcoming Gatherings" image="https://i.ibb.co/Pzc82WVY/1771954802701.jpg" />

      <main className="flex-grow py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Events List */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-dark-800 mb-4 leading-[1.05] uppercase">
                WHAT'S HAPPENING
                <br />
                <span className="text-brand-teal">IN NEWCASTLE</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-dark-800/60 mb-12 text-lg max-w-xl">
                Join us at our upcoming events. Connect with the community, celebrate our culture, and be part of the movement.
              </motion.p>
              
              <motion.div variants={fadeUp} className="space-y-8">
                {/* Event Card 1 */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-brand-teal"></div>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col justify-center items-center bg-cream rounded-2xl p-4 min-w-[100px] text-center border border-gray-100">
                      <span className="text-brand-teal font-black text-3xl uppercase">28</span>
                      <span className="text-dark-800 font-bold text-sm uppercase tracking-widest">Mar</span>
                      <span className="text-dark-800/40 font-medium text-xs mt-1">2026</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2.5 py-1 bg-brand-teal/10 text-brand-teal text-[9px] font-bold uppercase tracking-wider rounded">Community</span>
                        <span className="px-2.5 py-1 bg-navy/10 text-navy text-[9px] font-bold uppercase tracking-wider rounded">Free Entry</span>
                      </div>
                      <h3 className="font-black text-dark-800 text-xl sm:text-2xl mb-3 uppercase group-hover:text-brand-teal transition-colors">
                        KNAWP First Community Event
                      </h3>
                      <p className="text-dark-800/60 text-sm mb-5 leading-relaxed">
                        A celebration of community, connection, and a powerful beginning. Join us for food, local music, and the official launch of our empowerment programs.
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-dark-800/70">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-brand-teal" />
                          10:00 AM - 4:00 PM
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-brand-teal" />
                          Newcastle Central Park
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Card 2 (Placeholder) */}
                <div className="bg-white/50 rounded-3xl p-6 sm:p-8 border border-gray-200 border-dashed relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row gap-6 items-center justify-center text-center sm:text-left opacity-60">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-800 text-lg uppercase mb-1">More Events Coming Soon</h3>
                      <p className="text-dark-800/60 text-sm">We are busy planning our next gatherings. Check back later or follow our social media for updates.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Sticky Sidebar */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  alt="Community Event" 
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110" 
                  src="https://i.ibb.co/Pzc82WVY/1771954802701.jpg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"></div>
                
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur p-3 rounded-2xl text-center shadow-lg">
                  <span className="block text-brand-teal font-black text-2xl leading-none">28</span>
                  <span className="block text-navy font-bold text-[10px] uppercase tracking-widest mt-1">Mar</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="px-3 py-1.5 bg-brand-teal text-white text-[10px] font-bold uppercase tracking-widest inline-block mb-4 rounded shadow-sm">
                    Featured Event
                  </span>
                  <h3 className="text-3xl font-black text-white uppercase mb-3 leading-tight">
                    First Community Event
                  </h3>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">Be part of history as we launch KNAWP and bring the Newcastle community together for the first time.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="mailto:hello@knawp.org?subject=RSVP%20First%20Event" className="inline-flex items-center justify-center gap-2 bg-brand-teal text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-none hover:bg-white hover:text-navy transition-colors text-center">
                      RSVP Now
                    </a>
                    <Link to="/volunteer" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-none hover:bg-white/20 transition-colors text-center border border-white/20">
                      Volunteer <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
