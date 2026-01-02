const channelsShowcase = '/assets/channels-showcase.png';

export default function ChannelShowcase() {
    const categories = [
        { name: 'Sports', count: '500+', color: 'from-red-500 to-orange-500' },
        { name: 'Movies', count: '1000+', color: 'from-purple-500 to-pink-500' },
        { name: 'Series', count: '800+', color: 'from-blue-500 to-emerald-500' },
        { name: 'News', count: '200+', color: 'from-green-500 to-emerald-500' },
        { name: 'Kids', count: '150+', color: 'from-yellow-500 to-amber-500' },
        { name: 'Entertainment', count: '600+', color: 'from-indigo-500 to-purple-500' },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Thousands of Live Channels</span> at Your Fingertips
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Access the world's best content from sports, movies, series, news, and more
                    </p>
                </div>

                {/* Channel categories grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="glass p-6 rounded-xl text-center hover:scale-110 transition-all duration-300 cursor-pointer animate-scale-in group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:animate-bounce-slow`}>
                                <span className="text-2xl font-bold text-white">{category.count.charAt(0)}</span>
                            </div>
                            <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                            <p className="text-sm text-muted-foreground">{category.count} channels</p>
                        </div>
                    ))}
                </div>

                {/* Channel showcase image */}
                <div className="max-w-5xl mx-auto animate-fade-in">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                        <img
                            src={channelsShowcase}
                            alt="Channel Showcase"
                            className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Features list */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
                    {[
                        { title: 'HD & 4K Quality', desc: 'Crystal clear streaming' },
                        { title: 'EPG Guide', desc: 'Full TV program guide' },
                        { title: 'Catch-Up TV', desc: 'Watch what you missed' },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="text-center p-6 glass rounded-xl hover:scale-105 transition-all animate-slide-up"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <h4 className="font-semibold text-lg mb-2 text-gradient">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
