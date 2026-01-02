
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function DMCA() {
    return (
        <div className="min-h-screen bg-[#080c17] text-white">
            <Navigation />
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-white">DMCA <span className="text-emerald-400">Policy</span></h1>

                <div className="space-y-6 text-slate-400">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Content Disclaimer</h2>
                        <p>GALAXY CONNECT does not host or broadcast any television channels directly from its servers, nor does it have any affiliation with the broadcasters of these channels. GALAXY CONNECT is not liable for any copyright infringement issues related to content linked or embedded on our website. For any legal concerns, please contact the actual owner of the streaming media.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Role as an Online Service Provider</h2>
                        <p>Under the Digital Millennium Copyright Act (DMCA), GALAXY CONNECT is recognized as an online service provider. We facilitate legal copyright owners in self-publishing content on the Internet by searching, embedding, and displaying various media types. We do not engage in streaming media. GALAXY CONNECT takes copyright infringement seriously and is committed to protecting the rights of legal copyright owners.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Copyright Infringement Claims</h2>
                        <p className="mb-3">If you are a copyright owner and your content appears on the GALAXY CONNECT website or service without your authorization, you must notify us in writing for us to take appropriate action. Your notification must include:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>a. Identification of Copyrighted Work:</strong> A specific identification of the copyrighted work claimed to be infringed. For multiple works, a representative list of those works should be provided.</li>
                            <li><strong>b. Location of Infringing Material:</strong> A specific description of where the material that you claim is infringing is located on the GALAXY CONNECT website, including the specific URLs.</li>
                            <li><strong>c. Contact Information:</strong> Information sufficient to allow us to contact you, such as your name, address, telephone number, and email address.</li>
                            <li><strong>d. Good Faith Statement:</strong> A statement that you have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                            <li><strong>e. Accuracy Statement and Penalty of Perjury:</strong> A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. DMCA Contact Information</h2>
                        <p>To file a notice of infringement with us, please contact:</p>
                        <p className="mt-3 text-emerald-400">Email: dmca@galaxyconnect.online</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Warning Against Misrepresentation</h2>
                        <p>Please be aware that under 17 U.S.C. § 512(f), any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
