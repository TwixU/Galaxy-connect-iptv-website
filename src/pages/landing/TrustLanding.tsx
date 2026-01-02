import LandingLayout from '../../components/landing/LandingLayout';
import LandingCTA from '../../components/landing/LandingCTA';
import TrustBadges from '../../components/landing/TrustBadges';
import { Shield, Zap, Clock, Award } from 'lucide-react';

export default function TrustLanding() {
    return (
        <LandingLayout>
            {/* Hero Section */}
            <section
                className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 20, 0.92), rgba(0, 0, 40, 0.95)), url('/assets/epg-interface.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-sm">
                            <Shield className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-300 font-semibold">Certified & Secure Service</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                            Galaxy Connect: The Most{' '}
                            <span className="text-gradient">Stable & Secure</span>
                            <br />
                            streaming in North America
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            Enjoy Thousands of channels in HD/4K with a 7-day money-back guarantee.
                            No risk, instant activation.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col items-center gap-4 pt-6">
                            <LandingCTA text="Start Risk-Free Trial ($5.99)" variant="primary" />
                            <p className="text-sm text-gray-400">
                                ✓ No credit card required for trial
                            </p>
                        </div>

                        {/* Trust Badges */}
                        <TrustBadges />
                    </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
            </section>

            {/* Guarantees Section */}
            <section className="py-20 bg-gradient-to-b from-background to-primary/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Award className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">Our Guarantees</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose <span className="text-gradient">Galaxy Connect</span>?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We're committed to providing the best streaming service with solid guarantees
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Guarantee 1 */}
                        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 p-0.5 flex items-center justify-center mb-6">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                    <Shield className="w-8 h-8 text-blue-500" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">99.9% Uptime Rate</h3>
                            <p className="text-gray-400 mb-4">
                                Our infrastructure guarantees maximum availability. Uninterrupted streaming, 24/7.
                            </p>
                            <div className="text-4xl font-bold text-gradient">99.9%</div>
                        </div>

                        {/* Guarantee 2 */}
                        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 p-0.5 flex items-center justify-center mb-6">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                    <Clock className="w-8 h-8 text-green-500" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">Responsive Support</h3>
                            <p className="text-gray-400 mb-4">
                                Our team responds to your questions in less than 5 minutes on average. 24/7 support available.
                            </p>
                            <div className="text-4xl font-bold text-gradient">&lt; 5 min</div>
                        </div>

                        {/* Guarantee 3 */}
                        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 flex items-center justify-center mb-6">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                    <Zap className="w-8 h-8 text-purple-500" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">Instant Activation</h3>
                            <p className="text-gray-400 mb-4">
                                Receive your credentials immediately after payment. Start watching in seconds.
                            </p>
                            <div className="text-4xl font-bold text-gradient">Instant</div>
                        </div>

                        {/* Guarantee 4 */}
                        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 p-0.5 flex items-center justify-center mb-6">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                    <Award className="w-8 h-8 text-yellow-500" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">7-Day Guarantee</h3>
                            <p className="text-gray-400 mb-4">
                                Not satisfied? We'll refund you in full within 7 days. No questions asked.
                            </p>
                            <div className="text-4xl font-bold text-gradient">100%</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <LandingCTA text="Start Now Risk-Free" variant="primary" />
                        <p className="text-sm text-gray-400 mt-4">
                            Join thousands of satisfied customers
                        </p>
                    </div>
                </div>
            </section>

            {/* Legal Links Section */}
            <section className="py-12 bg-background border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors underline">
                            Terms of Service
                        </a>
                        <span className="text-muted-foreground">•</span>
                        <a href="/refund" className="text-muted-foreground hover:text-primary transition-colors underline">
                            Refund Policy
                        </a>
                        <span className="text-muted-foreground">•</span>
                        <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors underline">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
