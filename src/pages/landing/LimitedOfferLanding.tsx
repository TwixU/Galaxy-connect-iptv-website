import LandingLayout from '../../components/landing/LandingLayout';
import LandingCTA from '../../components/landing/LandingCTA';
import CountdownTimer from '../../components/landing/CountdownTimer';
import { Flame, Gift, AlertCircle } from 'lucide-react';

export default function LimitedOfferLanding() {
    return (
        <LandingLayout backgroundColor="bg-gradient-to-b from-background to-red-950/20">
            {/* Hero Section */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)] animate-pulse"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        {/* Urgency Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/30 border border-red-500/50 text-sm animate-pulse">
                            <Flame className="w-4 h-4 text-red-400" />
                            <span className="text-red-300 font-bold">LIMITED OFFER - EXPIRES SOON</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                            <span className="text-red-500">-50%</span> on Your First Month
                            <br />
                            <span className="text-gradient">Only 24 Hours Left!</span>
                        </h1>

                        {/* Countdown Timer */}
                        <div className="flex justify-center">
                            <CountdownTimer />
                        </div>

                        {/* Price Comparison */}
                        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 max-w-md mx-auto">
                            <div className="text-gray-400 mb-2">Regular Price</div>
                            <div className="text-3xl text-gray-500 line-through mb-4">$69.99</div>
                            <div className="text-gray-400 mb-2">Today's Price</div>
                            <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">$34.99</div>
                            <div className="text-green-400 font-semibold text-lg">
                                Save $35!
                            </div>
                        </div>

                        {/* Urgency Message */}
                        <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center gap-3">
                                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                                <p className="text-red-300 font-semibold">
                                    Only 47 subscriptions left at this price!
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-6">
                            <LandingCTA text="Claim This Offer Now" variant="urgency" />
                            <p className="text-sm text-gray-400 mt-4">
                                ⚡ Instant activation • 💳 Secure payment
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-20 bg-black/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Gift className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">Everything Included</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What You <span className="text-gradient">Get</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {[
                            '17,000+ HD/4K Channels',
                            'Unlimited VOD (Movies & Series)',
                            '24/7 Support',
                            'Multi-device (5 connections)',
                            'Complete EPG',
                            'Automatic updates',
                            '7-day guarantee',
                            'No commitment'
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-gradient-to-r from-white/5 to-transparent p-4 rounded-lg border border-white/10"
                            >
                                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-white font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Bonus */}
                    <div className="mt-12 max-w-2xl mx-auto bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6">
                        <div className="flex items-start gap-4">
                            <Gift className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    🎁 BONUS: Order Now
                                </h3>
                                <p className="text-gray-300">
                                    Get <span className="text-yellow-400 font-bold">1 additional month FREE</span> if you order within the next 24 hours!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="text-center mt-16">
                        <LandingCTA text="Get -50% Now" variant="urgency" />
                        <p className="text-sm text-red-400 mt-4 font-semibold">
                            ⏰ Offer expires in a few hours
                        </p>
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
