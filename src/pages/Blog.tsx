import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

const blogPosts = [
  {
    id: '1',
    title: "KNAWP Officially Launches to Transform Newcastle",
    excerpt: "In a landmark moment for community development, local visionary Sphe Dlamini has officially unveiled Keep Newcastle Alive With Possibilities (KNAWP)...",
    date: "Feb 28, 2026",
    author: "KNAWP Editorial Team",
    category: "News",
    image: "https://i.ibb.co/ksHdb78G/IMG-5383-2.jpg"
  },
  {
    id: '2',
    title: "Digital Skills Bootcamp Set to Empower Local Youth",
    excerpt: "Addressing the critical need for tech literacy in the modern job market, KNAWP has announced its inaugural Digital Skills Bootcamp...",
    date: "Mar 10, 2026",
    author: "KNAWP Education Desk",
    category: "Education",
    image: "https://i.ibb.co/XfB6zrvd/Reskill-Group-Huddle.jpg"
  },
  {
    id: '3',
    title: "Community Food Drive Delivers Hope to Vulnerable Families",
    excerpt: "Demonstrating the power of collective action, KNAWP's recent community food and clothing drive successfully provided essential supplies to over 50 families...",
    date: "Mar 22, 2026",
    author: "KNAWP Outreach Team",
    category: "Outreach",
    image: "https://i.ibb.co/0yBNCPCP/rnb-gathering-1772031387245.png"
  }
];

export default function Blog() {
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
      <PageHero title="Blog" subtitle="News & Stories" image="https://i.ibb.co/ksHdb78G/IMG-5383-2.jpg" />

      <main className="flex-grow py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16 sm:mb-24"
          >
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-dark-800 leading-[1.05] uppercase break-words">
              LATEST <span className="text-brand-teal">UPDATES</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-dark-800/60 mt-6 max-w-2xl mx-auto text-lg">
              Stay up to date with the latest news, stories, and announcements from Keep Newcastle Alive With Possibilities.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id} 
                variants={fadeUp} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-teal text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-none">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-dark-800/60 text-xs font-medium mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-dark-800 mb-3 leading-tight group-hover:text-brand-teal transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-dark-800/70 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center gap-2 text-brand-teal font-bold text-xs uppercase tracking-wider hover:text-navy transition-colors mt-auto w-fit"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
