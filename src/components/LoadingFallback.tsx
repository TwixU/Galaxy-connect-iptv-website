

export default function LoadingFallback() {
    return (
        <div className="min-h-screen bg-[#0E1117] flex flex-col items-center justify-center p-4">
            <div className="relative w-24 h-24 mb-6">
                {/* Outer spinning ring */}
                <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin"></div>

                {/* Inner pulsing logo shape */}
                <div className="absolute inset-4 bg-emerald-500/10 rounded-full animate-pulse-slow"></div>
            </div>
            <h2 className="text-xl font-bold text-white mb-2 animate-pulse">Loading Galaxy Connect</h2>
            <p className="text-slate-400 text-sm">Preparing your premium experience...</p>
        </div>
    );
}
