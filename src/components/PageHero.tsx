import React from 'react';
import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy overflow-hidden">
      {image && (
        <div className="absolute inset-0 opacity-30">
          <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent"></div>
        </div>
      )}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
            <span className="text-brand-teal font-bold tracking-[0.25em] text-[10px] sm:text-xs uppercase">
              {subtitle}
            </span>
            <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight break-words">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
