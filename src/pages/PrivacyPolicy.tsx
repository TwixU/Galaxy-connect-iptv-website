import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function PrivacyPolicy() {
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
                    Privacy Policy
                </h1>
                <p className="text-slate-600 mb-8">
                    Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                {/* Content */}
                <div className="prose prose-slate max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Galaxy Connect ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our streaming service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            <strong>2.1 Personal Information:</strong>
                        </p>
                        <ul className="list-disc pl-6 text-slate-700 mb-4">
                            <li>Name and email address</li>
                            <li>Payment information (processed securely through third-party payment processors)</li>
                            <li>Contact information (phone number, if provided)</li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            <strong>2.2 Usage Data:</strong>
                        </p>
                        <ul className="list-disc pl-6 text-slate-700 mb-4">
                            <li>Device information (type, operating system)</li>
                            <li>IP address and location data</li>
                            <li>Viewing history and preferences</li>
                            <li>Service usage statistics</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            We use the collected information to:
                        </p>
                        <ul className="list-disc pl-6 text-slate-700 mb-4">
                            <li>Provide and maintain our streaming service</li>
                            <li>Process your payments and subscriptions</li>
                            <li>Send you service-related notifications</li>
                            <li>Improve our service and user experience</li>
                            <li>Provide customer support</li>
                            <li>Detect and prevent fraud or abuse</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies and Tracking Technologies</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            We use cookies and similar tracking technologies to track activity on our service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Sharing and Disclosure</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            We do not sell your personal information. We may share your information with:
                        </p>
                        <ul className="list-disc pl-6 text-slate-700 mb-4">
                            <li><strong>Service Providers:</strong> Third-party companies that help us operate our service (payment processors, hosting providers)</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Security</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights (GDPR)</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            If you are a resident of the European Economic Area (EEA), you have certain data protection rights:
                        </p>
                        <ul className="list-disc pl-6 text-slate-700 mb-4">
                            <li>Right to access your personal data</li>
                            <li>Right to rectification of inaccurate data</li>
                            <li>Right to erasure ("right to be forgotten")</li>
                            <li>Right to restrict processing</li>
                            <li>Right to data portability</li>
                            <li>Right to object to processing</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Data Retention</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children's Privacy</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Our service is not intended for children under 18. We do not knowingly collect personal information from children under 18.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Privacy Policy</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            If you have questions about this Privacy Policy, please contact us:
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
