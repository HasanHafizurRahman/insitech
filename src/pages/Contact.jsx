import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Globe, Clock, ChevronRight } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const offices = [
        {
            location: "Global Headquarters",
            address: "123 Tech Valley, Silicon City, CA 94043, USA",
            phone: "+1 (800) 123-4567",
            email: "info@insitech.com"
        },
        {
            location: "Europe Office",
            address: "456 Innovation Street, London W1A 1AA, UK",
            phone: "+44 20 1234 5678",
            email: "europe@insitech.com"
        },
        {
            location: "Asia Pacific Office",
            address: "789 Future Tower, Singapore 018982",
            phone: "+65 6123 4567",
            email: "apac@insitech.com"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-slate-200 mb-8">
                            Connect with our experts for cybersecurity, AI, and networking solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div className="bg-white p-8 rounded-lg border border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-500 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-500 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-500 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-500 outline-none"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Phone</h3>
                                        <p className="text-slate-600">+1 (800) 123-4567</p>
                                        <p className="text-sm text-slate-500">Mon-Fri, 9AM-5PM PST</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Email</h3>
                                        <p className="text-slate-600">support@insitech.com</p>
                                        <p className="text-sm text-slate-500">We respond within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Globe className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Support Portal</h3>
                                        <a href="#" className="text-blue-600 hover:underline">Visit our support site</a>
                                        <p className="text-sm text-slate-500">For technical issues and tickets</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Business Hours</h3>
                                        <p className="text-slate-600">Monday - Friday: 9AM - 6PM</p>
                                        <p className="text-sm text-slate-500">24/7 Emergency Support Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offices Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Our Global Offices
                        </h2>
                        <p className="text-lg text-slate-600">
                            We're here to support you worldwide
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {offices.map((office, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{office.location}</h3>
                                <div className="space-y-4 text-slate-600">
                                    <div className="flex items-start gap-2">
                                        <MapPin className="w-5 h-5 mt-0.5" />
                                        <p>{office.address}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-5 h-5" />
                                        <p>{office.phone}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-5 h-5" />
                                        <p>{office.email}</p>
                                    </div>
                                </div>
                                <a href="#" className="mt-6 inline-flex items-center text-blue-600 font-semibold gap-1 hover:gap-2 transition-all text-sm">
                                    Get Directions
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
                        Need Immediate Assistance?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Our team is ready to help with your urgent needs
                    </p>
                    <button className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
                        Call Emergency Support
                        <Phone className="w-5 h-5" />
                    </button>
                </div>
            </section>
        </div>
    );
}