import { Shield, Cloud, Network, Users, Award, ChevronRight, Download, BookOpen, Video, Lightbulb } from "lucide-react";
import banner from '../assets/banner.jpg'

export default function Home() {

    return (
        <div className="bg-white">
            {/* Hero Section - Enhanced with Banner Image */}
            <section className="relative bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
                {/* Background layers */}
                <div className="absolute inset-0 opacity-30">
                    {/* Banner image layer */}
                    <img
                        src={banner}
                        alt="AI at the edge in industrial setting"
                        className="absolute inset-0 w-full h-full object-cover object-right"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-600/40 to-purple-600/40 mix-blend-overlay"></div>
                    {/* Simulated network pattern overlay */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)',
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
                    <div className="flex flex-col items-center justify-center text-center z-10">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 max-w-4xl">
                            Cybersecurity's new frontier: the edge
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
                            Secure AI at the edge by bringing compute, networking, and security closer to where data is created. Experience seamless, real-time experiences and new value with Insitech.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#solutions" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-colors shadow-lg">
                                See what's possible
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quick Links Bar - Cisco Style */}
                <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="flex items-center justify-center gap-8 overflow-x-auto">
                            {[
                                { icon: Download, label: 'Downloads' },
                                { icon: Award, label: 'Certifications' },
                                { icon: BookOpen, label: 'Documentation' },
                                { icon: Users, label: 'Community' },
                                { icon: Lightbulb, label: 'Support' }
                            ].map((item, idx) => (
                                <a key={idx} href="#" className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group min-w-fit">
                                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Critical Infrastructure Section - Cisco Style */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Critical infrastructure for the AI era
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                image: "dashboard",
                                title: "Unified Nexus Dashboard",
                                desc: "Simplify your data center network with Insitech Nexus Dashboard. One centralized policy across hardware, software, and cloud.",
                                cta: "Explore Nexus Dashboard",
                                link: "View data sheet"
                            },
                            {
                                image: "edge",
                                title: "Insitech Unified Edge",
                                desc: "Not a server. A full-stack compute platform with AI-ready architecture. Deploy, manage, and scale apps.",
                                cta: "Explore Unified Edge",
                                link: "View data sheet"
                            },
                            {
                                image: "security",
                                title: "Spark Enterprise Security",
                                desc: "Enterprise Security is now an AI-powered SecOps platform with SIEM, SOAR, XDR, threat intelligence, and more.",
                                cta: "Explore Spark Enterprise Security",
                                link: "Get free trial"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all group">
                                {/* Image placeholder */}
                                <div className="relative h-64 bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                                    {idx === 0 && (
                                        <div className="relative w-full h-full flex items-center justify-center p-8">
                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="h-12 bg-blue-500/20 rounded"></div>
                                                    <div className="h-12 bg-purple-500/20 rounded"></div>
                                                    <div className="h-12 bg-cyan-500/20 rounded"></div>
                                                    <div className="h-12 bg-green-500/20 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {idx === 1 && (
                                        <div className="relative">
                                            <div className="w-40 h-40 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                                            <Network className="absolute inset-0 m-auto w-20 h-20 text-white" />
                                        </div>
                                    )}
                                    {idx === 2 && (
                                        <div className="relative w-full h-full p-8">
                                            <div className="space-y-2">
                                                {[...Array(6)].map((_, i) => (
                                                    <div key={i} className={`h-6 rounded ${i % 3 === 0 ? 'bg-red-500/40' : i % 3 === 1 ? 'bg-yellow-500/40' : 'bg-green-500/40'}`} style={{ width: `${60 + Math.random() * 40}%` }}></div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                                    <button className="w-full px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors mb-3">
                                        {item.cta}
                                    </button>
                                    <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                                        {item.link}
                                        <ChevronRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Driving Innovation Section - Cisco Style */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Driving AI innovation
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl">
                            Insitech is combining the power of the network with security, observability, and collaboration to lead you into the new AI era.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                image: "panel",
                                title: "Announcing Cisco AI",
                                subtitle: "Introducing Cisco AI Agents",
                                desc: "Watch how AI Agents' generative capabilities, including agent, insights, and team collaboration features, impact-related outcomes.",
                                links: ["Watch AI Agents demo", "Learn about our agents AI approach"]
                            },
                            {
                                image: "defense",
                                title: "Cisco AI Defense: Securing the future of AI",
                                desc: "Secure your organization's AI applications and usage with the network to identify, classify, detect, quarantine, and block malicious activity and AI attacks.",
                                links: ["Learn about AI Defense", "Request a demo"]
                            },
                            {
                                image: "factory",
                                title: "Cisco Secure AI Factory by NVIDIA",
                                desc: "From AI POCs for inferencing and training to fully managed 'Hyperscale AI space', watch how Cisco and NVIDIA are accelerating enterprise AI with security.",
                                links: ["Explore Secure AI Factory", "Learn about our AI infrastructure"]
                            },
                            {
                                image: "datacenter",
                                title: "Mass-scale AI infrastructure",
                                desc: "Unlock scalable, high-performance AI with our portfolio of advanced AI network, compute, and storage solutions.",
                                links: ["Explore enhanced AI portfolio", "Learn about Cisco Silicon One Advantage"]
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                {/* Image placeholder */}
                                <div className="relative h-48 bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                    {idx === 0 && (
                                        <Users className="w-16 h-16 text-blue-400" />
                                    )}
                                    {idx === 1 && (
                                        <div className="relative">
                                            <div className="w-24 h-24 border-4 border-red-500 rounded-full animate-pulse"></div>
                                            <Shield className="absolute inset-0 m-auto w-12 h-12 text-red-400" />
                                        </div>
                                    )}
                                    {idx === 2 && (
                                        <div className="flex items-center gap-4">
                                            <div className="text-white font-bold text-2xl">INSITECH</div>
                                            <div className="text-2xl text-white">×</div>
                                            <div className="text-white font-bold text-xl">Partner</div>
                                        </div>
                                    )}
                                    {idx === 3 && (
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <div className="grid grid-cols-3 gap-2 p-6">
                                                {[...Array(9)].map((_, i) => (
                                                    <div key={i} className="w-12 h-16 bg-slate-600 rounded"></div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                    {item.subtitle && (
                                        <p className="text-sm font-semibold text-slate-700 mb-2">{item.subtitle}</p>
                                    )}
                                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                                    <div className="space-y-2">
                                        {item.links.map((link, i) => (
                                            <a key={i} href="#" className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                                                {link}
                                                <ChevronRight className="w-4 h-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                                Explore more AI news
                            </button>
                            <a href="#" className="px-6 py-3 text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                                Why Cisco for the AI era
                                <ChevronRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Browse by Technology - Cisco Style */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Browse by technology
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: Network, label: "Networking" },
                            { icon: Shield, label: "Security" },
                            { icon: Users, label: "Observability" },
                            { icon: Video, label: "Collaboration" },
                            { icon: Cloud, label: "Computing" },
                            { icon: Lightbulb, label: "AI" }
                        ].map((item, idx) => (
                            <a key={idx} href="#" className="flex flex-col items-center gap-3 p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all group">
                                <item.icon className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-slate-900">{item.label}</span>
                            </a>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                                Browse all products
                            </button>
                            <a href="#" className="px-6 py-3 text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                                Browse all services
                                <ChevronRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inside Insitech Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                            Inside Insitech
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                category: "Unified Edge Blog",
                                title: "AI isn't waiting for the data center",
                                link: "Read blog"
                            },
                            {
                                category: "Blog",
                                title: "Insitech software that makes distributed quantum safe easy",
                                link: "Read about our systems-level approach"
                            },
                            {
                                category: "Podcast",
                                title: "Explore Insitech AI POCs: Scalable, secure designs for training, hybrid workloads, and AI deployment",
                                link: "Learn about Insitech top AI innovations"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border-b-4 border-blue-600 p-6 hover:shadow-lg transition-shadow">
                                <div className="text-sm font-semibold text-slate-700 mb-3">{item.category}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 leading-tight">{item.title}</h3>
                                <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                                    {item.link}
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section - Cisco Style */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                We've got you covered
                            </h2>
                            <p className="text-lg text-slate-300 max-w-2xl">
                                The Insitech difference. Your competitive edge. When you choose Insitech, you get over 40 years of trust, expertise, and innovation.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap">
                                Meet our partners
                            </button>
                            <a href="#" className="px-6 py-3 text-white font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap">
                                Become a partner
                                <ChevronRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}