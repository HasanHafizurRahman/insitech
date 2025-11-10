import React from "react";

export default function Services() {
    return (
        <section className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold">Services</h2>
            <p className="mt-2 text-slate-600">Professional services and consulting (lorem ipsum).</p>

            <div className="mt-8 space-y-4">
                <div className="p-6 bg-white rounded shadow">Consulting — lorem ipsum</div>
                <div className="p-6 bg-white rounded shadow">Managed Security — lorem ipsum</div>
            </div>
        </section>
    );
}
