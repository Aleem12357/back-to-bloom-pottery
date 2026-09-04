import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Sparkles, Menu, X, Phone, Heart, Share2 } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, cartCount, openCart, onOpenBookingModal }) {
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
    { id: 'home', label: 'Home' },
    { id: 'workshops', label: 'Workshops & Classes', badge: 'Book' },
    { id: 'shop', label: 'Ceramics Shop' },
    { id: 'gallery', label: 'Instagram Gallery' },
    { id: 'about', label: 'About Studio' },
    { id: 'contact', label: 'Contact & FAQ' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled
        ? 'bg-clay-50/90 backdrop-blur-md shadow-md py-2 border-b border-clay-200/50'
        : 'bg-clay-50/70 backdrop-blur-sm py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo & Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative">
              <img
                src="/assets/logo.jpg"
                alt="Back to Bloom Pottery Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-clay-500 shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute -bottom-1 -right-1 bg-terracotta text-white p-1 rounded-full text-xs shadow">
                <Sparkles size={10} />
              </span>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold tracking-tight text-clay-900 group-hover:text-clay-600 transition-colors flex items-center gap-1.5">
                <span>Back to Bloom</span>
              </div>
              <p className="text-xs font-semibold text-clay-600 tracking-wide uppercase">
                Pottery & Creative Workshops
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 px-4 py-1.5 rounded-full border border-clay-200/80 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-clay-500 text-white shadow-sm'
                      : 'text-clay-800 hover:text-clay-900 hover:bg-clay-100/60'
                  }`}
                >
                  {link.label}
                  {link.badge && !isActive && (
                    <span className="ml-1.5 inline-block text-[10px] bg-clay-200 text-clay-800 px-1.5 py-0.2 rounded-full font-bold">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Quick WhatsApp Action */}
            <a
              href="https://wa.me/?text=Hello%20Back%20to%20Bloom%20Pottery!%20I%20would%20like%20to%20inquire%20about%20a%20workshop."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-full shadow-sm transition-transform active:scale-95"
              title="Chat on WhatsApp"
            >
              <Phone size={14} />
              <span>WhatsApp</span>
            </a>

            {/* Quick Workshop Book Button */}
            <button
              onClick={onOpenBookingModal}
              className="hidden md:inline-flex items-center gap-1.5 bg-clay-500 hover:bg-clay-600 text-white text-xs sm:text-sm font-bold px-3.5 py-2 rounded-full shadow-sm hover:shadow transition-all active:scale-95"
            >
              <Calendar size={15} />
              <span>Book Class</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={openCart}
              className="relative bg-white text-clay-900 border border-clay-300 hover:bg-clay-100 p-2.5 rounded-full transition-all active:scale-95 shadow-sm"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag size={20} className="text-clay-800" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-clay-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce-soft shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-clay-800 hover:text-clay-900 rounded-xl hover:bg-clay-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-clay-200/80 bg-white/95 rounded-2xl p-4 shadow-xl animate-fade-in space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-between ${
                  activeTab === link.id
                    ? 'bg-clay-500 text-white font-bold'
                    : 'text-clay-800 hover:bg-clay-100'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeTab === link.id ? 'bg-white/20 text-white' : 'bg-clay-200 text-clay-800'
                  }`}>
                    {link.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-clay-100 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="flex-1 bg-clay-500 text-white py-2.5 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Calendar size={15} /> Book Workshop
              </button>
              <a
                href="https://wa.me/?text=Hello%20Back%20to%20Bloom%20Pottery!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center"
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
