import React from "react";
import {
    Shield, Cloud, Lock, Network, Server, Eye,
    ChevronRight, ArrowRight, CheckCircle2, Building2,
    HeartHandshake, Factory
} from "lucide-react";
import { Link } from "react-router-dom";

// Reuse your existing hero-quality images
import networkHero from '../assets/security.jpg';
import cloudHero from '../assets/server.jpg';
import zeroTrustImg from '../assets/ai-security.jpg';

export default function Solutions() {
    const solutions = [
        {
            title: "Network Security",
            desc: "Defend your perimeter and internal traffic with AI-powered threat detection, next-gen firewalls, and automated response.",
            icon: Shield,
            image: networkHero,
            features: ["Next-Gen Firewall", "IPS/IDS", "Secure SD-WAN", "DDoS Mitigation"],
            link: "/solutions/network-security"
        },
        {
            title: "Cloud Security",
            desc: "Unified security across AWS, Azure, GCP, and hybrid environments with compliance automation and real-time visibility.",
            icon: Cloud,
            image: cloudHero,
            features: ["CASB", "CWPP", "CSPM", "Container Security"],
            link: "/solutions/cloud-security"
        },
        {
            title: "Zero Trust Architecture",
            desc: "Never trust, always verify. Continuous authentication and micro-segmentation for users, devices, and workloads.",
            icon: Lock,
            image: zeroTrustImg,
            features: ["Identity-Centric Security", "Micro-segmentation", "Least Privilege", "Continuous Verification"],
            link: "/solutions/zero-trust"
        },
        {
            title: "Data Protection & Privacy",
            desc: "End-to-end encryption, DLP, and privacy compliance for sensitive data at rest, in motion, and in use.",
            icon: Server,
            image: networkHero,
            features: ["Full Disk Encryption", "DLP", "Data Classification", "Privacy Compliance"],
            link: "/solutions/data-protection"
        },
        {
            title: "Endpoint & Workforce Security",
            desc: "Protect every laptop, mobile device, and remote worker with EDR, patch management, and device control.",
            icon: Network,
            image: cloudHero,
            features: ["EDR/XDR", "Mobile Device Management", "Patch Automation", "USB Control"],
            link: "/solutions/endpoint"
        },
        {
            title: "Security Operations & Response",
            desc: "24/7 SOC with AI-driven threat hunting, incident response, and integrated threat intelligence.",
            icon: Eye,
            image: zeroTrustImg,
            features: ["Managed SOC", "SIEM + SOAR", "Threat Intelligence", "Incident Response"],
            link: "/solutions/soc"
        }
    ];

    const industries = [
        {
            name: "Financial Services",
            icon: Building2,
            challenge: "PCI DSS, SWIFT CSP, and real-time fraud detection",
            result: "99.99% uptime · Zero breaches in 5 years"
        },
        {
            name: "Healthcare",
            icon: HeartHandshake,
            challenge: "HIPAA compliance across 200+ hospitals",
            result: "Protected 50M+ patient records"
        },
        {
            name: "Manufacturing & OT",
            icon: Factory,
            challenge: "Securing legacy ICS/SCADA systems",
            result: "Zero production downtime from cyber incidents"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero - Matches Home/Products/Services */}
            <section className="relative bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-600/40 to-purple-600/20"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6 leading-tight">
                            Security Solutions That Actually Work
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Enterprise-grade protection built for the real world — trusted by banks, hospitals, and governments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Schedule Risk Assessment
                            </Link>
                            <Link
                                to="/demo"
                                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
                            >
                                Watch Platform Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid - Same Card Style as Products/Services */}
            <section className="py-24 bg-linear-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                            Defense-in-Depth Architecture
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                            Complete Security Stack
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {solutions.map((sol, idx) => {
                            const Icon = sol.icon;
                            return (
                                <Link
                                    key={idx}
                                    to={sol.link}
                                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
                                >
                                    {/* Image */}
                                    <div className="relative h-72 overflow-hidden">
                                        <img
                                            src={sol.image}
                                            alt={sol.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                                        {/* Floating Icon */}
                                        <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                                            <Icon className="w-7 h-7 text-blue-600" />
                                        </div>

                                        {/* Title Overlay */}
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <h3 className="text-2xl font-bold">{sol.title}</h3>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <p className="text-slate-600 mb-6 leading-relaxed">
                                            {sol.desc}
                                        </p>

                                        <div className="space-y-3 mb-8">
                                            {sol.features.map((f, i) => (
                                                <div key={i} className="flex items-center gap-3 text-sm">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                                    <span className="text-slate-700">{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-blue-600 font-bold">
                                            Explore solution
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div className="h-1 bg-linear-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industry Success Stories */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Proven Across Industries
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Real organizations. Real threats stopped.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {industries.map((ind, idx) => {
                            const Icon = ind.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group bg-linear-to-b from-slate-50 to-white rounded-3xl p-10 border border-slate-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-500 text-center"
                                >
                                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                                        <Icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{ind.name}</h3>
                                    <p className="text-sm text-slate-600 mb-6 italic">"{ind.challenge}"</p>
                                    <p className="text-lg font-bold text-green-600">{ind.result}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Final CTA - Identical to Home */}
            <section className="py-24 bg-linear-to-r from-blue-600 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                        Ready to Eliminate Risk?
                    </h2>
                    <p className="text-xl lg:text-2xl text-blue-100 mb-12">
                        Get a free security posture assessment — no strings attached.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/assessment"
                            className="px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl text-lg"
                        >
                            Start Free Assessment
                        </Link>
                        <Link
                            to="/contact"
                            className="px-10 py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg"
                        >
                            Speak to an Expert
                        </Link>
                    </div>
                    <p className="mt-8 text-blue-200">
                        Average time to complete: 12 minutes · 500+ enterprises secured
                    </p>
                </div>
            </section>
        </div>
    );
}