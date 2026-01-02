import { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart, Zap, Megaphone } from 'lucide-react';

interface CookiePreferences {
    necessary: boolean;
    functional: boolean;
    analytical: boolean;
    performance: boolean;
    advertisement: boolean;
}

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true, // Always true
        functional: false,
        analytical: false,
        performance: false,
        advertisement: false,
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Show banner after a short delay for better UX
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted: CookiePreferences = {
            necessary: true,
            functional: true,
            analytical: true,
            performance: true,
            advertisement: true,
        };
        savePreferences(allAccepted);
    };

    const handleRejectAll = () => {
        const onlyNecessary: CookiePreferences = {
            necessary: true,
            functional: false,
            analytical: false,
            performance: false,
            advertisement: false,
        };
        savePreferences(onlyNecessary);
    };

    const handleSavePreferences = () => {
        savePreferences(preferences);
    };

    const savePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem('cookieConsent', JSON.stringify(prefs));
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        setShowBanner(false);

        // Apply preferences (load/unload scripts based on consent)
        applyPreferences(prefs);
    };

    const applyPreferences = (prefs: CookiePreferences) => {
        // Here you would enable/disable third-party scripts based on preferences
        // For example, Google Analytics, Facebook Pixel, etc.

        if (prefs.analytical) {
            // Enable Google Analytics
            console.log('Analytics enabled');
        }

        if (prefs.advertisement) {
            // Enable advertising cookies
            console.log('Advertisement cookies enabled');
        }

        // Crisp is functional, so check that
        if (!prefs.functional) {
            // Optionally disable Crisp if functional cookies are rejected
            console.log('Functional cookies disabled');
        }
    };

    const togglePreference = (key: keyof CookiePreferences) => {
        if (key === 'necessary') return; // Can't disable necessary cookies
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    if (!showBanner) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-end justify-center pointer-events-none animate-in fade-in duration-300">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-md pointer-events-auto animate-in fade-in duration-300"
                onClick={handleRejectAll}
            />

            {/* Cookie Banner - Scrollable on mobile */}
            <div className="relative w-full max-w-5xl mx-4 mb-4 md:mb-6 pointer-events-auto animate-in slide-in-from-bottom duration-500 max-h-[90vh] overflow-y-auto">
                <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden">
                    {/* Animated gradient border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />

                    <div className="p-4 md:p-8">
                        {/* Compact Header */}
                        <div className="flex items-center justify-between mb-4 md:mb-5">
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ring-2 ring-blue-500/30">
                                    <Cookie className="w-5 h-5 md:w-7 md:h-7 text-blue-400" />
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-3xl font-bold text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                        Cookie Settings
                                    </h2>
                                    <p className="text-xs md:text-sm text-slate-400">We value your privacy</p>
                                </div>
                            </div>
                            <button
                                onClick={handleRejectAll}
                                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-200 flex items-center justify-center"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Compact Description */}
                        <p className="text-slate-300 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                            We use cookies to enhance your experience and analyze site traffic.
                            {!showDetails && ' Click "Customize" to manage your preferences.'}
                        </p>

                        {/* Cookie Categories - Compact Grid */}
                        {showDetails && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 mb-4 md:mb-6 animate-in slide-in-from-top duration-300">
                                {/* Necessary */}
                                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-3 md:p-4 hover:border-green-500/50 transition-all">
                                    <div className="flex items-center justify-between mb-1.5 md:mb-2">
                                        <div className="flex items-center gap-2">
                                            <Shield className="w-5 h-5 text-green-400" />
                                            <h3 className="font-bold text-white">Necessary</h3>
                                        </div>
                                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-semibold">
                                            Always On
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-400">
                                        Essential for site functionality and security.
                                    </p>
                                </div>

                                {/* Functional */}
                                <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/30 rounded-xl p-4 hover:border-blue-500/50 transition-all">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <Cookie className="w-5 h-5 text-blue-400" />
                                            <h3 className="font-bold text-white">Functional</h3>
                                        </div>
                                        <button
                                            onClick={() => togglePreference('functional')}
                                            className={`w-11 h-6 rounded-full transition-all duration-300 ${preferences.functional
                                                ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                                                : 'bg-slate-600'
                                                } flex items-center ${preferences.functional ? 'justify-end' : 'justify-start'} px-1`}
                                        >
                                            <div className="w-4 h-4 bg-[#1A1D29] rounded-full shadow-md" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-slate-400">
                                        Live chat, social sharing, and enhanced features.
                                    </p>
                                </div>

                                {/* Analytical */}
                                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-4 hover:border-purple-500/50 transition-all">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <BarChart className="w-5 h-5 text-purple-400" />
                                            <h3 className="font-bold text-white">Analytical</h3>
                                        </div>
                                        <button
                                            onClick={() => togglePreference('analytical')}
                                            className={`w-11 h-6 rounded-full transition-all duration-300 ${preferences.analytical
                                                ? 'bg-purple-500 shadow-lg shadow-purple-500/50'
                                                : 'bg-slate-600'
                                                } flex items-center ${preferences.analytical ? 'justify-end' : 'justify-start'} px-1`}
                                        >
                                            <div className="w-4 h-4 bg-[#1A1D29] rounded-full shadow-md" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-slate-400">
                                        Help us understand visitor behavior and traffic.
                                    </p>
                                </div>

                                {/* Performance */}
                                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-4 hover:border-yellow-500/50 transition-all">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <Zap className="w-5 h-5 text-yellow-400" />
                                            <h3 className="font-bold text-white">Performance</h3>
                                        </div>
                                        <button
                                            onClick={() => togglePreference('performance')}
                                            className={`w-11 h-6 rounded-full transition-all duration-300 ${preferences.performance
                                                ? 'bg-yellow-500 shadow-lg shadow-yellow-500/50'
                                                : 'bg-slate-600'
                                                } flex items-center ${preferences.performance ? 'justify-end' : 'justify-start'} px-1`}
                                        >
                                            <div className="w-4 h-4 bg-[#1A1D29] rounded-full shadow-md" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-slate-400">
                                        Optimize site speed and user experience.
                                    </p>
                                </div>

                                {/* Advertisement - Full Width */}
                                <div className="md:col-span-2 bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-xl p-4 hover:border-pink-500/50 transition-all">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <Megaphone className="w-5 h-5 text-pink-400" />
                                            <h3 className="font-bold text-white">Advertisement</h3>
                                        </div>
                                        <button
                                            onClick={() => togglePreference('advertisement')}
                                            className={`w-11 h-6 rounded-full transition-all duration-300 ${preferences.advertisement
                                                ? 'bg-pink-500 shadow-lg shadow-pink-500/50'
                                                : 'bg-slate-600'
                                                } flex items-center ${preferences.advertisement ? 'justify-end' : 'justify-start'} px-1`}
                                        >
                                            <div className="w-4 h-4 bg-[#1A1D29] rounded-full shadow-md" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-slate-400">
                                        Personalized ads based on your interests and browsing history.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Action Buttons - Improved Layout */}
                        <div className="flex flex-col sm:flex-row gap-2.5">
                            <button
                                onClick={handleAcceptAll}
                                className="flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
                            >
                                ✓ Accept All
                            </button>

                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="flex-1 px-6 py-3.5 bg-slate-700/80 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 border border-slate-600"
                            >
                                {showDetails ? '← Back' : '⚙️ Customize'}
                            </button>

                            <button
                                onClick={handleRejectAll}
                                className="flex-1 px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 border border-slate-700"
                            >
                                ✕ Reject All
                            </button>
                        </div>

                        {/* Save Button (when customizing) */}
                        {showDetails && (
                            <button
                                onClick={handleSavePreferences}
                                className="w-full mt-3 px-6 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/30 active:scale-95 animate-in slide-in-from-bottom duration-300"
                            >
                                💾 Save My Preferences
                            </button>
                        )}

                        {/* Privacy Link - Compact */}
                        <p className="text-center text-xs text-slate-500 mt-4">
                            <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">
                                Privacy Policy
                            </a>
                            {' • '}
                            You can change these settings anytime
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
