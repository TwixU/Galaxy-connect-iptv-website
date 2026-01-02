import { useEffect, useState, useRef } from 'react';
import { Users, Tv, Globe, Star, Award, TrendingUp } from 'lucide-react';

export default function Statistics() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const stats = [
        {
            icon: Users,
            value: 10000,
            label: 'Happy Customers',
            suffix: '+',
            color: 'from-blue-500 to-emerald-500',
        },
        {
            icon: Tv,
            value: 17000,
            label: 'Live Channels',
            suffix: '+',
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: Globe,
            value: 150,
            label: 'Countries Served',
            suffix: '+',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: Star,
            value: 4.9,
            label: 'Average Rating',
            suffix: '/5',
            color: 'from-yellow-500 to-orange-500',
            decimals: true,
        },
        {
            icon: Award,
            value: 99,
            label: 'Uptime',
            suffix: '%',
            color: 'from-red-500 to-rose-500',
        },
        {
            icon: TrendingUp,
            value: 24,
            label: 'Support',
            suffix: '/7',
            color: 'from-indigo-500 to-blue-500',
        },
    ];

    const Counter = ({ target, suffix, decimals }: { target: number; suffix: string; decimals?: boolean }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isVisible) return;

            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(current);
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }, [isVisible, target]);

        return (
            <span className="text-2xl md:text-3xl font-bold text-gradient block">
                {decimals ? count.toFixed(1) : Math.floor(count).toLocaleString()}
                {suffix}
            </span>
        );
    };

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 md:mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Trusted Worldwide</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Results We Are <span className="text-gradient">Proud Of</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of satisfied customers streaming premium content with GALAXY CONNECT
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative group text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${stat.color} p-0.5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                        <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                                    </div>
                                </div>
                                <Counter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                                <p className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust badge */}
                <div className="text-center mt-12 md:mt-16 animate-fade-in">
                    <p className="text-sm md:text-base text-muted-foreground">
                        Trusted by customers in over <span className="text-primary font-bold">150+ countries</span> worldwide
                    </p>
                </div>
            </div>
        </section>
    );
}
