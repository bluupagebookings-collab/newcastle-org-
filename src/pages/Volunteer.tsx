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
      <PageHero title="Volunteer" subtitle="Join The Movement" image="https://i.ibb.co/XfB6zrvd/Reskill-Group-Huddle.jpg" />

      <main className="flex-grow py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          
          {/* Why Volunteer Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16 sm:mb-24"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark-800 leading-[1.05] uppercase">
              BE THE CHANGE IN <span className="text-brand-teal">NEWCASTLE</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-dark-800/60 mt-6 max-w-2xl mx-auto text-lg">
              Volunteers are the heartbeat of KNAWP. By giving your time and skills, you directly impact the lives of people in our community.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24"
          >
            {[
              { icon: HeartHandshake, title: "Make an Impact", desc: "Be part of the movement from day one and see the tangible difference you make." },
              { icon: Users, title: "Connect", desc: "Meet and collaborate with passionate, community-minded people across Newcastle." },
              { icon: Award, title: "Grow", desc: "Gain experience, develop new skills, and receive an official certificate of service." },
              { icon: Sparkles, title: "Flexible", desc: "Contribute in ways that fit your schedule and leverage your unique talents." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-brand-teal" />
                </div>
                <h4 className="font-black text-dark-800 mb-3 uppercase text-lg">{item.title}</h4>
                <p className="text-sm text-dark-800/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Application Form Section */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                alt="Volunteers" 
                className="object-cover w-full h-full" 
                src="https://i.ibb.co/XfB6zrvd/Reskill-Group-Huddle.jpg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <h3 className="text-3xl font-black text-white uppercase mb-4 leading-tight">Ready to step up?</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Fill out the application form and our volunteer coordinator will be in touch with you shortly to discuss how you can help.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-black text-dark-800 uppercase mb-2">Volunteer Application</h3>
                <p className="text-dark-800/60 text-sm">Tell us a bit about yourself and how you'd like to contribute.</p>
              </div>

              {submitSuccess ? (
                <div className="bg-brand-teal/10 border border-brand-teal text-brand-teal-dark px-6 py-8 rounded-2xl text-center">
                  <CheckCircle2 className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-dark-800 mb-2">Application Received!</h4>
                  <p className="text-dark-800/70 text-sm">Thank you for stepping up. We will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-navy block">First Name</label>
                      <input required type="text" className="w-full bg-cream border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-navy block">Last Name</label>
                      <input required type="text" className="w-full bg-cream border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-navy block">Email Address</label>
                      <input required type="email" className="w-full bg-cream border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-navy block">Phone Number</label>
                      <input required type="tel" className="w-full bg-cream border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors" placeholder="082 123 4567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-navy block">Area of Interest</label>
                    <select required className="w-full bg-cream border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors appearance-none">
                      <option value="" disabled selected>Select how you want to help</option>
                      <option value="events">Event Setup & Coordination</option>
                      <option value="mentorship">Mentorship & Teaching</option>
                      <option value="welfare">Welfare & Distribution</option>
                      <option value="admin">Admin & Social Media</option>
                      <option value="other">Other Skills</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-navy block">Why do you want to join KNAWP?</label>
                    <textarea required rows={4} className="w-full bg-cream border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors resize-none" placeholder="Tell us a bit about yourself..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-teal text-white font-bold text-sm uppercase tracking-wider py-4 rounded-xl hover:bg-navy transition-colors duration-300 shadow-lg flex items-center justify-center gap-2">
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
