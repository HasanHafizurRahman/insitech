import { Shield, Cloud, Network, Users, Award, ChevronRight, Download, BookOpen, Video, Lightbulb, LayoutDashboard, Cpu, Server, Computer } from "lucide-react";
import banner from '../assets/banner.jpg'
import dashboard from '../assets/dashboard.jpg';
import server from '../assets/server.jpg';
import security from '../assets/security.jpg';
import NVIDIA from '../assets/NVIDIA.jpg';
import AiSecurity from '../assets/ai-security.jpg';
import Ai from '../assets/ai.jpg';
import { Link } from "react-router-dom";

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
                        className="absolute inset-0 w-full h-full object-cover object-center lg:object-right"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-600/40 to-purple-600/40 mix-blend-overlay"></div>
                    {/* Simulated network pattern overlay */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)',
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-24">
                    <div className="flex flex-col items-center justify-center text-center z-10">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 max-w-4xl">
                            Cybersecurity's new frontier: the edge
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
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
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
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

            {/* Critical Infrastructure Section - Enhanced with Images */}
            <section className="py-20 bg-linear-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                                Infrastructure Solutions
                            </span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Critical infrastructure for the AI era
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Power your enterprise with integrated solutions designed for the future
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                image: dashboard,
                                title: "Unified Nexus Dashboard",
                                desc: "Simplify your data center network with Insitech Nexus Dashboard. One centralized policy across hardware, software, and cloud.",
                                cta: "Explore Nexus Dashboard",
                                link: "View data sheet",
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                image: server,
                                title: "Insitech Unified Edge",
                                desc: "Not a server. A full-stack compute platform with AI-ready architecture. Deploy, manage, and scale apps.",
                                cta: "Explore Unified Edge",
                                link: "View data sheet",
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                image: security,
                                title: "Spark Enterprise Security",
                                desc: "Enterprise Security is now an AI-powered SecOps platform with SIEM, SOAR, XDR, threat intelligence, and more.",
                                cta: "Explore Spark Enterprise Security",
                                link: "Get free trial",
                                gradient: "from-red-500 to-orange-500"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300">
                                {/* Image Container with Overlay */}
                                <div className="relative h-72 overflow-hidden">
                                    {/* Actual Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

                                    {/* Bottom Fade */}
                                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/60 to-transparent"></div>

                                    {/* Floating Icon Indicator */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {idx === 0 && <LayoutDashboard className="w-6 h-6 text-gray-600" />}
                                        {idx === 1 && <Cloud className="w-6 h-6 text-purple-600" />}
                                        {idx === 2 && <Shield className="w-6 h-6 text-red-600" />}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-base mb-6 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* Primary CTA */}
                                    <button className="w-full px-6 py-3.5 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 mb-4 shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
                                        {item.cta}
                                    </button>

                                    {/* Secondary Link */}
                                    <a href="#" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all group/link">
                                        {item.link}
                                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className={`h-1 bg-linear-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info Banner */}
                    <div className="mt-16 bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
                        <p className="text-lg font-semibold mb-2">Need help choosing the right solution?</p>
                        <p className="text-blue-100 mb-4">Our experts are ready to guide you through your digital transformation journey</p>
                        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition-colors shadow-lg">
                            Talk to an Expert
                        </button>
                    </div>
                </div>
            </section>

            {/* Driving Innovation Section - Enhanced with Images */}
            <section className="bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                                AI Innovation
                            </span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Driving AI innovation
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Insitech is combining the power of the network with security, observability, and collaboration to lead you into the new AI era.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                image: Ai,
                                title: "Announcing Insitech AI",
                                subtitle: "Introducing Insitech AI Agents",
                                desc: "Watch how AI Agents' generative capabilities, including agent, insights, and team collaboration features, impact-related outcomes.",
                                links: ["Watch AI Agents demo", "Learn about our agents AI approach"],
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                image: AiSecurity,
                                title: "Insitech AI Defense: Securing the future of AI",
                                desc: "Secure your organization's AI applications and usage with the network to identify, classify, detect, quarantine, and block malicious activity and AI attacks.",
                                links: ["Learn about AI Defense", "Request a demo"],
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                image: NVIDIA,
                                title: "Insitech Secure AI Factory by NVIDIA",
                                desc: "From AI POCs for inferencing and training to fully managed 'Hyperscale AI space', watch how Insitech and NVIDIA are accelerating enterprise AI with security.",
                                links: ["Explore Secure AI Factory", "Learn about our AI infrastructure"],
                                gradient: "from-red-500 to-orange-500"
                            },
                            {
                                image: "https://blogs.microsoft.com/wp-content/uploads/2025/09/OMB-Image-1-Datacenter.jpg",
                                title: "Mass-scale AI infrastructure",
                                desc: "Unlock scalable, high-performance AI with our portfolio of advanced AI network, compute, and storage solutions.",
                                links: ["Explore enhanced AI portfolio", "Learn about Insitech Silicon One Advantage"],
                                gradient: "from-green-500 to-teal-500"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300">
                                {/* Image Container with Overlay */}
                                <div className="relative h-48 overflow-hidden">
                                    {/* Actual Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

                                    {/* Bottom Fade */}
                                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/60 to-transparent"></div>

                                    {/* Floating Icon Indicator */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {idx === 0 && <Computer className="w-6 h-6 text-blue-600" />}
                                        {idx === 1 && <Shield className="w-6 h-6 text-purple-600" />}
                                        {idx === 2 && <Cpu className="w-6 h-6 text-red-600" />}
                                        {idx === 3 && <Server className="w-6 h-6 text-green-600" />}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    {item.subtitle && (
                                        <p className="text-base font-semibold text-slate-700 mb-2">{item.subtitle}</p>
                                    )}
                                    <p className="text-slate-600 text-base mb-6 leading-relaxed">
                                        {item.desc}
                                    </p>
                                    <div className="space-y-3">
                                        {item.links.map((link, i) => (
                                            <a key={i} href="#" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all group/link">
                                                {link}
                                                <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className={`h-1 bg-linear-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info Banner */}
                    <div className="mt-16 bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
                        <p className="text-lg font-semibold mb-2">Ready to accelerate your AI journey?</p>
                        <p className="text-blue-100 mb-4">Discover how Insitech can power your AI innovations</p>
                        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition-colors shadow-lg">
                            Get Started with AI
                        </button>
                    </div>
                </div>
            </section>

            {/* Browse by Technology - Enhanced Design */}
            <section className="py-20 bg-linear-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Browse by technology
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                        {[
                            {
                                icon: "networking",
                                label: "Networking",
                                svg: <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.8" />
                                    <circle cx="52" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.8" />
                                    <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.8" />
                                    <circle cx="12" cy="52" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.8" />
                                    <circle cx="52" cy="52" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.8" />
                                    <line x1="14" y1="14" x2="30" y2="30" stroke="currentColor" strokeWidth="2" />
                                    <line x1="34" y1="30" x2="50" y2="14" stroke="currentColor" strokeWidth="2" />
                                    <line x1="30" y1="34" x2="14" y2="50" stroke="currentColor" strokeWidth="2" />
                                    <line x1="34" y1="34" x2="50" y2="50" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            },
                            {
                                icon: "security",
                                label: "Security",
                                svg: <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32 8L16 16V28C16 40 22 48 32 56C42 48 48 40 48 28V16L32 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                                    <path d="M32 20C32 20 28 24 28 28C28 32 32 36 32 36C32 36 36 32 36 28C36 24 32 20 32 20Z" fill="currentColor" opacity="0.3" />
                                    <circle cx="32" cy="28" r="2" fill="currentColor" />
                                    <path d="M32 30V38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M28 36C28 36 30 38 32 38C34 38 36 36 36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            },
                            {
                                icon: "observability",
                                label: "Observability",
                                svg: <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2.5" />
                                    <circle cx="32" cy="32" r="5" fill="currentColor" opacity="0.8" />
                                    <line x1="32" y1="8" x2="32" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="32" y1="48" x2="32" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="8" y1="32" x2="16" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="48" y1="32" x2="56" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="43" y1="43" x2="49" y2="49" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="49" y1="15" x2="43" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="21" y1="43" x2="15" y2="49" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            },
                            {
                                icon: "collaboration",
                                label: "Collaboration",
                                svg: <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2" />
                                    <circle cx="44" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2" />
                                    <circle cx="32" cy="42" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2" />
                                    <path d="M24 24L29 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <path d="M40 24L35 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <circle cx="20" cy="20" r="2.5" fill="currentColor" />
                                    <circle cx="44" cy="20" r="2.5" fill="currentColor" />
                                    <circle cx="32" cy="42" r="2.5" fill="currentColor" />
                                </svg>
                            },
                            {
                                icon: "computing",
                                label: "Computing",
                                svg: <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="12" y="16" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="2.5" />
                                    <rect x="16" y="20" width="32" height="16" fill="currentColor" opacity="0.2" />
                                    <line x1="20" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="20" y1="28" x2="36" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="20" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="24" y1="48" x2="40" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="32" y1="44" x2="32" y2="48" stroke="currentColor" strokeWidth="2.5" />
                                </svg>
                            },
                            {
                                icon: "ai",
                                label: "AI",
                                svg: <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32 12L36 22L46 18L42 28L52 32L42 36L46 46L36 42L32 52L28 42L18 46L22 36L12 32L22 28L18 18L28 22L32 12Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2" />
                                    <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.3" />
                                    <path d="M32 8V16M32 48V56M8 32H16M48 32H56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            }
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="group relative flex flex-col items-center justify-center gap-4 p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Subtle gradient background on hover */}
                                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Icon container with background circle */}
                                <div className="relative z-10 w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-all duration-300 group-hover:scale-110">
                                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                                        {item.svg}
                                    </div>
                                </div>

                                {/* Label */}
                                <span className="relative z-10 text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {item.label}
                                </span>

                                {/* Hover indicator */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            to="/products"
                            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            Browse all products
                        </Link>

                        <Link
                            to="/services"
                            className="group px-8 py-4 text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all duration-300"
                        >
                            Browse all services
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Inside Insitech Section */}
            <section className="py-24 bg-linear-to-b from-slate-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('/path/to/subtle-pattern.svg')] bg-repeat"></div> {/* Optional subtle background pattern */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                            Inside Insitech
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                            Discover our latest insights, innovations, and thought leadership in AI, quantum computing, and edge technologies.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                category: "Unified Edge Blog",
                                title: "AI isn't waiting for the data center",
                                link: "Read blog",
                                icon: "BookOpen", // Assuming lucide-react icons are available; replace with actual icon component
                                description: "Exploring the future of edge AI and its immediate impacts."
                            },
                            {
                                category: "Blog",
                                title: "Insitech software that makes distributed quantum safe easy",
                                link: "Read about our systems-level approach",
                                icon: "Cpu",
                                description: "Dive into our comprehensive strategy for quantum-secure systems."
                            },
                            {
                                category: "Podcast",
                                title: "Explore Insitech AI POCs: Scalable, secure designs for training, hybrid workloads, and AI deployment",
                                link: "Learn about Insitech top AI innovations",
                                icon: "Mic",
                                description: "Listen to experts discuss cutting-edge AI proof-of-concepts."
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                            {item.category}
                                        </div>
                                        {/* Icon placeholder; use actual icon component */}
                                        <item.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 mb-6 grow">
                                        {item.description} {/* Added short description for better engagement */}
                                    </p>
                                    <a
                                        href="#"
                                        className="text-blue-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all group"
                                    >
                                        {item.link}
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                                <div className="h-1 bg-linear-to-r from-blue-600 to-blue-400"></div> {/* Gradient bottom border */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section - Cisco Style */}
            <section className="py-20  bg-linear-to-r from-blue-600 to-blue-700 text-white">
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