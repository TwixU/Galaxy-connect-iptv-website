import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useLocation } from 'wouter';
import { Tv, Zap, Shield, Globe, Clock, Headphones, Smartphone, Award } from 'lucide-react';

export default function Features() {
    const [, setLocation] = useLocation();

    const features = [
        {
            icon: Tv,
            title: '17,120+ Live Channels',
            description: 'Access thousands of channels from around the world in HD and 4K quality.',
            color: 'from-blue-500 to-emerald-500'
        },
        {
            icon: Zap,
            title: 'Anti-Freezing Technology',
            description: 'Advanced streaming technology ensures smooth playback without buffering.',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Shield,
            title: 'Secure & Private',
            description: 'Your data is protected with industry-standard encryption.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Globe,
            title: 'Worldwide Access',
            description: 'Watch from anywhere in the world with our global server network.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Clock,
            title: 'Catch-Up TV',
            description: 'Never miss your favorite shows with our 7-day catch-up feature.',
            color: 'from-red-500 to-rose-500'
        },
        {
            icon: Headphones,
            title: '24/7 Support',
            description: 'Our dedicated support team is always ready to help you.',
            color: 'from-indigo-500 to-blue-500'
        },
        {
            icon: Smartphone,
            title: 'Multi-Device Support',
            description: 'Watch on Smart TV, phone, tablet, computer, and more.',
            color: 'from-teal-500 to-emerald-500'
        },
        {
            icon: Award,
            title: 'Premium Quality',
            description: 'Enjoy content in Full HD and 4K resolution with crystal-clear audio.',
            color: 'from-amber-500 to-yellow-500'
        }
    ];

    return (
        <div className="min-h-screen bg-[#080c17] text-white">
            <Navigation />

            {/* Hero Section */}
            <div className="pt-32 pb-20 bg-gradient-to-b from-[#080c17] to-emerald-950/20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        <span className="text-emerald-400">Premium Features</span> for Ultimate Entertainment
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                        Discover why thousands of users choose GALAXY CONNECT for their streaming needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" onClick={() => setLocation('/subscriptions')} className="text-lg px-8 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold">
                            View Plans & Pricing
                        </Button>
                        <Button size="lg" variant="outline" onClick={() => setLocation('/channels-list')} className="text-lg px-8 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10">
                            Browse Channels
                        </Button>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="py-20 bg-[#080c17]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="glass p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 group"
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-400">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Additional Features Section */}
            <div className="py-20 bg-gradient-to-b from-emerald-950/10 to-[#080c17]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-white">
                        <span className="text-emerald-400">Why Choose</span> GALAXY CONNECT?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Instant Activation</h3>
                                    <p className="text-slate-400">Get your credentials within minutes and start watching immediately.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">No Contracts</h3>
                                    <p className="text-slate-400">Cancel anytime. No hidden fees or long-term commitments.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Regular Updates</h3>
                                    <p className="text-slate-400">New channels and features added regularly at no extra cost.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">EPG Guide</h3>
                                    <p className="text-slate-400">Full electronic program guide for easy navigation.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">VOD Library</h3>
                                    <p className="text-slate-400">Thousands of movies and series on demand.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Money-Back Guarantee</h3>
                                    <p className="text-slate-400">7-day refund policy if you're not satisfied.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="py-20 bg-gradient-to-r from-emerald-900/20 via-blue-900/10 to-emerald-900/20 border-t border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Ready to Experience <span className="text-emerald-400">Premium streaming</span>?
                    </h2>
                    <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers and start enjoying unlimited entertainment today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" onClick={() => setLocation('/subscriptions')} className="text-lg px-10 py-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold">
                            Get Started Now
                        </Button>
                        <Button size="lg" variant="outline" onClick={() => setLocation('/installation-guide')} className="text-lg px-10 py-6 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10">
                            Installation Guide
                        </Button>
                    </div>
                    <p className="text-sm text-slate-500 mt-6">
                        ✓ 7-Day Money Back Guarantee  •  ✓ Instant Activation  •  ✓ 24/7 Support
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
