import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Shield, Lock, ArrowLeft, Monitor, Tv } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { WhopCheckoutEmbed } from '@whop/checkout/react';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    whatsapp: string;
    deviceType: string;
    macAddress: string;
    country: string;
    adultChannels: boolean;
}

export default function Checkout() {
    const [, setLocation] = useLocation();
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        whatsapp: '',
        deviceType: '',
        macAddress: '',
        country: '',
        adultChannels: false,
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Get plan details from URL params
    const params = new URLSearchParams(window.location.search);
    const planDuration = params.get('plan') || '3mo';
    const devices = params.get('devices') || '1';
    const price = params.get('price') || '29.99';
    const planId = params.get('planId') || '';

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);

        // Listen for Whop checkout success message
        const handleMessage = (event: MessageEvent) => {
            // Verify origin if possible, but Whop might use different subdomains
            // console.log('Message received:', event.data);

            if (event.data === 'whop-checkout-success' || (typeof event.data === 'object' && event.data?.type === 'whop-checkout-success')) {
                console.log('✅ Whop checkout success detected, redirecting...');
                window.location.href = '/thank-you';
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.deviceType) newErrors.deviceType = 'Device type is required';
        if (!formData.country) newErrors.country = 'Country is required';
        // MAC address is now optional
        // if (!formData.macAddress.trim()) newErrors.macAddress = 'MAC address is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log('🔵 Form submission started');
        console.log('Form data:', formData);
        console.log('Plan:', planDuration, 'Devices:', devices, 'Price:', price);

        if (!validateForm()) {
            console.log('❌ Form validation failed');
            return;
        }

        console.log('✅ Form validation passed');
        setIsSubmitting(true);

        const orderData = {
            ...formData,
            plan: planDuration,
            devices: devices,
            price: price,
            timestamp: new Date().toISOString(),
        };

        console.log('📤 Sending order data to backend:', orderData);

        try {
            const response = await fetch('/api/submit-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            console.log('📥 Backend response status:', response.status);

            if (!response.ok) {
                // Try to parse error details
                try {
                    const errorData = await response.json();
                    console.error('❌ Backend Error Details:', errorData);
                    alert(`Server Error: ${errorData.message || 'Unknown error'}\n${errorData.error || ''}`);
                } catch (e) {
                    console.error('❌ Could not parse backend error response');
                }
                console.warn(`⚠️ Backend submission failed (status ${response.status}), proceeding to payment anyway`);
            } else {
                const result = await response.json();
                console.log('✅ Backend response:', result);

                // Store Order ID in localStorage for payment status tracking
                if (result.orderId) {
                    localStorage.setItem('pendingOrderId', result.orderId);
                    console.log('💾 Stored Order ID:', result.orderId);
                }

                if (result.debug?.supabaseError) {
                    console.warn('⚠️ Supabase Warning:', result.debug.supabaseError);
                }
                console.log('✅ Order submitted successfully, opening checkout');
            }
        } catch (error) {
            console.error('❌ Error sending to backend:', error);
            console.log('⚠️ Proceeding to checkout anyway...');
        } finally {
            setIsSubmitting(false);
            // Always open checkout, even if backend fails
            setIsCheckoutOpen(true);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };



    return (
        // Force white background and dark text, overriding global dark mode
        <div className="min-h-screen bg-white text-slate-900 flex flex-col md:flex-row font-sans">
            {/* Left Column - Order Summary (Dark Sidebar) */}
            <div className="w-full md:w-[45%] lg:w-[40%] bg-[#080c17] text-white p-6 md:p-12 flex flex-col justify-between relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
                {/* Updated Glow to Yellow/Gold */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB800]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10">
                    <button
                        onClick={() => setLocation('/')}
                        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </button>

                    <div className="mb-8">
                        {/* Updated branding text color */}
                        <h2 className="text-[#FFB800] text-sm uppercase tracking-wider font-semibold mb-2">Subscribe to</h2>
                        <h1 className="text-3xl font-bold mb-4">Premium Streaming Service</h1>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold">${price}</span>
                            <span className="text-white/60">/ {planDuration}</span>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        {/* Updated Icon Circles */}
                        <div className="flex items-center gap-3 text-white/80">
                            <div className="w-8 h-8 rounded-full bg-[#FFB800]/20 flex items-center justify-center text-[#FFB800]">
                                <Monitor className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="font-medium">{devices} Device{devices !== '1' ? 's' : ''} Plan</p>
                                <p className="text-xs text-white/50">Simultaneous connections</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-white/80">
                            <div className="w-8 h-8 rounded-full bg-[#FFB800]/20 flex items-center justify-center text-[#FFB800]">
                                <Tv className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="font-medium">Thousands of Channels</p>
                                <p className="text-xs text-white/50">HD & 4K Quality</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-white/80">
                            <div className="w-8 h-8 rounded-full bg-[#FFB800]/20 flex items-center justify-center text-[#FFB800]">
                                <Shield className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="font-medium">Anti-Buffer Technology</p>
                                <p className="text-xs text-white/50">99.9% Uptime Guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-8">
                    <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <div className="flex gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-sm text-white/90 italic">"The best Streaming service I've used. Setup was instant and the quality is amazing."</p>
                        <p className="text-xs text-white/50 mt-2">— Michael R., Verified Customer</p>
                    </div>
                </div>
            </div>

            {/* Right Column - Checkout Form (White Background) */}
            <div className="flex-1 p-6 md:p-12 lg:p-16 overflow-y-auto bg-white">
                <div className="max-w-xl mx-auto">
                    {/* Features Included - KEPT */}
                    <div className="mb-8 pb-8 border-b border-slate-200">
                        <h2 className="text-xl font-bold mb-4 text-slate-900">What's Included</h2>
                        <div className="bg-slate-50 rounded-lg p-4">
                            <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                                {/* Updated Checkmarks */}
                                <div className="flex items-center gap-2">
                                    <span className="text-[#FFB800] font-bold">✓</span> Thousands of Channels
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#FFB800] font-bold">✓</span> HD & 4K Quality
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#FFB800] font-bold">✓</span> Multi-Device Support
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#FFB800] font-bold">✓</span> Anti-Buffer Tech
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#FFB800] font-bold">✓</span> Instant Activation
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#FFB800] font-bold">✓</span> 24/7 Support
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DMCA Disclaimer - KEPT */}
                    <div className="mb-8 pb-8 border-b border-slate-200">
                        {/* Updated DMCA Shield Box */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-[#FFB800] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-slate-900 text-sm mb-1">100% Legal & DMCA Compliant</p>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        Galaxy Connect aggregates publicly available streams from authorized sources.
                                        We do not host or store content. 100% safe, legal, and compliant.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-2 text-slate-900">Complete your order</h2>
                        <p className="text-slate-500">Enter your details to activate your subscription.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Info Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Personal Information</h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        autoComplete="given-name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2.5 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-slate-200'} bg-white text-slate-900 focus:ring-2 focus:ring-[#FFB800]/20 focus:border-[#FFB800] transition-all outline-none`}
                                        placeholder="John"
                                    />
                                    {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        autoComplete="family-name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2.5 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-slate-200'} bg-white text-slate-900 focus:ring-2 focus:ring-[#FFB800]/20 focus:border-[#FFB800] transition-all outline-none`}
                                        placeholder="Doe"
                                    />
                                    {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2.5 rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-200'} bg-white text-slate-900 focus:ring-2 focus:ring-[#FFB800]/20 focus:border-[#FFB800] transition-all outline-none`}
                                        placeholder="john@example.com"
                                    />
                                </div>
                                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="whatsapp" className="text-sm font-medium text-slate-700 flex justify-between">
                                    WhatsApp Number <span className="text-slate-400 font-normal text-xs">Optional</span>
                                </label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    autoComplete="tel"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-[#FFB800]/20 focus:border-[#FFB800] transition-all outline-none"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="country" className="text-sm font-medium text-slate-700">Country</label>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2.5 rounded-lg border ${errors.country ? 'border-red-500' : 'border-slate-200'} bg-white text-slate-900 focus:ring-2 focus:ring-[#FFB800]/20 focus:border-[#FFB800] transition-all outline-none`}
                                >
                                    <option value="">Select your country...</option>
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Finland">Finland</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.country && <p className="text-xs text-red-500">{errors.country}</p>}
                            </div>
                        </div>

                        <div className="h-px bg-slate-100 my-6"></div>

                        {/* Device Info Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Device Setup</h3>

                            <div className="space-y-1.5">
                                <label htmlFor="deviceType" className="text-sm font-medium text-slate-700">Device Type</label>
                                <select
                                    id="deviceType"
                                    name="deviceType"
                                    value={formData.deviceType}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2.5 rounded-lg border ${errors.deviceType ? 'border-red-500' : 'border-slate-200'} bg-white text-slate-900 focus:ring-2 focus:ring-[#FFB800]/20 focus:border-[#FFB800] transition-all outline-none`}
                                >
                                    <option value="">Select your device...</option>
                                    <option value="Smart TV">Smart TV (Samsung/LG/Android)</option>
                                    <option value="Android Box">Android Box / NVIDIA Shield</option>
                                    <option value="Fire Stick">Amazon Fire TV Stick</option>
                                    <option value="MAG Box">MAG Box</option>
                                    <option value="Apple TV">Apple TV</option>
                                    <option value="Mobile/Tablet">Mobile / Tablet</option>
                                    <option value="PC/Mac">PC / Mac</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.deviceType && <p className="text-xs text-red-500">{errors.deviceType}</p>}
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="macAddress" className="text-sm font-medium text-slate-700 flex justify-between">
                                    MAC Address <span className="text-slate-400 font-normal text-xs">Optional</span>
                                </label>
                                <input
                                    type="text"
                                    id="macAddress"
                                    name="macAddress"
                                    value={formData.macAddress}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2.5 rounded-lg border ${errors.macAddress ? 'border-red-500' : 'border-slate-200'} bg-white text-slate-900 focus:ring-2 focus:ring-[#FFB800]/20 focus:border-[#FFB800] transition-all outline-none font-mono`}
                                    placeholder="00:1A:79:XX:XX:XX"
                                />
                                {errors.macAddress && <p className="text-xs text-red-500">{errors.macAddress}</p>}
                                <p className="text-xs text-slate-400">Usually found in Settings {'>'} Network or About</p>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50">
                                <input
                                    type="checkbox"
                                    name="adultChannels"
                                    checked={formData.adultChannels}
                                    onChange={handleChange}
                                    className="w-4 h-4 rounded border-slate-300 text-[#FFB800] focus:ring-[#FFB800]"
                                    id="adultChannels"
                                />
                                <label htmlFor="adultChannels" className="text-sm font-medium cursor-pointer select-none flex-1 text-slate-700">
                                    Include Adult Channels
                                </label>
                                <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-600">Free</span>
                            </div>
                        </div>

                        {/* Data Collection Notice */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                            <h3 className="text-sm font-semibold text-blue-900 flex items-center gap-2">
                                <Shield className="w-4 h-4" />
                                Why We Collect This Information
                            </h3>
                            <p className="text-xs text-blue-800 leading-relaxed">
                                We collect your MAC address to activate your subscription and ensure only authorized devices can access your account.
                                This prevents unauthorized account sharing and protects your subscription. Your personal information is used solely
                                for service delivery and customer support.
                            </p>
                            <p className="text-xs text-blue-700">
                                Read our <a href="/privacy" target="_blank" className="underline font-semibold hover:text-blue-900">Privacy Policy</a> to
                                learn how we protect your data.
                            </p>
                        </div>

                        {/* Trust Badges & Payment Icons */}
                        <div className="space-y-6 pt-8 border-t border-gray-200">
                            <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-green-600" />
                                    <span>SSL Secure Payment</span>
                                </div>
                            </div>

                            {/* Payment Method Logos */}
                            <div className="space-y-2">
                                <p className="text-center text-sm text-gray-600 font-medium">Accepted Payment Methods</p>
                                <div className="flex items-center justify-center gap-3 flex-wrap">
                                    <img
                                        src="/assets/visa.png"
                                        className="h-10 object-contain"
                                        alt="Visa"
                                    />
                                    <img
                                        src="/assets/mastercard.png"
                                        className="h-10 object-contain"
                                        alt="Mastercard"
                                    />
                                    <img
                                        src="/assets/paypal.png"
                                        className="h-10 object-contain"
                                        alt="PayPal"
                                    />
                                    <img
                                        src="/assets/cashapp.png"
                                        className="h-12 object-contain"
                                        alt="Cash App"
                                    />
                                </div>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full h-12 text-base font-semibold bg-[#FFB800] hover:bg-[#E6A600] text-slate-950 shadow-lg shadow-[#FFB800]/20 hover:shadow-[#FFB800]/40 transition-all"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    Processing...
                                </span>
                            ) : (
                                `Pay $${price} Securely`
                            )}
                        </Button>

                        <p className="text-xs text-center text-slate-400 mt-4">
                            By clicking the button above, you agree to our Terms of Service and Privacy Policy.
                            Your subscription will be activated immediately after payment.
                        </p>
                    </form>
                </div>
            </div >

            {/* Whop Checkout Dialog */}
            < Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen} >
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0 bg-[#0f1116] border-white/10">
                    <DialogHeader className="p-6 border-b border-white/10 bg-[#1a1f2c]">
                        <DialogTitle className="text-xl font-semibold text-white flex items-center justify-between">
                            <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
                            <div className="flex items-center gap-2">
                                <Lock className="w-5 h-5 text-green-500" />
                                Secure Checkout
                            </div>
                        </DialogTitle>
                    </DialogHeader>

                    {planId && (
                        <div className="p-1 bg-[#0f1116]">
                            <WhopCheckoutEmbed
                                planId={planId}
                                theme="dark"
                                fallback={
                                    <div className="flex flex-col items-center justify-center p-12 gap-4">
                                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                        <div className="text-muted-foreground">Loading secure payment gateway...</div>
                                    </div>
                                }
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog >

            {/* Chat Prompt - Floating */}
            <div className="fixed bottom-6 left-6 z-50 max-w-xs hidden sm:block animate-bounce-slow">
                <div className="bg-gradient-to-r from-[#FFB800] to-yellow-600 text-slate-900 rounded-lg shadow-2xl p-4 border-2 border-white/20">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">💬</span>
                        </div>
                        <div>
                            <p className="font-bold text-sm mb-1">Need help?</p>
                            <p className="text-xs opacity-90">Chat with us — we respond instantly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
