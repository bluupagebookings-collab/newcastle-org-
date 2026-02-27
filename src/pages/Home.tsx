import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Briefcase, BookOpen, HandHeart, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // State for Assistance Form
  const [assistForm, setAssistForm] = useState({
    firstName: '', lastName: '', email: '', age: '', location: '', message: ''
  });
  const [assistErrors, setAssistErrors] = useState<Record<string, string>>({});
  const [assistSuccess, setAssistSuccess] = useState(false);

  const handleAssistChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setAssistForm(prev => ({ ...prev, [id]: value }));
    if (assistErrors[id]) setAssistErrors(prev => ({ ...prev, [id]: '' }));
  };

  const validateAssist = () => {
    const errors: Record<string, string> = {};
    if (!assistForm.firstName.trim()) errors.firstName = "Name is required";
    if (!assistForm.lastName.trim()) errors.lastName = "Surname is required";
    if (!assistForm.email.trim()) errors.email = "Email is required";
    if (!assistForm.age.trim()) errors.age = "Age is required";
    if (!assistForm.location) errors.location = "Location is required";
    setAssistErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAssistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAssist()) {
      setAssistSuccess(true);
      setAssistForm({ firstName: '', lastName: '', email: '', age: '', location: '', message: '' });
      setTimeout(() => setAssistSuccess(false), 5000);
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative h-[100svh] min-h-[600px] overflow-hidden bg-navy -mt-20 sm:-mt-24">
        <div className="absolute inset-0 bg-navy">
          <img
            alt="Hero slide"
            className="object-cover object-center w-full h-full absolute inset-0 opacity-50"
            src="https://i.ibb.co/0yBNCPCP/rnb-gathering-1772031387245.png"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-10"></div>
        
        <div className="absolute inset-0 z-20 flex items-center justify-center pt-16 sm:pt-20">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
                <span className="text-brand-teal text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase">
                  Newcastle, KZN
                </span>
              </motion.div>
              <motion.div variants={fadeUp} className="overflow-hidden mb-4 sm:mb-6">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.05] sm:leading-[1] uppercase">
                  KEEP NEWCASTLE ALIVE WITH POSSIBILITIES
                </h1>
              </motion.div>
              <motion.p variants={fadeUp} className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light mb-8 sm:mb-10">
                A new community movement dedicated to uplifting lives, unlocking opportunities, and bringing people together through meaningful events, support, and empowerment programs.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4">
                <Link className="group inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 bg-brand-teal text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-none hover:bg-white hover:text-navy transition-colors duration-300 w-fit" to="/donate">
                  Support Our Mission
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link className="inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 border border-white/30 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-none hover:border-white hover:bg-white/10 transition-colors duration-300 w-fit" to="/volunteer">
                  Become a Volunteer
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Founder Section */}
      <section className="relative bg-cream overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div variants={fadeUp} className="lg:col-span-5 relative px-4 sm:px-0">
              <div className="relative aspect-[3/4] rounded-none overflow-hidden shadow-2xl">
                <img alt="Sphe Dlamini, Founder" className="object-cover object-top w-full h-full" src="https://i.ibb.co/ksHdb78G/IMG-5383-2.jpg" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-6 lg:col-start-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-brand-teal"></div>
                <span className="text-brand-teal font-bold tracking-[0.25em] text-[10px] uppercase">The Founder</span>
              </div>
              <h2 className="text-4xl xl:text-5xl font-black text-dark-800 mb-8 leading-[1.05] uppercase">
                EVERY RESIDENT DESERVES <br /><span className="text-brand-teal">ACCESS TO OPPORTUNITY</span>
              </h2>
              <div className="text-dark-800/60 text-base leading-relaxed mb-8 space-y-4">
                <p>Born and raised in Newcastle, Sphe Dlamini has a deep connection to the community he calls home. Growing up, he witnessed both the systemic challenges residents face and the incredible, untapped potential that often goes unrealised.</p>
                <p>Driven by a passion for social justice and community development, Sphe established KNAWP to serve as a catalyst for positive change. His leadership focuses on actionable, grassroots initiatives that directly impact the lives of the youth, the vulnerable, and the ambitious.</p>
              </div>
              <div className="border-l-2 border-brand-teal pl-5 mb-8">
                <p className="font-signature text-3xl text-dark-800">Sphe Dlamini</p>
                <p className="text-dark-800/40 text-[10px] uppercase tracking-[0.2em] mt-1">Founder & Director</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. 3 Pillars Section */}
      <section className="py-16 sm:py-24 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-4">Three Pillars of <span className="text-brand-teal">Change</span></h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto"></div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-white/5 p-8 border-t-4 border-brand-teal hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-black uppercase mb-4">Community Events</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">Bringing people together to celebrate local culture, foster unity, and create safe spaces for youth engagement.</p>
              <Link to="/pillars" className="text-brand-teal font-bold text-[10px] uppercase tracking-wider hover:text-white transition-colors">Learn More &rarr;</Link>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white/5 p-8 border-t-4 border-brand-teal hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-black uppercase mb-4">Support Initiatives</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">Providing direct assistance, food security, and emergency relief to vulnerable individuals and families in Newcastle.</p>
              <Link to="/pillars" className="text-brand-teal font-bold text-[10px] uppercase tracking-wider hover:text-white transition-colors">Learn More &rarr;</Link>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white/5 p-8 border-t-4 border-brand-teal hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-black uppercase mb-4">Empowerment Programs</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">Equipping residents with skills development, mentorship, and career readiness to turn potential into tangible outcomes.</p>
              <Link to="/pillars" className="text-brand-teal font-bold text-[10px] uppercase tracking-wider hover:text-white transition-colors">Learn More &rarr;</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Our Initiatives Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-dark-800 uppercase mb-4">Our <span className="text-brand-teal">Initiatives</span></h2>
            <div className="w-16 h-1 bg-brand-teal"></div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Skills & Employment", icon: Briefcase, desc: "Career training and digital skills." },
              { title: "Youth Development", icon: BookOpen, desc: "Mentorship and leadership programs." },
              { title: "Community Welfare", icon: HandHeart, desc: "Direct support and food security." },
              { title: "Arts & Culture", icon: Music, desc: "Celebrating diversity and creativity." }
            ].map((prog, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-6 border border-gray-100 shadow-sm hover:border-brand-teal transition-colors">
                <prog.icon className="w-8 h-8 text-brand-teal mb-4" />
                <h4 className="text-lg font-bold text-navy uppercase mb-2">{prog.title}</h4>
                <p className="text-sm text-dark-800/70 mb-4">{prog.desc}</p>
                <Link to="/programs" className="text-brand-teal font-bold text-[10px] uppercase tracking-wider hover:text-navy transition-colors">Explore &rarr;</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Upcoming Events Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-dark-800 uppercase mb-4">Upcoming <span className="text-brand-teal">Events</span></h2>
              <div className="w-16 h-1 bg-brand-teal"></div>
            </div>
            <Link to="/events" className="inline-flex items-center gap-2 text-brand-teal font-bold text-xs uppercase tracking-wider hover:text-navy transition-colors">
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto overflow-hidden shadow-lg group">
              <img src="https://i.ibb.co/Pzc82WVY/1771954802701.jpg" alt="Event" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent flex flex-col justify-end p-8">
                <span className="bg-brand-teal text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 w-fit mb-4">Mar 28, 2026</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mb-2">KNAWP First Community Event</h3>
                <p className="text-white/80 text-sm mb-4">Newcastle Central Park, KZN</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              {[
                { date: "Apr 15", title: "Youth Skills Workshop", loc: "Newcastle Library Hub" },
                { date: "May 02", title: "Community Clean-up Drive", loc: "Madadeni Section 4" }
              ].map((ev, i) => (
                <div key={i} className="bg-cream p-6 border border-gray-100 flex items-center gap-6 hover:border-brand-teal transition-colors">
                  <div className="text-center shrink-0">
                    <p className="text-brand-teal font-black text-xl uppercase">{ev.date.split(' ')[0]}</p>
                    <p className="text-navy font-bold text-lg">{ev.date.split(' ')[1]}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark-800 uppercase mb-1">{ev.title}</h4>
                    <p className="text-sm text-dark-800/60 flex items-center gap-1"><MapPin className="w-3 h-3" /> {ev.loc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. We are here to help (Assistance) */}
      <section className="py-16 sm:py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-4">We Are Here To <span className="text-brand-teal">Help</span></h2>
            <p className="text-white/70 text-sm sm:text-base">Request assistance for yourself or someone in need.</p>
          </motion.div>
          <motion.form initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white p-6 sm:p-10 shadow-2xl space-y-5" onSubmit={handleAssistSubmit} noValidate>
            {assistSuccess && (
              <div className="bg-brand-teal/10 border border-brand-teal text-brand-teal-dark px-4 py-3 text-sm font-medium mb-6">Request submitted successfully. We will be in touch.</div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-navy block mb-2">Name</label>
                <input type="text" id="firstName" value={assistForm.firstName} onChange={handleAssistChange} className={`w-full bg-cream border ${assistErrors.firstName ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal`} />
                {assistErrors.firstName && <p className="text-red-500 text-xs mt-1">{assistErrors.firstName}</p>}
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-navy block mb-2">Surname</label>
                <input type="text" id="lastName" value={assistForm.lastName} onChange={handleAssistChange} className={`w-full bg-cream border ${assistErrors.lastName ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal`} />
                {assistErrors.lastName && <p className="text-red-500 text-xs mt-1">{assistErrors.lastName}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-navy block mb-2">Email</label>
                <input type="email" id="email" value={assistForm.email} onChange={handleAssistChange} className={`w-full bg-cream border ${assistErrors.email ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal`} />
                {assistErrors.email && <p className="text-red-500 text-xs mt-1">{assistErrors.email}</p>}
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-navy block mb-2">Age</label>
                <input type="number" id="age" value={assistForm.age} onChange={handleAssistChange} className={`w-full bg-cream border ${assistErrors.age ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal`} />
                {assistErrors.age && <p className="text-red-500 text-xs mt-1">{assistErrors.age}</p>}
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-navy block mb-2">Location (Newcastle)</label>
              <select id="location" value={assistForm.location} onChange={handleAssistChange} className={`w-full bg-cream border ${assistErrors.location ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal appearance-none`}>
                <option value="" disabled>Select a township/neighborhood</option>
                <option value="Madadeni">Madadeni</option>
                <option value="Osizweni">Osizweni</option>
                <option value="Blaauwbosch">Blaauwbosch</option>
                <option value="Newcastle Central">Newcastle Central</option>
                <option value="Arbor Park">Arbor Park</option>
                <option value="Aviary Hill">Aviary Hill</option>
                <option value="Pioneer Park">Pioneer Park</option>
                <option value="Other">Other</option>
              </select>
              {assistErrors.location && <p className="text-red-500 text-xs mt-1">{assistErrors.location}</p>}
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-navy block mb-2">Brief Description</label>
              <textarea id="message" rows={3} value={assistForm.message} onChange={handleAssistChange} className="w-full bg-cream border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-teal resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-teal text-white font-bold text-xs uppercase tracking-wider py-4 hover:bg-navy transition-colors">Submit Request</button>
          </motion.form>
        </div>
      </section>

      {/* 7. Make a Difference (Donate) */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-dark-800 uppercase mb-6">Make a <span className="text-brand-teal">Difference</span></h2>
            <p className="text-dark-800/70 text-base leading-relaxed mb-8">Your contribution directly funds community events, empowerment programs, and vital support initiatives in Newcastle.</p>
            <Link to="/donate" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-teal hover:text-dark-900 transition-colors">
              Donate Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 8. Volunteer With Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-dark-800 uppercase mb-6">Volunteer <span className="text-brand-teal">With Us</span></h2>
            <p className="text-dark-800/70 text-base leading-relaxed mb-8">Join our team of passionate individuals dedicated to transforming Newcastle. We have roles for everyone.</p>
            <Link to="/volunteer" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-navy text-navy font-bold text-xs uppercase tracking-wider hover:bg-navy hover:text-white transition-colors">
              Join the Movement <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 9. Latest News */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-12 sm:mb-16">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
              <span className="text-brand-teal font-bold tracking-[0.25em] text-[9px] sm:text-[10px] uppercase">Latest News</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark-800 leading-[1.05] uppercase">
              NEWS & <span className="text-brand-teal">UPDATES</span>
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-none shadow-lg">
              <img src="https://i.ibb.co/ksHdb78G/IMG-5383-2.jpg" alt="Sphe Dlamini" className="object-cover object-top w-full h-full absolute inset-0" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col justify-center py-4 lg:py-8">
              <span className="text-brand-teal text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">Press Release • Feb 2026</span>
              <h3 className="text-2xl sm:text-3xl font-black text-navy leading-tight mb-4 uppercase">Sphe Dlamini Launches KNAWP</h3>
              <div className="text-navy/70 text-sm sm:text-base leading-relaxed space-y-4">
                <p>In a significant step forward for the community of Newcastle, local visionary Sphe Dlamini has officially announced the launch of Keep Newcastle Alive With Possibilities (KNAWP). This new initiative aims to bridge the gap between potential and opportunity for residents across the region.</p>
                <p>Recognising the untapped talent and the pressing need for structured support systems, Dlamini established KNAWP to serve as a catalyst for positive change. The organisation will focus on three core areas: community events that foster unity, support initiatives for those facing hardship, and empowerment programs designed to build essential life and career skills.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
