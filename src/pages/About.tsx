import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Building2, Mail, Phone, Shield, Award, Users } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen bg-[#080c17] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About <span className="text-emerald-400">GALAXY CONNECT</span></h1>
                        <p className="text-xl text-slate-300">
                            Your trusted partner for premium streaming streaming services
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 max-w-6xl">
                {/* Company Information */}
                <section className="mb-16">
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Building2 className="w-8 h-8 text-emerald-400" />
                            <h2 className="text-3xl font-bold text-white">Company Information</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Business Name</h3>
                                    <p className="text-white text-lg">GALAXY CONNECT</p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Service</h3>
                                    <p className="text-slate-400">Premium streaming Streaming Services</p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Established</h3>
                                    <p className="text-slate-400">2023</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Contact Email</h3>
                                    <a href="mailto:support@galaxyconnect.online" className="text-emerald-400 hover:underline flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        support@galaxyconnect.online
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone Support</h3>
                                    <a href="tel:+33745889674" className="text-emerald-400 hover:underline flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        +33 7 45 88 96 74
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Support Hours</h3>
                                    <p className="text-slate-400">24/7 Customer Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Mission */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-slate-400 text-lg leading-relaxed">
                            At GALAXY CONNECT, we're committed to providing the highest quality streaming streaming experience to customers worldwide.
                            Our mission is to deliver reliable, high-definition entertainment with exceptional customer service and transparent business practices.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mt-4">
                            We believe everyone deserves access to premium entertainment at affordable prices. That's why we offer competitive pricing,
                            flexible subscription plans, and a 7-day money-back guarantee to ensure complete customer satisfaction.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-white">Why Choose GALAXY CONNECT</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Reliable Service</h3>
                            <p className="text-slate-400">
                                99.9% uptime guarantee with anti-buffer technology for uninterrupted streaming
                            </p>
                        </div>

                        <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                                <Award className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Premium Quality</h3>
                            <p className="text-slate-400">
                                Thousands of channels in HD and 4K quality with instant activation
                            </p>
                        </div>

                        <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                            <p className="text-slate-400">
                                Dedicated customer support team available around the clock to assist you
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Commitment */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-white">Our Commitment to Transparency</h2>
                    <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-8">
                        <p className="text-slate-400 leading-relaxed mb-4">
                            We are committed to operating with complete transparency and integrity. All our business practices comply with applicable laws and regulations.
                        </p>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">✓</span>
                                <span>Clear pricing with no hidden fees</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">✓</span>
                                <span>Comprehensive privacy policy protecting your data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">✓</span>
                                <span>7-day money-back guarantee, no questions asked</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">✓</span>
                                <span>Secure payment processing with industry-standard encryption</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">✓</span>
                                <span>Responsive customer support available 24/7</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Legal Information */}
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-white">Legal & Policies</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <a href="/terms" className="bg-slate-900/50 border border-white/5 rounded-lg p-6 hover:border-emerald-500/50 transition-all">
                            <h3 className="text-lg font-semibold text-white mb-2">Terms of Service</h3>
                            <p className="text-slate-400 text-sm">Read our complete terms and conditions</p>
                        </a>
                        <a href="/privacy" className="bg-slate-900/50 border border-white/5 rounded-lg p-6 hover:border-emerald-500/50 transition-all">
                            <h3 className="text-lg font-semibold text-white mb-2">Privacy Policy</h3>
                            <p className="text-slate-400 text-sm">Learn how we protect your data</p>
                        </a>
                        <a href="/refund" className="bg-slate-900/50 border border-white/5 rounded-lg p-6 hover:border-emerald-500/50 transition-all">
                            <h3 className="text-lg font-semibold text-white mb-2">Refund Policy</h3>
                            <p className="text-slate-400 text-sm">7-day money-back guarantee details</p>
                        </a>
                        <a href="/dmca" className="bg-slate-900/50 border border-white/5 rounded-lg p-6 hover:border-emerald-500/50 transition-all">
                            <h3 className="text-lg font-semibold text-white mb-2">DMCA Policy</h3>
                            <p className="text-slate-400 text-sm">Copyright and content policies</p>
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
