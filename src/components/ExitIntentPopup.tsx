import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function ExitIntentPopup() {
    const [showPopup, setShowPopup] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            // Trigger when mouse leaves from top of viewport
            if (e.clientY <= 0 && !hasShown) {
                setShowPopup(true);
                setHasShown(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasShown]);

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="relative max-w-lg w-full mx-4 bg-gradient-to-br from-primary/20 to-blue-600/20 backdrop-blur-md border-2 border-primary/50 rounded-3xl p-8 md:p-10 shadow-2xl animate-scale-in">
                {/* Close Button */}
                <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                {/* Content */}
                <div className="text-center">
                    {/* Icon */}
                    <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 mb-4">
                            <span className="text-4xl">👋</span>
                        </div>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Wait!
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl text-gray-300 mb-6">
                        Before you leave, our support can help you find the <span className="text-emerald-400 font-bold">perfect plan</span>
                    </p>

                    {/* Chat Benefits */}
                    <div className="bg-white/10 border-2 border-emerald-400/30 rounded-xl p-6 mb-6">
                        <div className="space-y-3 text-left">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                <p className="text-white">Get personalized plan recommendations</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                <p className="text-white">Check device compatibility instantly</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                <p className="text-white">Ask about exclusive discounts</p>
                            </div>
                        </div>
                    </div>

                    {/* Response Time */}
                    <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-3 mb-6">
                        <p className="text-emerald-400 font-semibold">
                            ⚡ Average response time: &lt; 2 minutes
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={() => {
                                window.open('https://wa.me/33745889674?text=Hello!%20I%20have%20a%20question%20about%20Galaxy%20Connect.', '_blank');
                                setShowPopup(false);
                            }}
                            className="flex-1 px-6 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold rounded-full text-lg shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            💬 Start a Quick Chat
                        </button>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="flex-1 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full text-lg border border-white/20 transition-all duration-300"
                        >
                            No Thanks
                        </button>
                    </div>

                    {/* Fine Print */}
                    <p className="text-xs text-gray-400 mt-4">
                        No commitment required • Just ask your questions
                    </p>
                </div>
            </div>
        </div>
    );
}
