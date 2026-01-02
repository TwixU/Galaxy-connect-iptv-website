
import { Button } from './ui/button';
import { Star } from 'lucide-react';

export default function Hero() {


    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-16"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/assets/apollo-app.webp"
                    alt="Background"
                    className="w-full h-full object-cover object-[75%_center] md:object-center"
                />
            </div>

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-3xl space-y-8 animate-fade-in">
                    {/* Main Heading */}
                    {/* New H1 - Headline */}
                    <h1
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-4 md:mb-6 tracking-tight"
                    >
                        Unlock Every Global Channel:
                        <br className="hidden sm:block" />
                        <span className="text-emerald-400">17,000+ Live Streams in 4K/HD</span>
                    </h1>

                    {/* New H2 - Sub-Headline */}
                    <p className="text-base sm:text-lg md:text-2xl text-slate-300 mb-6 md:mb-8 leading-relaxed">
                        Cut the cord, not the content. Try 7 days for just <span className="text-emerald-400 font-bold text-lg sm:text-xl md:text-2xl">$3.99</span>.
                    </p>

                    {/* Single CTA - Emerald */}
                    <div className="pt-4 md:pt-6">
                        <Button
                            size="xl"
                            onClick={() => window.open('https://wa.me/33745889674?text=Hello! I would like to start my 7-Day Trial for Galaxy Connect.', '_blank')}
                            className="w-full sm:w-auto sm:min-w-[300px] h-14 sm:h-16 text-lg sm:text-xl bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] border-0 text-white font-bold transition-all"
                        >
                            Start Your 7-Day Trial — $3.99
                        </Button>

                        {/* Trust Bar */}
                        <p className="mt-4 text-sm md:text-base text-slate-300 font-medium">
                            <span className="text-emerald-400">✓</span> 7-Day Money-Back Guarantee •
                            <span className="text-emerald-400"> ✓</span> Full Refund If Not Satisfied •
                            <span className="text-emerald-400"> ✓</span> Instant Activation
                        </p>
                    </div>

                    {/* Payment Methods */}
                    <div className="pt-4">
                        <div className="flex flex-wrap items-center justify-start gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                            <span className="text-xs text-slate-400 font-medium">Secure Payment:</span>
                            <div className="flex items-center gap-3">
                                {/* Visa */}
                                <div className="h-8 px-2 bg-white rounded flex items-center">
                                    <img
                                        src="/images/558237.png"
                                        alt="Visa"
                                        className="h-5 object-contain"
                                    />
                                </div>
                                {/* Mastercard */}
                                <div className="h-8 px-2 bg-white rounded flex items-center">
                                    <img
                                        src="/images/558241.png"
                                        alt="Mastercard"
                                        className="h-5 object-contain"
                                    />
                                </div>
                                {/* PayPal */}
                                <div className="h-8 px-2 bg-white rounded flex items-center">
                                    <img
                                        src="/images/PayPal-Logo-Transparent.png"
                                        alt="PayPal"
                                        className="h-5 object-contain"
                                    />
                                </div>
                                {/* CashApp */}
                                <div className="h-8 px-2 bg-white rounded flex items-center">
                                    <img
                                        src="/images/cashapp-logo.webp"
                                        alt="Cash App"
                                        className="h-5 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simple Trust Indicators */}
                    <div className="pt-8 flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20 shadow-sm">
                            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-white">17,000+ Channels</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20 shadow-sm">
                            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-white">4K & HD Quality</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20 shadow-sm">
                            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-white">Instant Activation</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20 shadow-sm">
                            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-white">24/7 Support</span>
                        </div>
                    </div>

                    {/* Quick Testimonials */}
                    <div className="pt-8 space-y-4">
                        <h3 className="text-white font-semibold text-lg">What our customers say:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                                <div className="flex items-center gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm text-white mb-2">"Best streaming service I've tried. Perfect 4K quality!"</p>
                                <p className="text-xs text-slate-300">- Michael R., New York</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                                <div className="flex items-center gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm text-white mb-2">"Setup in 5 minutes. Responsive support. Highly recommend!"</p>
                                <p className="text-xs text-slate-300">- Sarah L., Los Angeles</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                                <div className="flex items-center gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm text-white mb-2">"Amazing! All the channels I want for less than $20."</p>
                                <p className="text-xs text-slate-300">- James K., Chicago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080c17] to-transparent"></div>
        </section>
    );
}
