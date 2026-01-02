import { Mail, Phone } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gradient-to-b from-[#0E1117] to-black border-t border-white/10 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 md:mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center mb-6">
                            <img
                                src="/logo.png"
                                alt="GALAXY CONNECT"
                                className="h-16 w-auto"
                            />
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Premium streaming service for unmatched entertainment. Stream your favorite content anytime, anywhere.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection('home')}
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('pricing')}
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Subscription
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('channels')}
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Channels list
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('testimonials')}
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Reviews
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Terms of service
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a href="/legal" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Legal Notice
                                </a>
                            </li>
                            <li>
                                <a href="/refund" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Refund policy
                                </a>
                            </li>
                            <li>
                                <a href="/dmca" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    DMCA
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Customer service</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Mail className="w-4 h-4 text-primary" />
                                <a href="mailto:support@galaxyconnect.online" className="hover:text-primary transition-colors">
                                    support@galaxyconnect.online
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Phone className="w-4 h-4 text-primary" />
                                <a href="tel:+33745889674" className="hover:text-primary transition-colors">
                                    +33 7 45 88 96 74
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Legal Disclaimer */}
                <div className="border-t border-white/10 pt-6 mt-6">
                    <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                        <strong className="text-white">Legal Disclaimer:</strong> Galaxy Connect acts as a technology platform that aggregates publicly available streams from authorized sources. We do not host or store any content. All streaming content is provided by third-party sources and we are not responsible for the availability, accuracy, or legality of content provided by these sources. Users are responsible for ensuring their use complies with local laws and regulations.
                    </p>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                        Copyright © {currentYear} GALAXY CONNECT – All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
