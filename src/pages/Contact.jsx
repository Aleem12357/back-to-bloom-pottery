import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      q: 'Do I need any prior experience for the workshops?',
      a: 'Not at all! Over 90% of our attendees are total beginners. Our patient instructors will guide you through centering, shaping, and decorating your pieces step-by-step.'
    },
    {
      q: 'When do I get to pick up my finished ceramics?',
      a: 'Pottery requires drying and two separate kiln firings (bisque + glaze firing). Your pieces will be ready for pickup or shipping in 2 to 3 weeks! We notify you via WhatsApp or email.'
    },
    {
      q: 'What should I wear to a pottery class?',
      a: 'Wear comfortable clothes that you don’t mind getting a little clay on (clay washes out easily!). We also recommend trimming long fingernails and pulling long hair back.'
    },
    {
      q: 'Can I book a private group event or birthday party?',
      a: 'Yes! We love hosting private clay parties, bridal showers, team bonding, and birthdays. Contact us directly via WhatsApp or email for custom group packages.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="space-y-12 pb-12">

      {/* PAGE HEADER HERO */}
      <section className="bg-gradient-to-r from-clay-100 via-clay-50 to-clay-100 py-10 px-4 sm:px-6 rounded-3xl border border-clay-200/90 text-center relative overflow-hidden shadow-sm">
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <span className="clay-badge text-xs inline-block">We're Here to Help</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-clay-900">Contact & Frequently Asked Questions</h1>
          <p className="text-xs sm:text-base text-clay-700 font-medium">
            Have questions about workshops, custom ceramic orders, or private events? Reach out anytime!
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* CONTACT INFO SIDEBAR */}
          <div className="lg:col-span-5 space-y-6">
            <div className="clay-card p-6 bg-white border border-clay-200 space-y-6 text-left">
              <h2 className="text-xl font-bold text-clay-900">Get in Touch</h2>

              <div className="space-y-4 text-xs sm:text-sm text-clay-700">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-clay-100 text-clay-700 rounded-xl">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-clay-900">Studio Address</h4>
                    <p>124 Clay Studio Way, Ceramic Quarter, Creative City</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-clay-900">WhatsApp & Phone</h4>
                    <a href="https://wa.me/?text=Hello%20Back%20to%20Bloom!" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                      Chat on WhatsApp (+1 555-256-6625)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-clay-100 text-clay-700 rounded-xl">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-clay-900">Email Address</h4>
                    <a href="mailto:hello@backtobloom.com" className="hover:underline">hello@backtobloom.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-clay-100 text-clay-700 rounded-xl">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-clay-900">Studio Working Hours</h4>
                    <p>Tue - Fri: 10:00 AM – 7:00 PM</p>
                    <p>Sat - Sun: 10:00 AM – 8:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Direct Social Buttons */}
              <div className="pt-4 border-t border-clay-100 space-y-2">
                <p className="text-xs font-bold text-clay-800">Connect on Social Media:</p>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <FacebookIcon className="w-4 h-4" /> Facebook
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-rose-500 text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <InstagramIcon className="w-4 h-4" /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="clay-card p-6 sm:p-8 bg-white border border-clay-200 text-left space-y-6">
              <h2 className="text-xl font-bold text-clay-900">Send Us a Direct Message</h2>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce-soft">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-clay-900">Message Received!</h3>
                  <p className="text-xs text-clay-600 max-w-sm mx-auto">
                    Thank you for contacting Back to Bloom! Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 bg-clay-500 hover:bg-clay-600 text-white text-xs font-bold px-5 py-2 rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-clay-800 block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Rivera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-clay-50 border border-clay-300 rounded-xl px-3.5 py-2 text-xs text-clay-900 focus:bg-white focus:ring-2 focus:ring-clay-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-clay-800 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-clay-50 border border-clay-300 rounded-xl px-3.5 py-2 text-xs text-clay-900 focus:bg-white focus:ring-2 focus:ring-clay-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-clay-800 block mb-1">Topic / Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-clay-50 border border-clay-300 rounded-xl px-3.5 py-2 text-xs font-semibold text-clay-900 focus:bg-white focus:ring-2 focus:ring-clay-400 focus:outline-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Workshop Booking Question">Workshop Booking Question</option>
                      <option value="Private Event Booking">Private Event Booking</option>
                      <option value="Custom Ceramic Order">Custom Ceramic Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-clay-800 block mb-1">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-clay-50 border border-clay-300 rounded-xl px-3.5 py-2 text-xs text-clay-900 focus:bg-white focus:ring-2 focus:ring-clay-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center">
          <span className="clay-badge text-xs mb-1 inline-block">Frequently Asked Questions</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-clay-900">Got Questions? We Have Answers!</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="clay-card overflow-hidden bg-white border border-clay-200 transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-clay-900 text-xs sm:text-sm">{faq.q}</span>
                  <ChevronDown size={18} className={`text-clay-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs text-clay-700 leading-relaxed border-t border-clay-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
