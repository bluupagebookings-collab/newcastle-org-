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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Featured Event Poster (Left Side) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[4/5] rounded-none overflow-hidden shadow-2xl group"
            >
              <img 
                alt="Community Event" 
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" 
                src="https://i.ibb.co/Pzc82WVY/1771954802701.jpg"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Events List (Right Side) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-black text-dark-800 mb-2 leading-[1.05] uppercase break-words">
                WHAT'S HAPPENING
                <br />
                <span className="text-brand-teal">IN NEWCASTLE</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-dark-800/60 mb-6 text-base max-w-xl">
                Join us at our upcoming events. Connect with the community, celebrate our culture, and be part of the movement.
              </motion.p>
              
              <motion.div variants={fadeUp} className="space-y-4">
                {/* Event Card 1 */}
                <div className="bg-white p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:border-brand-teal transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-teal"></div>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col justify-center items-center bg-cream p-4 min-w-[90px] text-center border border-gray-100">
                      <span className="text-brand-teal font-black text-2xl uppercase">13</span>
                      <span className="text-dark-800 font-bold text-xs uppercase tracking-widest">Mar</span>
                      <span className="text-dark-800/40 font-medium text-[10px] mt-1">2026</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-0.5 bg-brand-teal/10 text-brand-teal text-[9px] font-bold uppercase tracking-wider">Community</span>
                        <span className="px-2 py-0.5 bg-navy/10 text-navy text-[9px] font-bold uppercase tracking-wider">Donation / R100 Voucher</span>
                      </div>
                      <h3 className="font-black text-dark-800 text-lg mb-2 uppercase group-hover:text-brand-teal transition-colors break-words">
                        KNAWP Event Hosted by Sphe Dlamini & Friends
                      </h3>
                      <p className="text-dark-800/60 text-sm mb-4 leading-relaxed">
                        Join us for the KNAWP Event. Entry fee is a donation or an R100 voucher to buy alcohol inside. No coolerboxes allowed. Food and alcohol will be sold at the venue.
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-dark-800/70 mb-6">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-brand-teal" />
                          Friday
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                          Afro Bowl, Madadeni Sec 6
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 items-center">
                        <a href="mailto:info@keepnnalive.co.za?subject=RSVP%20KNAWP%20Event" className="inline-flex items-center justify-center gap-2 bg-brand-teal text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-none hover:bg-navy transition-colors text-center">
                          RSVP
                        </a>
                        <Link to="/volunteer" className="inline-flex items-center justify-center gap-2 bg-navy text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-none hover:bg-brand-teal transition-colors text-center">
                          Volunteer
                        </Link>
                      </div>
                      
                      <div className="mt-5 pt-5 border-t border-gray-100">
                        <p className="text-dark-800/80 text-sm mb-3 font-medium">Can't make it to the event? You can still support the movement.</p>
                        <Link to="/donate" className="inline-flex items-center justify-center gap-2 bg-cream text-brand-teal border border-brand-teal font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-none hover:bg-brand-teal hover:text-white transition-colors text-center">
                          Donate Instead <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Card 2 (Placeholder) */}
                <div className="bg-cream p-6 border border-gray-200 border-dashed relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row gap-6 items-center justify-center text-center sm:text-left opacity-60">
                    <div className="w-12 h-12 bg-gray-200 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-800 text-base uppercase mb-1">More Events Coming Soon</h3>
                      <p className="text-dark-800/60 text-xs">We are busy planning our next gatherings. Check back later or follow our social media for updates.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
