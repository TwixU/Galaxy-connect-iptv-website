import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function MoviesSeriesShowcase() {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: 'start', slidesToScroll: 1 },
        [Autoplay({ delay: 2500, stopOnInteraction: false })]
    );

    const movies = [
        '/assets/movies/movie-1.png',
        '/assets/movies/movie-2.png',
        '/assets/movies/movie-3.png',
        '/assets/movies/movie-4.png',
        '/assets/movies/movie-5.png',
        '/assets/movies/movie-6.png',
        '/assets/movies/movie-7.png',
        '/assets/movies/movie-8.png',
        '/assets/movies/movie-9.png',
        '/assets/movies/movie-10.png',
        '/assets/movies/movie-11.png',
        '/assets/movies/movie-12.png',
        '/assets/movies/movie-13.png',
        '/assets/movies/movie-14.png',
        '/assets/movies/movie-15.png',
        '/assets/movies/movie-16.png',
        '/assets/movies/movie-17.png',
        '/assets/movies/movie-18.png',
        '/assets/movies/movie-19.png',
        '/assets/movies/movie-20.png',
        '/assets/movies/movie-21.png',
        '/assets/movies/movie-22.png',
    ];

    return (
        <section className="py-12 md:py-20 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-8 md:mb-12 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                        <span className="text-gradient">Massive Library</span> of Movies & Series
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Stream the latest blockbusters, classic films, and binge-worthy series
                    </p>
                </div>

                {/* Posters Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-2 md:gap-4">
                        {movies.map((poster, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_150px] sm:flex-[0_0_180px] md:flex-[0_0_200px] lg:flex-[0_0_250px] min-w-0"
                            >
                                <div className="relative group cursor-pointer overflow-hidden rounded-lg md:rounded-xl animate-scale-in"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <img
                                        src={poster}
                                        alt={`Movie/Series ${index + 1}`}
                                        className="w-full h-[225px] sm:h-[270px] md:h-[300px] lg:h-[375px] object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                                            <div className="text-white text-xs md:text-sm font-semibold">Watch Now</div>
                                        </div>
                                    </div>

                                    {/* Border Effect */}
                                    <div className="absolute inset-0 border-2 border-white/0 group-hover:border-primary/50 transition-all rounded-lg md:rounded-xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16 max-w-4xl mx-auto">
                    {[
                        { title: 'Latest Releases', desc: 'New content added daily' },
                        { title: 'All Genres', desc: 'Action, Drama, Comedy & more' },
                        { title: 'Multiple Languages', desc: 'Subtitles & dubbing available' },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="text-center p-4 md:p-6 glass rounded-lg md:rounded-xl hover:scale-105 transition-all animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <h4 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 text-gradient">{feature.title}</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
