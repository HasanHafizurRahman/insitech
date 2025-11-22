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
            <section className="relative bg-linear-to-r from-slate-900 via-teal-900 to-slate-900 text-white overflow-hidden">
                {/* Background layers */}
                <div className="absolute inset-0 opacity-30">
                    {/* Banner image layer */}
                    <img
                        src={banner}
                        alt="AI at the edge in industrial setting"
                        className="absolute inset-0 w-full h-full object-cover object-center lg:object-right"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-teal-600/40 to-purple-600/40 mix-blend-overlay"></div>
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
                            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider bg-teal-50 px-4 py-2 rounded-full">
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
                                gradient: "from-teal-500 to-cyan-500"
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
                            <div key={idx} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-teal-300">
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
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-base mb-6 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* Primary CTA */}
                                    <button className="w-full px-6 py-3.5 bg-linear-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 mb-4 shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
                                        {item.cta}
                                    </button>

                                    {/* Secondary Link */}
                                    <a href="#" className="text-teal-600 text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all group/link">
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
                    <div className="mt-16 bg-linear-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white text-center">
                        <p className="text-lg font-semibold mb-2">Need help choosing the right solution?</p>
                        <p className="text-teal-100 mb-4">Our experts are ready to guide you through your digital transformation journey</p>
                        <button className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-slate-100 transition-colors shadow-lg">
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
                            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider bg-teal-50 px-4 py-2 rounded-full">
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
                                gradient: "from-teal-500 to-cyan-500"
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
                            <div key={idx} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-teal-300">
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
                                        {idx === 0 && <Computer className="w-6 h-6 text-teal-600" />}
                                        {idx === 1 && <Shield className="w-6 h-6 text-purple-600" />}
                                        {idx === 2 && <Cpu className="w-6 h-6 text-red-600" />}
                                        {idx === 3 && <Server className="w-6 h-6 text-green-600" />}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
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
                                            <a key={i} href="#" className="text-teal-600 text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all group/link">
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
                    <div className="mt-16 bg-linear-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white text-center">
                        <p className="text-lg font-semibold mb-2">Ready to accelerate your AI journey?</p>
                        <p className="text-teal-100 mb-4">Discover how Insitech can power your AI innovations</p>
                        <button className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-slate-100 transition-colors shadow-lg">
                            Get Started with AI
                        </button>
                    </div>
                </div>
            </section>

            {/* Browse by Technology - Enhanced Premium Edition */}
            <section className="py-24 relative bg-slate-50 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider bg-teal-50 px-4 py-2 rounded-full">
                                Technology Portfolio
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                            Browse by technology
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            Explore cutting-edge solutions built for the way modern teams work
                        </p>
                    </div>

                    {/* Premium Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            {
                                label: "Networking",
                                icon: Network,
                                gradient: "from-teal-500 via-cyan-500 to-teal-600",
                                bgPattern: "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                                iconColor: "text-teal-300"
                            },
                            {
                                label: "Security",
                                icon: Shield,
                                gradient: "from-red-500 via-orange-500 to-red-600",
                                bgPattern: "radial-gradient(circle at 70% 30%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)",
                                iconColor: "text-red-300"
                            },
                            {
                                label: "Observability",
                                icon: LayoutDashboard,
                                gradient: "from-purple-500 via-pink-500 to-purple-600",
                                bgPattern: "radial-gradient(circle at 50% 70%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                                iconColor: "text-purple-300"
                            },
                            {
                                label: "Collaboration",
                                icon: Users,
                                gradient: "from-green-500 via-emerald-500 to-green-600",
                                bgPattern: "radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)",
                                iconColor: "text-green-300"
                            },
                            {
                                label: "Computing",
                                icon: Cpu,
                                gradient: "from-indigo-500 via-teal-500 to-indigo-600",
                                bgPattern: "radial-gradient(circle at 60% 60%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
                                iconColor: "text-indigo-300"
                            },
                            {
                                label: "AI",
                                icon: Cloud,
                                gradient: "from-violet-500 via-fuchsia-500 to-violet-600",
                                bgPattern: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                                iconColor: "text-violet-300"
                            },
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="group relative flex flex-col items-center justify-center gap-4 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 
                                backdrop-blur-sm hover:bg-slate-800/80 hover:border-slate-600 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                {/* Animated gradient background */}
                                <div
                                    className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                                ></div>

                                {/* Pattern overlay */}
                                <div
                                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                                    style={{ backgroundImage: item.bgPattern }}
                                ></div>

                                {/* Glowing orb effect */}
                                <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700`}></div>

                                {/* Icon container with generated background */}
                                <div className="relative z-10 w-24 h-24 rounded-2xl overflow-hidden shadow-xl 
                                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                    {/* Gradient background */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-90`}></div>

                                    {/* Mesh pattern overlay */}
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                                    }}></div>

                                    {/* Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <item.icon className={`w-12 h-12 ${item.iconColor} drop-shadow-lg group-hover:scale-110 transition-transform duration-500`} />
                                    </div>

                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent 
                                        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                </div>

                                {/* Label */}
                                <span className="relative z-10 text-sm font-bold text-slate-200 group-hover:text-white 
                                    transition-colors duration-300 whitespace-nowrap tracking-wide">
                                    {item.label}
                                </span>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${item.gradient} 
                                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                                {/* Corner highlights */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-white/5 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-linear-to-tr from-white/5 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-full"></div>
                            </a>
                        ))}
                    </div>

                    {/* Enhanced CTA Section */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
                        <Link
                            to="/products"
                            className="group px-10 py-4 bg-linear-to-r from-teal-600 via-teal-500 to-indigo-600 text-white font-bold rounded-full 
                                hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 
                                flex items-center gap-3 text-sm relative overflow-hidden"
                        >
                            <span className="relative z-10">Browse all products</span>
                            <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />

                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent 
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </Link>

                        <Link
                            to="/services"
                            className="group px-10 py-4 text-slate-600 font-bold flex items-center gap-3 
                                hover:gap-4 transition-all duration-300 text-sm border border-slate-600 rounded-full
                                hover:border-teal-400 hover:bg-slate-800/50 backdrop-blur-sm"
                        >
                            Browse all services
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Inside Insitech Section */}
            <section className="py-24 bg-linear-to-b from-slate-50 to-white relative overflow-hidden">
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
                                icon: "BookOpen",
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
                                        <div className="text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                                            {item.category}
                                        </div>
                                        {/* Icon placeholder; use actual icon component */}
                                        <item.icon className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 mb-6 grow">
                                        {item.description} {/* Added short description for better engagement */}
                                    </p>
                                    <a
                                        href="#"
                                        className="text-teal-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all group"
                                    >
                                        {item.link}
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                                <div className="h-1 bg-linear-to-r from-teal-600 to-teal-400"></div> {/* Gradient bottom border */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section - Cisco Style */}
            <section className="py-20  bg-linear-to-r from-teal-600 to-teal-700 text-white">
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
                            <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors whitespace-nowrap">
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
