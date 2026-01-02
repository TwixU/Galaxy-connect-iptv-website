import { Button } from './ui/button';

export default function TrialCTA() {
    const handleTrialClick = () => {
        // Scroll to pricing or redirect to trial checkout
        const element = document.getElementById('pricing');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#0E1117] border-y border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">

                    {/* Left Side - Content & CTA */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Badge */}
                        <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
                            <span className="text-sm font-semibold text-emerald-600">🎁 7-Day Trial Available</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Try Before You Commit
                        </h2>

                        {/* Description */}
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                            Experience our cable-free streaming solution with full access to{' '}
                            <span className="text-white font-bold">thousands of live channels</span> and{' '}
                            <span className="text-white font-bold">a massive library of movies & series</span> for just{' '}
                            <span className="text-emerald-400 font-bold text-xl sm:text-2xl">$3.99</span>
                        </p>

                        {/* Trial Details */}
                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 sm:p-6">
                            <p className="text-white font-semibold mb-2">What you get with the trial:</p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span>Full access to all content for 7 days</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span>$3.99 deducted from your subscription if you continue</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span>Cancel anytime during the trial - no questions asked</span>
                                </li>
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2 sm:pt-4">
                            <Button
                                size="xl"
                                onClick={handleTrialClick}
                                className="w-full sm:w-auto sm:min-w-[280px] md:min-w-[300px] h-14 sm:h-16 text-lg sm:text-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] border-0 text-black font-bold transition-all"
                            >
                                Start Your 7-Day Trial - $3.99
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">Instant Activation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">No Contract</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">Cancel Anytime</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/best-streaming-1.webp"
                                alt="Premium Streaming Experience"
                                className="w-full h-auto object-cover"
                            />
                            {/* Subtle overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
