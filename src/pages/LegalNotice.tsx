import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function LegalNotice() {
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

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Legal Notice
                </h1>
                <p className="text-slate-500 mb-8">
                    Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                {/* Content */}
                <div className="prose prose-slate max-w-none">
                    <section className="bg-slate-900/50 border border-white/5 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Company Information</h2>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>Legal Name:</strong> Galaxy Co-Invest, L.P.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>Operating As:</strong> Galaxy Connect
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>State of Incorporation:</strong> Delaware (DE)
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>EIN:</strong> 87-0844935
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>SEC File Number:</strong> 021-500626
                        </p>
                    </section>

                    <section className="bg-slate-900/50 border border-white/5 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Contact Information</h2>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>Business Address:</strong><br />
                            22 Elm Place, 3rd Floor<br />
                            Rye, NY 10580<br />
                            United States
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>Email:</strong> support@galaxyconnect.online
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>Phone:</strong> +1 (914) 510-8910
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>WhatsApp:</strong> <a href="https://wa.link/g46bn7" className="text-emerald-600 hover:text-emerald-700 underline">Chat on WhatsApp</a>
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>Customer Support Hours:</strong> Monday - Sunday, 9:00 AM - 11:00 PM (CET)
                        </p>
                    </section>

                    <section className="bg-slate-900/50 border border-white/5 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Website Hosting</h2>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>Hosting Provider:</strong> Hostinger International Ltd.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>Hosting Address:</strong> 61 Lordou Vironos Street, 6023 Larnaca, Cyprus
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-2">
                            <strong>Website:</strong> <a href="https://www.hostinger.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">www.hostinger.com</a>
                        </p>
                    </section>

                    <section className="bg-slate-900/50 border border-white/5 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Galaxy Connect or its content suppliers and is protected by international copyright laws.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            The Galaxy Connect name and logo are trademarks of [COMPANY LEGAL NAME]. Unauthorized use of these trademarks is strictly prohibited.
                        </p>
                    </section>

                    <section className="bg-slate-900/50 border border-white/5 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Content Licensing</h2>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            <strong>Important Disclaimer:</strong> Galaxy Connect is a legitimate streaming service provider. All content available through our service is properly licensed and authorized for distribution. We comply with all applicable copyright laws and regulations.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            We work with authorized content providers and distributors to ensure that all channels, movies, and TV shows offered through our platform are legally obtained and distributed in accordance with licensing agreements.
                        </p>
                    </section>

                    <section className="bg-slate-900/50 border border-white/5 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            While we strive to ensure the accuracy and reliability of information on our website, Galaxy Connect makes no warranties or representations as to the accuracy or completeness of any information on this site.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Galaxy Connect shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or our streaming service.
                        </p>
                    </section>

                    <section className="bg-slate-900/50 border border-white/5 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Applicable Law</h2>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            This website and our services are governed by and construed in accordance with the laws of [COUNTRY/JURISDICTION], without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section className="bg-slate-900/50 border border-white/5 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Dispute Resolution</h2>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Any disputes arising from the use of this website or our services shall be subject to the exclusive jurisdiction of the courts of [JURISDICTION].
                        </p>
                    </section>

                    <section className="bg-slate-900/50 border border-white/5 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Data Protection Officer</h2>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            For questions regarding data protection and privacy, please contact our Data Protection Officer at: support@galaxyconnect.online
                        </p>
                    </section>

                    <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 mt-8">
                        <p className="text-sm text-slate-400">
                            <strong>Note:</strong> This legal notice contains placeholder information marked with [BRACKETS]. Please contact us to obtain the complete and accurate legal information for Galaxy Connect.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
