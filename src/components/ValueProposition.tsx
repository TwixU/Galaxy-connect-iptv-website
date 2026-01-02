import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export default function ValueProposition() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#0E1117]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Main Heading */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
                            One Platform. <span className="text-emerald-600">Unlimited Entertainment.</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Galaxy Connect brings you the ultimate streaming solution—thousands of live channels,
                            blockbuster movies, and binge-worthy TV series, all in one affordable subscription.
                            Say goodbye to juggling multiple services and logins.
                        </p>
                    </div>

                    {/* Key Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10 md:mb-12">
                        <div className="text-center">
                            <div className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-2">17,000+</div>
                            <div className="text-sm sm:text-base text-gray-300">Live Channels</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-2">4K & HD</div>
                            <div className="text-sm sm:text-base text-gray-300">Crystal Clear Quality</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-2">99.9%</div>
                            <div className="text-sm sm:text-base text-gray-300">Uptime Guarantee</div>
                        </div>
                    </div>

                    {/* Benefits List */}
                    <div className="bg-[#1A1D29] border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Seamless Streaming</h3>
                                    <p className="text-gray-300 text-sm">
                                        Stream everything you love in crystal-clear HD and 4K quality, using just one account—anytime, anywhere.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Instant Activation</h3>
                                    <p className="text-gray-300 text-sm">
                                        Get started immediately after purchase. No waiting, no hassle—just instant access to your entertainment.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-white mb-1">No Contracts</h3>
                                    <p className="text-gray-300 text-sm">
                                        Flexible plans with no long-term commitments. Cancel anytime, no questions asked.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-white mb-1">24/7 Support</h3>
                                    <p className="text-gray-300 text-sm">
                                        Our dedicated support team is always ready to help you with any questions or issues.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-10">
                            <Button
                                size="lg"
                                className="text-lg px-8 py-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                                onClick={() => {
                                    const pricingSection = document.getElementById('pricing');
                                    if (pricingSection) {
                                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Subscribe Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
