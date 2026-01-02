import { CheckCircle, Shield, Zap } from 'lucide-react';

interface TrustBadge {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
}

const badges: TrustBadge[] = [
    { icon: Shield, text: '7-Day Guarantee' },
    { icon: Zap, text: 'Instant Activation' },
    { icon: CheckCircle, text: '24/7 Support' }
];

export default function TrustBadges() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 py-6">
            {badges.map((badge, index) => (
                <div
                    key={index}
                    className="flex items-center gap-2 text-sm md:text-base"
                >
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <badge.icon className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-300 font-medium">{badge.text}</span>
                </div>
            ))}
        </div>
    );
}
