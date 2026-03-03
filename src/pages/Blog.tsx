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
                News & Stories
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-7xl font-black text-dark-900 leading-[0.9] uppercase tracking-tighter mb-10">
              LATEST <span className="text-brand-teal">UPDATES</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-dark-800/70 text-lg max-w-2xl leading-relaxed">
              Stay up to date with the latest news, stories, and announcements from Keep Newcastle Alive With Possibilities.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id} 
                variants={fadeUp} 
                className="bg-white border border-gray-200 group hover:border-brand-teal transition-colors duration-300 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-navy text-white text-[10px] font-black uppercase tracking-widest px-4 py-2">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-6 text-[10px] font-black text-dark-900/40 uppercase tracking-widest mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-teal" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-brand-teal" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-dark-900 mb-6 leading-tight group-hover:text-brand-teal transition-colors uppercase tracking-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-dark-800/70 text-sm leading-relaxed mb-10 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center gap-3 text-brand-teal font-black text-xs uppercase tracking-widest hover:text-navy transition-all duration-300 mt-auto w-fit"
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
