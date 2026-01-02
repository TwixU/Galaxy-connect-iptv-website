import { Smartphone, Tv, Monitor, Cast } from 'lucide-react';

export default function DeviceCompatibility() {
    const devices = [
        { icon: Tv, name: 'Fire TV' },
        { icon: Monitor, name: 'Apple TV' },
        { icon: Tv, name: 'Smart TV' },
        { icon: Smartphone, name: 'Android' },
        { icon: Smartphone, name: 'iOS' },
        { icon: Cast, name: 'Chromecast' },
    ];

    return (
        <section className="py-8 bg-[#0E1117] border-y border-white/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                        Works on All Your Favorite Devices
                    </h3>
                    <p className="text-sm text-gray-400">
                        Stream anywhere, anytime on any device
                    </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-4xl mx-auto">
                    {devices.map((device, index) => {
                        const Icon = device.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <Icon className="w-8 h-8 text-emerald-400" />
                                <span className="text-xs text-gray-300 font-medium text-center">
                                    {device.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
