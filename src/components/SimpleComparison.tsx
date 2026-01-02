import { Check, X } from 'lucide-react';
import { Button } from './ui/button';

export default function SimpleComparison() {
    const features = [
        { name: 'Thousands of Live Channels', us: true, competitors: false },
        { name: '4K & HD Quality', us: true, competitors: true },
        { name: 'No Contracts', us: true, competitors: false },
        { name: '24/7 Support', us: true, competitors: false },
        { name: 'Instant Activation', us: true, competitors: false },
        { name: 'All Devices Supported', us: true, competitors: true },
    ];

    return (
        <section className="py-20 bg-[#080c17]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Why Choose <span className="text-emerald-400">Galaxy Connect</span>?
                        </h2>
                        <p className="text-xl text-slate-400">
                            See how we compare to the competition
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 gap-4 p-6 bg-slate-900/80 border-b border-slate-800">
                            <div className="text-slate-400 font-medium">Feature</div>
                            <div className="text-center">
                                <div className="inline-block px-4 py-2 bg-emerald-500 text-slate-950 rounded-full text-sm font-bold">
                                    Galaxy Connect
                                </div>
                            </div>
                            <div className="text-center text-slate-400 font-medium">Competitors</div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-slate-800">
                            {features.map((feature, index) => (
                                <div key={index} className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-900/50 transition-colors">
                                    <div className="text-white font-medium">{feature.name}</div>
                                    <div className="flex justify-center">
                                        {feature.us ? (
                                            <Check className="w-6 h-6 text-emerald-400" />
                                        ) : (
                                            <X className="w-6 h-6 text-gray-300" />
                                        )}
                                    </div>
                                    <div className="flex justify-center">
                                        {feature.competitors ? (
                                            <Check className="w-6 h-6 text-gray-300" />
                                        ) : (
                                            <X className="w-6 h-6 text-gray-300" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Footer */}
                        <div className="p-8 bg-slate-900/80 border-t border-slate-800 text-center">
                            <p className="text-slate-400 mb-4 font-medium">
                                Ready to experience the difference?
                            </p>
                            <Button
                                size="lg"
                                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold"
                                onClick={() => {
                                    const pricingSection = document.getElementById('pricing');
                                    if (pricingSection) {
                                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Get Started Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
