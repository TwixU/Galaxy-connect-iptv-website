import { useLocation } from 'wouter';
import { Shield, Zap, Clock, DollarSign, Heart, Users, CheckCircle, X, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import Footer from '../components/Footer';

export default function ValueCheckout() {
    // TEST: Modifications appliquées - Version optimisée
    const [, navigate] = useLocation();

    const painPoints = [
        { icon: DollarSign, text: "Your cable bill keeps going up, but the service gets worse" },
        { icon: AlertCircle, text: "You're locked in a contract you can't escape" },
        { icon: Clock, text: "Customer service puts you on hold for hours" },
        { icon: Heart, text: "You can't watch shows from your home country" },
        { icon: Users, text: "Your favorite team's games are on 'premium' channels" },
        { icon: X, text: "You're paying for 5 streaming services and still can't find anything" }
    ];

    const solutions = [
        { title: "Thousands of Channels", desc: "Every channel you could want, in HD/4K" },
        { title: "All Sports Included", desc: "NFL, NBA, NHL, Soccer, UFC, everything" },
        { title: "150+ Countries", desc: "Stay connected to your culture and language" },
        { title: "No Contracts", desc: "Cancel anytime, no questions asked" },
        { title: "Real Support", desc: "Humans, not robots. < 5 min response time" },
        { title: "One Price", desc: "Starting at $14.99/month. No hidden fees" }
    ];

    const testimonials = [
        {
            text: "I was paying $180/month to Comcast. Now I pay $35 and get MORE channels. My wife can finally watch her Turkish shows, and I never miss a Raptors game. Best decision we ever made.",
            author: "Michael T.",
            location: "Toronto, ON",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael"
        },
        {
            text: "After my mom passed away, I wanted to watch Filipino channels to feel close to her. Cable wanted $50/month extra. Galaxy Connect had everything included. I cried tears of joy.",
            author: "Maria S.",
            location: "Los Angeles, CA",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria"
        },
        {
            text: "I called Spectrum to cancel and they put me on hold for 2 HOURS. With Galaxy Connect, I got a response in 3 minutes. That's respect.",
            author: "James K.",
            location: "New York, NY",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james"
        }
    ];

    const comparisonData = [
        { item: "Cable TV (12 months)", current: "$1,800", galaxy: "$69.99" },
        { item: "Netflix (12 months)", current: "$215.88", galaxy: "Included" },
        { item: "Hulu (12 months)", current: "$179.88", galaxy: "Included" },
        { item: "Disney+ (12 months)", current: "$167.88", galaxy: "Included" },
        { item: "ESPN+ (12 months)", current: "$131.88", galaxy: "Included" },
        { item: "Total/year", current: "$2,495.52", galaxy: "$69.99", highlight: true }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
                <div className="container mx-auto px-4 py-4 flex justify-center">
                    <button onClick={() => navigate('/')} className="focus:outline-none">
                        <img src="/logo.png" alt="GALAXY CONNECT" className="h-24 w-auto" />
                    </button>
                </div>
            </header>

            <main className="pt-24 pb-20">
                {/* Hero - Acknowledge the Pain */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-red-950/20 to-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                                Tired of Paying <span className="text-red-500">$150+/Month</span>
                                <br />
                                for Cable You Don't Even Watch?
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300">
                                You're not alone. Thousands of families in the USA and Canada are cutting the cord and saving <span className="text-green-400 font-bold">$1,200+ per year</span>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Plan Selection - NEW */}
                <section className="py-16 bg-[#0E1117]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Choose Your <span className="text-gradient">Perfect Plan</span>
                                </h2>
                                <p className="text-xl text-gray-300">
                                    All plans include full access to thousands of channels & movies
                                </p>
                            </div>

                            {/* Plans Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {/* 1 Month */}
                                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-white mb-2">1 Month</h3>
                                        <div className="text-4xl font-bold text-emerald-400 mb-1">$14.99</div>
                                        <div className="text-sm text-gray-400">per month</div>
                                    </div>
                                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold">
                                        Select Plan
                                    </Button>
                                </div>

                                {/* 3 Months - Best Value */}
                                <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-2 border-emerald-500/50 rounded-2xl p-6 relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 rounded-full text-xs font-bold text-black">
                                        BEST VALUE
                                    </div>
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-white mb-2">3 Months</h3>
                                        <div className="text-4xl font-bold text-emerald-400 mb-1">$29.99</div>
                                        <div className="text-sm text-gray-400">$9.99/month</div>
                                        <div className="text-xs text-emerald-400 font-semibold mt-2">Save 33%</div>
                                    </div>
                                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold">
                                        Select Plan
                                    </Button>
                                </div>

                                {/* 6 Months */}
                                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-white mb-2">6 Months</h3>
                                        <div className="text-4xl font-bold text-emerald-400 mb-1">$49.99</div>
                                        <div className="text-sm text-gray-400">$8.33/month</div>
                                        <div className="text-xs text-emerald-400 font-semibold mt-2">Save 44%</div>
                                    </div>
                                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold">
                                        Select Plan
                                    </Button>
                                </div>

                                {/* 12 Months - Most Popular */}
                                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/50 rounded-2xl p-6 relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 rounded-full text-xs font-bold text-white">
                                        MOST POPULAR
                                    </div>
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-white mb-2">12 Months</h3>
                                        <div className="text-4xl font-bold text-emerald-400 mb-1">$69.99</div>
                                        <div className="text-sm text-gray-400">$5.83/month</div>
                                        <div className="text-xs text-emerald-400 font-semibold mt-2">Save 61%</div>
                                    </div>
                                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold">
                                        Select Plan
                                    </Button>
                                </div>
                            </div>

                            {/* Features Bullet Points */}
                            <div className="bg-gradient-to-br from-emerald-500/5 to-blue-500/5 border border-emerald-500/20 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                    What's Included in Every Plan
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-white">Thousands of Channels & Movies</div>
                                            <div className="text-sm text-gray-400">Live TV, sports, movies, series & more</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-white">HD & 4K Quality</div>
                                            <div className="text-sm text-gray-400">Crystal clear streaming experience</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-white">Simultaneous Connections</div>
                                            <div className="text-sm text-gray-400">Watch on multiple devices at once</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-white">Anti-Buffer Technology</div>
                                            <div className="text-sm text-gray-400">Smooth streaming, no interruptions</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-white">Instant Activation</div>
                                            <div className="text-sm text-gray-400">Start watching in minutes</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-white">24/7 Customer Support</div>
                                            <div className="text-sm text-gray-400">Real humans, fast responses</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DMCA Legal Disclaimer - NEW */}
                <section className="py-12 bg-black/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <Shield className="w-12 h-12 text-emerald-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            100% Legal & DMCA Compliant
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Galaxy Connect acts as a technology platform aggregating publicly available streams from authorized sources.
                                            We do not host or store any content. All streaming content is provided by third-party sources and we are not
                                            responsible for the availability, accuracy, or legality of content provided by these sources. Users are responsible
                                            for ensuring their use complies with local laws and regulations. 100% safe, legal, and DMCA compliant.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Problem - Empathy */}
                <section className="py-20 bg-black/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    We Know <span className="text-gradient">How You Feel</span>...
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                {painPoints.map((pain, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 bg-gradient-to-r from-red-500/10 to-transparent p-6 rounded-xl border border-red-500/20"
                                    >
                                        <pain.icon className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                                        <p className="text-gray-300 text-lg">{pain.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-4">
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    We've heard your stories. The frustration of calling customer service and being transferred 5 times. The disappointment of missing your team's championship game because it's "not included." The homesickness of not being able to watch shows in your language. The shock when your "promotional rate" expires and your bill doubles overnight.
                                </p>
                                <p className="text-2xl font-bold text-white text-center pt-4">
                                    You deserve better. ❤️
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Solution - Hope */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Introducing <span className="text-gradient">Galaxy Connect</span>
                                </h2>
                                <p className="text-xl text-gray-300">
                                    Everything You Want, Nothing You Don't
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {solutions.map((solution, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-4">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                                        <p className="text-gray-400">{solution.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Proof - Trust */}
                <section className="py-20 bg-black/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Join <span className="text-gradient">50,000+ Families</span> Who Made the Switch
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                                    >
                                        <p className="text-gray-300 mb-6 italic leading-relaxed">
                                            "{testimonial.text}"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.author}
                                                className="w-12 h-12 rounded-full border-2 border-primary/30"
                                            />
                                            <div>
                                                <div className="font-semibold text-white">{testimonial.author}</div>
                                                <div className="text-sm text-gray-400">{testimonial.location}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Guarantees - Remove Risk */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    We Remove <span className="text-gradient">All the Risk</span>
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/30 rounded-2xl p-8">
                                    <Shield className="w-12 h-12 text-blue-400 mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-3">7-Day Money-Back Guarantee</h3>
                                    <p className="text-gray-300">
                                        Try it risk-free. If you're not 100% satisfied in the first 7 days, we'll refund every penny. No questions, no hassle.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
                                    <Zap className="w-12 h-12 text-purple-400 mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-3">Instant Activation</h3>
                                    <p className="text-gray-300">
                                        No waiting for a technician. No installation fees. Start watching in 5 minutes.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8">
                                    <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-3">No Contracts, Ever</h3>
                                    <p className="text-gray-300">
                                        Cancel anytime with one click. No phone calls, no retention departments, no guilt trips.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-8">
                                    <Users className="w-12 h-12 text-orange-400 mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-3">24/7 Human Support</h3>
                                    <p className="text-gray-300">
                                        Real people, not bots. Average response time: 4 minutes. We're here when you need us.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Price Comparison - Logic */}
                <section className="py-20 bg-black/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Do the Math: You'll Save <span className="text-green-400">$2,405/Year</span>
                                </h2>
                            </div>

                            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="p-4 text-left text-gray-400 font-semibold">Service</th>
                                            <th className="p-4 text-right text-gray-400 font-semibold">What You Pay Now</th>
                                            <th className="p-4 text-right text-primary font-semibold">Galaxy Connect</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparisonData.map((row, index) => (
                                            <tr
                                                key={index}
                                                className={`border-b border-white/5 ${row.highlight ? 'bg-green-500/10' : ''}`}
                                            >
                                                <td className={`p-4 ${row.highlight ? 'font-bold text-white' : 'text-gray-300'}`}>
                                                    {row.item}
                                                </td>
                                                <td className={`p-4 text-right ${row.highlight ? 'font-bold text-red-400 text-xl' : 'text-gray-400'}`}>
                                                    {row.current}
                                                </td>
                                                <td className={`p-4 text-right ${row.highlight ? 'font-bold text-green-400 text-xl' : 'text-primary'}`}>
                                                    {row.galaxy}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="p-6 bg-green-500/20 border-t border-green-500/30 text-center">
                                    <p className="text-2xl md:text-3xl font-bold text-green-400">
                                        Annual Savings: $2,405 🎉
                                    </p>
                                    <p className="text-gray-300 mt-2">
                                        That's a family vacation, a new car payment, or peace of mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Device Pricing Table */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Choose Your <span className="text-gradient">Perfect Plan</span>
                                </h2>
                                <p className="text-gray-300 text-lg">
                                    All plans include Thousands of channels, all sports, and 150+ countries
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                {/* 1 Device Plan */}
                                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                                    <div className="text-center mb-6">
                                        <div className="text-sm text-gray-400 mb-2">Perfect for</div>
                                        <h3 className="text-2xl font-bold text-white mb-4">1 Device</h3>
                                        <div className="text-4xl font-bold text-gradient mb-2">
                                            $69.99<span className="text-lg text-gray-400">/12mo</span>
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            <span className="line-through">$149.99</span> • Save $80
                                        </p>
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>Over 10,000 live channels</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>A huge library of movies & series</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>HD/4K quality</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>24/7 support</span>
                                        </li>
                                    </ul>
                                    <Button
                                        onClick={() => navigate('/subscriptions')}
                                        className="w-full"
                                        variant="outline"
                                    >
                                        Select Plan
                                    </Button>
                                </div>

                                {/* 2 Devices Plan - POPULAR */}
                                <div className="bg-gradient-to-br from-primary/20 to-blue-600/20 backdrop-blur-sm border-2 border-primary rounded-2xl p-8 relative transform md:scale-105 shadow-2xl">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                                        MOST POPULAR
                                    </div>
                                    <div className="text-center mb-6">
                                        <div className="text-sm text-gray-400 mb-2">Best for</div>
                                        <h3 className="text-2xl font-bold text-white mb-4">2 Devices</h3>
                                        <div className="text-4xl font-bold text-gradient mb-2">
                                            $89.99<span className="text-lg text-gray-400">/12mo</span>
                                        </div>
                                        <p className="text-sm text-green-400 font-semibold">
                                            <span className="line-through text-gray-400">$199.99</span> • Save $110
                                        </p>
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>Everything in 1 Device</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>2 simultaneous streams</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>Perfect for couples</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>Priority support</span>
                                        </li>
                                    </ul>
                                    <Button
                                        onClick={() => navigate('/subscriptions')}
                                        className="w-full bg-primary hover:bg-primary/90"
                                    >
                                        Select Plan
                                    </Button>
                                </div>

                                {/* 3 Devices Plan */}
                                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                                    <div className="text-center mb-6">
                                        <div className="text-sm text-gray-400 mb-2">Ideal for</div>
                                        <h3 className="text-2xl font-bold text-white mb-4">3 Devices</h3>
                                        <div className="text-4xl font-bold text-gradient mb-2">
                                            $129.99<span className="text-lg text-gray-400">/12mo</span>
                                        </div>
                                        <p className="text-sm text-green-400 font-semibold">
                                            <span className="line-through text-gray-400">$299.99</span> • Save $170
                                        </p>
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>Everything in 2 Devices</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>3 simultaneous streams</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>Perfect for families</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>VIP support</span>
                                        </li>
                                    </ul>
                                    <Button
                                        onClick={() => navigate('/subscriptions')}
                                        className="w-full"
                                        variant="outline"
                                    >
                                        Select Plan
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Guarantees */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-sm">
                                <div className="flex items-center justify-center gap-2 text-green-400">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Instant activation</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-green-400">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>7-day guarantee</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-green-400">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>No contracts</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-green-400">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Cancel anytime</span>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="text-center mb-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                                        <Shield className="w-4 h-4 text-green-500" />
                                        <span className="text-sm font-semibold text-green-500">100% Secure Payments</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Trusted Payment Methods
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Your payment information is encrypted and secure
                                    </p>
                                </div>

                                {/* Payment Logos */}
                                <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap mb-6">
                                    <img
                                        src="/assets/visa.png"
                                        className="h-10 md:h-12 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                                        alt="Visa"
                                    />
                                    <img
                                        src="/assets/mastercard.png"
                                        className="h-10 md:h-12 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                                        alt="Mastercard"
                                    />
                                    <img
                                        src="/assets/paypal.png"
                                        className="h-10 md:h-12 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                                        alt="PayPal"
                                    />
                                    <img
                                        src="/assets/cashapp.png"
                                        className="h-12 md:h-14 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                                        alt="Cash App"
                                    />
                                </div>

                                {/* Security Badges */}
                                <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap text-sm text-muted-foreground pt-6 border-t border-white/10">
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-green-500" />
                                        <span>SSL Encrypted</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-green-500" />
                                        <span>PCI Compliant</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-green-500" />
                                        <span>Money-Back Guarantee</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Chat Prompt - Floating */}
            <div className="fixed bottom-6 left-6 z-30 max-w-xs animate-bounce-slow hidden sm:block">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg shadow-2xl p-4 border-2 border-white/20">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">💬</span>
                        </div>
                        <div>
                            <p className="font-bold text-sm mb-1">Need help?</p>
                            <p className="text-xs opacity-90">Chat with us — we respond instantly.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
