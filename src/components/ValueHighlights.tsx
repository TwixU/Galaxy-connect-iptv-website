import { Tv, Film, Globe, Zap, Trophy, Users } from 'lucide-react';

interface ValueItem {
    icon: typeof Tv;
    number: string;
    label: string;
    description: string;
    color: string;
}

export default function ValueHighlights() {
    const values: ValueItem[] = [
        {
            icon: Tv,
            number: "10,000+",
            label: "Live Channels",
            description: "Sports, News, Entertainment & More",
            color: "from-blue-500 to-emerald-500"
        },
        {
            icon: Film,
            number: "Massive",
            label: "Movies & Series",
            description: "On-Demand Content Library",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Trophy,
            number: "All Sports",
            label: "Leagues Included",
            description: "NFL, NBA, MLB, NHL, Soccer & More",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: Globe,
            number: "150+",
            label: "Countries",
            description: "International Content in All Languages",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Zap,
            number: "4K/HD",
            label: "Streaming Quality",
            description: "Crystal Clear Picture & Sound",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: Users,
            number: "Up to 3",
            label: "Devices",
            description: "Watch Simultaneously on Multiple Screens",
            color: "from-indigo-500 to-blue-500"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Everything You Need in <span className="text-gradient">One Place</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            No more juggling multiple subscriptions. Get unlimited access to all your favorite content.
                        </p>
                    </div>

                    {/* Value Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:border-primary/50"
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Number */}
                                    <div className="mb-2">
                                        <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                            {item.number}
                                        </span>
                                    </div>

                                    {/* Label */}
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {item.label}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <button
                            onClick={() => {
                                const pricingSection = document.getElementById('pricing');
                                if (pricingSection) {
                                    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-bold rounded-full text-lg shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Get Started Now
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
