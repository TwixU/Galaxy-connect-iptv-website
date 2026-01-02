import { Shield, Zap, CheckCircle } from 'lucide-react';

export default function GuaranteeBadges() {
    const guarantees = [
        {
            icon: Shield,
            title: '7-Day Money Back',
            description: 'Full refund guarantee'
        },
        {
            icon: CheckCircle,
            title: '100% Satisfaction',
            description: 'Guaranteed or your money back'
        },
        {
            icon: Zap,
            title: 'Instant Activation',
            description: 'Start streaming immediately'
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                            <Icon className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h4 className="font-semibold text-white text-sm mb-1">
                            {guarantee.title}
                        </h4>
                        <p className="text-xs text-gray-400">
                            {guarantee.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
