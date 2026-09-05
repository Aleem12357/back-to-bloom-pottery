import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Calendar, Phone, ArrowRight, Bot, User, CheckCircle2 } from 'lucide-react';

export default function IntroChatbot({ onOpenBookingNav, onOpenBookingModal, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 Welcome to Back to Bloom Pottery Studio! I'm your AI Studio Assistant. What would you like to know about our pottery classes and studio?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "🏺 What workshops do you offer?",
    "📅 How do I book a class?",
    "📍 Studio location & hours?",
    "⏳ How long does kiln firing take?",
    "💬 Chat on WhatsApp"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotResponse = (userText) => {
    const text = userText.toLowerCase();

    if (text.includes('workshop') || text.includes('offer') || text.includes('class') || text.includes('type')) {
      return {
        text: "We offer hands-on Pottery Workshops for all skill levels! 🏺\n\n1. Beginner Wheel Throwing ($45/person)\n2. Hand-Building & Sculpting ($40/person)\n3. Clay & Wine Evening Socials ($50/person)\n\nAll tools, organic clay, glazing & double kiln firing are included!",
        action: 'book'
      };
    } else if (text.includes('book') || text.includes('reserve') || text.includes('register') || text.includes('slot')) {
      return {
        text: "Booking a class is quick and easy! 📅 You can pick your date and time slot right here on our site or send your reservation directly to our studio via WhatsApp.",
        action: 'book'
      };
    } else if (text.includes('location') || text.includes('address') || text.includes('where') || text.includes('hours') || text.includes('time')) {
      return {
        text: "📍 Studio Address:\n124 Clay Studio Way, Ceramic Quarter, Creative City\n\n⏰ Working Hours:\n• Tue - Fri: 10:00 AM – 7:00 PM\n• Sat - Sun: 10:00 AM – 8:30 PM\n*(Closed Mondays for kiln firing)*",
        action: 'whatsapp'
      };
    } else if (text.includes('firing') || text.includes('pickup') || text.includes('dry') || text.includes('ready') || text.includes('finish')) {
      return {
        text: "✨ Firing & Pickup Info:\nPottery requires drying and two separate kiln firings (bisque + glaze firing). Your handcrafted pieces will be ready for pickup or shipping in 2 to 3 weeks! We notify you via WhatsApp when ready.",
        action: 'whatsapp'
      };
    } else if (text.includes('whatsapp') || text.includes('contact') || text.includes('phone')) {
      return {
        text: "You can chat with our studio team anytime on WhatsApp at (+1 555-256-6625)! Click below to open direct WhatsApp chat.",
        action: 'whatsapp'
      };
    } else {
      return {
        text: "Thank you for asking! We'd love to help you with your pottery experience. Feel free to explore our workshops, book a session, or chat with our team on WhatsApp!",
        action: 'book'
      };
    }
  };

  const handleSend = (textToSend) => {
    const messageContent = textToSend || inputText;
    if (!messageContent.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const responseData = generateBotResponse(messageContent);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: responseData.text,
        action: responseData.action,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Toggle Button with Hover Speech Bubble */}
      {!isOpen && (
        <div className="relative group">
          {/* Hover Speech Bubble Message */}
          <div className="absolute bottom-full right-0 mb-3 w-64 p-3.5 bg-white text-clay-900 rounded-2xl shadow-2xl border border-clay-200 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0 z-50">
            <div className="flex items-center gap-2 pb-1 border-b border-clay-100">
              <img src="/assets/logo.jpg" alt="Back to Bloom Logo" className="w-6 h-6 rounded-full object-cover border border-clay-400" />
              <p className="font-bold text-xs text-clay-900">Back to Bloom Assistant</p>
            </div>
            <p className="text-[11px] text-clay-700 mt-1.5 leading-snug font-medium">
              👋 Hi! Need help or want to book a workshop class? Click here to chat with us!
            </p>
            {/* Speech bubble tail arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-clay-200 transform rotate-45" />
          </div>

          {/* Clean Round Logo Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-1 rounded-full bg-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-clay-500 cursor-pointer flex items-center justify-center"
            aria-label="Open Studio Assistant Chat"
          >
            <div className="relative">
              <img
                src="/assets/logo.jpg"
                alt="Back to Bloom Studio Assistant"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
            </div>
          </button>
        </div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="bg-white w-[92vw] sm:w-96 rounded-3xl shadow-2xl border border-clay-200 flex flex-col overflow-hidden animate-fade-in transition-all duration-300 max-h-[85vh] h-[540px]">

          {/* Chat Header */}
          <div className="bg-gradient-to-r from-clay-900 via-clay-800 to-clay-900 p-4 text-white flex items-center justify-between border-b border-clay-700">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/assets/logo.jpg"
                  alt="Back to Bloom Logo"
                  className="w-10 h-10 rounded-full object-cover border-2 border-terracotta shadow-xs"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-clay-900" />
              </div>
              <div>
                <h3 className="font-bold text-sm flex items-center gap-1.5">
                  <span>Bloom Studio Assistant</span>
                  <Sparkles size={13} className="text-amber-400" />
                </h3>
                <p className="text-[11px] text-clay-300 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online • Quick Answers
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-clay-300 hover:text-white hover:bg-clay-800 rounded-full transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3.5 bg-clay-50/60 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <img
                    src="/assets/logo.jpg"
                    alt="Back to Bloom Logo"
                    className="w-7 h-7 rounded-full object-cover border border-clay-300 shrink-0 mt-0.5 shadow-xs"
                  />
                )}
                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-clay-600 to-clay-500 text-white font-medium rounded-tr-xs shadow-xs'
                      : 'bg-white text-clay-900 border border-clay-200/90 shadow-xs rounded-tl-xs space-y-2'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  
                  {/* Action buttons inside bot messages */}
                  {msg.action === 'book' && (
                    <div className="pt-2 border-t border-clay-100 flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          if (onOpenBookingModal) onOpenBookingModal();
                        }}
                        className="bg-gradient-to-r from-clay-500 to-terracotta text-white font-bold text-[11px] px-3 py-1.5 rounded-xl shadow-2xs hover:brightness-110 transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <Calendar size={12} /> Book Workshop Class
                      </button>
                    </div>
                  )}

                  {msg.action === 'whatsapp' && (
                    <div className="pt-2 border-t border-clay-100 flex flex-wrap gap-2">
                      <a
                        href="https://wa.me/?text=Hello%20Back%20to%20Bloom%20Pottery!%20I%20have%20a%20question%20about%20your%20classes."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] px-3 py-1.5 rounded-xl shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <Phone size={12} /> Open WhatsApp Chat
                      </a>
                    </div>
                  )}

                  <span className={`block text-[9px] text-right mt-1 ${msg.sender === 'user' ? 'text-clay-200' : 'text-clay-400'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-clay-500 text-[11px] font-semibold italic">
                <img src="/assets/logo.jpg" alt="Back to Bloom Logo" className="w-5 h-5 rounded-full object-cover border border-clay-300" />
                <span>Bloom Assistant is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-2.5 bg-white border-t border-clay-200/80 space-y-1">
            <p className="text-[10px] font-bold text-clay-500 uppercase tracking-wider px-1">Quick Questions:</p>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 bg-clay-100 hover:bg-clay-200 text-clay-800 text-[11px] font-medium rounded-full whitespace-nowrap transition-colors cursor-pointer shrink-0 border border-clay-200/70"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Field */}
          <div className="p-3 bg-clay-50 border-t border-clay-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask a question..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-white border border-clay-300 rounded-xl px-3 py-2 text-xs text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 bg-gradient-to-r from-clay-500 to-terracotta text-white rounded-xl shadow-xs hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              title="Send Message"
            >
              <Send size={16} />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
