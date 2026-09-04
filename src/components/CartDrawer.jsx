import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cartItems, updateQuantity, removeItem, clearCart }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 60 || subtotal === 0 ? 0 : 5;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const handleClose = () => {
    if (orderComplete) {
      clearCart();
      setOrderComplete(false);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-clay-950/60 backdrop-blur-xs flex justify-end transition-opacity animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 border-l border-clay-200">

        {/* Cart Header */}
        <div className="p-5 bg-clay-50 border-b border-clay-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-clay-100 text-clay-700 rounded-full">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 className="font-bold text-clay-900 text-lg">Your Clay Basket</h3>
              <p className="text-xs text-clay-600">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} added</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-clay-500 hover:text-clay-900 hover:bg-clay-200/50 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {orderComplete ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce-soft">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-xl font-bold text-clay-900">Order Confirmed!</h4>
              <p className="text-sm text-clay-600 max-w-xs mx-auto">
                Thank you for supporting Back to Bloom! We are packaging your handcrafted goodies with extra love and clay magic.
              </p>
              <div className="bg-clay-50 p-4 rounded-2xl text-xs text-clay-700 border border-clay-200 text-left space-y-1">
                <p className="font-semibold text-clay-900">Confirmation Code: #BLOOM-{Math.floor(100000 + Math.random() * 900000)}</p>
                <p>An email summary has been sent to your inbox.</p>
              </div>
              <button
                onClick={handleClose}
                className="mt-4 bg-clay-500 hover:bg-clay-600 text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-sm"
              >
                Continue Browsing
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-20 h-20 bg-clay-100 text-clay-400 rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag size={32} />
              </div>
              <h4 className="font-bold text-clay-800 text-base">Your basket is empty</h4>
              <p className="text-xs text-clay-500 max-w-xs mx-auto">
                Discover our handcrafted ceramic mugs, vases, DIY pottery kits, or book a cozy workshop session!
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3.5 p-3.5 bg-clay-50/80 rounded-2xl border border-clay-200/80 transition-all hover:bg-white hover:shadow-xs"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover border border-clay-200"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-clay-900 text-sm truncate">{item.name}</h5>
                  <p className="text-xs text-clay-500 capitalize">{item.category || 'Handcrafted Pottery'}</p>
                  <p className="font-bold text-clay-700 text-sm mt-1">${item.price}</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-clay-400 hover:text-rose-600 transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                  <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-clay-300">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-clay-600 hover:text-clay-900 focus:outline-none"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-xs font-bold text-clay-900 min-w-[1rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-clay-600 hover:text-clay-900 focus:outline-none"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {!orderComplete && cartItems.length > 0 && (
          <div className="p-5 bg-clay-50 border-t border-clay-200 space-y-3">
            <div className="space-y-1.5 text-xs text-clay-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-clay-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Standard Delivery</span>
                <span>{shipping === 0 ? <span className="text-emerald-600 font-bold">FREE</span> : `$${shipping.toFixed(2)}`}</span>
              </div>
              {subtotal < 60 && (
                <p className="text-[11px] text-clay-500 pt-0.5">
                  💡 Add ${(60 - subtotal).toFixed(2)} more for FREE local delivery!
                </p>
              )}
            </div>

            <div className="pt-2 border-t border-clay-200 flex justify-between items-center text-clay-900">
              <span className="font-bold text-base">Total</span>
              <span className="font-extrabold text-xl text-clay-600">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-clay-500 hover:bg-clay-600 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
            >
              {isCheckingOut ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing Checkout...</span>
                </>
              ) : (
                <>
                  <span>Checkout Now</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
