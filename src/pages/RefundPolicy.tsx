import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function RefundPolicy() {
    return (
        <div className="min-h-screen bg-white py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Button */}
                <Link href="/">
                    <a className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </a>
                </Link>

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Refund Policy
                </h1>
                <p className="text-slate-600 mb-8">
                    Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                {/* Content */}
                <div className="prose prose-slate max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. 7-Day Money-Back Guarantee</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Galaxy Connect offers a 7-day money-back guarantee for all new subscriptions. If you are not satisfied with our streaming service for any reason, you may request a full refund within 7 days of your initial purchase.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Eligibility for Refund</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            To be eligible for a refund, you must meet the following conditions:
                        </p>
                        <ul className="list-disc pl-6 text-slate-700 mb-4">
                            <li>The refund request must be made within 7 days of the original purchase date</li>
                            <li>This must be your first subscription with Galaxy Connect</li>
                            <li>You must not have violated our Terms of Service</li>
                            <li>The refund request must be made through our official support channels</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How to Request a Refund</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            To request a refund, please follow these steps:
                        </p>
                        <ol className="list-decimal pl-6 text-slate-700 mb-4">
                            <li className="mb-2">Contact our customer support team via email at support@galaxyconnect.online or via <a href="https://wa.link/g46bn7" className="text-emerald-600 hover:underline">WhatsApp</a></li>
                            <li className="mb-2">Provide your order number and the email address used for the purchase</li>
                            <li className="mb-2">Briefly explain the reason for your refund request (optional but helpful)</li>
                            <li className="mb-2">Our team will review your request and respond within 24-48 hours</li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Refund Processing Time</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Once your refund request is approved:
                        </p>
                        <ul className="list-disc pl-6 text-slate-700 mb-4">
                            <li>Refunds are processed within 3-5 business days</li>
                            <li>The refund will be issued to the original payment method used for the purchase</li>
                            <li>Depending on your bank or payment provider, it may take an additional 5-10 business days for the refund to appear in your account</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Non-Refundable Situations</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Refunds will NOT be issued in the following cases:
                        </p>
                        <ul className="list-disc pl-6 text-slate-700 mb-4">
                            <li>Refund requests made after the 7-day guarantee period</li>
                            <li>Accounts that have been suspended or terminated due to Terms of Service violations</li>
                            <li>Subscriptions that have been previously refunded</li>
                            <li>Partial refunds for unused portions of multi-month subscriptions</li>
                            <li>Technical issues caused by the customer's internet connection or incompatible devices</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Subscription Cancellation</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            If you wish to cancel your subscription without requesting a refund:
                        </p>
                        <ul className="list-disc pl-6 text-slate-700 mb-4">
                            <li>You can cancel at any time by contacting our support team</li>
                            <li>Your service will remain active until the end of your current billing period</li>
                            <li>No refund will be provided for the remaining subscription period</li>
                            <li>You will not be charged for subsequent billing periods</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Exceptional Circumstances</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            In exceptional circumstances (such as prolonged service outages or technical issues on our end), we may offer refunds or credits outside of the standard 7-day window. These decisions are made on a case-by-case basis at our discretion.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Information</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            For refund requests or questions about this policy, please contact:
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                            <strong>Email:</strong> support@galaxyconnect.online<br />
                            <strong>WhatsApp:</strong> <a href="https://wa.link/g46bn7" className="text-emerald-600 hover:underline">Chat with us</a><br />
                            <strong>Support Hours:</strong> Monday - Sunday, 9:00 AM - 11:00 PM (CET)
                        </p>
                    </section>

                    <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-8">
                        <h3 className="text-lg font-bold text-green-900 mb-2">Our Commitment</h3>
                        <p className="text-sm text-green-800">
                            We stand behind the quality of our streaming service. If you're not completely satisfied within the first 7 days, we'll refund your money—no questions asked. Your satisfaction is our priority.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
