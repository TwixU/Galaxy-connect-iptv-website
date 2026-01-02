import { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface Notification {
    id: number;
    name: string;
    location: string;
    plan: string;
    timeAgo: string;
}

const notifications: Notification[] = [
    { id: 1, name: "Michael R.", location: "New York", plan: "12 Month Plan", timeAgo: "3 minutes ago" },
    { id: 2, name: "Sarah L.", location: "Los Angeles", plan: "6 Month Plan", timeAgo: "8 minutes ago" },
    { id: 3, name: "James K.", location: "Chicago", plan: "3 Month Plan", timeAgo: "12 minutes ago" },
    { id: 4, name: "Emma W.", location: "Houston", plan: "12 Month Plan", timeAgo: "18 minutes ago" },
    { id: 5, name: "David M.", location: "Phoenix", plan: "6 Month Plan", timeAgo: "25 minutes ago" },
    { id: 6, name: "Lisa T.", location: "Philadelphia", plan: "3 Month Plan", timeAgo: "32 minutes ago" },
    { id: 7, name: "Robert B.", location: "San Antonio", plan: "12 Month Plan", timeAgo: "41 minutes ago" },
    { id: 8, name: "Jennifer S.", location: "San Diego", plan: "6 Month Plan", timeAgo: "48 minutes ago" }
];

export default function SocialProofWidget() {
    const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const showNotification = () => {
            setCurrentNotification(notifications[currentIndex]);
            setIsVisible(true);

            // Hide after 6 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 6000);

            // Move to next notification
            setCurrentIndex((prev) => (prev + 1) % notifications.length);
        };

        // Show first notification after 8 seconds (give user time to see the page)
        const initialTimeout = setTimeout(showNotification, 8000);

        // Then show every 25 seconds
        const interval = setInterval(showNotification, 25000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, [currentIndex]);

    if (!isVisible || !currentNotification) return null;

    return (
        <div className="fixed bottom-6 left-6 z-40 animate-slide-in-left">
            <div className="bg-[#1A1D29] rounded-lg shadow-2xl border border-emerald-500/20 p-4 max-w-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">
                        {currentNotification.name} from {currentNotification.location}
                    </p>
                    <p className="text-xs text-gray-300">
                        just purchased the <span className="font-semibold text-emerald-600">{currentNotification.plan}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                        {currentNotification.timeAgo}
                    </p>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="text-slate-400 hover:text-gray-300 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
