import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function SportsCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000, stopOnInteraction: false }),
    ]);

    const sports = [
        { name: 'Boxing', image: '/assets/boxi.webp', gradient: 'from-red-600 to-orange-600' },
        { name: 'Baseball', image: '/assets/baseballl.webp', gradient: 'from-blue-600 to-emerald-600' },
        { name: 'Hockey', image: '/assets/hoxkeyy.webp', gradient: 'from-purple-600 to-pink-600' },
        { name: 'NBA Basketball', image: '/assets/nbbaaa.webp', gradient: 'from-orange-600 to-red-600' },
        { name: 'NFL', image: '/assets/nflllpng.webp', gradient: 'from-green-600 to-emerald-600' },
        { name: 'PPV Events', image: '/assets/pppv.webp', gradient: 'from-yellow-600 to-amber-600' },
    ];

    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                        Watch <span className="text-gradient">All Your Favorite Sports</span> Live
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Never miss a game with our comprehensive sports coverage
                    </p>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-3 md:gap-6">
                        {sports.map((sport, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                            >
                                <div className="relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl animate-scale-in bg-gradient-to-b from-muted/20 to-muted/40"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Image Container with fixed aspect ratio */}
                                    <div className="relative w-full aspect-[3/4]">
                                        <img
                                            src={sport.image}
                                            alt={sport.name}
                                            className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Content - Fixed at bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black via-black/90 to-transparent">
                                        <h3 className="text-base md:text-lg font-bold text-white drop-shadow-lg truncate">{sport.name}</h3>
                                        <p className="text-xs text-white/80 drop-shadow mt-1">Live & On-Demand</p>
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 border-2 border-white/0 group-hover:border-primary/50 transition-all rounded-xl md:rounded-2xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-8 md:mt-16 max-w-4xl mx-auto">
                    {[
                        { label: 'Sports Channels', value: '500+' },
                        { label: 'Live Events', value: '1000+' },
                        { label: 'PPV Access', value: 'Yes' },
                        { label: 'HD Quality', value: '4K' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-3 md:p-6 glass rounded-lg md:rounded-xl hover:scale-105 transition-all animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-xl md:text-3xl font-bold text-gradient mb-1 md:mb-2">{stat.value}</div>
                            <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
