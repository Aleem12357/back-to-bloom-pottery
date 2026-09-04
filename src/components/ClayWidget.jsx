import React, { useState } from 'react';
import { Sparkles, RefreshCw, Palette, Heart, Check, Flower2 } from 'lucide-react';

export default function ClayWidget() {
  const [shape, setShape] = useState('mug'); // mug, vase, planter, bowl
  const [glaze, setGlaze] = useState('#D98A6C'); // terracotta, pink, sage, cobalt, cream
  const [pattern, setPattern] = useState('flowers'); // none, flowers, hearts, dots
  const [isSpinning, setIsSpinning] = useState(true);

  const shapes = [
    { id: 'mug', name: 'Coffee Mug' },
    { id: 'vase', name: 'Ribbed Vase' },
    { id: 'planter', name: 'Cute Planter' },
    { id: 'bowl', name: 'Artisan Bowl' },
  ];

  const glazes = [
    { name: 'Warm Terracotta', hex: '#D98A6C' },
    { name: 'Soft Clay Pink', hex: '#F7D6C8' },
    { name: 'Earthy Sage', hex: '#A8C3B8' },
    { name: 'Deep Espresso', hex: '#4A2E2B' },
    { name: 'Creamy Glaze', hex: '#FFF9F6' },
  ];

  const patterns = [
    { id: 'none', label: 'Smooth Plain' },
    { id: 'flowers', label: '🌸 Flowers' },
    { id: 'hearts', label: '💖 Tiny Hearts' },
    { id: 'dots', label: '✨ Speckles' },
  ];

  return (
    <div className="clay-card p-6 sm:p-8 bg-gradient-to-br from-white to-clay-50 border-2 border-clay-200 shadow-xl rounded-3xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-8">

        {/* Interactive Visualizer Canvas Area */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-clay-100/60 rounded-2xl relative border border-clay-200/80 min-h-[260px]">
          <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold text-clay-800 shadow-xs flex items-center gap-1">
            <Sparkles size={12} className="text-amber-500" /> Pottery Wheel Preview
          </div>

          <button
            onClick={() => setIsSpinning(!isSpinning)}
            className="absolute top-3 right-3 bg-white hover:bg-clay-200/70 p-1.5 rounded-full text-xs text-clay-700 shadow-xs transition-colors flex items-center gap-1"
            title="Toggle Spin"
          >
            <RefreshCw size={14} className={isSpinning ? 'animate-spin' : ''} />
          </button>

          {/* SVG Canvas for Pottery Wheel & Pottery Piece */}
          <div className="relative my-4 flex items-center justify-center">
            {/* Spinning Wheel Base */}
            <div className={`w-44 h-10 rounded-full bg-clay-300 border-4 border-clay-400 shadow-lg flex items-center justify-center ${isSpinning ? 'animate-pulse' : ''}`}>
              <div className="w-32 h-6 rounded-full bg-clay-400/80 border-2 border-clay-500" />
            </div>

            {/* Pottery Ceramic SVG Object */}
            <div className={`absolute -top-16 transition-all duration-500 ${isSpinning ? 'animate-bounce-soft' : ''}`}>
              <svg width="120" height="130" viewBox="0 0 120 130" className="drop-shadow-md">
                {shape === 'mug' && (
                  <g>
                    {/* Mug handle */}
                    <path d="M85 35 C115 35, 115 85, 85 85" fill="none" stroke={glaze} strokeWidth="12" strokeLinecap="round" />
                    {/* Mug body */}
                    <path d="M30 20 L90 20 L85 100 Q85 108 60 108 Q35 108 35 100 Z" fill={glaze} stroke="#4A2E2B" strokeWidth="2.5" />
                    {/* Mug rim inner glow */}
                    <ellipse cx="60" cy="20" rx="30" ry="6" fill="#FFF" opacity="0.3" />
                  </g>
                )}

                {shape === 'vase' && (
                  <g>
                    {/* Vase body */}
                    <path d="M40 15 L80 15 L70 45 Q95 75 80 105 Q80 112 60 112 Q40 112 40 105 Q25 75 50 45 Z" fill={glaze} stroke="#4A2E2B" strokeWidth="2.5" />
                    {/* Ribbed lines */}
                    <line x1="45" y1="55" x2="75" y2="55" stroke="#FFF" strokeWidth="2" opacity="0.4" />
                    <line x1="40" y1="75" x2="80" y2="75" stroke="#FFF" strokeWidth="2" opacity="0.4" />
                    <line x1="45" y1="95" x2="75" y2="95" stroke="#FFF" strokeWidth="2" opacity="0.4" />
                  </g>
                )}

                {shape === 'planter' && (
                  <g>
                    {/* Cute animal ears / planter handles */}
                    <circle cx="35" cy="22" r="10" fill={glaze} stroke="#4A2E2B" strokeWidth="2" />
                    <circle cx="85" cy="22" r="10" fill={glaze} stroke="#4A2E2B" strokeWidth="2" />
                    <path d="M25 30 L95 30 L88 100 Q88 108 60 108 Q32 108 32 100 Z" fill={glaze} stroke="#4A2E2B" strokeWidth="2.5" />
                    {/* Cute face overlay */}
                    <circle cx="48" cy="60" r="3" fill="#4A2E2B" />
                    <circle cx="72" cy="60" r="3" fill="#4A2E2B" />
                    <path d="M56 68 Q60 72 64 68" fill="none" stroke="#4A2E2B" strokeWidth="2" strokeLinecap="round" />
                  </g>
                )}

                {shape === 'bowl' && (
                  <g>
                    <path d="M15 35 Q60 20 105 35 L90 95 Q90 102 60 102 Q30 102 30 95 Z" fill={glaze} stroke="#4A2E2B" strokeWidth="2.5" />
                    <ellipse cx="60" cy="35" rx="45" ry="10" fill="#FFF" opacity="0.25" />
                  </g>
                )}

                {/* Pattern Overlay */}
                {pattern === 'flowers' && (
                  <g fill="#FFF" opacity="0.85">
                    <circle cx="50" cy="50" r="2.5" />
                    <circle cx="45" cy="50" r="2" fill="#E2B09B" />
                    <circle cx="55" cy="50" r="2" fill="#E2B09B" />
                    <circle cx="50" cy="45" r="2" fill="#E2B09B" />
                    <circle cx="50" cy="55" r="2" fill="#E2B09B" />

                    <circle cx="70" cy="75" r="2.5" />
                    <circle cx="65" cy="75" r="2" fill="#E2B09B" />
                    <circle cx="75" cy="75" r="2" fill="#E2B09B" />
                    <circle cx="70" cy="70" r="2" fill="#E2B09B" />
                    <circle cx="70" cy="80" r="2" fill="#E2B09B" />
                  </g>
                )}

                {pattern === 'hearts' && (
                  <g fill="#FFF" opacity="0.8">
                    <path d="M50 48 C50 45, 46 43, 44 46 C42 43, 38 45, 38 48 C38 52, 44 56, 44 56 C44 56, 50 52, 50 48 Z" />
                    <path d="M72 70 C72 67, 68 65, 66 68 C64 65, 60 67, 60 70 C60 74, 66 78, 66 78 C66 78, 72 74, 72 70 Z" />
                  </g>
                )}

                {pattern === 'dots' && (
                  <g fill="#FFF" opacity="0.75">
                    <circle cx="42" cy="45" r="2" />
                    <circle cx="65" cy="40" r="1.5" />
                    <circle cx="52" cy="70" r="2.5" />
                    <circle cx="75" cy="65" r="2" />
                    <circle cx="38" cy="80" r="1.5" />
                  </g>
                )}
              </svg>
            </div>
          </div>

          <p className="text-xs font-semibold text-clay-700 mt-2 text-center">
            Customizing: <span className="font-bold text-clay-900 capitalize">{shape}</span> with {glazes.find(g => g.hex === glaze)?.name}
          </p>
        </div>

        {/* Customization Control Panel */}
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-clay-100 text-clay-800 text-xs font-bold px-3 py-1 rounded-full mb-1">
              <Palette size={13} /> Interactive Studio Tool
            </div>
            <h3 className="text-2xl font-bold text-clay-900">Design Your Clay Vision</h3>
            <p className="text-xs text-clay-600">
              Select your favorite shape, glaze hue, and cute pattern motif to preview custom pottery!
            </p>
          </div>

          {/* 1. Shape Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-clay-800 uppercase tracking-wider">1. Select Shape</label>
            <div className="grid grid-cols-2 gap-2">
              {shapes.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setShape(s.id)}
                  className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all text-left flex items-center justify-between ${
                    shape === s.id
                      ? 'bg-clay-500 text-white border-clay-600 shadow-xs'
                      : 'bg-white text-clay-800 border-clay-200 hover:bg-clay-100/60'
                  }`}
                >
                  <span>{s.name}</span>
                  {shape === s.id && <Check size={12} />}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Glaze Color Palette */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-clay-800 uppercase tracking-wider">2. Pick Glaze Tone</label>
            <div className="flex items-center gap-2.5">
              {glazes.map((g) => (
                <button
                  key={g.hex}
                  onClick={() => setGlaze(g.hex)}
                  className={`w-9 h-9 rounded-full border-2 transition-transform ${
                    glaze === g.hex ? 'scale-110 border-clay-900 shadow-md ring-2 ring-clay-300' : 'border-white shadow-xs hover:scale-105'
                  }`}
                  style={{ backgroundColor: g.hex }}
                  title={g.name}
                />
              ))}
            </div>
          </div>

          {/* 3. Pattern Accent */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-clay-800 uppercase tracking-wider">3. Add Pattern Motif</label>
            <div className="grid grid-cols-2 gap-2">
              {patterns.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPattern(p.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all ${
                    pattern === p.id
                      ? 'bg-clay-800 text-white border-clay-900 shadow-xs'
                      : 'bg-white text-clay-700 border-clay-200 hover:bg-clay-100/60'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
