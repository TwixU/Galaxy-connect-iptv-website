import { useEffect, useState } from 'react';
import { Clock, Flame } from 'lucide-react';

export default function UrgencyBanner() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 2,
        minutes: 30,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
                    // Reset to 2h 30m when timer expires
                    return { hours: 2, minutes: 30, seconds: 0 };
                }

                if (prev.seconds === 0) {
                    if (prev.minutes === 0) {
                        return {
                            hours: prev.hours - 1,
                            minutes: 59,
                            seconds: 59
                        };
                    }
                    return {
                        ...prev,
                        minutes: prev.minutes - 1,
                        seconds: 59
                    };
                }

                return {
                    ...prev,
                    seconds: prev.seconds - 1
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (val: number) => val.toString().padStart(2, '0');

    return (
        <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 text-white py-3 px-4 sticky top-16 z-40 shadow-lg animate-pulse-slow">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
                <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 animate-bounce" />
                    <span className="font-bold text-sm sm:text-base">
                        🎬 7-DAY TRIAL FOR $3.99
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm sm:text-base">
                        Offer expires in:
                    </span>
                    <div className="flex items-center gap-1 font-mono font-bold text-base sm:text-lg bg-black/30 px-3 py-1 rounded">
                        <span>{formatTime(timeLeft.hours)}</span>
                        <span className="animate-pulse">:</span>
                        <span>{formatTime(timeLeft.minutes)}</span>
                        <span className="animate-pulse">:</span>
                        <span>{formatTime(timeLeft.seconds)}</span>
                    </div>
                </div>

                <span className="text-xs sm:text-sm font-semibold bg-yellow-400 text-black px-3 py-1 rounded-full">
                    ⚡ Limited spots available
                </span>
            </div>
        </div>
    );
}
