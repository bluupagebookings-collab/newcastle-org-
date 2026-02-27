import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Assistance() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    location: '',
    brief: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (formErrors[id]) {
      setFormErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.firstName.trim()) errors.firstName = "Name is required";
    if (!formData.lastName.trim()) errors.lastName = "Surname is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.age) {
      errors.age = "Age is required";
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0 || Number(formData.age) > 120) {
      errors.age = "Please enter a valid age between 1 and 120";
    }
    if (!formData.location) errors.location = "Please select a location";
    if (!formData.brief.trim()) errors.brief = "Please provide a short brief";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAssistanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', age: '', location: '', brief: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
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

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-navy relative overflow-hidden min-h-[calc(100vh-80px)]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-10 sm:mb-12 text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
            <span className="text-brand-teal font-bold tracking-[0.25em] text-[9px] sm:text-[10px] uppercase">
              We Are Here For You
            </span>
            <div className="w-8 sm:w-12 h-px bg-brand-teal"></div>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] uppercase mb-4">
            REQUEST <span className="text-brand-teal">ASSISTANCE</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 text-sm sm:text-base max-w-xl mx-auto">
            If you or someone you know in Newcastle needs support, please fill out the form below. Our team will review your request and get in touch.
          </motion.p>
        </motion.div>

        <motion.form 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="bg-white p-6 sm:p-10 rounded-none shadow-2xl space-y-5 sm:space-y-6"
          onSubmit={handleAssistanceSubmit}
          noValidate
        >
          {submitSuccess && (
            <div className="bg-brand-teal/10 border border-brand-teal text-brand-teal-dark px-4 py-3 rounded-none text-sm font-medium mb-6">
              Request submitted successfully. Our team will review your request and get in touch soon.
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-[10px] font-bold uppercase tracking-wider text-navy block">Name</label>
              <input type="text" id="firstName" value={formData.firstName} onChange={handleInputChange} className={`w-full bg-cream border ${formErrors.firstName ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors`} placeholder="Enter your name" />
              {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-[10px] font-bold uppercase tracking-wider text-navy block">Surname</label>
              <input type="text" id="lastName" value={formData.lastName} onChange={handleInputChange} className={`w-full bg-cream border ${formErrors.lastName ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors`} placeholder="Enter your surname" />
              {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-navy block">Email Address</label>
              <input type="email" id="email" value={formData.email} onChange={handleInputChange} className={`w-full bg-cream border ${formErrors.email ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors`} placeholder="Enter your email" />
              {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="age" className="text-[10px] font-bold uppercase tracking-wider text-navy block">Age</label>
              <input type="number" id="age" min="0" max="120" value={formData.age} onChange={handleInputChange} className={`w-full bg-cream border ${formErrors.age ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors`} placeholder="Enter your age" />
              {formErrors.age && <p className="text-red-500 text-xs mt-1">{formErrors.age}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="text-[10px] font-bold uppercase tracking-wider text-navy block">Location in Newcastle (KZN)</label>
            <select id="location" value={formData.location} onChange={handleInputChange} className={`w-full bg-cream border ${formErrors.location ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors appearance-none`}>
              <option value="" disabled>Select your neighborhood / township</option>
              <option value="Amajuba Park">Amajuba Park</option>
              <option value="Arbor Park">Arbor Park</option>
              <option value="Aviary Hill">Aviary Hill</option>
              <option value="Barry Hertzog Park">Barry Hertzog Park</option>
              <option value="Blaauwbosch">Blaauwbosch</option>
              <option value="Fairleigh">Fairleigh</option>
              <option value="Fernwood">Fernwood</option>
              <option value="Hutten Heights">Hutten Heights</option>
              <option value="Karabos">Karabos</option>
              <option value="Lennoxton">Lennoxton</option>
              <option value="Madadeni">Madadeni</option>
              <option value="Ncandu Park">Ncandu Park</option>
              <option value="Newcastle Central">Newcastle Central</option>
              <option value="Osizweni">Osizweni</option>
              <option value="Paradise">Paradise</option>
              <option value="Pioneer Park">Pioneer Park</option>
              <option value="Roy Point">Roy Point</option>
              <option value="Schuins Hoogte">Schuins Hoogte</option>
              <option value="Signal Hill">Signal Hill</option>
              <option value="Siyahlala-la">Siyahlala-la</option>
              <option value="Sunnyridge">Sunnyridge</option>
              <option value="Sunset View">Sunset View</option>
              <option value="Suryaville">Suryaville</option>
              <option value="Other">Other</option>
            </select>
            {formErrors.location && <p className="text-red-500 text-xs mt-1">{formErrors.location}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="brief" className="text-[10px] font-bold uppercase tracking-wider text-navy block">Short Brief (How can we help?)</label>
            <textarea id="brief" rows={4} value={formData.brief} onChange={handleInputChange} className={`w-full bg-cream border ${formErrors.brief ? 'border-red-500' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors resize-none`} placeholder="Please describe the assistance you need..."></textarea>
            {formErrors.brief && <p className="text-red-500 text-xs mt-1">{formErrors.brief}</p>}
          </div>

          <button type="submit" className="w-full bg-brand-teal text-white font-bold text-xs uppercase tracking-wider py-4 hover:bg-navy transition-colors duration-300">
            Submit Request
          </button>
        </motion.form>
      </div>
    </section>
  );
}
