import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark-950 py-8 sm:py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Left: Logo & Copyright */}
          <div className="flex flex-row md:flex-col items-center md:items-start gap-4 w-full md:w-auto justify-between md:justify-start">
            <Link to="/" className="bg-white p-1.5 rounded-md inline-block">
              <img src="https://i.ibb.co/0R5GDGhM/1771954845123-removebg-preview.png" alt="KNAWP Logo" className="h-10 sm:h-12 w-auto" referrerPolicy="no-referrer" />
            </Link>
            <p className="text-white/40 text-xs hidden md:block">© {new Date().getFullYear()} KNAWP. All rights reserved.</p>
          </div>

          {/* Center: Links (Side by Side) */}
          <div className="flex flex-row flex-wrap justify-center md:justify-center gap-x-6 gap-y-3 text-sm font-medium w-full md:w-auto">
            <Link className="text-white/60 hover:text-brand-teal transition-colors" to="/about">About Us</Link>
            <Link className="text-white/60 hover:text-brand-teal transition-colors" to="/pillars">Pillars</Link>
            <Link className="text-white/60 hover:text-brand-teal transition-colors" to="/programs">Programs</Link>
            <Link className="text-white/60 hover:text-brand-teal transition-colors" to="/events">Events</Link>
            <Link className="text-white/60 hover:text-brand-teal transition-colors" to="/volunteer">Volunteer</Link>
            <Link className="text-white/60 hover:text-brand-teal transition-colors" to="/donate">Donate</Link>
          </div>

          {/* Right: Contact (Side by Side) */}
          <div className="flex flex-row flex-wrap justify-center md:justify-end gap-6 text-sm w-full md:w-auto">
            <a className="flex items-center gap-2 text-white/80 hover:text-brand-teal transition-colors" href="mailto:info@keepnnalive.co.za">
              <Mail className="w-4 h-4 text-brand-teal" /> info@keepnnalive.co.za
            </a>
            <a className="flex items-center gap-2 text-white/80 hover:text-brand-teal transition-colors" href="tel:+27670614740">
              <Phone className="w-4 h-4 text-brand-teal" /> 067 061 4740
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4 text-brand-teal" /> Newcastle, KZN
            </div>
          </div>

        </div>
        
        {/* Mobile Copyright */}
        <p className="text-white/40 text-xs mt-8 md:hidden text-center">© {new Date().getFullYear()} KNAWP. All rights reserved.</p>
      </div>
    </footer>
  );
}
