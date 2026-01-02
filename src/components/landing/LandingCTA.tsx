import { useLocation } from 'wouter';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

interface LandingCTAProps {
    text: string;
    variant?: 'primary' | 'urgency' | 'success';
    size?: 'default' | 'lg' | 'xl';
    icon?: boolean;
    onClick?: () => void;
}

export default function LandingCTA({
    text,
    variant = 'primary',
    size = 'xl',
    icon = true,
    onClick
}: LandingCTAProps) {
    const [, navigate] = useLocation();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            // Preserve UTM parameters when navigating to subscriptions
            const params = new URLSearchParams(window.location.search);
            navigate(`/subscriptions?${params.toString()}`);
        }
    };

    const variantClasses = {
        primary: 'bg-primary hover:bg-primary/90',
        urgency: 'bg-red-600 hover:bg-red-700',
        success: 'bg-green-600 hover:bg-green-700'
    };

    return (
        <Button
            size={size}
            onClick={handleClick}
            className={`${variantClasses[variant]} shadow-2xl transition-all duration-300 hover:scale-105 min-w-[280px]`}
        >
            {text}
            {icon && <ArrowRight className="ml-2 w-5 h-5" />}
        </Button>
    );
}
