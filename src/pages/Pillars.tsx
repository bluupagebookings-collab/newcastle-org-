import React from 'react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { ArrowRight, Heart, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pillars() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const pillars = [
    {
      id: "events",
      title: "Community Events",
      subtitle: "Culture & Unity",
      icon: Users,
      desc: "We believe that a united community is a strong community. Our events are designed to bring people from all walks of life together to celebrate our shared culture, creativity, and humanity. From local music festivals to art exhibitions and community markets, we create safe, vibrant spaces where Newcastle residents can connect, network, and build lasting relationships.",
      bullets: ["Cultural festivals and gatherings", "Local artist showcases", "Community markets and fairs", "Networking and social events"],
      reverse: false
    },
    {
      id: "support",
      title: "Support Initiatives",
      subtitle: "Welfare & Care",
      icon: Heart,
      desc: "Hardship can strike anyone, and when it does, the community must stand together. Our support initiatives provide direct, tangible assistance to individuals and families facing difficult times in Newcastle. Whether it's food drives, winter clothing distributions, or emergency relief funds, we ensure that our most vulnerable neighbors are not left behind.",
      bullets: ["Food and essential supplies distribution", "Emergency relief for families", "Winter warmth drives", "Mental health awareness campaigns"],
      reverse: true
    },
    {
      id: "empowerment",
      title: "Empowerment Programs",
      subtitle: "Skills & Confidence",
      icon: Zap,
      desc: "True change comes from empowering individuals to change their own lives. Our empowerment programs focus on equipping the youth and unemployed adults with the skills, knowledge, and confidence they need to succeed. We offer workshops ranging from digital literacy and entrepreneurship to trade skills and CV writing.",
      bullets: ["Digital literacy and coding workshops", "Entrepreneurship and business skills", "Career guidance and CV writing", "Leadership and mentorship programs"],
      reverse: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-teal selection:text-dark-900 overflow-x-hidden w-full relative bg-cream">
      <Header />
      <PageHero title="Our Pillars" subtitle="The Foundation of KNAWP" />

      <main className="flex-grow py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
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
                Our Foundation
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-7xl font-black text-dark-900 leading-[0.9] uppercase tracking-tighter">
              THREE PILLARS OF <span className="text-brand-teal">CHANGE</span>
            </motion.h2>
          </motion.div>

          <div className="space-y-32">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={pillar.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid lg:grid-cols-12 gap-16 items-center"
              >
                <motion.div variants={fadeUp} className="lg:col-span-5 bg-navy aspect-square flex items-center justify-center text-brand-teal">
                  <pillar.icon className="w-40 h-40" strokeWidth={1} />
                </motion.div>

                <motion.div variants={fadeUp} className="lg:col-span-7">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-px bg-brand-teal"></div>
                    <span className="text-brand-teal font-black tracking-[0.3em] text-[10px] uppercase">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <h3 className="text-4xl font-black text-dark-900 mb-8 uppercase tracking-tighter">
                    {pillar.title}
                  </h3>
                  <p className="text-dark-800/70 text-lg leading-relaxed mb-10">
                    {pillar.desc}
                  </p>
                  <ul className="space-y-6 mb-12">
                    {pillar.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-brand-teal mt-2.5 shrink-0"></div>
                        <span className="text-dark-900 font-black uppercase tracking-tight text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={pillar.id === 'events' ? '/events' : '/programs'} className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-black text-xs uppercase tracking-widest hover:bg-brand-teal hover:text-navy transition-all duration-300">
                    Explore {pillar.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
