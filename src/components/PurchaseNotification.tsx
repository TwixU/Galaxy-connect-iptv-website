import { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface Notification {
    id: number;
    name: string;
    location: string;
    plan: string;
}

export default function PurchaseNotification() {
    const [notification, setNotification] = useState<Notification | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const firstNames = [
        'John', 'Michael', 'David', 'James', 'Robert', 'William', 'Richard', 'Thomas',
        'Sarah', 'Jennifer', 'Emily', 'Jessica', 'Ashley', 'Amanda', 'Melissa', 'Nicole',
        'Daniel', 'Matthew', 'Andrew', 'Christopher', 'Joshua', 'Ryan', 'Brandon', 'Tyler'
    ];

    const locations = [
        // USA Cities
        { city: 'New York', country: '🇺🇸 USA' },
        { city: 'Los Angeles', country: '🇺🇸 USA' },
        { city: 'Chicago', country: '🇺🇸 USA' },
        { city: 'Houston', country: '🇺🇸 USA' },
        { city: 'Phoenix', country: '🇺🇸 USA' },
        { city: 'Philadelphia', country: '🇺🇸 USA' },
        { city: 'San Antonio', country: '🇺🇸 USA' },
        { city: 'San Diego', country: '🇺🇸 USA' },
        { city: 'Dallas', country: '🇺🇸 USA' },
        { city: 'San Jose', country: '🇺🇸 USA' },
        { city: 'Austin', country: '🇺🇸 USA' },
        { city: 'Jacksonville', country: '🇺🇸 USA' },
        { city: 'Fort Worth', country: '🇺🇸 USA' },
        { city: 'Columbus', country: '🇺🇸 USA' },
        { city: 'Charlotte', country: '🇺🇸 USA' },
        { city: 'San Francisco', country: '🇺🇸 USA' },
        { city: 'Indianapolis', country: '🇺🇸 USA' },
        { city: 'Seattle', country: '🇺🇸 USA' },
        { city: 'Denver', country: '🇺🇸 USA' },
        { city: 'Boston', country: '🇺🇸 USA' },
        { city: 'Nashville', country: '🇺🇸 USA' },
        { city: 'Detroit', country: '🇺🇸 USA' },
        { city: 'Portland', country: '🇺🇸 USA' },
        { city: 'Las Vegas', country: '🇺🇸 USA' },
        { city: 'Memphis', country: '🇺🇸 USA' },
        { city: 'Louisville', country: '🇺🇸 USA' },
        { city: 'Baltimore', country: '🇺🇸 USA' },
        { city: 'Milwaukee', country: '🇺🇸 USA' },
        { city: 'Atlanta', country: '🇺🇸 USA' },
        { city: 'Miami', country: '🇺🇸 USA' },
        // Canada Cities
        { city: 'Toronto', country: '🇨🇦 Canada' },
        { city: 'Montreal', country: '🇨🇦 Canada' },
        { city: 'Vancouver', country: '🇨🇦 Canada' },
        { city: 'Calgary', country: '🇨🇦 Canada' },
        { city: 'Edmonton', country: '🇨🇦 Canada' },
        { city: 'Ottawa', country: '🇨🇦 Canada' },
        { city: 'Winnipeg', country: '🇨🇦 Canada' },
        { city: 'Quebec City', country: '🇨🇦 Canada' },
        { city: 'Hamilton', country: '🇨🇦 Canada' },
        { city: 'Victoria', country: '🇨🇦 Canada' },
        { city: 'Halifax', country: '🇨🇦 Canada' },
        { city: 'Windsor', country: '🇨🇦 Canada' },
        // UK Cities
        { city: 'London', country: '🇬🇧 UK' },
        { city: 'Birmingham', country: '🇬🇧 UK' },
        { city: 'Manchester', country: '🇬🇧 UK' },
        { city: 'Glasgow', country: '🇬🇧 UK' },
        { city: 'Liverpool', country: '🇬🇧 UK' },
        { city: 'Leeds', country: '🇬🇧 UK' },
        { city: 'Sheffield', country: '🇬🇧 UK' },
        { city: 'Edinburgh', country: '🇬🇧 UK' },
        { city: 'Bristol', country: '🇬🇧 UK' },
        { city: 'Cardiff', country: '🇬🇧 UK' },
        { city: 'Belfast', country: '🇬🇧 UK' },
        { city: 'Leicester', country: '🇬🇧 UK' },
        { city: 'Nottingham', country: '🇬🇧 UK' },
        { city: 'Newcastle', country: '🇬🇧 UK' },
        { city: 'Brighton', country: '🇬🇧 UK' },
    ];

    const plans = [
        '1 Month Plan',
        '3 Months Plan',
        '6 Months Plan',
        '1 Year Plan'
    ];

    const getRandomItem = <T,>(array: T[]): T => {
        return array[Math.floor(Math.random() * array.length)];
    };

    const generateNotification = (): Notification => {
        const location = getRandomItem(locations);
        return {
            id: Date.now(),
            name: getRandomItem(firstNames),
            location: `${location.city}, ${location.country}`,
            plan: getRandomItem(plans)
        };
    };

    useEffect(() => {
        const showNotification = () => {
            const newNotification = generateNotification();
            setNotification(newNotification);
            setIsVisible(true);

            // Auto-hide after 25 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 25000);
        };

        // Show first notification after 3 seconds
        const initialTimeout = setTimeout(showNotification, 3000);

        // Then show every 25 seconds
        const interval = setInterval(showNotification, 25000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!notification) return null;

    return (
        <div
            className={`fixed bottom-6 left-6 z-50 transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
        >
            <div className="bg-white backdrop-blur-md text-white rounded-xl shadow-2xl p-4 pr-12 max-w-sm border border-white/10 animate-slide-in">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-slate-400 hover:text-gray-300 transition-colors"
                    aria-label="Close notification"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm mb-1 text-white">New Purchase! 🎉</p>
                        <p className="text-xs text-gray-300 mb-1">
                            <span className="font-medium text-white">{notification.name}</span> from{' '}
                            <span className="font-medium text-white">{notification.location}</span>
                        </p>
                        <p className="text-xs text-slate-500">
                            Just purchased: <span className="font-semibold text-emerald-600">{notification.plan}</span>
                        </p>
                        <p className="text-xs text-slate-400 mt-1">Just now</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
