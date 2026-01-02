import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function Refund() {
    return (
        <div className="min-h-screen bg-[#080c17]">
            <Navigation />
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                {/* Back Button */}
                <Link href="/">
                    <a className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </a>
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Refund Policy</h1>
                <p className="text-slate-500 mb-8">Last Updated: November 2024</p>

                <div className="prose prose-slate max-w-none">
                    <section className="bg-slate-900/50 border border-white/5 rounded-lg p-6">
                        <p className="text-white font-semibold">GALAXY CONNECT Streaming Service</p>
                        <p className="text-sm mt-2">Contact: support@galaxyconnect.online | +33 7 45 88 96 74</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Overview</h2>
                        <p>This Refund Policy governs the process and conditions under which refunds are granted for the streaming services provided by GALAXY CONNECT ("GALAXY CONNECT", "we", "us", or "our"). Our aim is to ensure a clear understanding of our refund process and to provide customer satisfaction while maintaining fair business practices.</p>
                    </section>

                    <section className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-emerald-600 mb-4">2. Refund Eligibility Period</h2>
                        <p className="text-white"><strong>Seven-Day Refund Policy:</strong> Customers who subscribe to our streaming services are eligible to request a full refund within seven (7) calendar days from the date of their initial subscription purchase.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Conditions for Refund</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Refund Request:</strong> To initiate a refund, customers must contact our support team within the seven-day period. The request should include the customer's name, account details, and the reason for the refund.</li>
                            <li><strong>Non-Transferable:</strong> The refund policy is applicable only to the original subscriber and is non-transferable.</li>
                            <li><strong>Payment Method:</strong> Refunds will be processed using the original payment method used at the time of purchase.</li>
                            <li><strong>Processing Time:</strong> Once a refund request is approved, the refund process may take up to 5-10 business days to be reflected in the customer's account.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Non-Refundable Circumstances</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Renewals:</strong> The seven-day refund policy does not apply to subscription renewals. Only the initial subscription purchase is eligible for a refund under this policy.</li>
                            <li><strong>Partial Refunds:</strong> We do not offer partial refunds for unused portions of the subscription period once the seven-day period has elapsed.</li>
                            <li><strong>Technical Issues:</strong> If the refund request is due to technical issues, we encourage customers to contact our support team for assistance before requesting a refund. We are committed to resolving technical problems that are within our control.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Cancellation of Service</h2>
                        <p>Subscribers wishing to cancel their service after the seven-day period must follow the cancellation procedures outlined in our Terms of Service. No refunds will be granted for cancellations made after the seven-day refund period.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Information</h2>
                        <div className="bg-slate-900/50 border border-white/5 rounded-lg p-4 mt-3">
                            <p className="font-semibold text-white mb-2">For refund requests or queries regarding this Refund Policy, please contact our customer support team at:</p>
                            <p>Email: <a href="mailto:support@galaxyconnect.online" className="text-emerald-600 hover:underline">support@galaxyconnect.online</a></p>
                            <p className="mt-3 text-sm text-slate-400">Our support team is available 24/7 to assist you.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Policy Amendments</h2>
                        <p>GALAXY CONNECT reserves the right to modify or amend this Refund Policy at any time. Any changes will be effective immediately upon posting on our website or notification to our users.</p>
                    </section>

                    {/* Legal Compliance Disclaimer */}
                    <section className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6 mt-8">
                        <h3 className="text-xl font-semibold text-white mb-3">Legal Disclaimer</h3>
                        <p className="text-slate-300 leading-relaxed">
                            <strong className="text-emerald-600">Galaxy Connect</strong> is a legitimate streaming service provider.
                            All content available through our platform is properly licensed and authorized for distribution.
                            We comply with all applicable copyright laws and regulations. We work with authorized content providers
                            and distributors to ensure legal distribution of all channels, movies, and TV shows.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
