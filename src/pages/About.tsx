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
        {/* Founder Section */}
        <section className="py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              <motion.div variants={fadeUp} className="lg:col-span-5 relative px-4 sm:px-0">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    alt="Sphe Dlamini, Founder" 
                    className="object-cover object-top w-full h-full transition-all duration-700 hover:scale-105" 
                    src="https://i.ibb.co/ksHdb78G/IMG-5383-2.jpg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-xl">Sphe Dlamini</p>
                    <p className="text-brand-teal text-sm font-medium uppercase tracking-wider">Founder & Director</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="lg:col-span-6 lg:col-start-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-px bg-brand-teal"></div>
                  <span className="text-brand-teal font-bold tracking-[0.25em] text-[10px] uppercase">
                    A Movement Born in Newcastle
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl xl:text-5xl font-black text-dark-800 mb-6 sm:mb-8 leading-[1.05] uppercase break-words">
                  EVERY RESIDENT DESERVES
                  <br />
                  <span className="text-brand-teal">ACCESS TO OPPORTUNITY</span>
                </h2>
                <div className="text-dark-800/60 text-base leading-relaxed mb-8 space-y-4">
                  <p>
                    <strong className="text-dark-800">KNAWP (Keep Newcastle Alive With Possibilities)</strong> is a community organisation created to transform lives across Newcastle, KwaZulu-Natal. We believe that true community development starts from within, by empowering the people who live here.
                  </p>
                  <p>
                    From youth development to welfare support, from skills training to cultural events — everything we do is designed to help Newcastle thrive. We are not just an organization; we are a movement of passionate individuals dedicated to uplifting our hometown.
                  </p>
                  <p>
                    Born and raised in Newcastle, founder Sphe Dlamini has a deep connection to the community he calls home. Growing up, he saw both the challenges residents face and the incredible potential that often goes unrealised. This realization birthed KNAWP.
                  </p>
                </div>
                <div className="border-l-4 border-brand-teal pl-6 py-2 mb-10 bg-cream rounded-r-2xl shadow-sm">
                  <blockquote className="text-xl font-heading italic text-dark-800">
                    “We envision a Newcastle where every resident feels empowered to contribute — a future defined by opportunity, dignity, and hope.”
                  </blockquote>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-12 lg:gap-20"
            >
              <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-3xl backdrop-blur-sm">
                <Target className="w-12 h-12 text-brand-teal mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-4">Our Mission</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  To actively bridge the gap between potential and opportunity in Newcastle by providing accessible skills training, essential welfare support, and inclusive community events that foster unity and growth.
                </p>
              </motion.div>
              
              <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-3xl backdrop-blur-sm">
                <Eye className="w-12 h-12 text-brand-teal mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-4">Our Vision</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  A thriving, self-sustaining Newcastle where every individual has the resources, confidence, and community backing to achieve their dreams and contribute meaningfully to society.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 sm:py-24 lg:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-dark-800 uppercase break-words">
                Our Core <span className="text-brand-teal">Values</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-dark-800/60 max-w-2xl mx-auto">
                The principles that guide every decision we make and every program we launch.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: Users, title: "Community First", desc: "Everything we do is rooted in the needs and aspirations of the people of Newcastle." },
                { icon: Heart, title: "Compassion", desc: "We approach every challenge and every individual with deep empathy and understanding." },
                { icon: Target, title: "Empowerment", desc: "We don't just give handouts; we provide the tools for long-term self-reliance." },
                { icon: Eye, title: "Transparency", desc: "We operate with complete openness, ensuring every contribution directly impacts the community." }
              ].map((value, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mx-auto bg-brand-teal/10 rounded-full flex items-center justify-center mb-6 text-brand-teal">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-dark-800 mb-3 uppercase">{value.title}</h4>
                  <p className="text-dark-800/60 text-sm leading-relaxed">{value.desc}</p>
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
