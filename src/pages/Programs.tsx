import React from 'react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { ArrowRight, Code, Briefcase, BookOpen, Palette, Accessibility } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const programs = [
    {
      title: "Mobility & Independence",
      category: "Community Welfare",
      status: "Active",
      icon: Accessibility,
      desc: "Our flagship initiative providing free, high-quality wheelchairs and mobility aids to disabled individuals across Newcastle. We believe mobility is a fundamental right, and this program aims to restore independence, dignity, and accessibility to those who need it most.",
      duration: "Ongoing",
      audience: "Disabled Individuals",
      active: true
    },
    {
      title: "Digital Skills Bootcamp",
      category: "Skills & Employment",
      status: "Launching Soon",
      icon: Code,
      desc: "A 6-week intensive bootcamp teaching basic to intermediate digital skills, including computer literacy, basic coding (HTML/CSS), and navigating online workspaces. Designed to make Newcastle youth highly employable in the modern economy.",
      duration: "6 Weeks",
      audience: "Youth (18-35)",
      active: true
    },
    {
      title: "Entrepreneurship Hub",
      category: "Skills & Employment",
      status: "In Planning",
      icon: Briefcase,
      desc: "A mentorship and resource program for aspiring local business owners. We provide guidance on business registration, financial literacy, marketing, and connect young entrepreneurs with established business leaders in KZN.",
      duration: "Ongoing",
      audience: "Aspiring Entrepreneurs",
      active: false
    },
    {
      title: "Future Leaders Mentorship",
      category: "Youth Development",
      status: "In Planning",
      icon: BookOpen,
      desc: "Pairing high school students with professionals and university students. This program focuses on career guidance, university application assistance, and building essential soft skills like public speaking and leadership.",
      duration: "6 Months",
      audience: "High School Students",
      active: false
    },
    {
      title: "Creative Arts Workshop",
      category: "Arts & Culture",
      status: "In Planning",
      icon: Palette,
      desc: "Celebrating the rich cultural heritage of Newcastle through art. These weekend workshops cover painting, traditional crafts, music production, and creative writing, culminating in a community showcase.",
      duration: "Weekends",
      audience: "All Ages",
      active: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-teal selection:text-dark-900 overflow-x-hidden w-full relative bg-white">
      <Header />
      <PageHero title="Programs" subtitle="Empowering Newcastle" image="https://i.ibb.co/XfB6zrvd/Reskill-Group-Huddle.jpg" />

      <main className="flex-grow py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-brand-teal"></div>
              <span className="text-brand-teal font-black tracking-[0.3em] text-[10px] uppercase">
                Our Initiatives
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-7xl font-black text-dark-900 leading-[0.9] uppercase tracking-tighter">
              ENGINEERING <span className="text-brand-teal">FUTURES</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {programs.map((program, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
                className={`group p-10 border ${program.active ? 'bg-navy text-white' : 'bg-cream border-gray-200'} transition-all duration-500 hover:border-brand-teal`}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 ${program.active ? 'bg-brand-teal text-navy' : 'bg-gray-200 text-gray-600'}`}>
                    {program.status}
                  </span>
                  <span className="text-4xl font-black opacity-20">0{idx + 1}</span>
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-brand-teal transition-colors">{program.title}</h4>
                <p className={`text-sm leading-relaxed mb-8 ${program.active ? 'text-white/70' : 'text-dark-800/70'}`}>
                  {program.desc}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                  <div>
                    <span className="block text-[10px] text-brand-teal font-black uppercase tracking-widest mb-1">Duration</span>
                    <span className="block text-sm font-medium">{program.duration}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-brand-teal font-black uppercase tracking-widest mb-1">Audience</span>
                    <span className="block text-sm font-medium">{program.audience}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mt-20 bg-navy p-12 text-center"
          >
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">Want to facilitate a program?</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
              We are always looking for skilled professionals, teachers, and mentors in Newcastle who want to give back by leading or assisting with our programs.
            </p>
            <Link className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-teal text-navy font-black text-xs uppercase tracking-widest hover:bg-white transition-all duration-300" to="/volunteer">
              Become a Facilitator
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
