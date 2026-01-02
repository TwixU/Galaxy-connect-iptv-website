import { useEffect } from 'react';
import { useLocation, useRoute } from 'wouter';
import { plans } from '../data/pricingData';
import Checkout from './Checkout';

export default function PlanRedirect() {
    const [, params] = useRoute('/checkout/:duration/:devices');
    const [, setLocation] = useLocation();

    // If we're rendering this component, we might want to just render the Checkout component 
    // but prepopulated with the right query params or state.
    // However, Checkout.tsx currently reads from window.location.search (Query Params).
    // So we can either:
    // 1. Refactor Checkout.tsx to accept props (better long term)
    // 2. Have this component 'redirect' to the query param version (easiest short term)
    // 3. Or just wrap Checkout and pass simple props/context?

    // Let's do a client-side redirect to the query-param URL for now to reuse the exact same logic
    // OR BETTER: Update Checkout.tsx to handle these params if we want to keep the clean URL in the bar.
    // But since Checkout.tsx uses wouter, it's already mounted on /checkout. 
    // Let's try to make Checkout.tsx smarter.

    // Actually, the simplest approach that meets the requirement "add checkout pages" 
    // is to make this component render the Checkout component and mocking the location/params it expects,
    // OR finding the plan data and passing it to a modified Checkout.

    // Let's Find the plan details first.
    const durationSlug = params?.duration; // e.g., "24-months"
    const devicesSlug = params?.devices;   // e.g., "1-device" or "3-devices"

    if (!durationSlug || !devicesSlug) return null;

    // Parse duration
    // '24-months' -> '24 Months' (matching data) or '2 Years' (id)
    // The data uses IDs like '1-month', '3-months', '6-months', '1-year', '2-years'
    // But existing Pricing uses '3-months', '6-months' etc.

    // Let's map clean slugs to IDs
    let planId = '';
    if (durationSlug.includes('24') || durationSlug.includes('2-year')) planId = '2-years';
    else if (durationSlug.includes('12') || durationSlug.includes('1-year')) planId = '1-year';
    else if (durationSlug.includes('6')) planId = '6-months';
    else if (durationSlug.includes('3')) planId = '3-months';
    else if (durationSlug.includes('1')) planId = '1-month';

    const deviceCount = devicesSlug.replace(/\D/g, ''); // Extract '1', '3' etc.

    const plan = plans.find(p => p.id === planId);
    const priceData = plan?.prices[deviceCount];

    useEffect(() => {
        if (plan && priceData) {
            // Redirect to the query param version which is the "Source of Truth" for Checkout.tsx logic
            // This is invisible to user if fast enough, or we can just render Checkout and modify it.
            // But modifying Checkout to handle both is cleaner. 
            // For now, redirecting is 100% safe to ensure existing logic works.
            // window.location.replace(`/checkout?plan=${plan.id}&devices=${deviceCount}&price=${priceData.price}&planId=${priceData.planId}`);
        }
    }, [plan, priceData, deviceCount]);

    // Render Checkout directly, but we need to trick it into seeing the params? 
    // No, let's just update Checkout.tsx to look at props if provided, or URL params.

    // Wait, I can't easily pass props to a route component in wouter in standard way without wrapping.
    // Let's simple redirect for now to ensure robustness.

    if (plan && priceData) {
        // We can render Checkout and pass the values via a contest or just URL search params manipulation?
        // Let's just redirect. It guarantees the checkout works exactly as tested before.
        window.history.replaceState(null, '', `/checkout?plan=${plan.id}&devices=${deviceCount}&price=${priceData.price}&planId=${priceData.planId}`);
        return <Checkout />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Plan Not Found</h1>
                <p className="text-slate-400">Redirecting to pricing...</p>
                {setTimeout(() => setLocation('/'), 2000) && null}
            </div>
        </div>
    );
}
