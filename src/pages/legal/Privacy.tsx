
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function Privacy() {
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

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                <p className="text-slate-500 mb-8">Last Updated: November 2024</p>

                <div className="prose prose-slate max-w-none">
                    <section className="bg-slate-900/50 border border-white/5 rounded-lg p-6">
                        <p className="text-sm text-slate-500 mb-2">Last Updated: November 2024</p>
                        <p className="text-white font-semibold">GALAXY CONNECT Streaming Service</p>
                        <p className="text-sm mt-2">Contact: support@galaxyconnect.online | +33 7 45 88 96 74</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                        <p className="mb-3">At GALAXY CONNECT, along with our parent and affiliates (hereinafter referred to as "GALAXY CONNECT", "we", "us", or "our"), we are committed to safeguarding the privacy and security of the information we collect from our users. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your information across our various digital platforms.</p>
                        <p className="mb-3">This policy applies to all information collected through GALAXY CONNECT's websites, including galaxyconnect.online (the "Site"), our mobile applications (the "Apps"), and other digital services and platforms that are operated by us and link to this Privacy Policy (collectively referred to as the "Services").</p>
                        <p className="mb-3">Your access and use of the Services are subject to this Privacy Policy and our Terms of Service. Please note that this policy may be supplemented or amended by additional privacy terms or notices set forth in certain areas of the Services.</p>
                        <p className="mb-3">The information collected through the Services is managed by GALAXY CONNECT. We urge you to read this policy thoroughly to understand our practices regarding your information. If you disagree with any part of this policy, please refrain from using our Services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Information Collection</h2>
                        <p className="mb-3">We gather a diverse range of information about you through your interaction with our Services. It is important to note that certain types of information are critical for us to provide specific Services. If you choose not to provide such information, or request its deletion, you might lose access to certain functionalities of our Services.</p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">Information You Provide to Us</h3>
                        <p className="mb-3">Direct interactions with our Services are a primary source of information collection. Examples of such interactions include:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-3">
                            <li>Registering and managing your account</li>
                            <li>Processing your requests and transactions</li>
                            <li>Communication with us through various mediums including our website, mobile app, social media platforms, email, or mail</li>
                            <li>Participation in surveys, promotions, or research initiatives</li>
                            <li>Posting reviews, comments, or other content on our Services</li>
                            <li>Requests for customer support and technical assistance</li>
                        </ul>

                        <p className="mb-3">The information you provide can include, but is not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Account Registration Information:</strong> For services requiring an account, such as your email, password, zip code, and third-party single sign-on credentials (like Google or Facebook). We use these credentials for authentication purposes but do not receive your third-party login details.</li>
                            <li><strong>Contact and Profile Information:</strong> This can include additional contact details, biographic information, or other profile-related data.</li>
                            <li><strong>Financial Information:</strong> For certain Services, we collect financial information like credit or debit card details, necessary for processing transactions.</li>
                            <li><strong>Transactional Information:</strong> Details of your interactions and transactions within the Services, including purchases and content preferences.</li>
                            <li><strong>Feedback and Communication Data:</strong> Any feedback, comments, or queries submitted through our customer service channels.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">Information Collected Automatically</h3>
                        <p className="mb-3">In addition to the information you provide, we collect certain information automatically through:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Location Information:</strong> We collect geolocation data to verify your eligibility for certain Services, improve location-based offerings, and comply with legal requirements. This may include GPS coordinates, Wi-Fi detection, or other location verification technology.</li>
                            <li><strong>Device and Usage Information:</strong> This encompasses your IP address, browser characteristics, device identifiers, platform type, and operating system. We also collect usage data like pages visited, interaction with content, and time spent on the Services.</li>
                        </ul>
                        <p className="mt-3">Our service providers and we might also aggregate and combine this information with data about your online activities over time, including the use of other devices, websites, or apps, if they use the same vendors.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="mb-3">The information we collect is utilized for various business and operational purposes, ensuring the effective delivery and improvement of our Services. Specifically, we use your information to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Administer Your Account:</strong> This includes processing your registration, verifying your identity, confirming your location eligibility, and tracking your transactions.</li>
                            <li><strong>Service Management and Improvement:</strong> We aim to provide a seamless experience across different platforms and devices and continually enhance the functionality and user-friendliness of our Services.</li>
                            <li><strong>Updates and Communication:</strong> We keep you informed about updates, changes, and developments related to our Services, including transactional updates.</li>
                            <li><strong>Customer Service:</strong> We use your information to respond efficiently to your requests and queries, including through interactive chat functions and other customer support channels.</li>
                            <li><strong>Internal Business Operations:</strong> Our use of your data extends to internal audits, security enhancements, fraud prevention, invoicing, analytics, and research and development activities.</li>
                            <li><strong>Marketing and Communication:</strong> We may contact you regarding our products, services, surveys, promotions, and special events that we believe might interest you.</li>
                            <li><strong>Customization and Personalization:</strong> Tailoring content and advertising based on your preferences and interactions with our Services, enhancing your overall user experience.</li>
                            <li><strong>Promotions and Surveys:</strong> We utilize the information to conduct contests, sweepstakes, and surveys, ensuring that these initiatives are relevant and engaging.</li>
                            <li><strong>Legal Compliance and Rights Protection:</strong> We use your information to comply with legal and regulatory requirements, to protect our legal rights, and to ensure the safety and security of our Services, employees, and users.</li>
                        </ul>
                        <p className="mt-3">Please note that we may combine the information collected with other data from different sources, aligning with the practices outlined in this Privacy Policy. Additionally, we may anonymize or de-identify the collected data, making it impossible to link back to you. Such anonymized data may be used for research, marketing, or other purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. How We Disclose Your Information</h2>
                        <p className="mb-3">In conducting our operations and providing our Services, we may disclose the information we collect from and about you as follows:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Service Providers:</strong> We share information with third-party service providers who perform various functions on our behalf, such as technical support, marketing, analytics, customer service, payment processing, and security.</li>
                            <li><strong>Affiliates and Subsidiaries:</strong> Your information may be shared with our current or future affiliates and subsidiaries for operational purposes.</li>
                            <li><strong>Measurement and Analytics Companies:</strong> Information about your interaction with our Services is shared with analytics providers for performance measurement and improvement.</li>
                            <li><strong>Co-Branded and Joint Offerings:</strong> For services offered in partnership with third parties or through sponsorship arrangements, your information may be shared with or collected directly by these third parties.</li>
                            <li><strong>Advertisers and Advertising Networks:</strong> We disclose information to third-party advertisers and networks to tailor and serve relevant advertisements on our Services and other platforms.</li>
                            <li><strong>Legal and Compliance Reasons:</strong> We may disclose your information when legally required or to protect our rights and safety, or the safety of our users.</li>
                            <li><strong>Business Transfers:</strong> In the event of mergers, acquisitions, or asset sales, your information may be transferred as part of the transaction.</li>
                            <li><strong>User-Shared Information:</strong> Information that you choose to share on our Services may be accessible to other users or through integrations with third-party services.</li>
                            <li><strong>Your Consent:</strong> We may disclose your information for other purposes with your explicit consent.</li>
                        </ul>
                        <p className="mt-3">We also reserve the right to share aggregated or anonymized information with third parties for various purposes, including marketing and advertising.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies and Similar Technologies</h2>
                        <p className="mb-3">To facilitate and enhance your experience with our Services, GALAXY CONNECT and our service providers employ various tracking technologies, including cookies and similar tools. These are utilized to gather information as outlined in the "Information We Collect Through Automated Means" section. The types of technologies we use include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Web Server Logs:</strong> These logs record website activity and are essential for our service operation.</li>
                            <li><strong>Cookies:</strong> Small text files placed on your device, enabling us to recognize your device, store your preferences and settings, enhance content and advertising effectiveness, conduct analytics, and ensure security.</li>
                            <li><strong>Tracking Pixels:</strong> Also known as web beacons or clear GIFs, these are used to collect usage information and help in content and advertising effectiveness.</li>
                        </ul>
                        <p className="mt-3">You have control over the use of cookies on your devices. While disabling certain cookies can affect the accessibility and performance of our Services, you can manage your preferences through your browser settings.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Online Analytics and Advertising</h2>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">Analytics</h3>
                        <p className="mb-3">To gain insights into how our Services are used, we employ third-party web analytics services, like Google Analytics. These services use cookies and similar technologies to analyze how users interact with our Services, for auditing, research, and fraud prevention purposes.</p>
                        <p className="mb-3">We also utilize analytics tools in our emails to capture data such as when you open our message or click on any included links or banners. This helps us measure the effectiveness of our communications and marketing campaigns.</p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">Online Advertising</h3>
                        <p className="mb-3">Our Services may allow third-party advertising technologies to place cookies or other tracking technologies on your devices. This collection of information assists in delivering relevant advertising on other websites and services you visit.</p>
                        <p>Opting out of tailored advertising does not prevent you from seeing ads; rather, the ads may be less relevant to you. Opt-out preferences are specific to each device and browser used to access our Services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. How We Protect Your Information</h2>
                        <p className="mb-3">The security of your information is of paramount importance to us. We store the data collected through our Services on secure servers. We implement a variety of security measures designed to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include both electronic and physical safeguards, along with managerial procedures to oversee the collection, storage, and processing of personal data.</p>
                        <p>Despite our efforts, no method of transmission over the Internet or method of electronic storage is completely secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. As part of our commitment to your privacy, we advise you to take steps to protect your personal information online, including keeping your account details and passwords confidential.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Retention of Information</h2>
                        <p className="mb-3">At GALAXY CONNECT, we retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. The duration for which we retain your information depends on various factors, including the nature of the data, the purposes for which it is processed, and our legal or regulatory obligations.</p>
                        <p>We regularly review our data retention policies to ensure that your information is not kept for longer than is legally permissible or necessary for our business purposes. Once the retention period expires, we take appropriate steps to delete or anonymize your personal information so that it can no longer be associated with you.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Third-Party Links and Features</h2>
                        <p className="mb-3">Our Services may include links to third-party websites, plug-ins, and features. These third-party services are not operated by us, and when you interact with them, you may be providing information directly to the third party, as well as to other users or the public. Your use of these third-party services is subject to their own privacy policies and terms of service, not ours.</p>
                        <p>We are not responsible for the content, privacy practices, or security measures of any third-party websites or services, even if you access them through our Services. We encourage you to be aware when you leave our Services and to read the privacy policies of each website you visit. This will help you understand how your personal information is collected, used, and shared by these third-party sites.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Your Rights & Choices Regarding Your Information</h2>
                        <p className="mb-3">You have certain rights and choices regarding the personal information we collect and process. These include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Opting Out of Marketing Communications:</strong> If you no longer wish to receive marketing communications from us, you can opt out by following the instructions provided in those communications or by contacting us directly.</li>
                            <li><strong>Accessing and Updating Your Information:</strong> You have the right to access and update your personal information that we hold. You can often do this through your account settings.</li>
                            <li><strong>Withdrawing Consent:</strong> Where you have provided your consent to the collection, processing, and transfer of your personal information, you have the legal right to withdraw your consent under certain circumstances.</li>
                            <li><strong>Opting Out of Cookies:</strong> You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">11. Additional Information for California Residents</h2>
                        <p className="mb-3">If you are a resident of California, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA). These rights include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>The Right to Know:</strong> You have the right to request information about the categories and specific pieces of personal information we have collected about you.</li>
                            <li><strong>The Right to Request Deletion:</strong> You can request the deletion of your personal information that we have collected, subject to certain exceptions.</li>
                            <li><strong>The Right to Opt-Out of Sale:</strong> California residents have the right to opt-out of the sale of their personal information to third parties.</li>
                            <li><strong>The Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">12. Children's Privacy</h2>
                        <p className="mb-3">GALAXY CONNECT recognizes the importance of protecting the privacy and safety of children. Our Services are not intended for children under the age of 13, and we do not knowingly collect personal information from children under this age.</p>
                        <p>If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we take steps to remove that information from our servers. If you are a parent or guardian and believe that your child under 13 has provided us with personal information without your consent, please contact us.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">13. Changes to Our Privacy Policy</h2>
                        <p className="mb-3">GALAXY CONNECT reserves the right to amend this Privacy Policy at any time. We will make the revised Privacy Policy accessible through the Services, so you should review it periodically to stay informed of any changes. The date of the most recent revision will be indicated at the top of the Privacy Policy.</p>
                        <p>If we make material changes to the policy, we will provide you with appropriate notice in accordance with legal requirements, such as by posting a notice on our Services or sending you an email. Your continued use of the Services after any changes to this Privacy Policy will constitute your acceptance of such changes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Information</h2>
                        <div className="bg-slate-900/50 border border-white/5 rounded-lg p-4 mt-3">
                            <p className="font-semibold text-white mb-2">For any questions, concerns, or comments about this Privacy Policy or our privacy practices, or if you need to update, change, or remove your personal information, or exercise any other rights, please contact us using the following details:</p>
                            <p>Email: <a href="mailto:privacy@galaxyconnect.online" className="text-emerald-600 hover:underline">privacy@galaxyconnect.online</a></p>
                            <p className="mt-3 text-sm">Your inquiries are important to us, and we endeavor to respond to your requests promptly and adequately. We value your trust in our Services and are committed to ensuring that your personal information is handled responsibly and in accordance with this Privacy Policy.</p>
                        </div>
                    </section>

                    <section className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-emerald-600 mb-3">GDPR Compliance (EU Users)</h3>
                        <p>If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR). We are committed to GDPR compliance and will respond to your requests within 30 days.</p>
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
