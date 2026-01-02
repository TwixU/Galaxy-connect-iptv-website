import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { CheckCircle, Home, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Navigation from '../components/Navigation';

// Declare gtag for TypeScript
declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

export default function ThankYou() {
    const [, setLocation] = useLocation();

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        // Get order details from localStorage
        const orderValue = localStorage.getItem('order_value') || '0';
        const orderId = localStorage.getItem('pendingOrderId');

        // Send Google Ads conversion event
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-17742499077/GFHACP71isYbEIWapIxC',
                'value': parseFloat(orderValue),
                'currency': 'EUR',
                'transaction_id': orderId || Date.now().toString()
            });
        }

        // Update payment status to Success
        const updatePaymentStatus = async () => {
            if (orderId) {
                console.log('💳 Updating payment status to Success for Order ID:', orderId);

                try {
                    const response = await fetch('/api/update-payment-status', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            orderId: orderId,
                            status: 'Success'
                        }),
                    });

                    if (response.ok) {
                        console.log('✅ Payment status updated to Success');
                        // Clear the pending order ID
                        localStorage.removeItem('pendingOrderId');
                    } else {
                        console.warn('⚠️ Failed to update payment status');
                    }
                } catch (error) {
                    console.error('❌ Error updating payment status:', error);
                }
            }
        };

        updatePaymentStatus();
    }, []);

    return (
        <div className="min-h-screen bg-[#080c17]">
            <Navigation />
            <div className="flex items-center justify-center py-12 px-4 pt-24">
                <div className="container max-w-2xl">
                    <Card className="bg-slate-900/50 border-white/5 text-center backdrop-blur-sm">
                        <CardContent className="p-8 md:p-12">
                            {/* Success Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emerald-500/20 flex items-center justify-center animate-scale-in">
                                    <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-emerald-400" />
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in text-white">
                                Thank You for Your <span className="text-emerald-400">Order!</span>
                            </h1>

                            {/* Message */}
                            <p className="text-base md:text-lg text-slate-400 mb-8 animate-fade-in">
                                Your payment has been processed successfully. We've received your order and will activate your streaming service shortly.
                            </p>

                            {/* Next Steps */}
                            <div className="bg-white/5 rounded-lg p-6 mb-8 text-left animate-slide-up border border-white/5">
                                <h2 className="text-xl font-semibold mb-4 text-white">What happens next?</h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base text-slate-300">
                                            You'll receive a confirmation email with your order details
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base text-slate-300">
                                            Your streaming service will be activated within 24 hours
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base text-slate-300">
                                            You'll receive login credentials and setup instructions via email
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base text-slate-300">
                                            Our support team is available 24/7 if you need any assistance
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Support Info */}
                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6 mb-8 animate-slide-up">
                                <h3 className="text-lg font-semibold mb-3 flex items-center justify-center gap-2 text-white">
                                    <Mail className="w-5 h-5 text-emerald-400" />
                                    Need Help?
                                </h3>
                                <p className="text-sm md:text-base text-slate-400 mb-2">
                                    Our support team is here to help you 24/7
                                </p>
                                <p className="text-sm md:text-base text-slate-300">
                                    Email: <a href="mailto:support@galaxyconnect.online" className="text-emerald-400 hover:underline">support@galaxyconnect.online</a>
                                </p>
                                <p className="text-sm md:text-base text-slate-300">
                                    WhatsApp: <a href="https://wa.link/g46bn7" className="text-emerald-400 hover:underline">Chat on WhatsApp</a>
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    onClick={() => setLocation('/')}
                                    className="gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold"
                                >
                                    <Home className="w-5 h-5" />
                                    Back to Home
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
