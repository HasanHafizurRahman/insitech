import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-linear-to-b from-slate-50 to-white">
            {/* Hero (Cisco-like layout inspiration) */}
            <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-6/12">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
                        Secure your digital future with Insitech
                    </h1>
                    <p className="mt-6 text-lg text-slate-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Insitech delivers enterprise-grade
                        security solutions, spanning network protection, cloud security, and threat intelligence.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <Link to="/solutions" className="px-5 py-3 bg-sky-600 text-white rounded-md shadow">
                            Explore Solutions
                        </Link>
                        <Link to="/contact" className="px-5 py-3 border border-slate-200 rounded-md">
                            Contact Sales
                        </Link>
                    </div>
                </div>

                <div className="md:w-6/12">
                    <div className="rounded-xl p-6 bg-white shadow-lg">
                        <h3 className="font-semibold">Featured solutions</h3>
                        <ul className="mt-4 space-y-3 text-sm text-slate-600">
                            <li><strong>Network Defense:</strong> Lorem ipsum dolor sit amet, pretium quis mi.</li>
                            <li><strong>Cloud Security:</strong> Integer nec odio. Praesent libero. Sed cursus ante.</li>
                            <li><strong>Threat Intelligence:</strong> Sed nisi. Nulla quis sem at nibh elementum imperdiet.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Quick links / sample components */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-lg shadow">Product card — lorem ipsum</div>
                    <div className="p-6 bg-white rounded-lg shadow">Use case — lorem ipsum</div>
                    <div className="p-6 bg-white rounded-lg shadow">Resources — lorem ipsum</div>
                </div>
            </section>
        </div>
    );
}
