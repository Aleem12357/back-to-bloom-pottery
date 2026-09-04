import React, { useState } from 'react';
import { ShoppingBag, Star, Eye, Check, Sparkles, Filter, Search, Heart, PackageCheck } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function Shop({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProductModal, setActiveProductModal] = useState(null);
  const [addedItemIds, setAddedItemIds] = useState([]);

  const categories = ['All', 'Mugs & Cups', 'Vases & Planters', 'DIY Kits', 'Trinkets & Decor'];

  const filteredProducts = PRODUCTS.filter((prod) => {
    const matchesCat = selectedCategory === 'All' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleAddToCartClick = (prod) => {
    onAddToCart(prod);
    setAddedItemIds((prev) => [...prev, prod.id]);
    setTimeout(() => {
      setAddedItemIds((prev) => prev.filter((id) => id !== prod.id));
    }, 1500);
  };

  return (
    <div className="space-y-12 pb-12">

      {/* PAGE HEADER HERO */}
      <section className="bg-gradient-to-r from-clay-100 via-clay-50 to-clay-100 py-10 px-4 sm:px-6 rounded-3xl border border-clay-200/90 text-center relative overflow-hidden shadow-sm">
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <span className="clay-badge text-xs inline-block">Handcrafted Collection</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-clay-900">Handmade Ceramics & DIY Kits</h1>
          <p className="text-xs sm:text-base text-clay-700 font-medium">
            Every piece is lovingly hand-thrown, hand-carved, and fired in our studio kiln. Take home a piece of ceramic art or craft your own with our DIY pottery kits!
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-clay-200 shadow-xs">

          {/* Categories */}
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
          <div className="w-full md:w-64 relative">
            <input
              type="text"
              placeholder="Search ceramics & kits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-clay-50 border border-clay-300 rounded-xl pl-9 pr-3.5 py-2 text-xs font-semibold text-clay-900 focus:bg-white focus:ring-2 focus:ring-clay-400 focus:outline-none"
            />
            <Search size={14} className="absolute left-3 top-2.5 text-clay-400" />
          </div>

        </div>

        {/* PRODUCTS CATALOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => {
            const isAdded = addedItemIds.includes(prod.id);
            return (
              <div key={prod.id} className="clay-card overflow-hidden flex flex-col justify-between border border-clay-200 group bg-white">
                <div>
                  <div className="relative h-60 overflow-hidden bg-clay-100">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-clay-900/80 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                      {prod.badge}
                    </span>
                    <button
                      onClick={() => setActiveProductModal(prod)}
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white text-clay-800 p-2 rounded-full shadow-md transition-all hover:scale-110"
                      title="Quick View Details"
                    >
                      <Eye size={16} />
                    </button>
                  </div>

                  <div className="p-5 space-y-2 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-clay-500 uppercase tracking-wider">{prod.category}</span>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                        <Star size={13} fill="currentColor" />
                        <span>{prod.rating}</span>
                        <span className="text-clay-400 font-normal">({prod.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-clay-900 text-base group-hover:text-clay-600 transition-colors">
                      {prod.name}
                    </h3>

                    <p className="text-xs text-clay-600 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>

                    <p className="text-xl font-extrabold text-clay-600 pt-1">
                      ${prod.price}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleAddToCartClick(prod)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-clay-500 hover:bg-clay-600 text-white active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check size={16} />
                        <span>Added to Basket!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={16} />
                        <span>Add to Basket</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* QUICK VIEW PRODUCT MODAL */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-clay-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-clay-200 space-y-4 text-left relative animate-fade-in">
            <button
              onClick={() => setActiveProductModal(null)}
              className="absolute top-4 right-4 text-clay-400 hover:text-clay-800 text-lg font-bold"
            >
              ✕
            </button>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img src={activeProductModal.image} alt={activeProductModal.name} className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 bg-clay-900/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                {activeProductModal.category}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-clay-900">{activeProductModal.name}</h3>
                <span className="text-xl font-extrabold text-clay-600">${activeProductModal.price}</span>
              </div>
              <p className="text-xs text-clay-600 leading-relaxed">{activeProductModal.description}</p>
            </div>

            <div className="bg-clay-50 p-3 rounded-xl border border-clay-200 text-xs text-clay-700 space-y-1">
              <p className="flex items-center gap-1.5 font-bold text-clay-900">
                <PackageCheck size={14} className="text-emerald-600" /> Handcrafted Studio Piece
              </p>
              <p>• Food-safe glaze & high-temp fired stoneware</p>
              <p>• Carefully bubble-wrapped and shipped in cute eco-box</p>
            </div>

            <button
              onClick={() => {
                const p = activeProductModal;
                handleAddToCartClick(p);
                setActiveProductModal(null);
              }}
              className="w-full bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} /> Add to Basket (${activeProductModal.price})
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
