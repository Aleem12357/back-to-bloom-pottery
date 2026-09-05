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
                className="bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Class With Us</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* MEET THE OWNER / FOUNDER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card p-6 sm:p-10 bg-gradient-to-br from-clay-50 via-white to-clay-100/70 border-2 border-clay-300 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left shadow-sm">
          
          {/* Owner Picture with Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                <img
                  src="/assets/ownerpic.jpg"
                  alt="Eisha Nasim - Founder & Lead Instructor"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clay-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-0.5">
                  <p className="font-extrabold text-lg sm:text-xl">Eisha Nasim</p>
                  <p className="text-xs text-clay-200 font-medium">Studio Founder & Master Ceramicist</p>
                </div>
              </div>
              <span className="absolute -top-3 -right-3 bg-gradient-to-r from-clay-500 to-terracotta text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1">
                <Sparkles size={13} /> Founder & Lead Artist
              </span>
            </div>
          </div>

          {/* Owner Bio & Story */}
          <div className="lg:col-span-7 space-y-4">
            <span className="clay-badge text-xs inline-block">Meet the Founder</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-clay-900 leading-tight">
              "Pottery isn't about perfection; it's about connecting your hands with nature."
            </h2>
            <p className="text-xs sm:text-sm text-clay-700 leading-relaxed font-medium">
              Hi, I’m <strong>Eisha Nasim</strong>, founder of Back to Bloom Pottery Studio. With over 10 years of experience shaping clay on the wheel and firing high-temperature stoneware, my goal is to make ceramic art approachable, therapeutic, and deeply rewarding for everyone.
            </p>
            <p className="text-xs sm:text-sm text-clay-700 leading-relaxed font-medium">
              I created Back to Bloom as a cozy sanctuary where students can step away from digital screens, feel the grounding warmth of natural clay, and celebrate every unique piece they craft.
            </p>

            {/* Achievement Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-2xl border border-clay-200 text-center shadow-2xs">
                <p className="text-lg font-extrabold text-clay-600">10+ Years</p>
                <p className="text-[11px] text-clay-600 font-semibold">Pottery Experience</p>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-clay-200 text-center shadow-2xs">
                <p className="text-lg font-extrabold text-emerald-600">2,500+</p>
                <p className="text-[11px] text-clay-600 font-semibold">Students Taught</p>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-clay-200 text-center shadow-2xs col-span-2 sm:col-span-1">
                <p className="text-lg font-extrabold text-terracotta">100%</p>
                <p className="text-[11px] text-clay-600 font-semibold">Food-Safe Glazes</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBookingModal}
                className="bg-gradient-to-r from-clay-500 to-terracotta hover:from-clay-600 hover:to-terracotta/90 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <span>Join a Class with Eisha</span>
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
