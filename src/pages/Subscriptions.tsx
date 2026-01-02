import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import PaymentMethods from '../components/PaymentMethods';
import { Shield, Zap, Award } from 'lucide-react';

export default function Subscriptions() {
    // Auto-scroll to pricing section when page loads
    useEffect(() => {
        const plansSection = document.getElementById('plans');
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#080c17] text-white">
            <Navigation />

            {/* Hero Section */}
            <div className="pt-32 pb-20 bg-gradient-to-b from-[#080c17] to-emerald-950/20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Choose Your <span className="text-emerald-400">Perfect Plan</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                        Flexible subscription plans designed to fit your entertainment needs. All plans include full access to our premium features.
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-8 mt-12">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-green-500" />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-white">7-Day Guarantee</p>
                                <p className="text-sm text-slate-400">Money back if not satisfied</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-white">Instant Activation</p>
                                <p className="text-sm text-slate-400">Start watching in minutes</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                <Award className="w-6 h-6 text-purple-500" />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-white">Premium Quality</p>
                                <p className="text-sm text-slate-400">HD & 4K streaming</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div id="plans">
                <Pricing />
            </div>

            {/* Payment Methods */}
            <PaymentMethods />

            {/* FAQ Section */}
            <div className="py-20 bg-gradient-to-b from-[#080c17] to-emerald-950/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">
                        <span className="text-emerald-400">Subscription</span> FAQs
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="glass p-6 rounded-xl border border-white/5 bg-slate-900/50">
                            <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan later?</h3>
                            <p className="text-slate-400">Yes! You can upgrade or downgrade your plan at any time. Contact our support team for assistance.</p>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/5 bg-slate-900/50">
                            <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
                            <p className="text-slate-400">We accept PayPal, Visa, Mastercard, Cash App, and cryptocurrency payments for your convenience.</p>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/5 bg-slate-900/50">
                            <h3 className="text-xl font-semibold text-white mb-3">Is there a contract or commitment?</h3>
                            <p className="text-slate-400">No contracts required! You can cancel anytime. We offer flexible month-to-month subscriptions.</p>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/5 bg-slate-900/50">
                            <h3 className="text-xl font-semibold text-white mb-3">How many devices can I use simultaneously?</h3>
                            <p className="text-slate-400">It depends on your plan. Standard allows 1 device, Premium allows 2 devices, and Ultimate allows 3 devices at the same time.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
