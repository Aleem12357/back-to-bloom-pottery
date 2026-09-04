import React from 'react';
import { Heart, Sparkles, Award, Compass, Users, Smile, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About({ onNavigate, onOpenBookingModal }) {
  const values = [
    {
      title: 'Mindful Creation',
      desc: 'Pottery is slowing down, feeling the soft clay, and focusing on the present moment.',
      icon: <Heart className="text-rose-500" size={24} />
    },
    {
      title: 'Warm Inclusivity',
      desc: 'Whether you are a total beginner or an experienced potter, our studio warmly welcomes you.',
      icon: <Smile className="text-amber-500" size={24} />
    },
    {
      title: 'Handcrafted Quality',
      desc: 'We double-fire all creations in high temperature kilns for durable food-safe everyday use.',
      icon: <Award className="text-emerald-600" size={24} />
    }
  ];

  return (
    <div className="space-y-12 pb-12">

      {/* PAGE HEADER HERO */}
      <section className="bg-gradient-to-r from-clay-100 via-clay-50 to-clay-100 py-10 px-4 sm:px-6 rounded-3xl border border-clay-200/90 text-center relative overflow-hidden shadow-sm">
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <span className="clay-badge text-xs inline-block">Our Story & Passion</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-clay-900">About Back to Bloom Studio</h1>
          <p className="text-xs sm:text-base text-clay-700 font-medium">
            Where clay meets creativity, laughter, and community. Discover the heart and soul behind our creative workshop haven.
          </p>
        </div>
      </section>

      {/* STORY SECTION WITH LOGO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card p-6 sm:p-10 bg-white border-2 border-clay-200 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <img
                src="/assets/logo.jpg"
                alt="Back to Bloom Logo"
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-clay-500 shadow-xl object-cover"
              />
              <span className="absolute -bottom-2 -right-2 bg-clay-500 text-white p-3 rounded-full shadow-lg">
                <Sparkles size={24} />
              </span>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4 text-left">
            <span className="clay-badge text-xs inline-block">Est. 2021</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-clay-900">How Back to Bloom Came to Life</h2>
            <p className="text-xs sm:text-sm text-clay-700 leading-relaxed font-medium">
              Back to Bloom started with a simple wheel and a passion for mud! We wanted to build a sanctuary away from screen fatigue—a place where people could slow down, get their hands dirty, and experience the tactile joy of pottery.
            </p>
            <p className="text-xs sm:text-sm text-clay-700 leading-relaxed font-medium">
              Today, our cozy studio hosts hundreds of students every month for wheel throwing classes, hand building sculpts, and joyful evening events.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBookingModal}
                className="bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>Book a Class With Us</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* STUDIO VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="clay-badge text-xs mb-2 inline-block">Our Ethos</span>
          <h2 className="text-3xl font-bold text-clay-900">Studio Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="clay-card p-6 bg-white border border-clay-200 text-left space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-clay-100 flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="font-bold text-clay-900 text-lg">{v.title}</h3>
              <p className="text-xs text-clay-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card p-6 bg-gradient-to-r from-clay-50 via-white to-clay-50 border border-clay-200 text-center space-y-6">
          <h3 className="text-2xl font-bold text-clay-900">Life Inside the Studio</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <img src="/assets/workshop.jpg" alt="Workshop 1" className="h-44 w-full object-cover rounded-2xl border border-clay-200" />
            <img src="/assets/workshp.jpg" alt="Workshop 2" className="h-44 w-full object-cover rounded-2xl border border-clay-200" />
            <img src="/assets/IMG_20260904_223444_166.jpg" alt="Workshop 3" className="h-44 w-full object-cover rounded-2xl border border-clay-200" />
            <img src="/assets/IMG_20260904_223444_180.jpg" alt="Workshop 4" className="h-44 w-full object-cover rounded-2xl border border-clay-200" />
          </div>
        </div>
      </section>

    </div>
  );
}
