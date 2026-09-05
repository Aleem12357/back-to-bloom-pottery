import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import BookingModal from './components/BookingModal';
import IntroChatbot from './components/IntroChatbot';

import Home from './pages/Home';
import Workshops from './pages/Workshops';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

import { WORKSHOPS } from './data/workshops';

export default function App() {
  const [activeTab, setActiveTabState] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return ['home', 'workshops', 'shop', 'gallery', 'about', 'contact'].includes(hash) ? hash : 'home';
  });

  const [cartItems, setCartItems] = useState([
    {
      id: 'prod-1',
      name: 'Blooming Petal Ceramic Mug',
      category: 'Mugs & Cups',
      price: 28,
      quantity: 1,
      image: '/assets/IMG_20260904_223444_180.jpg'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedWorkshopForBooking, setSelectedWorkshopForBooking] = useState(WORKSHOPS[0]);

  // Handle Tab Switch & Sync Browser History
  const setActiveTab = (tab, pushState = true) => {
    setActiveTabState(tab);
    if (pushState) {
      const hash = '#' + tab;
      if (window.location.hash !== hash) {
        window.history.pushState({ tab }, '', hash);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to browser Back/Forward buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      const validTab = ['home', 'workshops', 'shop', 'gallery', 'about', 'contact'].includes(hash) ? hash : 'home';
      setActiveTabState(validTab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      removeItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleOpenBookingWithWorkshop = (wk) => {
    setSelectedWorkshopForBooking(wk || WORKSHOPS[0]);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-clay-50 text-clay-900 font-sans selection:bg-clay-200">

      {/* Top Banner Notice */}
      <div className="bg-clay-500 text-white text-[11px] font-bold py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span>✨ Welcome to Back to Bloom Pottery Studio! Weekend Workshop Slots Now Open ✨</span>
      </div>

      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBookingModal={() => handleOpenBookingWithWorkshop(WORKSHOPS[0])}
      />

      {/* Main Page View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'home' && (
          <Home
            onNavigate={setActiveTab}
            onOpenBookingModal={() => handleOpenBookingWithWorkshop(WORKSHOPS[0])}
            onAddToCart={handleAddToCart}
          />
        )}

        {activeTab === 'workshops' && (
          <Workshops
            onOpenBookingModalWithWorkshop={handleOpenBookingWithWorkshop}
          />
        )}

        {activeTab === 'shop' && (
          <Shop
            onAddToCart={handleAddToCart}
          />
        )}

        {activeTab === 'gallery' && (
          <Gallery />
        )}

        {activeTab === 'about' && (
          <About
            onNavigate={setActiveTab}
            onOpenBookingModal={() => handleOpenBookingWithWorkshop(WORKSHOPS[0])}
          />
        )}

        {activeTab === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        clearCart={clearCart}
      />

      {/* Workshop Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedWorkshop={selectedWorkshopForBooking}
        workshops={WORKSHOPS}
      />

      {/* Intro Studio AI Chatbot */}
      <IntroChatbot
        onOpenBookingModal={() => handleOpenBookingWithWorkshop(WORKSHOPS[0])}
        onNavigate={setActiveTab}
      />

    </div>
  );
}
