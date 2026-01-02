import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function TermsOfService() {
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
                    Terms of Service
                </h1>
                <p className="text-slate-600 mb-8">
                    Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                {/* Content */}
                <div className="prose prose-slate max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            By accessing and using Galaxy Connect's streaming service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Service Description</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Galaxy Connect provides a legitimate streaming service offering access to live TV channels, movies, and TV shows. All content is licensed and authorized for distribution in compliance with applicable copyright laws.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Subscription and Payment</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            <strong>3.1 Subscription Plans:</strong> We offer various subscription plans (monthly, 3-month, 6-month, and yearly). Pricing is clearly displayed on our website.
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            <strong>3.2 Payment:</strong> Payment is required in advance for the selected subscription period. We accept various payment methods as displayed during checkout.
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            <strong>3.3 Auto-Renewal:</strong> Subscriptions do not auto-renew. You must manually renew your subscription before expiration.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Refund Policy</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            We offer a 7-day money-back guarantee. If you are not satisfied with our service, you may request a full refund within 7 days of purchase. Please refer to our Refund Policy for complete details.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. User Obligations</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            <strong>5.1 Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials.
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            <strong>5.2 Prohibited Uses:</strong> You may not:
                        </p>
                        <ul className="list-disc pl-6 text-slate-700 mb-4">
                            <li>Share your account credentials with others</li>
                            <li>Use the service for commercial purposes</li>
                            <li>Resell or redistribute our service</li>
                            <li>Attempt to hack or interfere with the service</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Service Availability</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            We strive to maintain 99.9% uptime. However, we do not guarantee uninterrupted service and are not liable for temporary service disruptions due to maintenance or technical issues.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Termination</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            We reserve the right to terminate or suspend access to our service immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Galaxy Connect shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use or inability to use the service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to Terms</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Information</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            For questions about these Terms of Service, please contact us at:
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                            Email: support@galaxyconnect.online<br />
                            Phone: +33 7 45 88 96 74
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
