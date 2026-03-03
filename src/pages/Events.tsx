import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, ArrowRight, Clock, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import PosterSlider from '../components/PosterSlider';
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

      <main className="flex-grow py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Featured Event Poster */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-5 aspect-[4/5] bg-navy flex items-center justify-center border border-white/10"
            >
              <PosterSlider className="object-cover w-full h-full" />
            </motion.div>

            {/* Events List */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col gap-10"
            >
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-px bg-brand-teal"></div>
                  <span className="text-brand-teal font-black tracking-[0.3em] text-[10px] uppercase">
                    Upcoming Gatherings
                  </span>
                </div>
                <h2 className="text-3xl lg:text-7xl font-black text-dark-900 leading-[0.9] uppercase tracking-tighter">
                  WHAT'S HAPPENING <span className="text-brand-teal">IN NEWCASTLE</span>
                </h2>
                <p className="text-dark-800/70 text-lg mt-8 max-w-xl leading-relaxed">
                  Join us at our upcoming events. Connect with the community, celebrate our culture, and be part of the movement.
                </p>
              </motion.div>
              
              <motion.div variants={fadeUp} className="space-y-8">
                {/* Event Card 1 */}
                <div className="bg-white p-10 border border-gray-200 group hover:border-brand-teal transition-colors">
                  <div className="flex gap-8">
                    <div className="flex flex-col items-center bg-cream p-6 min-w-[100px] text-center border border-gray-200">
                      <span className="text-brand-teal font-black text-4xl uppercase tracking-tighter">13</span>
                      <span className="text-dark-900 font-black text-xs uppercase tracking-widest mt-2">Mar</span>
                      <span className="text-dark-900/40 font-black text-[10px] mt-1">2026</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-navy text-white">Community</span>
                        <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-brand-teal text-navy">Donation / R100 Voucher</span>
                      </div>
                      <h3 className="font-black text-dark-900 text-2xl mb-6 uppercase tracking-tight group-hover:text-brand-teal transition-colors">
                        KNAWP Event Hosted by Sphe Dlamini & Friends
                      </h3>
                      <p className="text-dark-800/70 text-sm mb-8 leading-relaxed">
                        Join us for the KNAWP Event. Entry fee is a donation or an R100 voucher to buy alcohol inside. No coolerboxes allowed. Food and alcohol will be sold at the venue.
                      </p>
                      <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-dark-900 uppercase tracking-widest mb-10">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-brand-teal" />
                          Friday
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand-teal" />
                          Afro Bowl, Madadeni Sec 6
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <a href="mailto:info@keepnnalive.co.za?subject=RSVP%20KNAWP%20Event" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-teal text-navy font-black text-xs uppercase tracking-widest hover:bg-navy hover:text-white transition-all duration-300">
                          RSVP
                        </a>
                        <Link to="/volunteer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy text-white font-black text-xs uppercase tracking-widest hover:bg-brand-teal hover:text-navy transition-all duration-300">
                          Volunteer
                        </Link>
                      </div>
                      
                      <div className="mt-10 pt-8 border-t border-gray-200">
                        <p className="text-dark-900 text-sm mb-6 font-black uppercase tracking-tight">Can't make it to the event? You can still support the movement.</p>
                        <Link to="/donate" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream text-brand-teal border border-brand-teal font-black text-xs uppercase tracking-widest hover:bg-brand-teal hover:text-navy transition-all duration-300">
                          Donate Instead <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Card 2 (Placeholder) */}
                <div className="bg-cream p-10 border border-gray-200 border-dashed">
                  <div className="flex gap-8 items-center opacity-60">
                    <div className="w-20 h-20 bg-gray-200 flex items-center justify-center shrink-0">
                      <Calendar className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-black text-dark-900 text-xl uppercase tracking-tight mb-2">More Events Coming Soon</h3>
                      <p className="text-dark-800/70 text-sm">We are busy planning our next gatherings. Check back later or follow our social media for updates.</p>
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
