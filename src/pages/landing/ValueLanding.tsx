import LandingLayout from '../../components/landing/LandingLayout';
import LandingCTA from '../../components/landing/LandingCTA';
import { Check, X, Tv, Film, Globe, Smartphone } from 'lucide-react';

export default function ValueLanding() {
    const comparisonData = [
        { feature: 'Number of channels', galaxyConnect: '17,000+', netflix: '~15', cable: '~200' },
        { feature: 'Movies & Series VOD', galaxyConnect: 'Unlimited', netflix: 'Limited', cable: 'Pay-per-view' },
        { feature: 'Monthly price', galaxyConnect: '$34.99', netflix: '$17.99', cable: '$89.99' },
        { feature: 'HD/4K Quality', galaxyConnect: true, netflix: true, cable: true },
        { feature: 'Multi-device', galaxyConnect: '5', netflix: '2-4', cable: '1' },
        { feature: 'International content', galaxyConnect: true, netflix: false, cable: false },
        { feature: 'Live sports', galaxyConnect: true, netflix: false, cable: true },
        { feature: 'No commitment', galaxyConnect: true, netflix: false, cable: false }
    ];

    return (
        <LandingLayout backgroundColor="bg-gradient-to-b from-background to-green-950/20">
            {/* Hero Section */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        {/* Value Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-sm">
                            <Tv className="w-4 h-4 text-green-400" />
                            <span className="text-green-300 font-semibold">Best Value for Money</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                            <span className="text-gradient">17,000+ HD/4K Channels</span>
                            <br />
                            for Less Than Netflix
                        </h1>

                        {/* Value Proposition */}
                        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                $0.002 per channel
                            </div>
                            <p className="text-gray-300">
                                With Netflix, you pay $1.20 per content. With Galaxy Connect, it's 850x cheaper!
                            </p>
                        </div>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            Access all global content for the price of a single streaming service
                        </p>

                        {/* CTA */}
                        <div className="pt-6">
                            <LandingCTA
                                text="See All Benefits"
                                variant="success"
                                onClick={() => {
                                    const params = new URLSearchParams(window.location.search);
                                    window.location.href = `/checkout/value?${params.toString()}`;
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-black/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Galaxy Connect vs <span className="text-gradient">The Competition</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Compare and see the difference
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto overflow-x-auto">
                        <table className="w-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="p-4 text-left text-gray-400 font-semibold">Feature</th>
                                    <th className="p-4 text-center bg-primary/20 border-l border-r border-primary/30">
                                        <div className="text-xl font-bold text-white mb-1">Galaxy Connect</div>
                                        <div className="text-xs text-primary">RECOMMENDED</div>
                                    </th>
                                    <th className="p-4 text-center text-gray-400 font-semibold">Netflix</th>
                                    <th className="p-4 text-center text-gray-400 font-semibold">Cable TV</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, index) => (
                                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-4 text-white font-medium">{row.feature}</td>
                                        <td className="p-4 text-center bg-primary/10 border-l border-r border-primary/20">
                                            {typeof row.galaxyConnect === 'boolean' ? (
                                                row.galaxyConnect ? (
                                                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                                                ) : (
                                                    <X className="w-6 h-6 text-red-500 mx-auto" />
                                                )
                                            ) : (
                                                <span className="text-white font-bold">{row.galaxyConnect}</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof row.netflix === 'boolean' ? (
                                                row.netflix ? (
                                                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                                                ) : (
                                                    <X className="w-6 h-6 text-red-500 mx-auto" />
                                                )
                                            ) : (
                                                <span className="text-gray-400">{row.netflix}</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof row.cable === 'boolean' ? (
                                                row.cable ? (
                                                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                                                ) : (
                                                    <X className="w-6 h-6 text-red-500 mx-auto" />
                                                )
                                            ) : (
                                                <span className="text-gray-400">{row.cable}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Everything You <span className="text-gradient">Need</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Tv, title: '17,000+ Channels', desc: 'Sports, movies, series, news, kids...' },
                            { icon: Film, title: 'Unlimited VOD', desc: 'Thousands of movies and series on demand' },
                            { icon: Globe, title: 'Global Content', desc: 'Channels from 150+ countries' },
                            { icon: Smartphone, title: 'Multi-Device', desc: 'TV, mobile, tablet, PC' }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 p-0.5 flex items-center justify-center mx-auto mb-4">
                                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                        <feature.icon className="w-8 h-8 text-green-500" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <div className="text-center mt-16">
                        <LandingCTA text="Start Now" variant="success" />
                        <p className="text-sm text-gray-400 mt-4">
                            ✓ 7-day trial • ✓ No commitment • ✓ Instant activation
                        </p>
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
