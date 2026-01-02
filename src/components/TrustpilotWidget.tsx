import { useEffect } from 'react';

export default function TrustpilotWidget() {
    useEffect(() => {
        // Load Trustpilot widget script
        const script = document.createElement('script');
        script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <div
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="5419b6a8b0d04a076446a9ad"
            data-businessunit-id="676e7c1c3f0a0f4e1e8c0b1a"
            data-style-height="24px"
            data-style-width="100%"
            data-theme="dark"
            data-min-review-count="10"
            data-without-reviews-preferred-string-id="1"
            data-style-alignment="center"
        >
            <a href="https://www.trustpilot.com/review/apollogrouptvs.com" target="_blank" rel="noopener noreferrer">
                Trustpilot
            </a>
        </div>
    );
}
