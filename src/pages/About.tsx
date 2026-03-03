import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

export default function About() {
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
      <PageHero title="About Us" subtitle="Our Story" image="https://i.ibb.co/0yBNCPCP/rnb-gathering-1772031387245.png" />

      <main className="flex-grow">
        {/* Director Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              <motion.div variants={fadeUp} className="lg:col-span-5 relative">
                <div className="relative aspect-[3/4] rounded-none overflow-hidden shadow-2xl">
                  <img 
                    alt="Sphe Dlamini, Director" 
                    className="object-cover object-top w-full h-full" 
                    src="https://i.ibb.co/ksHdb78G/IMG-5383-2.jpg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="lg:col-span-6 lg:col-start-7">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-px bg-brand-teal"></div>
                  <span className="text-brand-teal font-black tracking-[0.3em] text-[10px] uppercase">
                    A Movement Born in Newcastle
                  </span>
                </div>
                <h2 className="text-4xl xl:text-6xl font-black text-dark-900 mb-10 leading-[0.9] uppercase tracking-tighter break-words">
                  ENGINEERING <span className="text-brand-teal">COMMUNITY</span>
                  <br />
                  <span className="text-brand-teal">IMPACT</span>
                </h2>
                <div className="text-dark-800/70 text-lg leading-relaxed mb-10 space-y-6">
                  <p>
                    <strong className="text-dark-800 font-black">KNAWP</strong> isn't just an NGO; it's a professional-grade community engine. Founded in 2026, we bridge the gap between untapped potential and real-world opportunity in Newcastle, KZN.
                  </p>
                  <p>
                    We combine the raw energy of youth with the strategic rigour of professional development. From mobility initiatives to digital skills training, we design solutions that are scalable, sustainable, and deeply human.
                  </p>
                </div>
                <div className="flex items-center gap-6 border-t border-gray-200 pt-8">
                  <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center">
                    <span className="text-white font-black text-xl">SD</span>
                  </div>
                  <div>
                    <p className="font-black text-dark-900 text-lg uppercase tracking-tight">
                      Sphe Dlamini
                    </p>
                    <p className="text-brand-teal text-[10px] uppercase tracking-[0.2em] font-bold mt-1">
                      Director
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 lg:py-32 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-12">
                <Target className="w-16 h-16 text-brand-teal mb-8" strokeWidth={1} />
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Our Mission</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  To bridge the gap between potential and opportunity in Newcastle by providing accessible skills training, essential welfare support, and inclusive community events that foster unity and growth.
                </p>
              </motion.div>
              
              <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-12">
                <Eye className="w-16 h-16 text-brand-teal mb-8" strokeWidth={1} />
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Our Vision</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  A thriving, self-sustaining Newcastle where every individual has the resources, confidence, and community backing to achieve their dreams and contribute meaningfully to society.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-7xl font-black text-dark-900 uppercase tracking-tighter">
                Our Core <span className="text-brand-teal">Values</span>
              </motion.h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: Users, title: "Community First", desc: "Rooted in the needs and aspirations of Newcastle." },
                { icon: Heart, title: "Compassion", desc: "Empathy and understanding in every action." },
                { icon: Target, title: "Empowerment", desc: "Tools for long-term self-reliance." },
                { icon: Eye, title: "Transparency", desc: "Openness in everything we do." }
              ].map((value, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-white p-10 border border-gray-200 text-center hover:border-brand-teal transition-colors">
                  <div className="w-20 h-20 mx-auto bg-navy rounded-full flex items-center justify-center mb-8 text-brand-teal">
                    <value.icon className="w-10 h-10" strokeWidth={1} />
                  </div>
                  <h4 className="text-xl font-black text-dark-900 mb-4 uppercase tracking-tight">{value.title}</h4>
                  <p className="text-dark-800/70 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
