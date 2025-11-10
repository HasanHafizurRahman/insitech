import React from "react";

export default function Products() {
    return (
        <section className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold">Products</h2>
            <p className="mt-2 text-slate-600">Product pages (lorem ipsum).</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded shadow">Product A — lorem ipsum</div>
                <div className="p-6 bg-white rounded shadow">Product B — lorem ipsum</div>
                <div className="p-6 bg-white rounded shadow">Product C — lorem ipsum</div>
            </div>
        </section>
    );
}
