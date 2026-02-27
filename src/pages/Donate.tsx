import React from 'react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { Heart, ShieldCheck, TrendingUp, Mail } from 'lucide-react';

export default function Donate() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-teal selection:text-dark-900 overflow-x-hidden w-full relative bg-dark-900">
      <Header />
      <PageHero title="Donate" subtitle="Fuel The Movement" image="https://i.ibb.co/0yBNCPCP/rnb-gathering-1772031387245.png" />

      <main className="flex-grow py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          
          {/* Intro */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16 sm:mb-24"
          >
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] uppercase break-words">
              YOUR SUPPORT <span className="text-brand-teal">STARTS SOMETHING</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mt-6 max-w-2xl mx-auto text-lg">
              KNAWP is a brand new initiative. Every single contribution directly funds our community events, empowerment programs, and welfare support initiatives in Newcastle.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Impact Tiers */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-brand-teal"></div>
                <span className="text-brand-teal font-bold tracking-[0.25em] text-[10px] uppercase">
                  The Impact of Your Gift
                </span>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
                {[
                  { amount: "R100", impact: "Supports logistics for a local community event." },
                  { amount: "R250", impact: "Funds materials for a youth skills workshop." },
                  { amount: "R500", impact: "Provides essential groceries for a family in need." },
                  { amount: "R1,000", impact: "Sponsors a full mentorship program for one youth." }
                ].map((tier, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-brand-teal/50 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-black text-brand-teal group-hover:scale-110 transition-transform origin-left">
                        {tier.amount}
                      </div>
                      <Heart className="w-5 h-5 text-white/20 group-hover:text-brand-teal transition-colors" />
                    </div>
                    <div className="text-white/70 text-sm leading-relaxed">
                      {tier.impact}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <ShieldCheck className="w-8 h-8 text-brand-teal shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-2">100% Transparent</h4>
                    <p className="text-white/50 text-sm">We ensure every Rand is accounted for and goes directly to community projects.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <TrendingUp className="w-8 h-8 text-brand-teal shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-2">Long-term Impact</h4>
                    <p className="text-white/50 text-sm">We focus on sustainable empowerment, not just temporary relief.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Donation Methods */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl"
            >
              <h3 className="text-xl sm:text-2xl font-black text-dark-800 uppercase mb-2 break-words">How to Donate</h3>
              <p className="text-dark-800/60 text-sm mb-8">Our online payment gateway is currently being set up. In the meantime, you can support us via direct bank transfer.</p>

              <div className="bg-cream rounded-2xl p-6 border border-gray-200 mb-8">
                <h4 className="font-bold text-navy uppercase text-xs tracking-wider mb-4">Bank Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-dark-800/60">Bank:</span>
                    <span className="font-bold text-dark-800">FNB</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-dark-800/60">Account Name:</span>
                    <span className="font-bold text-dark-800">KNAWP NPO</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-dark-800/60">Account Number:</span>
                    <span className="font-bold text-dark-800">12345678900</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-800/60">Branch Code:</span>
                    <span className="font-bold text-dark-800">250655</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-dark-800/60 text-xs mb-4">Please use your Name or Company as the reference. Email proof of payment to receive a receipt.</p>
                <a href="mailto:hello@knawp.org" className="w-full inline-flex items-center justify-center gap-2 bg-brand-teal text-white font-bold text-sm uppercase tracking-wider py-4 rounded-xl hover:bg-navy transition-colors duration-300 shadow-lg">
                  <Mail className="w-4 h-4" /> Email Proof of Payment
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
