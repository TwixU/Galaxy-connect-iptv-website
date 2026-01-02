const deviceTv = '/assets/device-tv.png';
const devicePhone = '/assets/device-phone.png';

export default function WhyChoose() {
    return (
        <section className="py-20 bg-[#0E1117]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Why Subscribe to <span className="text-emerald-600">Our Service</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Experience the ultimate streaming service with premium features
                    </p>
                </div>

                <div className="space-y-24">
                    {/* Feature 1 - Smart TV */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in-left">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
                                <img
                                    src={deviceTv}
                                    alt="Smart TV Streaming"
                                    className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 animate-slide-in-right">
                            <h3 className="text-3xl font-bold text-white">
                                Watch on <span className="text-emerald-600">Any Device</span>
                            </h3>
                            <p className="text-lg text-gray-300">
                                Stream seamlessly on Smart TVs, smartphones, tablets, computers, and more. Our service is compatible with all major platforms and devices.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Smart TV Apps (Samsung, LG, Android TV)',
                                    'Mobile Apps (iOS & Android)',
                                    'Web Browser Access',
                                    'Streaming Devices (Firestick, Roku, Apple TV)',
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-muted-foreground animate-fade-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2 - Mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-slide-in-left order-2 lg:order-1">
                            <h3 className="text-3xl font-bold text-white">
                                <span className="text-emerald-600">Premium Quality</span> Streaming
                            </h3>
                            <p className="text-lg text-gray-300">
                                Enjoy crystal-clear HD and 4K streaming with our advanced anti-buffering technology. Never miss a moment of your favorite content.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Full HD & 4K Resolution',
                                    'Anti-Freezing Technology',
                                    'Adaptive Bitrate Streaming',
                                    'Low Latency Live Streams',
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-gray-300 animate-fade-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="animate-slide-in-right order-1 lg:order-2">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
                                <img
                                    src={devicePhone}
                                    alt="Mobile Streaming"
                                    className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 mx-auto"
                                    style={{ maxWidth: '400px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
