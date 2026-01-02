export default function DeviceShowcase() {
    return (
        <section className="py-16 bg-[#0E1117]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Available on <span className="text-orange-600">All Your Devices</span>
                        </h2>
                        <p className="text-gray-300 text-lg">
                            Stream on any device, anytime, anywhere
                        </p>
                    </div>

                    {/* Devices Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {/* Fire Stick */}
                        <div className="bg-slate-50 border border-white/10 rounded-xl p-6 hover:border-orange-500 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center">
                            <img
                                src="/assets/firestick.webp"
                                alt="Amazon Fire Stick"
                                className="h-16 w-auto mb-3 object-contain"
                            />
                            <p className="text-sm text-gray-200 text-center font-medium">Fire Stick</p>
                        </div>

                        {/* Fire Cube */}
                        <div className="bg-slate-50 border border-white/10 rounded-xl p-6 hover:border-orange-500 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center">
                            <img
                                src="/assets/firecube.webp"
                                alt="Amazon Fire Cube"
                                className="h-16 w-auto mb-3 object-contain"
                            />
                            <p className="text-sm text-gray-200 text-center font-medium">Fire Cube</p>
                        </div>

                        {/* Android TV */}
                        <div className="bg-slate-50 border border-white/10 rounded-xl p-6 hover:border-orange-500 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center">
                            <img
                                src="/assets/android-tv.png"
                                alt="Android TV"
                                className="h-16 w-auto mb-3 object-contain"
                            />
                            <p className="text-sm text-gray-200 text-center font-medium">Android TV</p>
                        </div>

                        {/* Smart TV */}
                        <div className="bg-slate-50 border border-white/10 rounded-xl p-6 hover:border-orange-500 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center">
                            <svg className="w-16 h-16 text-orange-600 mb-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
                            </svg>
                            <p className="text-sm text-gray-200 text-center font-medium">Smart TV</p>
                        </div>
                    </div>

                    {/* All Devices Image */}
                    <div className="text-center">
                        <img
                            src="/assets/devices.webp"
                            alt="Compatible Devices"
                            className="mx-auto max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
