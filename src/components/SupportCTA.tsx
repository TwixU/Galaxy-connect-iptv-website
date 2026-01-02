import { MessageCircle } from 'lucide-react';

export default function SupportCTA() {
    return (
        <section className="py-16 md:py-20 bg-[#0E1117]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Still have questions?
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-slate-300 mb-8">
                        Chat with our <span className="text-emerald-400 font-semibold">24/7 Support Team</span>
                    </p>

                    {/* WhatsApp CTA Button */}
                    <a
                        href="https://wa.me/33745889674?text=Hello! I have a question about Galaxy Connect."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-xl shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 text-lg"
                    >
                        <MessageCircle className="w-6 h-6" />
                        Chat on WhatsApp
                    </a>

                    {/* Trust indicator */}
                    <p className="text-sm text-slate-400 mt-6">
                        Average response time: <span className="text-emerald-400 font-semibold">Under 5 minutes</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
