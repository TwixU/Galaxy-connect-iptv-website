import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { Check, Sparkles, TrendingDown } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { plans, type Plan } from '../data/pricingData';

// Custom Mobile Dropdown Component
function MobilePlanDropdown({ plans, selectedPlanId, onSelectPlan, selectedPlan }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="md:hidden max-w-md mx-auto mb-8 relative" ref={dropdownRef}>
            <label className="block text-sm font-semibold text-white mb-3 text-center">
                Choose Your Plan Duration
            </label>

            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-14 bg-slate-900 border-2 border-emerald-500/30 rounded-xl px-4 text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-lg flex items-center justify-between"
            >
                <span>
                    {selectedPlan.name}
                    {selectedPlan.popular && ' ⭐'}
                    {selectedPlan.bestValue && ' 🏆'}
                </span>
                <svg
                    className={`w-5 h-5 text-emerald-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-slate-900 border-2 border-emerald-500/30 rounded-xl shadow-2xl overflow-hidden animate-fade-in">
                    {plans.map((plan: Plan) => (
                        <button
                            key={plan.id}
                            onClick={() => {
                                onSelectPlan(plan.id);
                                setIsOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left text-white hover:bg-emerald-500/10 transition-colors flex items-center justify-between ${plan.id === selectedPlanId ? 'bg-emerald-500/20' : ''
                                }`}
                        >
                            <span className="font-medium">
                                {plan.name}
                                {plan.popular && ' ⭐ Most Popular'}
                                {plan.bestValue && ' 🏆 Best Value'}
                            </span>
                            {plan.id === selectedPlanId && (
                                <Check className="w-5 h-5 text-emerald-400" />
                            )}
                        </button>
                    ))}
                </div>
            )}

            <p className="text-xs text-slate-400 text-center mt-2">
                {selectedPlan.popular && '⭐ Most Popular Choice'}
                {selectedPlan.bestValue && '🏆 Best Value for Money'}
            </p>
        </div>
    );
}

export default function Pricing() {
    const [, setLocation] = useLocation();
    const [selectedPlanId, setSelectedPlanId] = useState<string>('3-months');

    const deviceOptions = ['1', '2', '3', '5'] as const;

    const selectedPlan = plans.find(p => p.id === selectedPlanId) || plans[1];

    const handleOrderNow = (deviceCount: '1' | '2' | '3' | '5') => {
        // Redirect to our new clean URL structure
        // e.g. /checkout/3-months/1-device
        const durationSlug = selectedPlan.id; // '3-months'
        const deviceSlug = `${deviceCount}-device${deviceCount !== '1' ? 's' : ''}`;
        setLocation(`/checkout/${durationSlug}/${deviceSlug}`);
    };

    return (
        <section id="pricing" className="py-12 md:py-20 bg-[#0E1117] overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-8 md:mb-12 animate-fade-in">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Find Your Perfect Plan – <span className="text-emerald-500">Stream Smarter, Save Bigger</span>
                    </h2>

                    {/* Sub-Headline */}
                    <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto mb-6">
                        Choose the duration that fits your needs. All plans include our <span className="text-emerald-400 font-semibold">7-Day Money-Back Guarantee</span>.
                    </p>

                    {/* Value Callout */}
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 mb-8 md:mb-12">
                        <TrendingDown className="w-5 h-5 text-emerald-400" />
                        <span className="text-base md:text-lg text-white font-bold">
                            Save up to $1,200/year compared to traditional cable
                        </span>
                    </div>
                </div>

                <div className="my-8 md:my-12">
                    {/* Duration Selection - Custom Dropdown on Mobile, Tabs on Desktop */}

                    {/* Mobile Custom Dropdown (< md) */}
                    <MobilePlanDropdown
                        plans={plans}
                        selectedPlanId={selectedPlanId}
                        onSelectPlan={setSelectedPlanId}
                        selectedPlan={selectedPlan}
                    />

                    {/* Desktop Tabs (>= md) */}
                    <div className="hidden md:block">
                        <Tabs value={selectedPlanId} onValueChange={(v) => setSelectedPlanId(v)} className="max-w-3xl mx-auto">
                            <TabsList className="flex flex-wrap items-center justify-center p-1 bg-slate-800 border border-slate-700 h-auto">
                                {plans.map(plan => (
                                    <TabsTrigger
                                        key={plan.id}
                                        value={plan.id}
                                        className="flex-1 min-w-[100px] text-xs md:text-sm data-[state=active]:bg-slate-700 data-[state=active]:text-white data-[state=active]:shadow-sm"
                                    >
                                        {plan.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {deviceOptions.map((deviceCount, index) => {
                        // Safe check for 1-month plan that might not have 3/5 devices in some old data but here we assume uniformity
                        // or fallback gracefully?
                        const priceData = selectedPlan.prices[deviceCount];

                        if (!priceData) return null; // Don't show if price doesn't exist for this option

                        const isPopular = deviceCount === '2'; // Highlighting 2 devices as popular
                        const isBestValue = deviceCount === '5'; // Highlighting 5 devices as best value

                        return (
                            <Card
                                key={deviceCount}
                                className={`relative hover:scale-105 transition-all duration-500 animate-scale-in bg-[#1A1D29] border-white/10 shadow-lg hover:shadow-xl flex flex-col ${isPopular ? 'border-emerald-500 shadow-emerald-500/20 ring-1 ring-emerald-500' : ''
                                    } ${isBestValue ? 'border-green-500 shadow-green-500/20 ring-1 ring-green-500' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {isPopular && (
                                    <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 z-10">
                                        <span className="bg-emerald-500 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 shadow-lg animate-bounce-slow">
                                            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {isBestValue && (
                                    <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 z-10">
                                        <span className="bg-green-500 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 shadow-lg animate-bounce-slow">
                                            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                                            Best Value
                                        </span>
                                    </div>
                                )}

                                <CardHeader className="text-center pb-6 md:pb-8 pt-6 md:pt-8">
                                    <CardTitle className="text-lg md:text-xl font-bold mb-2 text-white uppercase tracking-wider">
                                        {deviceCount} Device{deviceCount !== '1' ? 's' : ''}
                                    </CardTitle>

                                    {/* Pricing with strikethrough */}
                                    <div className="mt-3 md:mt-4 space-y-2">
                                        <div className="text-4xl md:text-6xl font-extrabold text-emerald-500 transition-all duration-300">
                                            ${priceData.price.toFixed(2)}
                                        </div>
                                        {priceData.savings && (
                                            <>
                                                <div className="text-lg md:text-2xl text-slate-400 line-through">
                                                    ${priceData.originalPrice.toFixed(2)}
                                                </div>
                                                <div className="inline-block px-2 md:px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                                                    <span className="text-xs md:text-sm text-green-500 font-semibold">{priceData.savings}!</span>
                                                </div>
                                            </>
                                        )}
                                        {/* Fallback for 1 device with no savings tag to keep alignment/info */}
                                        {!priceData.savings && (
                                            <div className="text-sm text-slate-400 pt-2">
                                                Standard Price
                                            </div>
                                        )}
                                    </div>

                                    <CardDescription className="mt-2 text-xs md:text-sm">{selectedPlan.duration} Access</CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-3 md:space-y-4">
                                    {selectedPlan.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-2 md:gap-3 animate-fade-in"
                                            style={{ animationDelay: `${(index * 0.1) + (idx * 0.05)}s` }}
                                        >
                                            <Check className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-base font-medium text-slate-300">{feature}</span>
                                        </div>
                                    ))}
                                </CardContent>

                                <CardFooter className="pt-4 md:pt-6 flex-col gap-4">
                                    {/* Device Icons */}
                                    <div className="flex items-center justify-center gap-3 pb-2">
                                        <img src="/assets/devices.webp" alt="Supported Devices" className="h-8 w-auto opacity-80" />
                                    </div>

                                    <Button
                                        className="w-full group text-sm md:text-base font-bold"
                                        variant={isPopular || isBestValue ? 'default' : 'outline'}
                                        size="lg"
                                        onClick={() => handleOrderNow(deviceCount)}
                                    >
                                        <span className="group-hover:scale-110 transition-transform">Get Instant Access</span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>

                {/* Additional Info & Guarantee */}
                <div className="text-center mt-12 space-y-6 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                        <Check className="w-5 h-5 text-emerald-500" />
                        <span className="text-white font-semibold">7-Day Money-Back Guarantee</span>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm md:text-base text-muted-foreground">
                            All plans include instant activation, 24/7 support, and no commitments
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-3 flex-wrap justify-center">
                            Secure checkout powered by
                            <div className="flex items-center gap-3 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                                <img src="/images/558237.png" alt="Stripe" className="h-6 md:h-7" />
                                <img src="/images/558241.png" alt="Visa/Mastercard" className="h-6 md:h-7" />
                                <img src="/images/cashapp-logo.webp" alt="Cash App" className="h-6 md:h-7" />
                                <img src="/images/PayPal-Logo-Transparent.png" alt="PayPal" className="h-6 md:h-7" />
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
}
