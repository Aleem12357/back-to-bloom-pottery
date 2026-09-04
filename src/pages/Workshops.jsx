import React, { useState } from 'react';
import { Calendar, Clock, Users, Sparkles, Filter, CheckCircle2, ArrowRight, Info, MessageCircle } from 'lucide-react';
import { WORKSHOPS } from '../data/workshops';

export default function Workshops({ onOpenBookingModalWithWorkshop }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDetailModal, setActiveDetailModal] = useState(null);

  const categories = ['All', 'Wheel Throwing', 'Hand Building', 'Glazing & Painting', 'Special Events', 'Family Friendly'];

  const filteredWorkshops = WORKSHOPS.filter(wk => {
    const matchesCategory = selectedCategory === 'All' || wk.category === selectedCategory;
    const matchesSearch = wk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          wk.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-12">

      {/* PAGE HEADER HERO */}
      <section className="bg-gradient-to-r from-clay-100 via-clay-50 to-clay-100 py-10 px-4 sm:px-6 rounded-3xl border border-clay-200/90 text-center relative overflow-hidden shadow-sm">
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <span className="clay-badge text-xs inline-block">Interactive Schedule</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-clay-900">Pottery Workshops & Classes</h1>
          <p className="text-xs sm:text-base text-clay-700 font-medium">
            Discover hands-on wheel throwing sessions, cozy hand-building workshops, and festive clay & wine nights! All materials, glaze & firing included.
          </p>
        </div>
      </section>

      {/* FEATURED POSTER WORKSHOPS (ATTACHED USER IMAGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-2">
          <Sparkles className="text-clay-600" size={20} />
          <h2 className="text-xl sm:text-2xl font-bold text-clay-900">Featured Workshop Posters</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Poster 1: Wheel Throwing (workshop.jpg) */}
          <div className="clay-card p-4 sm:p-6 bg-white border-2 border-clay-300 flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-full sm:w-1/2 relative rounded-2xl overflow-hidden shadow-md">
              <img src="/assets/workshop.jpg" alt="Beginner Pottery Workshop Poster" className="w-full h-72 object-cover" />
              <span className="absolute top-2 left-2 bg-clay-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                Poster #1
              </span>
            </div>
            <div className="w-full sm:w-1/2 space-y-3 text-left">
              <span className="clay-badge text-[11px] inline-block">Wheel Throwing</span>
              <h3 className="text-lg font-bold text-clay-900">Beginner Pottery & Wheel Throwing</h3>
              <p className="text-xs text-clay-600 leading-relaxed">
                Step-by-step masterclass on centering clay, pulling cylinders, and creating handmade ceramic pieces on the spinning wheel.
              </p>
              <div className="text-xs font-semibold text-clay-700 space-y-1">
                <p>⏱️ Duration: 2.5 Hours</p>
                <p>🏺 Takes home: 2 finished glazed pots</p>
                <p>💰 Price: $45 / person</p>
              </div>
              <button
                onClick={() => onOpenBookingModalWithWorkshop(WORKSHOPS[0])}
                className="w-full bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs py-2.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
              >
                <Calendar size={14} /> Book Wheel Throwing
              </button>
            </div>
          </div>

          {/* Poster 2: Hand-Building (workshp.jpg) */}
          <div className="clay-card p-4 sm:p-6 bg-white border-2 border-clay-300 flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-full sm:w-1/2 relative rounded-2xl overflow-hidden shadow-md">
              <img src="/assets/workshp.jpg" alt="Hand Building Sculpting Poster" className="w-full h-72 object-cover" />
              <span className="absolute top-2 left-2 bg-clay-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                Poster #2
              </span>
            </div>
            <div className="w-full sm:w-1/2 space-y-3 text-left">
              <span className="clay-badge text-[11px] inline-block">Hand Building</span>
              <h3 className="text-lg font-bold text-clay-900">Hand-Building Ceramic Art & Sculpting</h3>
              <p className="text-xs text-clay-600 leading-relaxed">
                Sculpt whimsical trinket trays, mugs, or cute planters using organic clay, pinching, coiling, and stamping techniques.
              </p>
              <div className="text-xs font-semibold text-clay-700 space-y-1">
                <p>⏱️ Duration: 2 Hours</p>
                <p>🎨 Includes: Organic Clay + Underglazes</p>
                <p>💰 Price: $40 / person</p>
              </div>
              <button
                onClick={() => onOpenBookingModalWithWorkshop(WORKSHOPS[1])}
                className="w-full bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs py-2.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
              >
                <Calendar size={14} /> Book Hand Building
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SEARCH & CATEGORY FILTERING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-clay-200 shadow-xs">

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-clay-500 text-white shadow-xs'
                    : 'bg-clay-100 text-clay-800 hover:bg-clay-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search workshops..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-clay-50 border border-clay-300 rounded-xl px-3.5 py-2 text-xs font-semibold text-clay-900 focus:bg-white focus:ring-2 focus:ring-clay-400 focus:outline-none"
            />
          </div>

        </div>

        {/* WORKSHOP CATALOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkshops.map((wk) => (
            <div key={wk.id} className="clay-card overflow-hidden flex flex-col justify-between border border-clay-200 group">
              <div>
                <div className="relative h-52 overflow-hidden bg-clay-100">
                  <img
                    src={wk.image}
                    alt={wk.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-clay-900/80 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    {wk.category}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-white text-clay-900 font-extrabold text-xs px-3 py-1 rounded-full shadow-sm">
                    ${wk.price}
                  </span>
                </div>

                <div className="p-5 space-y-3 text-left">
                  <h3 className="font-bold text-clay-900 text-base group-hover:text-clay-600 transition-colors">
                    {wk.title}
                  </h3>
                  <p className="text-xs text-clay-600 line-clamp-2 leading-relaxed">
                    {wk.description}
                  </p>

                  <div className="pt-2 border-t border-clay-100 text-xs text-clay-700 space-y-1">
                    <p className="flex items-center gap-1.5 font-semibold">
                      <Clock size={13} className="text-clay-500" /> {wk.duration} • {wk.level}
                    </p>
                    <p className="flex items-center gap-1.5 text-emerald-700 font-bold">
                      <CheckCircle2 size={13} className="text-emerald-600" /> Glazing & Double Firing Included
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex gap-2">
                <button
                  onClick={() => onOpenBookingModalWithWorkshop(wk)}
                  className="flex-1 bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs py-2.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Calendar size={14} /> Reserve Seat
                </button>
                <button
                  onClick={() => setActiveDetailModal(wk)}
                  className="bg-clay-100 hover:bg-clay-200 text-clay-800 p-2.5 rounded-xl transition-all"
                  title="View Included Materials"
                >
                  <Info size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAIL MODAL FOR WORKSHOP INCLUSIONS */}
      {activeDetailModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-clay-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-clay-200 space-y-4 text-left relative">
            <button
              onClick={() => setActiveDetailModal(null)}
              className="absolute top-4 right-4 text-clay-400 hover:text-clay-800"
            >
              ✕
            </button>
            <img src={activeDetailModal.image} alt={activeDetailModal.title} className="w-full h-48 object-cover rounded-2xl" />
            <h3 className="text-xl font-bold text-clay-900">{activeDetailModal.title}</h3>
            <p className="text-xs text-clay-600">{activeDetailModal.description}</p>

            <div>
              <h4 className="text-xs font-bold text-clay-800 uppercase tracking-wider mb-2">What's Included:</h4>
              <ul className="space-y-1.5 text-xs text-clay-700">
                {activeDetailModal.includes.map((inc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                const wk = activeDetailModal;
                setActiveDetailModal(null);
                onOpenBookingModalWithWorkshop(wk);
              }}
              className="w-full bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Calendar size={15} /> Book This Workshop (${activeDetailModal.price})
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
