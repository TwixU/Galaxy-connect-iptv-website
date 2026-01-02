
import { Shield, CreditCard, Headphones } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#0E1117]">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Main CTA Card */}
                    <div className="relative bg-gradient-to-br from-emerald-500/10 to-blue-600/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center">
                            {/* Headline */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
                                Ready to <span className="text-emerald-400">Cut the Cord</span>?
                            </h2>

                            {/* Subheadline */}
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
                                Join <span className="text-white font-bold">50,000+ happy customers</span> who are saving thousands every year
                            </p>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                                <div className="flex items-center gap-2 text-gray-300">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                                    </div>
                                    <span className="text-xs sm:text-sm font-medium">7-Day Money Back</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <CreditCard className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <span className="text-sm font-medium">Secure Payment</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <Headphones className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <span className="text-sm font-medium">24/7 Support</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
                                <a
                                    href="#pricing"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
                                >
                                    Get Started Now
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                            {/* Fine Print */}
                            <p className="text-sm text-gray-400 mt-4">
                                No contracts • Cancel anytime • Instant activation
                            </p>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-12 text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="flex -space-x-2">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user5" alt="" className="w-10 h-10 rounded-full border-2 border-background" />
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user6" alt="" className="w-10 h-10 rounded-full border-2 border-background" />
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user7" alt="" className="w-10 h-10 rounded-full border-2 border-background" />
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user8" alt="" className="w-10 h-10 rounded-full border-2 border-background" />
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user9" alt="" className="w-10 h-10 rounded-full border-2 border-background" />
                            </div>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-300">
                            <span className="text-white font-semibold">4.9/5</span> from 12,000+ reviews
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
