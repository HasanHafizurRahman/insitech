import React from "react";

export default function Resources() {
    return (
        <section className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold">Resources</h2>
            <p className="mt-2 text-slate-600">Whitepapers, case studies, blogs (lorem ipsum).</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded shadow">Whitepaper A — lorem ipsum</div>
                <div className="p-6 bg-white rounded shadow">Case Study B — lorem ipsum</div>
            </div>
        </section>
    );
}
