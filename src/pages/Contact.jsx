import React, { useState } from "react";
import {
    Mail, Phone, MapPin, Send, Globe, Clock, ChevronRight,
    Building2, HeadphonesIcon, ShieldCheck, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

// Hero & office images
import contactHero from '../assets/hq.jpg'; // Global HQ at sunset
import hqImage from '../assets/hq.jpg';
import londonImage from '../assets/london.jpg';
import singaporeImage from '../assets/singaporeImage.jpg';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "", email: "", company: "", subject: "", message: "", priority: "standard"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your submission logic (EmailJS, etc.)
        alert("Thank you! Your message has been sent. We'll respond within 2 hours.");
    };

    const offices = [
        {
            name: "Global Headquarters",
            city: "Silicon Valley, CA",
            address: "One Insitech Plaza, Palo Alto, CA 94304",
            phone: "+1 (650) 555-0100",
            email: "hq@insitech.com",
            image: hqImage,
            timezone: "PST"
        },
        {
            name: "EMEA Headquarters",
            city: "London, UK",
            address: "30 St Mary Axe, London EC3A 8BF",
            phone: "+44 20 3984 0000",
            email: "emea@insitech.com",
            image: londonImage,
            timezone: "GMT"
        },
        {
            name: "APAC Headquarters",
            city: "Singapore",
            address: "Marina Bay Financial Centre, Tower 3",
            phone: "+65 6808 5000",
            email: "apac@insitech.com",
            image: singaporeImage,
            timezone: "SGT"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero - Matches Home perfectly */}
            <section className="relative bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                    <img
                        src={contactHero}
                        alt="Insitech Global Network Operations Center"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600/70 via-slate-900/90 to-purple-600/40"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-teal-600/20 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                            <HeadphonesIcon className="w-5 h-5 text-teal-300" />
                            <span className="text-teal-300 font-semibold tracking-wider">24/7 GLOBAL SUPPORT · 2 HOUR RESPONSE</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                            We’re Here When You Need Us
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Whether it's a security emergency, product demo, or partnership inquiry — our team responds in under 2 hours, anywhere in the world.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="tel:+16505550100"
                                className="px-8 py-4 bg-white text-teal-600 font-bold rounded-full hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-3"
                            >
                                <Phone className="w-5 h-5" />
                                Call Now: +1 (650) 555-0100
                            </a>
                            <Link
                                to="/demo"
                                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
                            >
                                Schedule Live Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <div>
                            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <ShieldCheck className="w-8 h-8 text-teal-600" />
                                    <h2 className="text-3xl font-bold text-slate-900">Start a Secure Conversation</h2>
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                                        <select
                                            name="subject"
                                            required
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
                                        >
                                            <option value="">Select an option</option>
                                            <option>Security Emergency</option>
                                            <option>Product Demo Request</option>
                                            <option>Partnership Inquiry</option>
                                            <option>Technical Support</option>
                                            <option>Media Request</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            required
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all resize-none"
                                            placeholder="Tell us how we can help..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-5 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 text-lg"
                                    >
                                        Send Message Securely
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                                <p className="text-center text-sm text-slate-500 mt-6">
                                    All communications are encrypted end-to-end
                                </p>
                            </div>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-3xl p-10 text-center">
                                <HeadphonesIcon className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">24/7 Emergency Line</h3>
                                <a href="tel:+16505550123" className="text-3xl font-bold block mb-2">+1 (650) 555-0123</a>
                                <p className="text-teal-100">For active incidents · Average pickup: 18 seconds</p>
                            </div>

                            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Global Response Times</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Security Emergency</span>
                                        <span className="font-bold text-teal-600">15 minutes</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Demo Request</span>
                                        <span className="font-bold text-green-600">2 hours</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">General Inquiry</span>
                                        <span className="font-bold text-slate-900">24 hours</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white rounded-3xl p-8">
                                <Globe className="w-12 h-12 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-center mb-2">Support Portal</h3>
                                <p className="text-center text-slate-300 text-sm mb-6">Access documentation, open tickets, and track incidents</p>
                                <a href="#" className="block text-center bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-100 transition-all">
                                    Log In to Portal
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Offices */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            One Team, Three Continents
                        </h2>
                        <p className="text-xl text-slate-600">Always close when you need us</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {offices.map((office, idx) => (
                            <div
                                key={idx}
                                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-teal-300 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={office.image}
                                        alt={office.city}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-2xl font-bold">{office.name}</h3>
                                        <p className="text-teal-300">{office.city}</p>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="space-y-4 text-slate-600">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-teal-600 mt-0.5" />
                                            <p className="text-sm">{office.address}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 text-teal-600" />
                                            <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-teal-600 transition-colors">
                                                {office.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-5 h-5 text-teal-600" />
                                            <a href={`mailto:${office.email}`} className="hover:text-teal-600 transition-colors text-sm">
                                                {office.email}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="w-5 h-5 text-teal-600" />
                                            <span className="text-sm">Local time: {office.timezone}</span>
                                        </div>
                                    </div>
                                    <a href="#" className="mt-6 inline-flex items-center text-teal-600 font-bold gap-2 group-hover:gap-4 transition-all">
                                        Get Directions
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>
                                <div className="h-1 bg-gradient-to-r from-teal-600 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                        Security Never Sleeps — Neither Do We
                    </h2>
                    <p className="text-xl lg:text-2xl text-teal-100 mb-12">
                        24/7/365 Global Security Operations Center · 500+ incidents stopped daily
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="tel:+16505550123"
                            className="px-10 py-5 bg-white text-teal-600 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl text-lg inline-flex items-center gap-3"
                        >
                            <Phone className="w-6 h-6" />
                            Emergency: +1 (650) 555-0123
                        </a>
                        <Link
                            to="/assessment"
                            className="px-10 py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg"
                        >
                            Start Free Risk Assessment
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
