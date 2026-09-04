import React, { useState } from 'react';
import { Heart, Sparkles, Eye, X, Share2, MessageCircle, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import { GALLERY_ITEMS } from '../data/gallery';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);
  const [likes, setLikes] = useState(
    GALLERY_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: item.likes }), {})
  );
  const [likedMap, setLikedMap] = useState({});

  const categories = ['All', 'Workshops', 'Ceramics', 'Events', 'Studio'];

  const handleLikeToggle = (id, e) => {
    e?.stopPropagation();
    setLikedMap((prev) => {
      const isLiked = prev[id];
      const newLikedState = !isLiked;
      setLikes((prevLikes) => ({
        ...prevLikes,
        [id]: prevLikes[id] + (newLikedState ? 1 : -1),
      }));
      return { ...prev, [id]: newLikedState };
    });
  };

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="space-y-12 pb-12">

      {/* PAGE HEADER HERO */}
      <section className="bg-gradient-to-r from-clay-100 via-clay-50 to-clay-100 py-10 px-4 sm:px-6 rounded-3xl border border-clay-200/90 text-center relative overflow-hidden shadow-sm">
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-white border border-clay-300 text-clay-800 text-xs font-bold px-3.5 py-1 rounded-full shadow-2xs">
            <InstagramIcon className="w-4 h-4 text-rose-500" />
            <span>@BackToBloomPottery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-clay-900">Instagram Studio Feed</h1>
          <p className="text-xs sm:text-base text-clay-700 font-medium">
            Peek inside our creative pottery studio! Explore real student creations, workshop moments, kiln openings, and cozy studio aesthetics.
          </p>
        </div>
      </section>

      {/* ATTACHED INSTAGRAM SCREENSHOT CALLOUT CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card p-6 bg-gradient-to-br from-white via-clay-50 to-clay-100 border-2 border-clay-300 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 relative rounded-2xl overflow-hidden shadow-md">
            <img
              src="/assets/Screenshot_2026-09-04-22-41-00-52_1c337646f29875672b5a61192b9010f9.jpg"
              alt="Back to Bloom Instagram Page Screenshot"
              className="w-full h-64 object-cover object-top"
            />
            <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-xs">
              Insta Screenshot
            </span>
          </div>

          <div className="w-full md:w-2/3 space-y-3 text-left">
            <span className="clay-badge text-xs inline-block">Official Social Feed</span>
            <h2 className="text-2xl font-bold text-clay-900">Connect With Our Instagram Community</h2>
            <p className="text-xs sm:text-sm text-clay-700 leading-relaxed">
              We regularly post weekly class updates, upcoming workshop dates, finished kiln glazes, and fun pottery tips! Follow us and tag us in your creations to be featured on our feed!
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-2"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </a>
              <a
                href="https://wa.me/?text=Hello%20Back%20to%20Bloom!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Ask via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY CHIPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-clay-500 text-white shadow-xs'
                  : 'bg-clay-100 text-clay-800 hover:bg-clay-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* INSTAGRAM PHOTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isLiked = likedMap[item.id];
            const currentLikes = likes[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className="clay-card overflow-hidden bg-white border border-clay-200 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-clay-100">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-clay-900/80 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                    <div className="absolute inset-0 bg-clay-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 text-clay-900 font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                        <Eye size={14} /> View Photo
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2 text-left">
                    <p className="text-xs text-clay-700 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-clay-100 flex items-center justify-between mt-2">
                  <button
                    onClick={(e) => handleLikeToggle(item.id, e)}
                    className={`flex items-center gap-1.5 text-xs font-bold transition-all ${
                      isLiked ? 'text-rose-600' : 'text-clay-500 hover:text-rose-600'
                    }`}
                  >
                    <Heart size={16} className={isLiked ? 'fill-rose-600' : ''} />
                    <span>{currentLikes}</span>
                  </button>
                  <span className="text-[10px] font-bold text-clay-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-clay-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-clay-200 space-y-4 text-left relative animate-fade-in">
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 text-clay-400 hover:text-clay-800 text-lg font-bold z-10"
            >
              <X size={22} />
            </button>

            <div className="rounded-2xl overflow-hidden max-h-96 bg-clay-100">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.caption}
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="clay-badge text-xs">{activeLightboxItem.tag}</span>
                <button
                  onClick={(e) => handleLikeToggle(activeLightboxItem.id, e)}
                  className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border transition-all ${
                    likedMap[activeLightboxItem.id]
                      ? 'bg-rose-50 text-rose-600 border-rose-200'
                      : 'bg-clay-50 text-clay-600 border-clay-200'
                  }`}
                >
                  <Heart size={15} className={likedMap[activeLightboxItem.id] ? 'fill-rose-600' : ''} />
                  <span>{likes[activeLightboxItem.id]} Likes</span>
                </button>
              </div>

              <p className="text-sm text-clay-800 leading-relaxed font-medium">
                {activeLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
