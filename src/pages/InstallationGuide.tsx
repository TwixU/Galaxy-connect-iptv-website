import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smartphone, Tv, Monitor, Apple, Settings } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function InstallationGuide() {
    return (
        <div className="min-h-screen bg-[#080c17] text-white">
            <Navigation />
            <div className="pt-24 pb-20">
                <div className="container mx-auto px-4">

                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Installation <span className="text-emerald-400">Guide</span>
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Follow our step-by-step tutorials to set up GALAXY CONNECT on your favorite device.
                            We support all major platforms including Android, iOS, Smart TVs, and FireStick.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-5xl mx-auto">
                        <Tabs defaultValue="android" className="w-full">

                            {/* Device Tabs */}
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto gap-2 bg-transparent p-0 mb-8">
                                <TabsTrigger value="android" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white bg-slate-900/50 text-slate-400 border border-white/5 h-24 flex flex-col gap-2 rounded-xl hover:bg-slate-800 transition-all">
                                    <Smartphone className="w-6 h-6" />
                                    <span className="text-xs">Android</span>
                                </TabsTrigger>
                                <TabsTrigger value="samsung" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white bg-slate-900/50 text-slate-400 border border-white/5 h-24 flex flex-col gap-2 rounded-xl hover:bg-slate-800 transition-all">
                                    <Tv className="w-6 h-6" />
                                    <span className="text-xs">Samsung TV</span>
                                </TabsTrigger>
                                <TabsTrigger value="firestick" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white bg-slate-900/50 text-slate-400 border border-white/5 h-24 flex flex-col gap-2 rounded-xl hover:bg-slate-800 transition-all">
                                    <Tv className="w-6 h-6" />
                                    <span className="text-xs">FireStick</span>
                                </TabsTrigger>
                                <TabsTrigger value="androidtv" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white bg-slate-900/50 text-slate-400 border border-white/5 h-24 flex flex-col gap-2 rounded-xl hover:bg-slate-800 transition-all">
                                    <Tv className="w-6 h-6" />
                                    <span className="text-xs">Android TV</span>
                                </TabsTrigger>
                                <TabsTrigger value="lgtv" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white bg-slate-900/50 text-slate-400 border border-white/5 h-24 flex flex-col gap-2 rounded-xl hover:bg-slate-800 transition-all">
                                    <Tv className="w-6 h-6" />
                                    <span className="text-xs">LG TV</span>
                                </TabsTrigger>
                                <TabsTrigger value="mag" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white bg-slate-900/50 text-slate-400 border border-white/5 h-24 flex flex-col gap-2 rounded-xl hover:bg-slate-800 transition-all">
                                    <Settings className="w-6 h-6" />
                                    <span className="text-xs">MAG / STB</span>
                                </TabsTrigger>
                                <TabsTrigger value="windows" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white bg-slate-900/50 text-slate-400 border border-white/5 h-24 flex flex-col gap-2 rounded-xl hover:bg-slate-800 transition-all">
                                    <Monitor className="w-6 h-6" />
                                    <span className="text-xs">Windows/Mac</span>
                                </TabsTrigger>
                                <TabsTrigger value="ios" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white bg-slate-900/50 text-slate-400 border border-white/5 h-24 flex flex-col gap-2 rounded-xl hover:bg-slate-800 transition-all">
                                    <Apple className="w-6 h-6" />
                                    <span className="text-xs">iOS</span>
                                </TabsTrigger>
                            </TabsList>

                            {/* Content Area */}
                            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-sm">

                                {/* Android */}
                                <TabsContent value="android" className="mt-0 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Smartphone className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Setup Guide for Android</h2>
                                    </div>
                                    <ol className="space-y-4 text-slate-300 list-decimal list-inside">
                                        <li className="pl-2"><span className="text-white font-semibold">Download App:</span> Download <a href="https://www.streamingapp.example.com/smarters.apk" target="_blank" className="text-emerald-400 hover:underline">Streaming App App</a>.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Open & Accept:</span> Open the application and accept the "License Agreement".</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Select API:</span> Choose "Xtream Codes API" (XC Codes API).</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Enter Details:</span> Enter your Playlist Details (Username, Password, and Host URL) sent to your email.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Add User:</span> Click on "ADD USER".</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Enjoy:</span> Select the category you want to watch and enjoy!</li>
                                    </ol>
                                </TabsContent>

                                {/* Samsung TV */}
                                <TabsContent value="samsung" className="mt-0 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Tv className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Setup Guide for Samsung TV</h2>
                                    </div>
                                    <ol className="space-y-4 text-slate-300 list-decimal list-inside">
                                        <li className="pl-2"><span className="text-white font-semibold">Apps Menu:</span> Press the Home button on your remote, then navigate to Apps.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Search:</span> Select the Search icon and type "Streaming App Pro".</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Install:</span> Install the app and open it.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Login:</span> Choose "Xtream Codes API".</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Enter Details:</span> Input your Username, Password, and Server URL.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Add User:</span> Click "ADD USER" to start watching.</li>
                                    </ol>
                                </TabsContent>

                                {/* FireStick */}
                                <TabsContent value="firestick" className="mt-0 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Tv className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Setup Guide for FireStick</h2>
                                    </div>
                                    <ol className="space-y-4 text-slate-300 list-decimal list-inside">
                                        <li className="pl-2"><span className="text-white font-semibold">Get Downloader:</span> Go to Find &gt; Search, type "Downloader", and install it.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Enable Sideloading:</span> Go to Settings &gt; My Fire TV &gt; Developer Options &gt; Install Unknown Apps &gt; Turn ON for Downloader.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Open Downloader:</span> Launch the app and allow permissions.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Enter URL:</span> Type <code>https://www.streamingapp.example.com/smarters.apk</code> and click Go.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Install & Open:</span> Click Install, then Open the app.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Login:</span> Select "Xtream Codes API", enter your details, and click "ADD USER".</li>
                                    </ol>
                                </TabsContent>

                                {/* Android TV */}
                                <TabsContent value="androidtv" className="mt-0 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Tv className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Setup Guide for Android TV</h2>
                                    </div>
                                    <ol className="space-y-4 text-slate-300 list-decimal list-inside">
                                        <li className="pl-2"><span className="text-white font-semibold">Play Store:</span> Open Google Play Store on your TV.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Search Downloader:</span> Search for "Downloader" and install it.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Enter URL:</span> Open Downloader and type <code>https://www.streamingapp.example.com/smarters.apk</code>.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Install:</span> Download and install the APK.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Setup:</span> Open the app, accept the agreement, and choose "Xtream Codes API".</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Login:</span> Enter your subscription details and click "ADD USER".</li>
                                    </ol>
                                </TabsContent>

                                {/* LG TV */}
                                <TabsContent value="lgtv" className="mt-0 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Tv className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Setup Guide for LG TV</h2>
                                    </div>
                                    <ol className="space-y-4 text-slate-300 list-decimal list-inside">
                                        <li className="pl-2"><span className="text-white font-semibold">Content Store:</span> Press Home and go to LG Content Store.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Search:</span> Search for "Streaming App Pro".</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Install:</span> Install and open the application.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Login:</span> Choose "Xtream Codes API".</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Enter Details:</span> Input your Username, Password, and Server URL.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Enjoy:</span> Click "ADD USER" and start watching.</li>
                                    </ol>
                                </TabsContent>

                                {/* MAG / STB */}
                                <TabsContent value="mag" className="mt-0 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Settings className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Setup Guide for MAG / STB</h2>
                                    </div>
                                    <ol className="space-y-4 text-slate-300 list-decimal list-inside">
                                        <li className="pl-2"><span className="text-white font-semibold">Send MAC:</span> Send us your device's MAC Address via WhatsApp after payment.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Get Portal:</span> We will send you the Portal URL.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Settings:</span> Go to System Settings &gt; Servers &gt; Portals.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Configure:</span> Enter a name (e.g., Galaxy) and the Portal URL we provided.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Restart:</span> Go back to System Settings and select "Restart Portal".</li>
                                    </ol>
                                </TabsContent>

                                {/* Windows / Mac */}
                                <TabsContent value="windows" className="mt-0 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Monitor className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Setup Guide for Windows / Mac</h2>
                                    </div>
                                    <ol className="space-y-4 text-slate-300 list-decimal list-inside">
                                        <li className="pl-2">
                                            <span className="text-white font-semibold">Download:</span> Get the app for
                                            <a href="https://www.streamingapp.example.com/download?download=windows_app" target="_blank" className="text-emerald-400 hover:underline ml-1">Windows</a> or
                                            <a href="https://www.streamingapp.example.com/download?download=mac" target="_blank" className="text-emerald-400 hover:underline ml-1">Mac</a>.
                                        </li>
                                        <li className="pl-2"><span className="text-white font-semibold">Install:</span> Run the installer and open the app.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Login:</span> Select "Xtream Codes API".</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Enter Details:</span> Input your Username, Password, and Host URL.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Watch:</span> Click "ADD USER" and wait for the playlist to load.</li>
                                    </ol>
                                </TabsContent>

                                {/* iOS */}
                                <TabsContent value="ios" className="mt-0 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Apple className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Setup Guide for iOS</h2>
                                    </div>
                                    <ol className="space-y-4 text-slate-300 list-decimal list-inside">
                                        <li className="pl-2"><span className="text-white font-semibold">Download:</span> Install <a href="https://apps.apple.com/in/app/smarters-player-lite/id1628995509" target="_blank" className="text-emerald-400 hover:underline">Smarters Player Lite</a> from the App Store.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Open:</span> Launch the app and accept the license.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Login:</span> Choose "Xtream Codes API".</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Enter Details:</span> Fill in your Username, Password, and Host URL.</li>
                                        <li className="pl-2"><span className="text-white font-semibold">Enjoy:</span> Click "ADD USER" and start streaming.</li>
                                    </ol>
                                </TabsContent>

                            </div>
                        </Tabs>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center">
                        <div className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 border border-emerald-500/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 blur-3xl -z-10"></div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Start Watching?</h2>
                            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                                Get instant access to over Thousands of channels and VOD content.
                                Setup is easy, and our support team is here to help 24/7.
                            </p>
                            <Button
                                size="lg"
                                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
                                onClick={() => window.location.href = '/#pricing'}
                            >
                                Get Your Subscription Now
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
