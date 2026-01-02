import { Check, X } from 'lucide-react';

interface ComparisonRow {
    feature: string;
    cable: string | boolean;
    streaming: string | boolean;
    galaxy: string | boolean;
}

export default function ComparisonTable() {
    const comparisonData: ComparisonRow[] = [
        { feature: "Monthly Cost", cable: "$80-140", streaming: "$15-30", galaxy: "$19.99" },
        { feature: "Live TV Channels", cable: "~200", streaming: "0", galaxy: "10,000+" },
        { feature: "Setup Fee", cable: "$50-100", streaming: "$0", galaxy: "$0" },
        { feature: "Contract Required", cable: "Yes (1-2 years)", streaming: "No", galaxy: "No" },
        { feature: "Movies & Series", cable: "Pay Extra", streaming: "Limited", galaxy: "Massive Library" },
        { feature: "HD/4K Quality", cable: "Extra Cost", streaming: "Yes", galaxy: "Yes" },
        { feature: "Device Compatibility", cable: "Limited", streaming: "Good", galaxy: "All Devices" },
        { feature: "Installation", cable: "Technician Required", streaming: "Self-Setup", galaxy: "Instant" },
        { feature: "Customer Support", cable: "Business Hours", streaming: "Email Only", galaxy: "24/7" },
    ];

    const renderCell = (value: string | boolean, isGalaxy: boolean = false) => {
        if (typeof value === 'boolean') {
            return value ? (
                <Check className={`w-6 h-6 mx-auto ${isGalaxy ? 'text-green-400' : 'text-gray-400'}`} />
            ) : (
                <X className="w-6 h-6 text-red-500 mx-auto" />
            );
        }
        return (
            <span className={isGalaxy ? 'text-green-400 font-semibold' : 'text-gray-300'}>
                {value}
            </span>
        );
    };

    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            See How We <span className="text-gradient">Stack Up</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Compare Galaxy Connect to traditional cable and streaming services. The choice is clear.
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left p-6 text-gray-400 font-semibold">Feature</th>
                                        <th className="text-center p-6">
                                            <div className="text-white font-bold text-lg">Cable TV</div>
                                            <div className="text-sm text-gray-400 mt-1">Traditional</div>
                                        </th>
                                        <th className="text-center p-6">
                                            <div className="text-white font-bold text-lg">Streaming</div>
                                            <div className="text-sm text-gray-400 mt-1">Netflix + Hulu + Disney+</div>
                                        </th>
                                        <th className="text-center p-6 bg-primary/10">
                                            <div className="text-gradient font-bold text-lg">Galaxy Connect</div>
                                            <div className="text-sm text-green-400 mt-1">Best Value</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, index) => (
                                        <tr
                                            key={index}
                                            className={`border-b border-white/5 hover:bg-white/5 transition-colors ${index === 0 ? 'bg-primary/5' : ''
                                                }`}
                                        >
                                            <td className="p-6 text-white font-medium">{row.feature}</td>
                                            <td className="p-6 text-center">{renderCell(row.cable)}</td>
                                            <td className="p-6 text-center">{renderCell(row.streaming)}</td>
                                            <td className="p-6 text-center bg-primary/5">{renderCell(row.galaxy, true)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Cards */}
                        <div className="md:hidden space-y-6 p-6">
                            {comparisonData.map((row, index) => (
                                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                                    <h3 className="text-white font-bold mb-4">{row.feature}</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-400">Cable TV</span>
                                            <span>{renderCell(row.cable)}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-400">Streaming</span>
                                            <span>{renderCell(row.streaming)}</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-primary/10 -mx-4 px-4 py-2 rounded">
                                            <span className="text-green-400 font-semibold">Galaxy Connect</span>
                                            <span>{renderCell(row.galaxy, true)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl border border-primary/30">
                        <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Save Over $1,700 Per Year! 💰
                        </p>
                        <p className="text-gray-300 mb-6">
                            That's a family vacation, new car payment, or peace of mind.
                        </p>
                        <button
                            onClick={() => {
                                const pricingSection = document.getElementById('pricing');
                                if (pricingSection) {
                                    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-bold rounded-full text-lg shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Start Saving Today
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
