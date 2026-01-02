import { Gift, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export default function ReferralSection() {
    return (
        <section className="py-20 bg-[#0E1117] border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-emerald-200 shadow-xl overflow-hidden relative">


                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            {/* Text Content */}
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm border border-emerald-300">
                                    <Gift className="w-4 h-4" />
                                    <span>Referral Program</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                    Refer a Friend & <br />
                                    <span className="text-emerald-600">Earn Bonus Months!</span>
                                </h2>

                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Love Galaxy Connect? Share the experience with your friends and family!
                                    For every friend who subscribes, you both earn <strong>1 Bonus Month</strong> added to your subscription.
                                </p>

                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shadow-sm text-emerald-700 font-bold text-lg">1</div>
                                        <div>
                                            <h4 className="font-bold text-white">Share your unique link</h4>
                                            <p className="text-sm text-gray-300">Copy your referral link from your dashboard</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shadow-sm text-emerald-700 font-bold text-lg">2</div>
                                        <div>
                                            <h4 className="font-bold text-white">Friend subscribes</h4>
                                            <p className="text-sm text-gray-300">They sign up using your link</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shadow-sm text-emerald-700 font-bold text-lg">3</div>
                                        <div>
                                            <h4 className="font-bold text-white">You both get rewarded</h4>
                                            <p className="text-sm text-gray-300">1 Bonus Month added automatically</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <Button
                                        onClick={() => window.open('https://wa.me/33745889674', '_blank')}
                                        className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-6 px-8 text-lg rounded-xl shadow-lg shadow-emerald-500/20"
                                    >
                                        Start Referring Now <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </div>

                            {/* Image/Visual */}
                            <div className="relative hidden md:block">
                                <div className="relative z-10 bg-[#1A1D29] p-4 rounded-2xl shadow-xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Happy friends watching TV"
                                        className="rounded-xl w-full h-auto object-cover"
                                    />
                                    <div className="absolute -bottom-6 -left-6 bg-[#1A1D29] p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                                        <div className="flex -space-x-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white"></div>
                                            <div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white"></div>
                                            <div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-white"></div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">500+ Users</p>
                                            <p className="text-xs text-slate-500">referred this month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
