import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Phone, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, selectedWorkshop, workshops }) {
  const [activeWorkshop, setActiveWorkshop] = useState(selectedWorkshop || workshops[0]);
  const [selectedDate, setSelectedDate] = useState(activeWorkshop?.schedule[0]?.date || '2026-09-12');
  const [selectedTime, setSelectedTime] = useState(activeWorkshop?.schedule[0]?.times[0] || '10:00 AM - 12:30 PM');
  const [guests, setGuests] = useState(1);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!isOpen) return null;

  const currentWorkshop = activeWorkshop || workshops[0];
  const totalPrice = currentWorkshop.price * guests;

  const handleSelectWorkshop = (wk) => {
    setActiveWorkshop(wk);
    if (wk.schedule && wk.schedule[0]) {
      setSelectedDate(wk.schedule[0].date);
      setSelectedTime(wk.schedule[0].times[0]);
    }
  };

  const whatsappMessageText =
    `Hello Back to Bloom Pottery! 🏺\n\n` +
    `I would like to book a class session:\n` +
    `🎨 Workshop: ${currentWorkshop.title}\n` +
    `📅 Date: ${selectedDate}\n` +
    `⏰ Time Slot: ${selectedTime}\n` +
    `👥 Attendees: ${guests} ${guests > 1 ? 'people' : 'person'}\n` +
    `💰 Total Amount: $${totalPrice}\n\n` +
    `👤 Name: ${guestName || 'Guest'}\n` +
    `📱 Phone: ${guestPhone}\n` +
    `📧 Email: ${guestEmail}\n` +
    (specialRequests ? `📝 Special Requests: ${specialRequests}\n` : '') +
    `\nPlease confirm my booking spot!`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessageText)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
    // Send booking directly to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleResetAndClose = () => {
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-clay-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-clay-200">

        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-clay-50 to-clay-100 border-b border-clay-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 bg-clay-500 text-white rounded-2xl shadow-sm">
              <Calendar size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-clay-900">Book Workshop Session</h3>
              <p className="text-xs text-clay-600">Reserve your spot at Back to Bloom Pottery</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 text-clay-500 hover:text-clay-900 hover:bg-clay-200/60 rounded-full transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {bookingConfirmed ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce-soft">
                <CheckCircle2 size={44} />
              </div>

              <div>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-bold mb-2 inline-block">
                  Booking Sent to WhatsApp!
                </span>
                <h4 className="text-2xl font-bold text-clay-900">We Can't Wait to Clay With You!</h4>
                <p className="text-sm text-clay-600 max-w-md mx-auto mt-1">
                  Your booking request has been opened in WhatsApp. Click below if you need to re-open the message.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-clay-50 p-5 rounded-2xl border border-clay-200/90 text-left max-w-md mx-auto space-y-2 text-sm text-clay-800">
                <p className="font-bold text-clay-900 text-base border-b border-clay-200 pb-2 flex items-center justify-between">
                  <span>{currentWorkshop.title}</span>
                  <span className="text-clay-600 font-extrabold">${totalPrice}</span>
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div>
                    <span className="text-clay-500 block">Date & Time:</span>
                    <span className="font-semibold text-clay-900">{selectedDate} @ {selectedTime}</span>
                  </div>
                  <div>
                    <span className="text-clay-500 block">Guests:</span>
                    <span className="font-semibold text-clay-900">{guests} Person{guests > 1 ? 's' : ''}</span>
                  </div>
                  <div>
                    <span className="text-clay-500 block">Name:</span>
                    <span className="font-semibold text-clay-900">{guestName || 'Friend of Bloom'}</span>
                  </div>
                  <div>
                    <span className="text-clay-500 block">Contact Phone:</span>
                    <span className="font-semibold text-clay-900">{guestPhone || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Send Action */}
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Open WhatsApp Chat</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="bg-clay-100 hover:bg-clay-200 text-clay-800 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* 1. Select Workshop Item */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-clay-800 uppercase tracking-wider block">
                  1. Choose Workshop Class
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {workshops.map((wk) => (
                    <button
                      key={wk.id}
                      type="button"
                      onClick={() => handleSelectWorkshop(wk)}
                      className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                        activeWorkshop.id === wk.id
                          ? 'bg-clay-500 text-white border-clay-600 shadow-sm'
                          : 'bg-clay-50 text-clay-800 border-clay-200 hover:bg-clay-100'
                      }`}
                    >
                      <img
                        src={wk.image}
                        alt={wk.title}
                        className="w-12 h-12 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-xs truncate">{wk.title}</p>
                        <p className={`text-[11px] ${activeWorkshop.id === wk.id ? 'text-clay-100' : 'text-clay-500'}`}>
                          ${wk.price} / person • {wk.duration}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Date & Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-clay-50/80 p-4 rounded-2xl border border-clay-200">

                {/* Date dropdown */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-clay-800 flex items-center gap-1">
                    <Calendar size={14} className="text-clay-600" /> Select Date
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-white border border-clay-300 rounded-xl px-3 py-2 text-xs font-semibold text-clay-900 focus:ring-2 focus:ring-clay-400 focus:outline-none"
                  >
                    {currentWorkshop.schedule.map((s) => (
                      <option key={s.date} value={s.date}>
                        {s.date} ({s.spotsLeft} spots left)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time dropdown */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-clay-800 flex items-center gap-1">
                    <Clock size={14} className="text-clay-600" /> Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-white border border-clay-300 rounded-xl px-3 py-2 text-xs font-semibold text-clay-900 focus:ring-2 focus:ring-clay-400 focus:outline-none"
                  >
                    {currentWorkshop.schedule
                      .find((s) => s.date === selectedDate)
                      ?.times.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      )) || <option value="10:00 AM">10:00 AM</option>}
                  </select>
                </div>

              </div>

              {/* 3. Guests & Personal Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white p-3.5 rounded-2xl border border-clay-200">
                  <span className="text-xs font-bold text-clay-800 flex items-center gap-1.5">
                    <Users size={16} className="text-clay-600" /> Number of Attendees
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 rounded-full bg-clay-100 hover:bg-clay-200 text-clay-800 font-bold flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-extrabold text-sm text-clay-900 min-w-[1.2rem] text-center">{guests}</span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      className="w-8 h-8 rounded-full bg-clay-100 hover:bg-clay-200 text-clay-800 font-bold flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-clay-800 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-clay-50 border border-clay-300 rounded-xl px-3.5 py-2 text-xs text-clay-900 focus:bg-white focus:ring-2 focus:ring-clay-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-clay-800 block mb-1">Phone Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-clay-50 border border-clay-300 rounded-xl px-3.5 py-2 text-xs text-clay-900 focus:bg-white focus:ring-2 focus:ring-clay-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-clay-800 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-clay-50 border border-clay-300 rounded-xl px-3.5 py-2 text-xs text-clay-900 focus:bg-white focus:ring-2 focus:ring-clay-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Total Calculation & Confirm Button */}
              <div className="pt-2 border-t border-clay-200 flex items-center justify-between">
                <div>
                  <p className="text-xs text-clay-500">Total Price ({guests} ticket{guests > 1 ? 's' : ''})</p>
                  <p className="text-2xl font-black text-clay-600">${totalPrice}</p>
                </div>

                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Book & Send to WhatsApp</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
