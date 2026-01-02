import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else {
                    // Reset to 24 hours when countdown reaches 0
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px] shadow-xl">
                <span className="text-2xl md:text-4xl font-bold text-white">
                    {value.toString().padStart(2, '0')}
                </span>
            </div>
            <span className="text-xs md:text-sm text-gray-400 mt-2 font-medium">{label}</span>
        </div>
    );

    return (
        <div className="inline-flex items-center gap-4 bg-black/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-red-500/30">
            <Clock className="w-6 h-6 md:w-8 md:h-8 text-red-500 animate-pulse" />
            <div className="flex items-center gap-2 md:gap-3">
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <span className="text-2xl md:text-4xl text-white font-bold">:</span>
                <TimeUnit value={timeLeft.minutes} label="Minutes" />
                <span className="text-2xl md:text-4xl text-white font-bold">:</span>
                <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
        </div>
    );
}
