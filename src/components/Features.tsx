import { Zap, Shield, Headphones, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function Features() {
    const features = [
        {
            icon: Zap,
            title: 'Fastest Streaming Service',
            description: 'Lightning-fast streaming with minimal buffering',
            gradient: 'from-yellow-500 to-orange-500',
        },
        {
            icon: Shield,
            title: 'High Quality Stream',
            description: 'Crystal clear HD & 4K streaming quality',
            gradient: 'from-blue-500 to-emerald-500',
        },
        {
            icon: Headphones,
            title: 'Live Support 24/7',
            description: 'Expert support team always ready to help',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            icon: Clock,
            title: 'Instant Activation',
            description: 'Get started immediately after purchase',
            gradient: 'from-purple-500 to-pink-500',
        },
    ];

    return (
        <section className="py-12 md:py-20 bg-[#0E1117]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">
                        Why Choose <span className="text-emerald-600">Our Service</span>
                    </h2>
                    <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Experience the best streaming service with premium features
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={index}
                                className="bg-[#1A1D29] border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-scale-in"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <CardContent className="p-4 md:p-6 text-center">
                                    <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-300">{feature.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
