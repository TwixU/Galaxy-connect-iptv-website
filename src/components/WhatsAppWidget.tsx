import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
    const phoneNumber = "33745889674"; // Your WhatsApp number
    const message = encodeURIComponent("Hello! I have a question about Galaxy Connect.");

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <>
            {/* WhatsApp Floating Button - Bottom LEFT to avoid Crisp conflict */}
            <button
                onClick={handleClick}
                className="fixed bottom-6 left-6 z-30 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />

                {/* Ping animation */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>

                {/* Incentive Tooltip */}
                <div className="absolute left-full ml-3 px-4 py-3 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-green-500/30 max-w-xs">
                    <div className="font-semibold text-green-400 mb-1">💬 Chat for Exclusive Discount!</div>
                    <div className="text-xs text-gray-300">Ask us if you're eligible for a special offer</div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full border-8 border-transparent border-r-slate-900"></div>
                </div>
            </button>

            {/* Online Status Badge with Incentive - Bottom LEFT */}
            <div className="fixed bottom-24 left-6 z-30 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-lg shadow-lg px-3 py-2 text-sm font-medium border border-green-500/30 animate-bounce-slow hidden sm:block">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-white font-semibold">Online • Response in &lt; 2 min</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-semibold">
                        ✨ Chat now for device compatibility check
                    </div>
                </div>
            </div>
        </>
    );
}
