import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, MessageCircle, Link2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: '1',
    title: "KNAWP Officially Launches to Transform Newcastle",
    author: "KNAWP Editorial Team",
    date: "Feb 28, 2026",
    dateline: "NEWCASTLE, KZN",
    category: "News",
    image: "https://i.ibb.co/ksHdb78G/IMG-5383-2.jpg",
    lead: "In a landmark moment for community development, local visionary Sphe Dlamini has officially unveiled Keep Newcastle Alive With Possibilities (KNAWP), a grassroots movement aimed at bridging the gap between raw potential and real-world opportunity.",
    paragraph: "Recognising the untapped talent and the pressing need for structured support systems, the organization will focus on three core areas: community events that foster unity, support initiatives for those facing hardship, and empowerment programs designed to build essential life and career skills. The movement is already gathering momentum, with local volunteers and community leaders stepping forward to contribute to the vision.",
    quote: "Our goal is not just to provide temporary relief, but to build sustainable pathways to success for everyone in Newcastle. We envision a future defined by opportunity, dignity, and hope."
  },
  {
    id: '2',
    title: "Digital Skills Bootcamp Set to Empower Local Youth",
    author: "KNAWP Education Desk",
    date: "Mar 10, 2026",
    dateline: "NEWCASTLE, KZN",
    category: "Education",
    image: "https://i.ibb.co/XfB6zrvd/Reskill-Group-Huddle.jpg",
    lead: "Addressing the critical need for tech literacy in the modern job market, KNAWP has announced its inaugural Digital Skills Bootcamp, a comprehensive program designed to equip young residents with essential computer and coding skills.",
    paragraph: "The six-week intensive course will cover everything from basic computer literacy to introductory web development and digital marketing. Partnering with local tech professionals, the initiative aims to make Newcastle's youth highly competitive in the digital economy. Participants will also receive mentorship and career guidance to help them navigate their professional journeys.",
    quote: "In today's fast-paced world, digital literacy is no longer a luxury—it's a necessity. By equipping our youth with the right tools, we can unlock endless possibilities for their future."
  },
  {
    id: '3',
    title: "Community Food Drive Delivers Hope to Vulnerable Families",
    author: "KNAWP Outreach Team",
    date: "Mar 22, 2026",
    dateline: "NEWCASTLE, KZN",
    category: "Outreach",
    image: "https://i.ibb.co/0yBNCPCP/rnb-gathering-1772031387245.png",
    lead: "Demonstrating the power of collective action, KNAWP's recent community food and clothing drive successfully provided essential supplies to over 50 families facing economic hardship across Newcastle.",
    paragraph: "The initiative saw an overwhelming response from local businesses and residents who donated non-perishable food items, winter clothing, and hygiene products. Volunteers worked tirelessly over the weekend to sort and distribute the care packages, ensuring that the most vulnerable members of the community received immediate relief during these challenging times.",
    quote: "It's incredible to see what we can achieve when we come together. The gratitude from the families we helped is a powerful reminder of why this work is so vital to our community's spirit."
  }
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col font-sans selection:bg-brand-teal selection:text-dark-900 overflow-x-hidden w-full relative bg-cream">
        <Header />
        <main className="flex-grow flex items-center justify-center py-32">
          <div className="text-center">
            <h1 className="text-4xl font-black text-dark-800 mb-4 uppercase">Post Not Found</h1>
            <p className="text-dark-800/60 mb-8">The article you are looking for does not exist.</p>
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-teal font-bold uppercase tracking-wider hover:text-navy transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const shareUrl = encodeURIComponent(window.location.origin + '/blog/' + post.id);
  const shareText = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-teal selection:text-dark-900 overflow-x-hidden w-full relative bg-cream">
      <Header />
      
      <main className="flex-grow pt-24 sm:pt-32 pb-16 sm:pb-24 lg:pb-32">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-8 sm:mb-12"
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-dark-800/60 hover:text-brand-teal font-bold text-xs uppercase tracking-wider transition-colors mb-8 sm:mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-brand-teal text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-none">
                {post.category}
              </span>
              <span className="text-dark-800/40 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dark-800 leading-[1.05] uppercase mb-8">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between border-y border-gray-200 py-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-dark-800">Written By</p>
                  <p className="text-sm text-dark-800/70">{post.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-dark-800/60 hidden sm:inline-block mr-2">Share</span>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy hover:bg-brand-teal hover:text-white transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy hover:bg-brand-teal hover:text-white transition-colors"
                  aria-label="Share on X (Twitter)"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href={`https://api.whatsapp.com/send?text=${shareText} ${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy hover:bg-brand-teal hover:text-white transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.origin + '/blog/' + post.id);
                    alert('Link copied to clipboard!');
                  }}
                  className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy hover:bg-brand-teal hover:text-white transition-colors"
                  aria-label="Copy Link"
                >
                  <Link2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-xl mb-12 sm:mb-16"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="object-cover object-top w-full h-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:text-dark-800 prose-p:text-dark-800/80 prose-p:leading-relaxed prose-a:text-brand-teal hover:prose-a:text-navy prose-strong:text-dark-800 prose-strong:font-bold"
          >
            <p className="text-brand-teal text-xs font-bold uppercase tracking-[0.2em] mb-4">
              {post.dateline}
            </p>
            <p className="font-semibold text-xl text-navy mb-6">
              {post.lead}
            </p>
            <p className="mb-8">
              {post.paragraph}
            </p>
            <blockquote className="border-l-4 border-brand-teal pl-6 italic text-navy/90 my-8 text-2xl font-medium">
              "{post.quote}"
              <footer className="text-sm font-bold uppercase tracking-wider text-brand-teal mt-4">— Sphe Dlamini, Founder</footer>
            </blockquote>
          </motion.div>
          
        </article>
      </main>

      <Footer />
    </div>
  );
}
