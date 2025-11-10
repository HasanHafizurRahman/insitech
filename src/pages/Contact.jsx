import React from "react";

export default function Contact() {
    return (
        <section className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-2 text-slate-600">Get in touch with the Insitech team (lorem ipsum).</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded shadow">
                    <h4 className="font-semibold">Sales</h4>
                    <p className="text-sm mt-2">hello@insitech.example</p>
                </div>
                <div className="p-6 bg-white rounded shadow">
                    <h4 className="font-semibold">General</h4>
                    <p className="text-sm mt-2">info@insitech.example</p>
                </div>
            </div>
        </section>
    );
}
