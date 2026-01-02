import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Tv, Smartphone, Monitor, Check, Download, Settings, Play } from 'lucide-react';

export default function Setup() {
    const [selectedDevice, setSelectedDevice] = useState<'firetv' | 'android' | 'smarttv'>('firetv');

    const devices = [
        {
            id: 'firetv' as const,
            name: 'Fire TV / Fire Stick',
            icon: Tv,
            color: 'from-orange-500 to-red-500',
            steps: [
                {
                    number: 1,
                    title: 'Enable Apps from Unknown Sources',
                    description: 'Go to Settings > My Fire TV > Developer Options > Apps from Unknown Sources and turn it ON',
                    icon: Settings,
                },
                {
                    number: 2,
                    title: 'Download Downloader App',
                    description: 'Search for "Downloader" in the Amazon App Store and install it',
                    icon: Download,
                },
                {
                    number: 3,
                    title: 'Enter IPTV App URL',
                    description: 'Open Downloader, enter the URL we provided via WhatsApp, and download the IPTV app',
                    icon: Download,
                },
                {
                    number: 4,
                    title: 'Install the App',
                    description: 'Once downloaded, click Install and wait for the installation to complete',
                    icon: Settings,
                },
                {
                    number: 5,
                    title: 'Enter Your Credentials',
                    description: 'Open the IPTV app and enter your username and password (sent via WhatsApp)',
                    icon: Play,
                },
                {
                    number: 6,
                    title: 'Start Watching!',
                    description: 'Browse channels and enjoy 17,000+ live channels in 4K/HD quality',
                    icon: Check,
                },
            ],
        },
        {
            id: 'android' as const,
            name: 'Android Phone / Tablet',
            icon: Smartphone,
            color: 'from-green-500 to-emerald-500',
            steps: [
                {
                    number: 1,
                    title: 'Enable Unknown Sources',
                    description: 'Go to Settings > Security > Unknown Sources and enable it',
                    icon: Settings,
                },
                {
                    number: 2,
                    title: 'Download IPTV App',
                    description: 'Click the download link we sent you via WhatsApp to download the APK file',
                    icon: Download,
                },
                {
                    number: 3,
                    title: 'Install the App',
                    description: 'Open the downloaded APK file and tap Install',
                    icon: Settings,
                },
                {
                    number: 4,
                    title: 'Enter Your Credentials',
                    description: 'Open the app and enter your username and password',
                    icon: Play,
                },
                {
                    number: 5,
                    title: 'Start Streaming!',
                    description: 'Browse and watch 17,000+ channels on your mobile device',
                    icon: Check,
                },
            ],
        },
        {
            id: 'smarttv' as const,
            name: 'Smart TV (Samsung, LG, etc.)',
            icon: Monitor,
            color: 'from-blue-500 to-purple-500',
            steps: [
                {
                    number: 1,
                    title: 'Check Your TV Model',
                    description: 'Ensure your Smart TV runs Android TV, webOS, or Tizen OS',
                    icon: Settings,
                },
                {
                    number: 2,
                    title: 'Install from App Store',
                    description: 'Search for the IPTV app in your TV\'s app store (LG Content Store, Samsung Apps, etc.)',
                    icon: Download,
                },
                {
                    number: 3,
                    title: 'Alternative: Use Downloader',
                    description: 'If not available in store, install "Downloader" app and use the URL we provided',
                    icon: Download,
                },
                {
                    number: 4,
                    title: 'Enter Your Credentials',
                    description: 'Open the IPTV app and log in with your username and password',
                    icon: Play,
                },
                {
                    number: 5,
                    title: 'Enjoy on Big Screen!',
                    description: 'Watch 17,000+ channels in stunning 4K/HD on your Smart TV',
                    icon: Check,
                },
            ],
        },
    ];

    const currentDevice = devices.find(d => d.id === selectedDevice) || devices[0];
    const Icon = currentDevice.icon;

    return (
        <div className="min-h-screen bg-[#080c17] text-white">
            <Navigation />

            {/* Hero Section */}
            <div className="pt-32 pb-16 bg-gradient-to-b from-[#080c17] to-emerald-950/20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        <span className="text-emerald-400">Setup Guides</span> - Get Started in Minutes
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Follow our step-by-step guides to install Galaxy Connect on your device
                    </p>
                </div>
            </div>

            {/* Device Selection */}
            <div className="py-12 bg-[#080c17]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {devices.map((device) => {
                            const DeviceIcon = device.icon;
                            const isSelected = selectedDevice === device.id;
                            return (
                                <button
                                    key={device.id}
                                    onClick={() => setSelectedDevice(device.id)}
                                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${isSelected
                                            ? 'border-emerald-500 bg-emerald-500/10 scale-105 shadow-xl shadow-emerald-500/20'
                                            : 'border-white/10 bg-slate-900/50 hover:border-emerald-500/50 hover:bg-slate-800/50'
                                        }`}
                                >
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${device.color} flex items-center justify-center`}>
                                        <DeviceIcon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{device.name}</h3>
                                    <p className="text-sm text-slate-400">
                                        {device.steps.length} easy steps
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Step-by-Step Guide */}
            <div className="py-16 bg-gradient-to-b from-[#080c17] to-slate-900/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Device Header */}
                        <div className="mb-12 text-center">
                            <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${currentDevice.color} flex items-center justify-center`}>
                                <Icon className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                {currentDevice.name}
                            </h2>
                            <p className="text-slate-400">
                                Follow these {currentDevice.steps.length} simple steps to get started
                            </p>
                        </div>

                        {/* Steps */}
                        <div className="space-y-6">
                            {currentDevice.steps.map((step, index) => {
                                const StepIcon = step.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="flex items-start gap-4 md:gap-6">
                                            {/* Step Number */}
                                            <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${currentDevice.color} flex items-center justify-center`}>
                                                <span className="text-xl md:text-2xl font-bold text-white">
                                                    {step.number}
                                                </span>
                                            </div>

                                            {/* Step Content */}
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <StepIcon className="w-5 h-5 text-emerald-400" />
                                                    <h3 className="text-xl md:text-2xl font-bold text-white">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>

                                            {/* Check Icon for completed look */}
                                            <div className="flex-shrink-0 hidden md:block">
                                                <div className="w-8 h-8 rounded-full border-2 border-slate-600 flex items-center justify-center">
                                                    <Check className="w-5 h-5 text-slate-600" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Help Section */}
                        <div className="mt-12 p-8 bg-gradient-to-r from-emerald-900/20 via-blue-900/10 to-emerald-900/20 rounded-2xl border border-emerald-500/30">
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">
                                Need Help?
                            </h3>
                            <p className="text-slate-300 text-center mb-6">
                                Our support team is available 24/7 to assist you with the installation
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    onClick={() => window.open('https://wa.me/33745889674?text=Hello! I need help with the setup.', '_blank')}
                                    className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold"
                                >
                                    Contact Support on WhatsApp
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => window.location.href = '/'}
                                    className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                                >
                                    Back to Home
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
