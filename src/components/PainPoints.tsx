import { DollarSign, Globe, Lock, Clock, Users, Tv } from 'lucide-react';

interface PainPoint {
    icon: typeof DollarSign;
    emoji: string;
    problem: string;
    emotion: string;
    solution: string;
    color: string;
}

export default function PainPoints() {
    const painPoints: PainPoint[] = [
        {
            icon: DollarSign,
            emoji: '💸',
            problem: "I'm paying $150+/month for cable and barely watch half the channels",
            emotion: "Frustration, feeling ripped off",
            solution: "Over 10,000 channels for $5.99/month",
            color: "from-red-500/10 to-orange-500/10 border-red-500/20"
        },
        {
            icon: Globe,
            emoji: '🌍',
            problem: "I can't watch shows from my home country",
            emotion: "Homesickness, cultural isolation",
            solution: "150+ countries, all languages",
            color: "from-blue-500/10 to-emerald-500/10 border-blue-500/20"
        },
        {
            icon: Lock,
            emoji: '🔒',
            problem: "I'm stuck in a 2-year contract with terrible service",
            emotion: "Trapped, powerless",
            solution: "No contracts, cancel anytime",
            color: "from-purple-500/10 to-pink-500/10 border-purple-500/20"
        },
        {
            icon: Clock,
            emoji: '😤',
            problem: "I waited 3 hours on hold just to get transferred 5 times",
            emotion: "Anger, disrespect",
            solution: "24/7 support, < 5 min response time",
            color: "from-yellow-500/10 to-orange-500/10 border-yellow-500/20"
        },
        {
            icon: Users,
            emoji: '⚽',
            problem: "I can't watch my team's games",
            emotion: "FOMO, missing out",
            solution: "All sports, all leagues included",
            color: "from-green-500/10 to-emerald-500/10 border-green-500/20"
        },
        {
            icon: Tv,
            emoji: '📺',
            problem: "Netflix + Hulu + Disney+ = $80/month!",
            emotion: "Financial stress",
            solution: "Everything in one place",
            color: "from-indigo-500/10 to-blue-500/10 border-indigo-500/20"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <span className="text-2xl">💡</span>
                            <span className="text-sm font-semibold text-primary">We Understand Your Frustrations</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Tired of <span className="text-gradient">These Problems</span>?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            You're not alone. Thousands of people face these issues every day. We have the solution.
                        </p>
                    </div>

                    {/* Pain Points Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {painPoints.map((point, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${point.color} backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all duration-300 group`}
                            >
                                {/* Icon & Emoji */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <point.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-3xl">{point.emoji}</span>
                                </div>

                                {/* Problem */}
                                <div className="mb-4">
                                    <p className="text-white font-semibold text-lg mb-2 leading-snug">
                                        "{point.problem}"
                                    </p>
                                    <p className="text-sm text-gray-400 italic">
                                        Feeling: {point.emotion}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div className="pt-4 border-t border-white/10">
                                    <div className="flex items-start gap-2">
                                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-green-400 font-semibold">
                                            {point.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <p className="text-2xl font-bold text-white mb-6">
                            Ready to Say Goodbye to These Problems? ❤️
                        </p>
                        <a
                            href="https://wa.me/33745889674?text=Hi!%20I%20want%20to%20try%20the%201%20DAY%20TRIAL%20for%20%241.99"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-full text-lg shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            <span className="flex items-center gap-2">
                                <span>🎯 1 DAY TRIAL</span>
                                <span className="text-yellow-300">$1.99</span>
                            </span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
