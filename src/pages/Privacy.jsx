import React from "react";
import { Shield, Globe, FileText, Users, Lock, Mail, ChevronRight } from "lucide-react";

export default function Privacy() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-slate-900 via-teal-900 to-slate-900 text-white py-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-slate-200 mb-8">
                            At Insitech, we are committed to protecting your privacy and ensuring the security of your personal information.
                        </p>
                        <p className="text-sm text-slate-300">
                            Last updated: November 10, 2025
                        </p>
                    </div>
                </div>
            </section>

            {/* Policy Sections */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="space-y-12">
                        {[
                            {
                                icon: FileText,
                                title: "Information We Collect",
                                content: "We collect information you provide directly, such as when you create an account, subscribe to our newsletter, or contact us. This may include your name, email address, and company information. We also collect usage data automatically through cookies and similar technologies to improve our services."
                            },
                            {
                                icon: Users,
                                title: "How We Use Your Information",
                                content: "We use your information to provide and improve our services, communicate with you, and ensure security. This includes sending product updates, responding to inquiries, and analyzing usage patterns to enhance user experience."
                            },
                            {
                                icon: Lock,
                                title: "Data Security",
                                content: "We implement industry-standard security measures to protect your data from unauthorized access, including encryption, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure."
                            },
                            {
                                icon: Globe,
                                title: "Sharing Your Information",
                                content: "We may share your information with trusted partners for service provision, but never sell it to third parties. We may disclose information if required by law or to protect our rights."
                            },
                            {
                                icon: Shield,
                                title: "Your Rights and Choices",
                                content: "You have the right to access, update, or delete your personal information. You can manage cookie preferences and opt-out of marketing communications at any time."
                            },
                            {
                                icon: Mail,
                                title: "Contact Us",
                                content: "If you have questions about this privacy policy, contact our Data Protection Officer at privacy@insitech.com."
                            }
                        ].map((section, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <section.icon className="w-8 h-8 text-teal-600" />
                                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed">{section.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cookies Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                        Cookie Policy
                    </h2>
                    <div className="bg-slate-50 p-8 rounded-lg">
                        <p className="text-slate-600 mb-4">
                            We use cookies to enhance your experience on our site. Essential cookies are required for basic functionality, while analytics cookies help us understand how you use our site.
                        </p>
                        <p className="text-slate-600 mb-4">
                            You can manage your cookie preferences through your browser settings or our cookie consent tool.
                        </p>
                        <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors">
                            Manage Cookies
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-teal-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Questions About Privacy?
                    </h2>
                    <p className="text-xl text-teal-100 mb-8">
                        Our team is here to help with any privacy concerns
                    </p>
                    <a href="/contact" className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
                        Contact Us
                        <ChevronRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
}
