import React from 'react';
import { Sparkles, Calendar, Heart, ArrowRight, Star, ShieldCheck, Flame, Users, Palette, CheckCircle2 } from 'lucide-react';
import ClayWidget from '../components/ClayWidget';

export default function Home({ onNavigate, onOpenBookingModal, onAddToCart }) {
  const highlights = [
    {
      id: 'wk-1',
      title: 'Beginner Pottery & Wheel Throwing',
      category: 'Wheel Throwing',
      image: '/assets/workshop.jpg',
      price: 45,
      badge: 'User Workshop Poster #1',
      desc: 'Master centering, pulling, and shaping raw clay into beautiful bowls and mugs on the spinning wheel!'
    },
    {
      id: 'wk-2',
      title: 'Hand-Building Ceramic Art & Sculpting',
      category: 'Hand Building',
      image: '/assets/workshp.jpg',
      price: 40,
      badge: 'User Workshop Poster #2',
      desc: 'No wheel needed! Pinch, coil, and carve intricate textured planters, dishes, and botanical tiles.'
    }
  ];

  const features = [
    {
      icon: <Flame className="text-amber-600" size={24} />,
      title: 'Kiln Firing Included',
      desc: 'All workshop prices include double kiln firing & non-toxic glaze finish for durable, food-safe pottery.'
    },
    {
      icon: <Users className="text-rose-500" size={24} />,
      title: 'Small Intimate Classes',
      desc: 'Max 8 students per class ensures personalized step-by-step guidance from master ceramic artisans.'
    },
    {
      icon: <Palette className="text-emerald-600" size={24} />,
      title: 'Pastel & Earthy Glazes',
      desc: 'Choose from our signature range of earthy terracotta, blush pink, and sage green glazes.'
    },
    {
      icon: <ShieldCheck className="text-indigo-600" size={24} />,
      title: 'All Equipment Provided',
      desc: 'Just bring your creative spirit! We provide organic clay, sculpting tools, aprons, and cute drinks.'
    }
  ];

  const testimonials = [
    {
      quote: "The wheel throwing workshop was absolute therapy! The instructors were so patient and kind. I made two cute mugs that I now use every single morning!",
      author: "Maya Lin",
      role: "Class Student",
      stars: 5,
      image: "/assets/IMG_20260904_223444_172.jpg"
    },
    {
      quote: "Brought my best friend for the Clay & Wine night. The studio vibe is unmatched—warm lighting, aesthetic music, and we took home gorgeous memory pieces!",
      author: "Chloe & Emma",
      role: "Weekend Guests",
      stars: 5,
      image: "/assets/IMG_20260904_223444_166.jpg"
    }
  ];

  return (
    <div className="space-y-16 pb-12">

      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="clay-card bg-gradient-to-br from-white via-clay-50/80 to-clay-100/60 p-6 sm:p-12 lg:p-16 border-2 border-clay-200/90 rounded-4xl relative overflow-hidden shadow-2xl">

            {/* Background floating decor */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-clay-300/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-clay-400/15 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-left">

                <div className="inline-flex items-center gap-2 bg-clay-100 border border-clay-300 text-clay-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-2xs">
                  <Sparkles size={15} className="text-clay-600 animate-spin-slow" />
                  <span>Back to Bloom Pottery Studio</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-clay-900 leading-tight tracking-tight">
                  Shape Clay, <br />
                  <span className="text-clay-500 underline decoration-clay-300 decoration-wavy">Unwind Your Soul.</span>
                </h1>

                <p className="text-base sm:text-lg text-clay-700 leading-relaxed max-w-xl font-medium">
                  Welcome to <strong className="text-clay-900 font-bold">Back to Bloom</strong>—a cozy pottery haven where raw earth transforms into cute, functional ceramics. Join our pottery workshops or shop handcrafted studio pieces!
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={onOpenBookingModal}
                    className="bg-clay-500 hover:bg-clay-600 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2.5"
                  >
                    <Calendar size={18} />
                    <span>Book a Workshop</span>
                  </button>

                  <button
                    onClick={() => onNavigate('shop')}
                    className="bg-white hover:bg-clay-100 text-clay-800 font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl border border-clay-300 shadow-sm transition-all active:scale-95 flex items-center gap-2"
                  >
                    <span>Shop Ceramics</span>
                    <ArrowRight size={18} />
                  </button>
                </div>

                {/* Social Proof */}
                <div className="pt-4 flex items-center gap-4 text-xs font-semibold text-clay-700 border-t border-clay-200/80">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="/assets/IMG_20260904_223444_172.jpg" alt="Student" />
                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="/assets/IMG_20260904_223444_023.jpg" alt="Student" />
                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="/assets/IMG_20260904_223444_180.jpg" alt="Student" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                      <span className="font-bold text-clay-900 ml-1">4.9/5</span>
                    </div>
                    <span>Over 1,200+ happy class students</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Dynamic Featured Banner Stack */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-sm">

                  {/* Main Logo / Poster Card */}
                  <div className="clay-card p-3 bg-white border-2 border-clay-300 rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <img
                      src="/assets/workshop.jpg"
                      alt="Back to Bloom Pottery Workshop Poster"
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                    <div className="p-3 text-left">
                      <span className="clay-badge text-[11px] mb-1 inline-block">Official Workshop Poster</span>
                      <h3 className="font-bold text-clay-900 text-sm">Wheel Throwing & Clay Art Sessions</h3>
                      <p className="text-xs text-clay-500">Join our upcoming calendar classes!</p>
                    </div>
                  </div>

                  {/* Overlapping Secondary Poster Card */}
                  <div className="hidden sm:block absolute -bottom-6 -left-8 w-48 p-2 bg-white rounded-2xl border-2 border-clay-200 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <img
                      src="/assets/workshp.jpg"
                      alt="Handbuilding Session"
                      className="w-full h-36 object-cover rounded-xl"
                    />
                    <div className="p-2 text-left">
                      <p className="font-bold text-clay-900 text-[11px]">Hand Building Art</p>
                      <p className="text-[10px] text-clay-500">Book your slot now</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED WORKSHOPS (ATTACHED USER IMAGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="clay-badge text-xs mb-1 inline-block">Upcoming Classes</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-clay-900">Popular Studio Workshops</h2>
            <p className="text-xs sm:text-sm text-clay-600">Reserve your spot for our hands-on ceramic sessions.</p>
          </div>
          <button
            onClick={() => onNavigate('workshops')}
            className="text-clay-600 hover:text-clay-800 text-xs sm:text-sm font-bold flex items-center gap-1.5 hover:underline"
          >
            <span>View All Workshops</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item) => (
            <div key={item.id} className="clay-card overflow-hidden flex flex-col group border-2 border-clay-200">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-clay-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-clay-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {item.badge}
                </span>
                <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-clay-900 text-sm font-extrabold px-3 py-1 rounded-full shadow-sm">
                  ${item.price} / seat
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-clay-500 uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-xl font-bold text-clay-900 group-hover:text-clay-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-clay-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={onOpenBookingModal}
                    className="flex-1 bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs py-2.5 rounded-xl shadow-xs transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <Calendar size={14} /> Book Workshop
                  </button>
                  <button
                    onClick={() => onNavigate('workshops')}
                    className="bg-clay-100 hover:bg-clay-200 text-clay-800 font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE CLAY MINI-TOOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClayWidget />
      </section>

      {/* 4. WHY CHOOSE BACK TO BLOOM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="clay-badge text-xs mb-2 inline-block">The Bloom Difference</span>
          <h2 className="text-3xl font-bold text-clay-900">Why You'll Love Claying With Us</h2>
          <p className="text-xs sm:text-sm text-clay-600">Everything is designed for warmth, joy, and creative expression.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="clay-card p-6 text-left space-y-3 bg-white hover:border-clay-400">
              <div className="w-12 h-12 rounded-2xl bg-clay-100 flex items-center justify-center">
                {feat.icon}
              </div>
              <h3 className="font-bold text-clay-900 text-base">{feat.title}</h3>
              <p className="text-xs text-clay-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INSTAGRAM GALLERY TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card p-8 bg-gradient-to-r from-clay-100/70 via-white to-clay-100/70 text-center space-y-6">
          <div>
            <span className="clay-badge text-xs mb-2 inline-block">@BackToBloomPottery</span>
            <h2 className="text-3xl font-bold text-clay-900">Follow Our Studio Journey on Instagram</h2>
            <p className="text-xs sm:text-sm text-clay-600 max-w-md mx-auto">
              Behind-the-scenes pottery clips, kiln opening reveals, and student masterpieces updated daily!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <img src="/assets/IMG_20260904_223444_166.jpg" alt="Insta 1" className="h-40 w-full object-cover rounded-2xl border border-clay-200 hover:scale-105 transition-transform" />
            <img src="/assets/IMG_20260904_223444_180.jpg" alt="Insta 2" className="h-40 w-full object-cover rounded-2xl border border-clay-200 hover:scale-105 transition-transform" />
            <img src="/assets/IMG_20260904_223444_024.jpg" alt="Insta 3" className="h-40 w-full object-cover rounded-2xl border border-clay-200 hover:scale-105 transition-transform" />
            <img src="/assets/Screenshot_2026-09-04-22-41-00-52_1c337646f29875672b5a61192b9010f9.jpg" alt="Insta 4" className="h-40 w-full object-cover rounded-2xl border border-clay-200 hover:scale-105 transition-transform" />
          </div>

          <div>
            <button
              onClick={() => onNavigate('gallery')}
              className="bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Explore Full Instagram Gallery</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="clay-badge text-xs mb-2 inline-block">Student Love</span>
          <h2 className="text-3xl font-bold text-clay-900">Stories From Studio Guests</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="clay-card p-6 bg-white space-y-4 border border-clay-200">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-clay-700 italic leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-clay-100">
                <img src={t.image} alt={t.author} className="w-10 h-10 rounded-full object-cover border border-clay-300" />
                <div>
                  <h4 className="font-bold text-clay-900 text-xs">{t.author}</h4>
                  <p className="text-[11px] text-clay-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
