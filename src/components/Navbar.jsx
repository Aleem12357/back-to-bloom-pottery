import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, Menu, X, Phone } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenBookingModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', shortLabel: 'Home' },
    { id: 'workshops', label: 'Workshops & Classes', shortLabel: 'Workshops', badge: 'Book' },
    { id: 'shop', label: 'Ceramics Shop', shortLabel: 'Ceramics Shop' },
    { id: 'gallery', label: 'Instagram Gallery', shortLabel: 'Gallery' },
    { id: 'about', label: 'About Studio', shortLabel: 'About' },
    { id: 'contact', label: 'Contact & FAQ', shortLabel: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      scrolled
        ? 'bg-clay-50/95 backdrop-blur-md shadow-md py-2 border-b border-clay-200/70'
        : 'bg-clay-50/85 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-clay-200/30'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">

          {/* Logo & Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 group text-left focus:outline-none shrink-0 cursor-pointer"
          >
            <div className="relative">
              <img
                src="/assets/logo.jpg"
                alt="Back to Bloom Pottery Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-clay-500 shadow-sm group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 cursor-pointer"
              />
              <span className="absolute -bottom-0.5 -right-0.5 bg-gradient-to-r from-terracotta to-clay-600 text-white p-1 rounded-full text-[10px] shadow-xs group-hover:scale-110 transition-transform">
                <Sparkles size={10} />
              </span>
            </div>
            <div>
              <div className="text-sm sm:text-base lg:text-base 2xl:text-lg font-extrabold tracking-tight text-clay-950 group-hover:text-clay-600 transition-colors leading-snug cursor-pointer whitespace-nowrap">
                <span>Back to Bloom</span>
              </div>
              <p className="hidden 2xl:block text-[10px] sm:text-[11px] font-bold text-clay-600 tracking-wider uppercase cursor-pointer whitespace-nowrap">
                Pottery & Creative Workshops
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 2xl:gap-1.5 bg-white/90 px-3 2xl:px-4 py-1.5 rounded-full border border-clay-200/90 shadow-xs backdrop-blur-sm shrink-0">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`group relative px-2.5 2xl:px-3.5 py-1.5 text-xs 2xl:text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer select-none ${
                    isActive
                      ? 'bg-gradient-to-r from-clay-600 to-clay-500 text-white shadow-sm font-bold scale-105'
                      : 'text-clay-800 hover:text-clay-950 hover:bg-clay-100/60'
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="hidden 2xl:inline">{link.label}</span>
                    <span className="inline 2xl:hidden">{link.shortLabel}</span>
                    {link.badge && !isActive && (
                      <span className="ml-1 2xl:ml-1.5 inline-block text-[9px] bg-terracotta/15 text-terracotta px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  {!isActive && (
                    <span className="absolute bottom-1 left-2.5 2xl:left-3.5 right-2.5 2xl:right-3.5 h-[2px] bg-gradient-to-r from-clay-500 to-terracotta rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">

            {/* Quick WhatsApp Action */}
            <a
              href="https://wa.me/?text=Hello%20Back%20to%20Bloom%20Pottery!%20I%20would%20like%20to%20inquire%20about%20a%20workshop."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold px-3 py-1.5 sm:py-2 rounded-full shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0"
              title="Chat on WhatsApp"
            >
              <Phone size={13} />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Quick Workshop Book Button */}
            <button
              onClick={onOpenBookingModal}
              className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-clay-500 to-terracotta hover:from-clay-600 hover:to-terracotta/90 text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Calendar size={14} />
              <span>Book Class</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-clay-800 hover:text-clay-950 rounded-xl hover:bg-clay-100/80 focus:outline-none cursor-pointer transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-clay-200/80 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-fade-in space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`group relative w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer flex items-center justify-between overflow-hidden ${
                  activeTab === link.id
                    ? 'bg-clay-500 text-white font-bold shadow-xs'
                    : 'text-clay-800 hover:bg-clay-100 hover:text-clay-950'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {link.badge && (
                  <span className={`relative z-10 text-xs px-2 py-0.5 rounded-full font-bold ${
                    activeTab === link.id ? 'bg-white/20 text-white' : 'bg-terracotta/15 text-terracotta'
                  }`}>
                    {link.badge}
                  </span>
                )}
                {activeTab !== link.id && (
                  <span className="absolute bottom-0 left-4 w-12 h-[2.5px] bg-gradient-to-r from-clay-500 to-terracotta rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-clay-100 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="flex-1 bg-gradient-to-r from-clay-500 to-terracotta text-white py-2.5 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs hover:brightness-105 active:scale-95 transition-all"
              >
                <Calendar size={15} /> Book Class
              </button>
              <a
                href="https://wa.me/?text=Hello%20Back%20to%20Bloom%20Pottery!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center cursor-pointer shadow-xs hover:brightness-105 active:scale-95 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

