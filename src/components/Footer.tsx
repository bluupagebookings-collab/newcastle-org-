import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative">
        <div className="bg-brand-teal py-10 sm:py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
              <div className="text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-dark-800 leading-tight uppercase">
                  Let's Build Newcastle Together
                </h2>
                <p className="text-dark-800/80 mt-2 font-medium text-sm sm:text-base">
                  Join the movement. Every contribution matters.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-end shrink-0">
                <Link className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-dark-900 text-white font-bold text-xs uppercase tracking-wider rounded-none hover:bg-white hover:text-dark-900 transition-colors duration-300" to="/donate">
                  <Heart className="w-4 h-4" />
                  Donate Now
                </Link>
                <Link className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-dark-900 text-dark-900 font-bold text-xs uppercase tracking-wider rounded-none hover:bg-dark-900 hover:text-white transition-colors duration-300" to="/volunteer">
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link className="flex items-center gap-1.5 mb-6" to="/">
                <img src="https://i.ibb.co/WpRMjw7K/1771954845123.jpg" alt="KNAWP Logo" className="h-10 sm:h-12 w-auto rounded-md" referrerPolicy="no-referrer" />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                Keep Newcastle Alive With Possibilities. A community movement dedicated to uplifting lives and unlocking opportunities.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link className="text-white/60 hover:text-brand-teal text-sm transition-colors" to="/about">About Us</Link></li>
                <li><Link className="text-white/60 hover:text-brand-teal text-sm transition-colors" to="/pillars">Our Pillars</Link></li>
                <li><Link className="text-white/60 hover:text-brand-teal text-sm transition-colors" to="/programs">Programs</Link></li>
                <li><Link className="text-white/60 hover:text-brand-teal text-sm transition-colors" to="/events">Events</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6">Get Involved</h4>
              <ul className="space-y-3">
                <li><Link className="text-white/60 hover:text-brand-teal text-sm transition-colors" to="/volunteer">Volunteer</Link></li>
                <li><Link className="text-white/60 hover:text-brand-teal text-sm transition-colors" to="/donate">Donate</Link></li>
                <li><a className="text-white/60 hover:text-brand-teal text-sm transition-colors" href="/#assistance">Request Assistance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm">Newcastle, KwaZulu-Natal<br />South Africa</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-teal shrink-0" />
                  <a className="text-white/60 hover:text-brand-teal text-sm transition-colors" href="mailto:hello@knawp.org">hello@knawp.org</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                  <a className="text-white/60 hover:text-brand-teal text-sm transition-colors" href="tel:+27000000000">+27 (0) 00 000 0000</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} KNAWP. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a className="text-white/40 hover:text-brand-teal text-xs transition-colors" href="#">Privacy Policy</a>
              <a className="text-white/40 hover:text-brand-teal text-xs transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
