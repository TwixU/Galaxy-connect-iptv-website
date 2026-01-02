import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is our streaming service and how does it work?",
        answer: "Our streaming service delivers TV content over the internet instead of traditional cable or satellite. You simply need a stable internet connection and a compatible device to stream thousands of channels in HD/4K quality."
    },
    {
        question: "Which devices are compatible with GALAXY CONNECT?",
        answer: "Our service works on virtually all devices including Smart TVs (Samsung, LG, Android TV), smartphones (iOS & Android), tablets, computers (Windows/Mac), FireStick, Apple TV, MAG boxes, and more."
    },
    {
        question: "Do I need a VPN to use the service?",
        answer: "A VPN is not required but recommended for enhanced privacy and security. Our service works with or without a VPN."
    },
    {
        question: "What internet speed do I need?",
        answer: "We recommend a minimum of 10 Mbps for SD quality, 25 Mbps for HD, and 50 Mbps for 4K streaming. A stable connection is more important than raw speed."
    },
    {
        question: "Can I use my subscription on multiple devices?",
        answer: "Yes! Our plans support multiple simultaneous connections. Check your selected plan for the exact number of devices you can use at the same time."
    },
    {
        question: "How do I install the service?",
        answer: "Installation is simple! After purchase, you'll receive login credentials via email. Visit our Installation Guide page for step-by-step instructions for your specific device."
    },
    {
        question: "What is your refund policy?",
        answer: "We offer a 7-day money-back guarantee. If you're not satisfied with our service for any reason, contact us within 7 days of purchase for a full refund."
    },
    {
        question: "Do you offer customer support?",
        answer: "Yes! We provide 24/7 customer support via email and WhatsApp. Our team is always ready to help with installation, troubleshooting, or any questions you may have."
    },
    {
        question: "Will the service work in my country?",
        answer: "Yes! GALAXY CONNECT works worldwide. As long as you have a stable internet connection, you can enjoy our service from anywhere in the world."
    },
    {
        question: "How do I activate my subscription after payment?",
        answer: "Activation is instant! After payment confirmation, you'll receive your login credentials via email within minutes. Simply follow the installation guide for your device."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#0E1117]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
                        Frequently Asked <span className="text-emerald-600">Questions</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        Find answers to common questions about our streaming service
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-[#1A1D29] shadow-md">
                            <button
                                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-emerald-500/5 transition-colors min-h-[60px]"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-base sm:text-lg text-white pr-4">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 flex-shrink-0" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 text-base text-gray-300 leading-relaxed animate-fade-in">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-300 mb-4">
                        Still have questions?
                    </p>
                    <a
                        href="mailto:contact@galaxyconnect.com"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                    >
                        Contact our support team
                    </a>
                </div>
            </div>
        </section>
    );
}
