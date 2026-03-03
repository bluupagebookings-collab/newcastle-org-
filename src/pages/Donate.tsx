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

      <main className="flex-grow py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          
          {/* Intro */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-brand-teal"></div>
              <span className="text-brand-teal font-black tracking-[0.3em] text-[10px] uppercase">
                Fuel The Movement
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-10">
              YOUR SUPPORT <span className="text-brand-teal">STARTS SOMETHING</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              KNAWP is a brand new initiative. Every single contribution directly funds our community events, empowerment programs, and welfare support initiatives in Newcastle.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Impact Tiers */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <div className="grid sm:grid-cols-2 gap-8 mb-16">
                {[
                  { amount: "R100", impact: "Supports logistics for a local community event." },
                  { amount: "R250", impact: "Funds materials for a youth skills workshop." },
                  { amount: "R500", impact: "Provides essential groceries for a family in need." },
                  { amount: "R1,000", impact: "Sponsors a full mentorship program for one youth." }
                ].map((tier, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="bg-white/5 border border-white/10 p-10 hover:border-brand-teal transition-colors">
                    <div className="text-5xl font-black text-brand-teal mb-6 tracking-tighter">{tier.amount}</div>
                    <div className="text-white/70 text-sm leading-relaxed">{tier.impact}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-6">
                  <ShieldCheck className="w-12 h-12 text-brand-teal shrink-0" strokeWidth={1} />
                  <div>
                    <h4 className="text-white font-black uppercase tracking-tight mb-2">100% Transparent</h4>
                    <p className="text-white/50 text-sm">Every Rand is accounted for and goes directly to community projects.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <TrendingUp className="w-12 h-12 text-brand-teal shrink-0" strokeWidth={1} />
                  <div>
                    <h4 className="text-white font-black uppercase tracking-tight mb-2">Long-term Impact</h4>
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
              className="lg:col-span-5 bg-white p-12"
            >
              <h3 className="text-3xl font-black text-dark-900 uppercase tracking-tighter mb-4">How to Donate</h3>
              <p className="text-dark-800/70 text-sm mb-10">Our online payment gateway is currently being set up. In the meantime, you can support us via direct bank transfer.</p>

              <div className="bg-cream p-8 border border-gray-200 mb-10">
                <h4 className="font-black text-dark-900 uppercase text-xs tracking-widest mb-8">Bank Details</h4>
                <div className="space-y-6 text-sm">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="text-dark-800/60 font-black uppercase tracking-widest text-[10px]">Bank</span>
                    <span className="font-black text-dark-900">FNB</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="text-dark-800/60 font-black uppercase tracking-widest text-[10px]">Account Name</span>
                    <span className="font-black text-dark-900">KNAWP NPO</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="text-dark-800/60 font-black uppercase tracking-widest text-[10px]">Account Number</span>
                    <span className="font-black text-dark-900">12345678900</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-800/60 font-black uppercase tracking-widest text-[10px]">Branch Code</span>
                    <span className="font-black text-dark-900">250655</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-dark-800/70 text-xs mb-8">Please use your Name or Company as the reference. Email proof of payment to receive a receipt.</p>
                <a href="mailto:hello@knawp.org" className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-brand-teal text-navy font-black text-xs uppercase tracking-widest hover:bg-navy hover:text-white transition-all duration-300">
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
