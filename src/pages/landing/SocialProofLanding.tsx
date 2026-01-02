import LandingLayout from '../../components/landing/LandingLayout';
import LandingCTA from '../../components/landing/LandingCTA';
import { Star, Users, TrendingUp, MessageCircle } from 'lucide-react';

export default function SocialProofLanding() {
    const testimonials = [
        {
            name: "John M.",
            location: "Montreal, QC",
            rating: 5,
            text: "Best streaming service I've tried! Exceptional picture quality and no interruptions.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1"
        },
        {
            name: "Sarah L.",
            location: "Toronto, ON",
            rating: 5,
            text: "Amazing customer support. They answered my questions in less than 2 minutes!",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2"
        },
        {
            name: "Ahmed K.",
            location: "Vancouver, BC",
            rating: 5,
            text: "All the channels I wanted, including Arabic channels. Unbeatable price!",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3"
        }
    ];

    return (
        <LandingLayout backgroundColor="bg-gradient-to-b from-background to-orange-950/20">
            {/* Hero Section */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        {/* Social Proof Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-sm">
                            <Users className="w-4 h-4 text-orange-400" />
                            <span className="text-orange-300 font-semibold">50,000+ Satisfied Customers</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                            Join <span className="text-gradient">50,000+ Customers</span>
                            <br />
                            Who Chose Galaxy Connect
                        </h1>

                        {/* Star Rating */}
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-8 h-8 fill-current" />
                                ))}
                            </div>
                            <span className="text-2xl font-bold text-white ml-2">4.9/5</span>
                            <span className="text-gray-400 ml-2">(12,847 reviews)</span>
                        </div>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            Thousands of families trust Galaxy Connect for their daily entertainment
                        </p>

                        {/* CTA */}
                        <div className="pt-6">
                            <LandingCTA text="Join the Galaxy Connect Community" variant="primary" />
                        </div>

                        {/* Live Counter */}
                        <div className="inline-flex items-center gap-3 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-300 font-semibold">
                                2,847 people watching right now
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-black/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <MessageCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">What Our Customers Say</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-gradient">Authentic Reviews</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                            >
                                {/* Stars */}
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-300 mb-6 italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full border-2 border-primary/30"
                                    />
                                    <div>
                                        <div className="font-semibold text-white">{testimonial.name}</div>
                                        <div className="text-sm text-gray-400">{testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 p-0.5 flex items-center justify-center mx-auto mb-4">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                    <Users className="w-10 h-10 text-blue-500" />
                                </div>
                            </div>
                            <div className="text-4xl font-bold text-gradient mb-2">50,000+</div>
                            <div className="text-gray-400">Active Customers</div>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 p-0.5 flex items-center justify-center mx-auto mb-4">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                    <Star className="w-10 h-10 text-yellow-500" />
                                </div>
                            </div>
                            <div className="text-4xl font-bold text-gradient mb-2">4.9/5</div>
                            <div className="text-gray-400">Average Rating</div>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 p-0.5 flex items-center justify-center mx-auto mb-4">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                    <TrendingUp className="w-10 h-10 text-green-500" />
                                </div>
                            </div>
                            <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                            <div className="text-gray-400">Satisfaction Rate</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <LandingCTA text="Join Now" variant="primary" />
                        <p className="text-sm text-gray-400 mt-4">
                            Be part of our growing community
                        </p>
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
