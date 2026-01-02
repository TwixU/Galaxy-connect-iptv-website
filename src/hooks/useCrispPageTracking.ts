import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Hook to update Crisp with current page URL
 * This allows Crisp to track which page visitors are viewing in real-time
 */
export function useCrispPageTracking() {
    const [location] = useLocation();

    useEffect(() => {
        // 1. Update document title based on route
        const getPageTitle = (path: string) => {
            // Remove trailing slash for matching
            const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;

            switch (cleanPath) {
                case '/': return 'Home - #1 Premium Streaming Service';
                case '/checkout': return 'Checkout - Secure Payment';
                case '/channels-list': return 'Channel List - 17,120+ Channels';
                case '/features': return 'Features - Why Choose Us';
                case '/subscriptions': return 'Pricing Plans - Galaxy Connect';
                case '/installation-guide': return 'Installation Guide - Setup Tutorial';
                case '/thank-you': return 'Thank You - Order Confirmed';

                case '/terms': return 'Terms of Service';
                case '/privacy': return 'Privacy Policy';
                case '/refund': return 'Refund Policy';
                case '/dmca': return 'DMCA Policy';
                // Landing pages
                case '/landing/trust': return 'Premium Streaming - Trusted Service';
                case '/landing/social-proof': return 'Join 50,000+ Happy Customers';
                case '/landing/limited-offer': return 'Limited Time Offer - Save 80%';
                case '/landing/value': return 'Best Value Streaming Subscription';
                case '/checkout/value': return 'Secure Checkout - Special Offer';
                default: return 'Galaxy Connect - #1 Premium Streaming Service';
            }
        };

        const pageTitle = getPageTitle(location);
        const fullUrl = window.location.origin + location;

        // Clean path for segment (remove / and replace with - or underscore, e.g., /checkout -> view_checkout)
        const segmentName = location === '/' ? 'view_home' : `view_${location.slice(1).replace(/\//g, '_')}`;

        // Update document title
        document.title = pageTitle;

        // 2. Notify Crisp using safe API methods
        // 2. Notify Crisp using safe API methods
        if (window.$crisp) {
            try {
                const timestamp = new Date().toISOString();
                console.log('🚀 Crisp Tracking:', { pageTitle, fullUrl, segmentName });

                // Update segments to show where they are
                // 'session:segments' takes an array of strings. 
                // We use ['visitor', segmentName] to keep the 'visitor' tag and add the current view.
                window.$crisp.push(['set', 'session:segments', [['visitor', segmentName]]]);

                // Set session data with page info (using lowercase keys for safety)
                window.$crisp.push(['set', 'session:data', [
                    ['current_page', pageTitle],
                    ['current_url', fullUrl],
                    ['last_active', timestamp]
                ]]);

                // Send a custom event that appears in the timeline
                window.$crisp.push(['set', 'session:event', [[
                    'view_page',
                    {
                        title: pageTitle,
                        url: fullUrl
                    }
                ]]]);
            } catch (error) {
                console.debug('Crisp tracking error:', error);
            }
        }
    }, [location]);
}

// TypeScript declaration for Crisp
declare global {
    interface Window {
        $crisp?: any[];
        CRISP_WEBSITE_ID?: string;
    }
}
