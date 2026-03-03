import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, HeartHandshake, Users, Award, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

export default function Volunteer() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

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
      <PageHero title="Volunteer" subtitle="Join The Movement" />

      <main className="flex-grow py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          
          {/* Why Volunteer Section */}
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
                Join The Movement
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-7xl font-black text-dark-900 leading-[0.9] uppercase tracking-tighter mb-10">
              BE THE CHANGE IN <span className="text-brand-teal">NEWCASTLE</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-dark-800/70 text-lg max-w-2xl leading-relaxed">
              Volunteers are the heartbeat of KNAWP. By giving your time and skills, you directly impact the lives of people in our community.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
          >
            {[
              { icon: HeartHandshake, title: "Make an Impact", desc: "Be part of the movement from day one." },
              { icon: Users, title: "Connect", desc: "Collaborate with community-minded people." },
              { icon: Award, title: "Grow", desc: "Gain experience and new skills." },
              { icon: Sparkles, title: "Flexible", desc: "Contribute in ways that fit your schedule." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-10 border border-gray-200 hover:border-brand-teal transition-colors">
                <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mb-8 text-brand-teal">
                  <item.icon className="w-10 h-10" strokeWidth={1} />
                </div>
                <h4 className="font-black text-dark-900 mb-4 uppercase tracking-tight text-xl">{item.title}</h4>
                <p className="text-sm text-dark-800/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Application Form Section */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-5 relative aspect-[4/5] bg-navy flex flex-col items-center justify-center border border-white/10 p-12 text-center"
            >
              <HeartHandshake className="w-64 h-64 text-white/[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={1} />
              <div className="relative z-10 mt-auto w-full">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">Ready to step up?</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Fill out the application form and our volunteer coordinator will be in touch with you shortly to discuss how you can help.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-7 bg-white p-12 border border-gray-200"
            >
              <div className="mb-10">
                <h3 className="text-3xl font-black text-dark-900 uppercase tracking-tighter mb-2">Volunteer Application</h3>
                <p className="text-dark-800/70 text-sm">Tell us a bit about yourself and how you'd like to contribute.</p>
              </div>

              {submitSuccess ? (
                <div className="bg-brand-teal/10 border border-brand-teal text-navy px-10 py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-brand-teal mx-auto mb-6" />
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-2">Application Received!</h4>
                  <p className="text-dark-800/70 text-sm">Thank you for stepping up. We will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-dark-900 block">First Name</label>
                      <input required type="text" className="w-full bg-cream border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-brand-teal transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-dark-900 block">Last Name</label>
                      <input required type="text" className="w-full bg-cream border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-brand-teal transition-colors" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-dark-900 block">Email Address</label>
                      <input required type="email" className="w-full bg-cream border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-brand-teal transition-colors" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-dark-900 block">Phone Number</label>
                      <input required type="tel" className="w-full bg-cream border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-brand-teal transition-colors" placeholder="082 123 4567" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-dark-900 block">Area of Interest</label>
                    <select required defaultValue="" className="w-full bg-cream border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-brand-teal transition-colors appearance-none">
                      <option value="" disabled>Select how you want to help</option>
                      <option value="events">Event Setup & Coordination</option>
                      <option value="mentorship">Mentorship & Teaching</option>
                      <option value="welfare">Welfare & Distribution</option>
                      <option value="admin">Admin & Social Media</option>
                      <option value="other">Other Skills</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-dark-900 block">Why do you want to join KNAWP?</label>
                    <textarea required rows={4} className="w-full bg-cream border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-brand-teal transition-colors resize-none" placeholder="Tell us a bit about yourself..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-teal text-navy font-black text-xs uppercase tracking-widest py-5 hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                    Submit Application <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
