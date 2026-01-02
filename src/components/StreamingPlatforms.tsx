export default function StreamingPlatforms() {
    const platforms = [
        { name: 'Netflix', logo: '/assets/netflixx.webp' },
        { name: 'HBO Max', logo: '/assets/hboo.webp' },
        { name: 'Disney+', logo: '/assets/disney-pluss.webp' },
        { name: 'Prime Video', logo: '/assets/amazon-primee.webp' },
        { name: 'Hulu', logo: '/assets/huluu.webp' },
        { name: 'Apple TV+', logo: '/assets/Apple_TV_Pluss.webp' },
    ];

    return (
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12 animate-fade-in">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                        Access <span className="text-gradient">All Major Platforms</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Stream content from Netflix, HBO, Disney+, and more - all in one place
                    </p>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto items-center">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-3 md:p-4 lg:p-6 glass rounded-lg md:rounded-xl hover:scale-110 transition-all duration-300 animate-scale-in group cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <img
                                src={platform.logo}
                                alt={platform.name}
                                className="w-full h-8 md:h-10 lg:h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center mt-8 md:mt-12 animate-fade-in">
                    <p className="text-xs md:text-sm text-muted-foreground">
                        + Thousands more channels and platforms available
                    </p>
                </div>
            </div>
        </section>
    );
}
