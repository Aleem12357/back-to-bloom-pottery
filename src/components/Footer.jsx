import React from 'react';
import { Heart, Phone, MapPin, Mail, Clock, Sparkles } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export default function Footer({ setActiveTab }) {
  const handleNav = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-clay-900 text-clay-100 pt-16 pb-8 border-t-4 border-clay-500 relative overflow-hidden">
      {/* Soft background glow decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-clay-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-clay-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-clay-800">

          {/* Brand Info */}
          <div className="space-y-4">
            <button 
              onClick={() => handleNav('home')} 
              className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            >
              <img
                src="/assets/logo.jpg"
                alt="Back to Bloom Logo"
                className="w-12 h-12 rounded-full border-2 border-clay-400 object-cover group-hover:scale-105 transition-transform cursor-pointer"
              />
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-clay-300 transition-colors cursor-pointer">Back to Bloom</h3>
                <p className="text-xs text-clay-300 font-semibold uppercase tracking-wider cursor-pointer">Pottery & Creative Workshops</p>
              </div>
            </button>
            <p className="text-sm text-clay-200/90 leading-relaxed">
              Step into our cozy studio and unleash your inner artist. We host hands-on pottery workshops, wheel throwing sessions, clay & wine nights, and craft bespoke ceramic pieces with love.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-clay-800 hover:bg-clay-500 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm cursor-pointer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-clay-800 hover:bg-blue-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm cursor-pointer"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/?text=Hello%20Back%20to%20Bloom%20Pottery!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-clay-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm cursor-pointer"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-clay-200">Explore</h4>
            <ul className="space-y-2.5 text-sm text-clay-300 font-medium">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 cursor-pointer">
                  <Sparkles size={13} className="text-clay-400" /> <span>Home & Overview</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('workshops')} className="hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 cursor-pointer">
                  <Sparkles size={13} className="text-clay-400" /> <span>Workshops & Schedules</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop')} className="hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 cursor-pointer">
                  <Sparkles size={13} className="text-clay-400" /> <span>Handmade Ceramics Shop</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 cursor-pointer">
                  <Sparkles size={13} className="text-clay-400" /> <span>Instagram Feed Gallery</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 cursor-pointer">
                  <Sparkles size={13} className="text-clay-400" /> <span>About Our Studio</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 cursor-pointer">
                  <Sparkles size={13} className="text-clay-400" /> <span>FAQ & Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Hours */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-clay-200">Studio Hours</h4>
            <div className="space-y-2 text-sm text-clay-300">
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-clay-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Tue - Fri:</p>
                  <p className="text-xs">10:00 AM – 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-clay-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sat - Sun:</p>
                  <p className="text-xs">10:00 AM – 8:30 PM (Special Events)</p>
                </div>
              </div>
              <p className="text-xs text-clay-400 pt-1 italic">
                *Closed Mondays for kiln firing & studio glazing.
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-clay-200">Get in Touch</h4>
            <ul className="space-y-2.5 text-sm text-clay-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-clay-400 shrink-0 mt-0.5" />
                <span>124 Clay Studio Way, Ceramic Quarter, Creative City</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={18} className="text-clay-400 shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white hover:underline transition-colors cursor-pointer">+1 (555) 256-6625</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={18} className="text-clay-400 shrink-0" />
                <a href="mailto:hello@backtobloom.com" className="hover:text-white hover:underline transition-colors cursor-pointer">hello@backtobloom.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-clay-400">
          <p>© {new Date().getFullYear()} Back to Bloom Pottery & Creative Workshops. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={14} className="text-rose-400 fill-rose-400 animate-pulse" />
            <span>for clay lovers everywhere</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
