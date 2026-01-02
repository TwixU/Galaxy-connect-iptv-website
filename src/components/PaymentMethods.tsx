import { Shield, Lock, CheckCircle } from 'lucide-react';

export default function PaymentMethods() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 via-background to-primary/5">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header - Enhanced */}
                    <div className="text-center mb-10 md:mb-14">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 mb-6 shadow-lg shadow-green-500/20">
                            <Shield className="w-5 h-5 text-green-400" />
                            <span className="text-sm font-bold text-green-400">🔒 100% Secure Payments</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                            Trusted Payment Methods
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Your payment information is encrypted and protected with industry-leading security
                        </p>
                    </div>

                    {/* Payment Logos - Enhanced Visibility */}
                    <div className="bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl p-10 md:p-14 shadow-2xl">
                        {/* Payment Provider Logos */}
                        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap mb-10">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-xl">
                                <img
                                    src="/assets/visa.png"
                                    className="h-12 md:h-16 object-contain"
                                    alt="Visa"
                                />
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-xl">
                                <img
                                    src="/assets/mastercard.png"
                                    className="h-12 md:h-16 object-contain"
                                    alt="Mastercard"
                                />
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-xl">
                                <img
                                    src="/assets/paypal.png"
                                    className="h-12 md:h-16 object-contain"
                                    alt="PayPal"
                                />
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-xl">
                                <img
                                    src="/assets/cashapp-new.webp"
                                    className="h-12 md:h-16 object-contain"
                                    alt="Cash App"
                                />
                            </div>
                        </div>

                        {/* Trust Badges - Enhanced */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t-2 border-slate-700/50">
                            <div className="flex items-center justify-center gap-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-4 hover:border-green-500/50 transition-all">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Lock className="w-5 h-5 text-green-400" />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-white text-sm">SSL Encrypted</p>
                                    <p className="text-xs text-slate-400">256-bit Security</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-3 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/30 rounded-xl p-4 hover:border-blue-500/50 transition-all">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-blue-400" />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-white text-sm">PCI Compliant</p>
                                    <p className="text-xs text-slate-400">Industry Standard</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-4 hover:border-purple-500/50 transition-all">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-purple-400" />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-white text-sm">Money-Back</p>
                                    <p className="text-xs text-slate-400">7-Day Guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
