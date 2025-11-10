import { Shield, Cloud, Lock, Network, Server, Eye, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";

export default function Solutions() {
    const solutions = [
        {
            icon: Shield,
            title: "Network Security",
            desc: "Comprehensive network protection with next-generation firewalls, intrusion prevention, and advanced threat detection.",
            features: ["Next-Gen Firewall", "IPS/IDS", "VPN Solutions", "DDoS Protection"]
        },
        {
            icon: Cloud,
            title: "Cloud Security",
            desc: "Secure your multi-cloud environment with unified security policies, compliance automation, and real-time monitoring.",
            features: ["Multi-Cloud Security", "CASB", "Cloud Workload Protection", "Container Security"]
        },
        {
            icon: Lock,
            title: "Data Protection",
            desc: "End-to-end encryption, data loss prevention, and access control to safeguard your sensitive information.",
            features: ["Data Encryption", "DLP", "Key Management", "Secure Backup"]
        },
        {
            icon: Network,
            title: "Zero Trust Architecture",
            desc: "Identity-based security model that verifies every user and device attempting to access your resources.",
            features: ["Identity Management", "Micro-segmentation", "Least Privilege Access", "Continuous Verification"]
        },
        {
            icon: Server,
            title: "Endpoint Security",
            desc: "Protect all endpoints with advanced threat prevention, detection, and response capabilities.",
            features: ["EDR", "Antivirus", "Device Control", "Patch Management"]
        },
        {
            icon: Eye,
            title: "Security Monitoring",
            desc: "24/7 security operations center with real-time threat detection and incident response.",
            features: ["SIEM", "SOC Services", "Threat Intelligence", "Incident Response"]
        }
    ];

    const useCases = [
        {
            industry: "Financial Services",
            challenge: "Meeting strict regulatory compliance while protecting customer data",
            solution: "Implemented comprehensive data protection and compliance automation"
        },
        {
            industry: "Healthcare",
            challenge: "Securing patient data across multiple facilities and cloud platforms",
            solution: "Deployed zero-trust architecture with end-to-end encryption"
        },
        {
            industry: "Manufacturing",
            challenge: "Protecting operational technology from cyber threats",
            solution: "Network segmentation and IoT security solutions"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            Security Solutions for Every Challenge
                        </h1>
                        <p className="text-xl text-slate-200 mb-8">
                            Comprehensive cybersecurity solutions designed to protect your organization from evolving threats while enabling business growth.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-colors">
                                Schedule Consultation
                            </button>
                            <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                                View Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Comprehensive Security Solutions
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Layered defense strategies to protect your entire digital infrastructure
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <solution.icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">{solution.desc}</p>
                                <div className="space-y-2 mb-6">
                                    {solution.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <a href="#" className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                                    Learn more
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Use Cases */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Industry-Specific Solutions
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Tailored security strategies for your industry's unique challenges
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {useCases.map((useCase, idx) => (
                            <div key={idx} className="bg-white border-b-4 border-blue-600 rounded-lg p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{useCase.industry}</h3>
                                <div className="mb-4">
                                    <div className="text-sm font-semibold text-slate-700 mb-2">Challenge:</div>
                                    <p className="text-slate-600 text-sm">{useCase.challenge}</p>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-700 mb-2">Solution:</div>
                                    <p className="text-slate-600 text-sm">{useCase.solution}</p>
                                </div>
                                <a href="#" className="mt-6 text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                                    View case study
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Ready to Secure Your Organization?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Let's discuss how our solutions can address your specific security challenges
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors">
                            Get Started Today
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}