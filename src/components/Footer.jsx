import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, ChevronUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-linear-to-b from-white to-gray-100 text-gray-700 py-16 relative overflow-hidden">
          

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div>
                        <span className="text-2xl font-bold bg-linear-to-r from-teal-600 to-gray-500 bg-clip-text text-transparent">
                            Insitech
                        </span>

                        <p className="text-sm text-gray-600 mb-6">
                            Enterprise cybersecurity solutions for the modern digital landscape.
                        </p>

                        <div className="flex space-x-4">
                            <a className="text-gray-600 hover:text-teal-600 transition-colors" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a className="text-gray-600 hover:text-teal-600 transition-colors" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a className="text-gray-600 hover:text-teal-600 transition-colors" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a className="text-gray-600 hover:text-teal-600 transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">Solutions</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                ["Network Security", "/network"],
                                ["Cloud Security", "/cloud"],
                                ["Data Protection", "/data"],
                                ["Zero Trust", "/zero-trust"],
                            ].map(([label, link]) => (
                                <li key={link}>
                                    <Link to={link} className="hover:text-teal-600 transition-colors flex items-center gap-2 group">
                                        {label}
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">Resources</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                ["Documentation", "/docs"],
                                ["Case Studies", "/case-studies"],
                                ["Whitepapers", "/whitepapers"],
                                ["Blog", "/blog"],
                            ].map(([label, link]) => (
                                <li key={link}>
                                    <Link to={link} className="hover:text-teal-600 transition-colors flex items-center gap-2 group">
                                        {label}
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">Company</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                ["About Us", "/about"],
                                ["Careers", "/careers"],
                                ["Partners", "/partners"],
                                ["Contact", "/contact"],
                            ].map(([label, link]) => (
                                <li key={link}>
                                    <Link to={link} className="hover:text-teal-600 transition-colors flex items-center gap-2 group">
                                        {label}
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 mt-12 pt-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
                    <div>© 2025 Insitech. All rights reserved.</div>

                    <div className="space-x-4 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-teal-600 transition-colors">Privacy Policy</Link>
                        <span>|</span>
                        <Link to="/terms" className="hover:text-teal-600 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Back to top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-4 right-4 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-colors z-20"
            >
                <ChevronUp className="w-5 h-5" />
            </button>
        </footer>
    );
}
