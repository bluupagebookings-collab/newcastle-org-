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
      img: "https://i.ibb.co/TDCX7wBW/rnb-gathering-1772054012867.jpg",
      reverse: false
    },
    {
      id: "support",
      title: "Support Initiatives",
      subtitle: "Welfare & Care",
      icon: Heart,
      desc: "Hardship can strike anyone, and when it does, the community must stand together. Our support initiatives provide direct, tangible assistance to individuals and families facing difficult times in Newcastle. Whether it's food drives, winter clothing distributions, or emergency relief funds, we ensure that our most vulnerable neighbors are not left behind.",
      bullets: ["Food and essential supplies distribution", "Emergency relief for families", "Winter warmth drives", "Mental health awareness campaigns"],
      img: "https://i.ibb.co/0yBNCPCP/rnb-gathering-1772031387245.png",
      reverse: true
    },
    {
      id: "empowerment",
      title: "Empowerment Programs",
      subtitle: "Skills & Confidence",
      icon: Zap,
      desc: "True change comes from empowering individuals to change their own lives. Our empowerment programs focus on equipping the youth and unemployed adults with the skills, knowledge, and confidence they need to succeed. We offer workshops ranging from digital literacy and entrepreneurship to trade skills and CV writing.",
      bullets: ["Digital literacy and coding workshops", "Entrepreneurship and business skills", "Career guidance and CV writing", "Leadership and mentorship programs"],
      img: "https://i.ibb.co/XfB6zrvd/Reskill-Group-Huddle.jpg",
      reverse: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-teal selection:text-dark-900 overflow-x-hidden w-full relative bg-cream">
      <Header />
      <PageHero title="Our Pillars" subtitle="The Foundation of KNAWP" image="https://i.ibb.co/Hfb2j30m/rnb-gathering-1772031343356.png" />

      <main className="flex-grow py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 sm:mb-24 text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark-800 leading-[1.05] max-w-3xl mx-auto uppercase">
              THREE PILLARS OF <span className="text-brand-teal">CHANGE</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-dark-800/60 mt-6 max-w-2xl mx-auto text-lg">
              Everything we do is built upon these three foundational pillars, designed to uplift, support, and empower the Newcastle community.
            </motion.p>
          </motion.div>

          <div className="space-y-24 sm:space-y-32">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={pillar.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${pillar.reverse ? 'lg:flex-row-reverse' : ''}`}
              >
                <motion.div variants={fadeUp} className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ${pillar.reverse ? 'lg:order-2' : ''}`}>
                  <img 
                    src={pillar.img} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-3 shadow-lg">
                    <pillar.icon className="w-5 h-5 text-brand-teal" />
                    <span className="font-bold text-navy uppercase tracking-wider text-xs">Pillar 0{idx + 1}</span>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className={pillar.reverse ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px bg-brand-teal"></div>
                    <span className="text-brand-teal font-bold tracking-[0.25em] text-[10px] uppercase">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-dark-800 mb-6 uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-dark-800/70 text-lg leading-relaxed mb-8">
                    {pillar.desc}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {pillar.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
                        </div>
                        <span className="text-dark-800/80 font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={pillar.id === 'events' ? '/events' : '/programs'} className="inline-flex items-center gap-2 text-brand-teal font-bold text-sm uppercase tracking-wider hover:text-navy transition-colors">
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
