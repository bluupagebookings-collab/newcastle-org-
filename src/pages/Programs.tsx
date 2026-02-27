import React from 'react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { ArrowRight, Code, Briefcase, BookOpen, Palette } from 'lucide-react';
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

      <main className="flex-grow py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 sm:mb-20 text-center"
          >
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-dark-800 leading-[1.05] uppercase break-words">
              BUILDING FUTURES <span className="text-brand-teal">ACROSS NEWCASTLE</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-dark-800/60 mt-6 max-w-2xl mx-auto text-lg">
              Our structured programs are designed to provide tangible skills, mentorship, and support to the community. We focus on long-term growth and self-reliance.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8"
          >
            {programs.map((program, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
                className={`flex flex-col h-full p-8 sm:p-10 rounded-3xl border transition-all duration-300 hover:shadow-xl ${program.active ? 'bg-[#faf8f5] border-brand-teal/30 shadow-md' : 'bg-white border-gray-100 hover:border-brand-teal/20'}`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${program.active ? 'bg-brand-teal text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <program.icon className="w-7 h-7" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap ${program.active ? 'bg-navy text-white shadow-sm' : 'bg-gray-100 text-gray-500'}`}>
                    {program.status}
                  </span>
                </div>
                
                <div className="mb-4">
                  <span className="text-brand-teal text-[10px] font-bold uppercase tracking-wider mb-2 block">{program.category}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-dark-800 uppercase tracking-wide break-words">{program.title}</h3>
                </div>
                
                <p className="text-base text-dark-800/70 leading-relaxed flex-grow mb-8">
                  {program.desc}
                </p>
                
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 pt-6 border-t border-gray-200/60 mt-auto">
                  <div>
                    <span className="block text-[10px] text-dark-800/40 font-bold uppercase tracking-wider mb-1">Duration</span>
                    <span className="block text-sm font-medium text-dark-800">{program.duration}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-dark-800/40 font-bold uppercase tracking-wider mb-1">Target Audience</span>
                    <span className="block text-sm font-medium text-dark-800">{program.audience}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-20 bg-navy rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase mb-4 break-words">Want to facilitate a program?</h3>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                We are always looking for skilled professionals, teachers, and mentors in Newcastle who want to give back by leading or assisting with our programs.
              </p>
              <Link className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-teal text-white font-bold text-sm uppercase tracking-wider rounded-none hover:bg-white hover:text-navy transition-colors duration-300 shadow-lg" to="/volunteer">
                Become a Facilitator
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
