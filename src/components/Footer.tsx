import React from 'react';
import { Mail, Phone, MapPin, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative">
        {/* Call to Action Banner */}
        <div className="bg-brand-teal py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark-800 leading-[1.05] uppercase break-words">
                  Let's Build Newcastle <br className="hidden lg:block" />Together
                </h2>
                <p className="text-dark-800/80 mt-4 font-medium text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                  Join the movement. Every contribution matters.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center lg:justify-end shrink-0 w-full lg:w-auto">
                <Link className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 bg-dark-900 text-white font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-dark-900 transition-colors duration-300 w-full sm:w-auto" to="/donate">
                  <Heart className="w-4 h-4" />
                  Donate Now
                </Link>
                <Link className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 border-2 border-dark-900 text-dark-900 font-bold text-sm uppercase tracking-wider hover:bg-dark-900 hover:text-white transition-colors duration-300 w-full sm:w-auto" to="/volunteer">
                  Volunteer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <Link className="inline-block mb-6" to="/">
                <img src="https://i.ibb.co/WpRMjw7K/1771954845123.jpg" alt="KNAWP Logo" className="h-14 sm:h-16 w-auto rounded-md" referrerPolicy="no-referrer" />
              </Link>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm">
                Keep Newcastle Alive With Possibilities. A community movement dedicated to uplifting lives and unlocking opportunities.
              </p>
              <div className="flex items-center gap-4">
                {/* Social links could go here if needed in the future */}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 lg:col-start-6 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-4 w-full">
                <li><Link className="text-white/60 hover:text-brand-teal text-base transition-colors block py-1" to="/about">About Us</Link></li>
                <li><Link className="text-white/60 hover:text-brand-teal text-base transition-colors block py-1" to="/pillars">Our Pillars</Link></li>
                <li><Link className="text-white/60 hover:text-brand-teal text-base transition-colors block py-1" to="/programs">Programs</Link></li>
                <li><Link className="text-white/60 hover:text-brand-teal text-base transition-colors block py-1" to="/events">Events</Link></li>
              </ul>
            </div>

            {/* Get Involved */}
            <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Get Involved</h4>
              <ul className="space-y-4 w-full">
                <li><Link className="text-white/60 hover:text-brand-teal text-base transition-colors block py-1" to="/volunteer">Volunteer</Link></li>
                <li><Link className="text-white/60 hover:text-brand-teal text-base transition-colors block py-1" to="/donate">Donate</Link></li>
                <li><a className="text-white/60 hover:text-brand-teal text-base transition-colors block py-1" href="/#assistance">Request Assistance</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Contact</h4>
              <ul className="space-y-5 w-full">
                <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-1 hidden md:block" />
                  <span className="text-white/60 text-base">Newcastle, KwaZulu-Natal<br className="hidden md:block" /> South Africa</span>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-teal shrink-0 hidden md:block" />
                  <a className="text-white/60 hover:text-brand-teal text-base transition-colors block py-1" href="mailto:info@keepnnalive.co.za">info@keepnnalive.co.za</a>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-teal shrink-0 hidden md:block" />
                  <a className="text-white/60 hover:text-brand-teal text-base transition-colors block py-1" href="tel:+27670614740">067 061 4740</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} KNAWP. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <a className="text-white/40 hover:text-brand-teal text-sm transition-colors" href="#">Privacy Policy</a>
              <a className="text-white/40 hover:text-brand-teal text-sm transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
