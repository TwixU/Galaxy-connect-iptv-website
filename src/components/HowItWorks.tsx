import { ShoppingCart, Mail, Tv } from 'lucide-react';

export default function HowItWorks() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#0E1117]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
                            How It <span className="text-emerald-600">Works</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300">
                            Get started in 3 simple steps
                        </p>
                    </div>

                    {/* Steps Container */}
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">

                        {/* Connecting Line (Desktop only) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-emerald-200 -z-10"></div>

                        {/* Step 1: Start Trial */}
                        <div className="relative flex flex-col items-center group">
                            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-emerald-200 shadow-lg">
                                <ShoppingCart className="w-10 h-10 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Start Trial</h3>
                            <p className="text-gray-300 leading-relaxed max-w-xs mx-auto">
                                Click the <span className="text-emerald-400 font-semibold">$3.99 button</span> to start your 7-day trial. No long-term commitment required.
                            </p>
                        </div>

                        {/* Step 2: Instant Access */}
                        <div className="relative flex flex-col items-center group">
                            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-emerald-200 shadow-lg">
                                <Mail className="w-10 h-10 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Instant Access</h3>
                            <p className="text-gray-300 leading-relaxed max-w-xs mx-auto">
                                Receive your credentials <span className="text-emerald-400 font-semibold">immediately via WhatsApp</span>. Start watching in minutes.
                            </p>
                        </div>

                        {/* Step 3: Choose Plan */}
                        <div className="relative flex flex-col items-center group">
                            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-emerald-200 shadow-lg">
                                <Tv className="w-10 h-10 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Choose Plan</h3>
                            <p className="text-gray-300 leading-relaxed max-w-xs mx-auto">
                                <span className="text-emerald-400 font-semibold">Only after the trial</span>, convert to a 3-month plan or continue monthly. Your choice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
