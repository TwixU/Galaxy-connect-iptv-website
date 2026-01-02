import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export default function LiveViewersCounter() {
    const [viewers, setViewers] = useState(87);

    useEffect(() => {
        // Simulate live viewer count changes
        const interval = setInterval(() => {
            setViewers(prev => {
                // Random change between -2 and +4
                const change = Math.floor(Math.random() * 7) - 2;
                const newCount = prev + change;
                // Keep between 65 and 150 (more realistic)
                return Math.max(65, Math.min(150, newCount));
            });
        }, 8000); // Update every 8 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full backdrop-blur-sm">
            <div className="relative">
                <Eye className="w-4 h-4 text-red-500" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            </div>
            <span className="text-sm font-semibold text-red-600">
                <span className="font-mono">{viewers}</span> people viewing this offer
            </span>
        </div>
    );
}
