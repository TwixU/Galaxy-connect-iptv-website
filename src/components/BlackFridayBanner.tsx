import { useState, useEffect } from 'react';
import { X, Sparkles, Tag } from 'lucide-react';

export default function BlackFridayBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Show popup after 2 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        // Set end date to November 30, 2025 at 23:59:59
        const endDate = new Date('2025-11-30T23:59:59').getTime();

        const countdownTimer = setInterval(() => {
            const now = new Date().getTime();
            const distance = endDate - now;

            if (distance < 0) {
                clearInterval(countdownTimer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => {
            clearTimeout(timer);
            clearInterval(countdownTimer);
        };
    }, []);

    const scrollToPricing = () => {
        setIsVisible(false);
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
                onClick={() => setIsVisible(false)}
            />

            {/* Popup Modal */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-lg animate-scale-in">
                <div className="bg-gradient-to-br from-red-600 via-orange-600 to-red-600 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                    {/* Close button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Content */}
                    <div className="relative z-10 text-center space-y-6">
                        {/* Icon */}
                        <div className="flex justify-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                <Tag className="w-12 h-12 text-white" />
                            </div>
                        </div>

                        {/* Title */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                                <Sparkles className="w-8 h-8 animate-pulse" />
                                BLACK FRIDAY
                                <Sparkles className="w-8 h-8 animate-pulse" />
                            </h2>
                            <p className="text-xl md:text-2xl font-bold text-white">
                                55% OFF ALL PLANS!
                            </p>
                        </div>

                        {/* Promo Code */}
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
                            <p className="text-sm text-white/90 mb-2">Use promo code at checkout:</p>
                            <div className="bg-white text-red-600 rounded-lg px-6 py-3 font-mono font-bold text-2xl tracking-wider">
                                BLACK-FRIDAY
                            </div>
                        </div>

                        {/* Countdown */}
                        <div>
                            <p className="text-white/90 text-sm mb-3">Offer ends in:</p>
                            <div className="flex justify-center gap-3">
                                {timeLeft.days > 0 && (
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[70px]">
                                        <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                                        <div className="text-xs text-white/80">Days</div>
                                    </div>
                                )}
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[70px]">
                                    <div className="text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                                    <div className="text-xs text-white/80">Hours</div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[70px]">
                                    <div className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                    <div className="text-xs text-white/80">Minutes</div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[70px]">
                                    <div className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                                    <div className="text-xs text-white/80">Seconds</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={scrollToPricing}
                            className="w-full bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg"
                        >
                            🔥 Claim Your Discount Now!
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scale-in {
                    from { 
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.9);
                    }
                    to { 
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
                .animate-scale-in {
                    animation: scale-in 0.3s ease-out;
                }
            `}</style>
        </>
    );
}
