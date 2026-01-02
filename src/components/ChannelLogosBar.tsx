export default function ChannelLogosBar() {
    const logos = [
        { name: 'BBC', src: '/images/bbc-r79bhj116o4cp2hu4c2wgqkaeqszdbw4j0iyqtk94y.webp' },
        { name: 'Android TV', src: '/images/android-tv.png' },
        { name: 'Aspire', src: '/images/aspire-r79bhi36zu32dgj79to9w8sttcxm5mse6vvh9jlnb6.webp' },
        { name: 'Catchy', src: '/images/catchy-r79bhkwpkc6xcaf3tcw5lq37lijpsq3l79txpdhgsi.webp' },
        { name: 'Discovery', src: '/images/discovery-r79bhlujr687nwdqnvas67uo6wf30f7bjehf6ng2ma.webp' },
        { name: 'Game Show', src: '/images/gameshow-r79bhmsdy09hzicdidpeqpm4saag84b1vj4wnxeog2.webp' },
        { name: 'HBO', src: '/images/hboo.webp' },
        { name: 'Hulu', src: '/images/huluu.webp' },
        { name: 'Law & Crime', src: '/images/lawcrime-r79bhplwiidcyc8a1wxag6wikfwjv7m8vx3d3rahxe.webp' },
        { name: 'Paramount', src: '/images/paramount-r79bhsff30h7x646lg565o6wcliniaxfwb1tjl6beq.webp' },
    ];

    return (
        <section className="py-12 bg-[#0E1117] border-y border-white/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                        Watch Your Favorite Channels
                    </p>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-6 md:gap-8 items-center justify-items-center">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="relative w-full aspect-square max-w-[120px] group"
                        >
                            {/* 10% Black Overlay - Reduced for better visibility */}
                            <div className="absolute inset-0 bg-black/10 rounded-xl z-10 pointer-events-none"></div>

                            {/* Logo Container */}
                            <div className="relative w-full h-full bg-[#1A1D29] rounded-xl border-2 border-white/10 shadow-md overflow-hidden group-hover:shadow-xl group-hover:border-emerald-300 transition-all duration-300">
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="w-full h-full object-contain p-3"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
